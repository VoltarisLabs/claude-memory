# Plan for Title-Voice Project Enrichment

This plan outlines the steps to enrich the Title-Voice project, focusing on UI/UX enhancements and specific feature updates requested by the user.

## 1. Pricing Page (`src/pages/Pricing.jsx`)

### Objective
Improve the visual appeal of the pricing cards ("Price cart") and add detailed savings information.

### Action Items
-   **Enhance Price Cards ("Price Cart"):**
    -   **Hover Effect ("Horvor"):** Add a stronger hover effect to the pricing cards.
        -   Scale up slightly on hover: `whileHover={{ scale: 1.02 }}`.
        -   Increase shadow intensity on hover.
    -   **Bigger Border Beam:**
        -   Increase the `size` prop of `<BorderBeam />` from `180` to `300` or `350`.
        -   Increase `borderWidth` to `2` or `3` for better visibility ("bigger border bem").
        -   Ensure the beam color gradient is vibrant (`from="#0080FF" to="#4F1AD6"`).
-   **Savings Message:**
    -   Calculate the exact savings amount per year for each plan.
        -   Formula: `(Monthly Price - (Yearly Price / 12)) * 12`. Wait, actually simpler: `(Monthly Price * 12) - Yearly Price`.
        -   Example: Professional Plan ($1,500/mo * 12 = $18,000) vs ($1,200/mo * 12 = $14,400). Savings = $3,600/year.
    -   Display this message dynamically when the toggle is switched to **Yearly**.
    -   Style: "Save $3,600 per year!" in a distinct color (e.g., Emerald green) below the price or badge.

## 2. Testimonial Section (`src/components/TestimonialsSection.jsx`)

### Objective
Add dynamic effects to the testimonial cards to make them more engaging.

### Action Items
-   **"Shaky" Effect:**
    -   Implement a shake animation on hover for the testimonial cards.
    -   Use `framer-motion`:
        ```jsx
        whileHover={{
          x: [0, -2, 2, -2, 2, 0],
          transition: { duration: 0.3 }
        }}
        ```
    -   Alternatively, add a subtle continuous float or pulse animation to make them feel "alive".

## 3. CTA Enhancements

### Objective
Make the Call to Action (CTA) section richer and consistent across all pages.

### Action Items
-   **Enhance CTA Design:**
    -   Create a shared `EnhancedCTA` component (or update the existing inline CTA).
    -   Add a background gradient or "Aurora" effect behind the text.
    -   Make the primary button "shimmer" or "pulse".
    -   Ensure text is larger and more compelling.
-   **Consistency:**
    -   Apply this enhanced CTA design to:
        -   `src/pages/Solutions.jsx`
        -   `src/pages/Workflows.jsx`
        -   `src/pages/Pricing.jsx`
        -   `src/pages/Home.jsx` (Landing Page)

## 4. Workflow Page (`src/pages/Workflows.jsx`)

### Objective
Enrich the "Workflow Types" and "Complete Journey" sections.

### Action Items
-   **Enrich Workflow Types Section:**
    -   Convert the current simple grid into richer cards.
    -   Add relevant icons or mini-illustrations for each type (Inquiry Handling, Appointment Scheduling, etc.).
    -   Add hover effects that reveal more details or a "Learn More" link.
-   **Add "New Stuff":**
    -   Insert a new section, e.g., "**Integration Ecosystem**" or "**Process Timeline**", to add value.
-   **Improve "Complete Journey" Icons:**
    -   Replace current icons with high-quality, consistent Lucide icons or custom SVGs that better represent each step.
    -   Add connecting lines (dashed or animated) between steps to visualize the "flow".

## 5. Solutions Page (`src/pages/Solutions.jsx`)

### Objective
Ensure consistency with the enhanced design.

### Action Items
-   **CTA Consistency:**
    -   Replace the current CTA section with the new `EnhancedCTA` component to match the other pages.

## 6. Landing Page (`src/pages/Home.jsx`)

### Objective
Optimize the Hero section and feature placement.

### Action Items
-   **Hero Section Button:**
    -   **Consolidate Buttons:** Remove the two existing buttons ("Book a Demo", "Schedule Demo").
    -   **New Button:** Add a single, prominent button: **"Listen to Live Call"**.
    -   **Action:** This button should either play an audio sample immediately or scroll directly to the "See Title Voice in Action" (Receptionist AI) section.
-   **Real Audio for Play Button:**
    -   Locate the "Listen to Title Voice" button in the feature sections.
    -   Update the functionality to play a real audio file (`/audio/real_call.mp3`).
    -   *Note: User needs to provide the `real_call.mp3` file.*
-   **"See Title Voice in Action" Positioning:**
    -   Move the **Receptionist AI** (or the specific demo section) higher up the page.
    -   It should be immediately visible after the Hero section, or integrated into the Hero, to ensure users see it "up top" rather than scrolling down.

## Implementation Steps
1.  **Refactor CTA:** Create/Update CTA component.
2.  **Update Pages:** Apply CTA to all pages.
3.  **Update Pricing:** Modify `Pricing.jsx` (Beam, Hover, Savings).
4.  **Update Testimonials:** Modify `TestimonialsSection.jsx` (Shake).
5.  **Update Workflows:** Modify `Workflows.jsx` (Icons, New Section).
6.  **Update Home:** Modify `Home.jsx` (Hero Button, Section Order, Real Audio).
