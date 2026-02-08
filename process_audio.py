#!/usr/bin/env python3
"""
Audio processing script to:
1. Remove the word "pinical" from "pinical Title"
2. Remove silence longer than 2 seconds
"""

import os
import subprocess
import whisper
import json
from pathlib import Path

# Add ffmpeg to PATH
os.environ['PATH'] = f"/Users/nafiurrahman/bin:{os.environ.get('PATH', '')}"

# Configuration
AUDIO_DIR = "/Users/nafiurrahman/Desktop/Title-voice/Title-Voice-/public/audio"
OUTPUT_DIR = "/Users/nafiurrahman/Desktop/Title-voice/Title-Voice-/public/audio_processed"
FFMPEG_PATH = "/Users/nafiurrahman/bin/ffmpeg"
SILENCE_THRESHOLD = 2  # seconds

# Create output directory if it doesn't exist
os.makedirs(OUTPUT_DIR, exist_ok=True)

def load_whisper_model():
    """Load Whisper model for speech recognition"""
    print("Loading Whisper model (this may take a moment)...")
    model = whisper.load_model("base")  # Using 'base' model for faster processing
    return model

def transcribe_with_timestamps(model, audio_file):
    """Transcribe audio and return word-level timestamps"""
    print(f"Transcribing {os.path.basename(audio_file)}...")
    result = model.transcribe(audio_file, word_timestamps=True)
    return result

def find_pinical_timestamps(transcription_result):
    """Find timestamps where 'pinical' is spoken"""
    pinical_segments = []

    for segment in transcription_result.get('segments', []):
        for word_info in segment.get('words', []):
            word = word_info.get('word', '').strip().lower()
            if 'pinical' in word or 'pinnacle' in word:
                pinical_segments.append({
                    'start': word_info.get('start'),
                    'end': word_info.get('end'),
                    'word': word_info.get('word')
                })
                print(f"  Found '{word_info.get('word')}' at {word_info.get('start'):.2f}s - {word_info.get('end'):.2f}s")

    return pinical_segments

def remove_silence_and_word(input_file, output_file, word_segments):
    """
    Remove silence and specific word segments from audio
    Uses ffmpeg to process the audio
    """
    print(f"Processing {os.path.basename(input_file)}...")

    # First, remove silence
    temp_file = output_file.replace('.', '_temp.')

    # Remove silence using ffmpeg's silenceremove filter
    # This removes silence at start/end and long silences in the middle
    silence_cmd = [
        FFMPEG_PATH,
        '-i', input_file,
        '-af', f'silenceremove=stop_periods=-1:stop_duration={SILENCE_THRESHOLD}:stop_threshold=-50dB',
        '-y',
        temp_file
    ]

    try:
        subprocess.run(silence_cmd, check=True, capture_output=True)
        print(f"  Silence removed")
    except subprocess.CalledProcessError as e:
        print(f"  Warning: Silence removal had issues: {e.stderr.decode()}")
        # If silence removal fails, use original file
        temp_file = input_file

    # If word segments found, remove them
    if word_segments:
        # Build complex filter to remove word segments
        # We'll need to create segments and concatenate them

        # Get duration of the file
        duration_cmd = [
            FFMPEG_PATH,
            '-i', temp_file,
            '-f', 'null',
            '-'
        ]
        result = subprocess.run(duration_cmd, capture_output=True, text=True)
        duration_line = [line for line in result.stderr.split('\n') if 'Duration' in line]

        if duration_line:
            # Parse duration
            import re
            duration_match = re.search(r'Duration: (\d{2}):(\d{2}):(\d{2}\.\d{2})', duration_line[0])
            if duration_match:
                h, m, s = duration_match.groups()
                total_duration = int(h) * 3600 + int(m) * 60 + float(s)

                # Create list of segments to keep (everything except pinical)
                keep_segments = []
                last_end = 0

                for seg in sorted(word_segments, key=lambda x: x['start']):
                    if seg['start'] > last_end:
                        keep_segments.append((last_end, seg['start']))
                    last_end = seg['end']

                # Add final segment
                if last_end < total_duration:
                    keep_segments.append((last_end, total_duration))

                # If we have segments to keep that are different from original
                if len(keep_segments) > 1 or (keep_segments and keep_segments[0] != (0, total_duration)):
                    # Create temporary segment files
                    segment_files = []
                    for i, (start, end) in enumerate(keep_segments):
                        seg_file = output_file.replace('.', f'_seg{i}.')
                        segment_files.append(seg_file)

                        # Extract segment
                        seg_cmd = [
                            FFMPEG_PATH,
                            '-i', temp_file,
                            '-ss', str(start),
                            '-to', str(end),
                            '-c', 'copy',
                            '-y',
                            seg_file
                        ]
                        subprocess.run(seg_cmd, check=True, capture_output=True)

                    # Concatenate segments
                    concat_file = output_file.replace('.', '_concat.txt')
                    with open(concat_file, 'w') as f:
                        for seg_file in segment_files:
                            f.write(f"file '{seg_file}'\n")

                    concat_cmd = [
                        FFMPEG_PATH,
                        '-f', 'concat',
                        '-safe', '0',
                        '-i', concat_file,
                        '-c', 'copy',
                        '-y',
                        output_file
                    ]
                    subprocess.run(concat_cmd, check=True, capture_output=True)

                    # Clean up temporary files
                    for seg_file in segment_files:
                        os.remove(seg_file)
                    os.remove(concat_file)

                    print(f"  Removed {len(word_segments)} word segment(s)")
                else:
                    # No segments to remove, just copy
                    subprocess.run([FFMPEG_PATH, '-i', temp_file, '-c', 'copy', '-y', output_file],
                                 check=True, capture_output=True)
    else:
        # No words to remove, just copy the silence-removed file
        subprocess.run([FFMPEG_PATH, '-i', temp_file, '-c', 'copy', '-y', output_file],
                     check=True, capture_output=True)

    # Clean up temp file if it was created
    if temp_file != input_file and os.path.exists(temp_file):
        os.remove(temp_file)

    print(f"  Saved to {os.path.basename(output_file)}")

def process_all_audio_files():
    """Process all audio files in the directory"""
    # Load Whisper model once
    model = load_whisper_model()

    # Get all audio files
    audio_files = list(Path(AUDIO_DIR).glob('*.wav')) + list(Path(AUDIO_DIR).glob('*.m4a'))

    print(f"\nFound {len(audio_files)} audio files to process\n")

    for audio_file in audio_files:
        audio_path = str(audio_file)
        filename = audio_file.stem
        extension = audio_file.suffix
        output_path = os.path.join(OUTPUT_DIR, f"{filename}_processed{extension}")

        print(f"\n{'='*60}")
        print(f"Processing: {audio_file.name}")
        print(f"{'='*60}")

        try:
            # Transcribe and find "pinical"
            transcription = transcribe_with_timestamps(model, audio_path)
            pinical_segments = find_pinical_timestamps(transcription)

            if pinical_segments:
                print(f"  Found {len(pinical_segments)} instance(s) of 'pinical'")
            else:
                print(f"  No instances of 'pinical' found")

            # Process the audio
            remove_silence_and_word(audio_path, output_path, pinical_segments)

            print(f"✓ Successfully processed {audio_file.name}")

        except Exception as e:
            print(f"✗ Error processing {audio_file.name}: {str(e)}")
            continue

    print(f"\n{'='*60}")
    print(f"Processing complete!")
    print(f"Processed files saved to: {OUTPUT_DIR}")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    process_all_audio_files()
