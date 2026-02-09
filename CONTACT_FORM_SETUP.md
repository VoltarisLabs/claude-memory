# Contact Form Email Setup

The contact form now sends emails directly through Web3Forms (free service) instead of opening the mail app.

## Setup Instructions:

### 1. Get Your Web3Forms Access Key (FREE)
1. Go to https://web3forms.com
2. Enter your email address (support@titlevoice.ai)
3. Click "Get Access Key"
4. Check your email and copy the access key

### 2. Create Environment File
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

### 3. Restart Dev Server
```bash
npm run dev
```

## How It Works:

- ✅ User fills out the contact form
- ✅ Form validates all fields
- ✅ Sends email directly via Web3Forms API
- ✅ User sees success message
- ✅ Email arrives at support@titlevoice.ai
- ✅ No mail app opens

## Features:

- **Direct email sending** - No mail client needed
- **Form validation** - Real-time error checking
- **Success feedback** - Toast notifications
- **Automatic reset** - Form clears after successful submission
- **Error handling** - Graceful fallback with helpful error messages
- **Free tier** - Up to 250 emails/month (more than enough for most sites)

## Security:

- ✅ Access key stored in `.env` (not committed to git)
- ✅ `.env` is in `.gitignore`
- ✅ For production, add the key to your hosting platform's environment variables

## Testing:

1. Fill out the form completely
2. Click "Send Message"
3. Should see success message
4. Check support@titlevoice.ai inbox

## Troubleshooting:

**"Failed to send message"** - Check that:
- `.env` file exists with correct key
- Dev server was restarted after adding `.env`
- Access key is valid (check Web3Forms dashboard)

**No email received** - Check:
- Spam folder
- Web3Forms dashboard for delivery status
- Email address is correct in the code
