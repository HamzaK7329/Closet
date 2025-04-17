# AI Closet App - App Flow & Feature Breakdown

## Overview
This AI Closet App is a mobile application that allows users to manage their wardrobe by capturing photos of their clothing and accessories. Using AI, the app removes the background, classifies the items, and suggests outfits for every day of the week. Users can also request custom outfit recommendations.

**Tech Stack:**
- **Frontend:** React Native with TypeScript, Expo, Expo Router
- **Backend/Database:** Supabase (Auth, DB, Storage)
- **UI Framework:** React Native Paper
- **Image Classification:** Google Vision API (for detecting clothing type, color, and style)

---

## App Flow

### 1. **Welcome Screen**
- Clean and minimal.
- Call-to-action buttons:
  - **Sign Up** (Email based)
  - **Log In**

### 2. **Authentication (Supabase Auth)**
- Email + Password sign-up and login.
- Auth token is stored for session management.

### 3. **Main Dashboard (After Login)**
- If no clothes are added:
  - Message: "No items in your closet yet."
  - UI: Centered **plus icon** (FAB) to add new clothing item.
- If clothes are added:
  - Week view displaying outfit suggestions:
    - **Monday to Sunday outfit tiles**
    - Each tile shows clothing thumbnails (e.g. Top + Bottom + Shoes + Accessories)
    - Option to refresh a day's outfit or view details.
  - **FAB (+)** button to add more clothes.
  - **Menu**:
    - Closet
    - Outfit History
    - Request Outfit
    - Stats

### 4. **Add Clothing Item Flow**
- Accessed via FAB (+) or menu.
- User selects/takes a photo using Expo Image Picker.
- Image is uploaded and sent to background removal service.
- Google Vision API is used to classify:
  - Type: (Shirt, Shoes, Necklace, etc.)
  - Color, pattern, style
- User reviews and confirms/edit item details:
  - Name, category, tags, occasion
- Saved to Supabase storage & `clothing_items` table.

### 5. **Outfit Generation**
- Triggered after adding enough clothing items (e.g., at least 1 full outfit worth).
- AI logic selects and combines clothes into 7 daily outfits.
- Saved in `daily_outfits` table:
  - Day of week
  - Item references
  - Timestamp
- Option to regenerate outfit for any specific day.

### 6. **Custom Outfit Request**
- Form screen:
  - Input occasion, weather, color preferences, exclusions
- Returns a generated outfit matching the criteria.
- Option to save as favorite or wear today.

### 7. **Closet Management**
- Grid/List of all clothing and accessories
- Filters by category, season, usage, tags
- Edit or delete items

### 8. **Usage Statistics**
- Data calculated from outfit history:
  - Most worn items
  - Least used items
  - Items never worn
- Displayed with visual graphs (e.g., Pie/Bar Charts)
- Useful for decluttering and wardrobe optimization

---

## Database Tables (Supabase)

### `users`
- `id`
- `email`

### `clothing_items`
- `id`
- `user_id`
- `name`
- `type` (top, bottom, accessory, shoes, etc.)
- `color`
- `style`
- `pattern`
- `image_url`
- `created_at`
- `last_used`
- `times_used`

### `daily_outfits`
- `id`
- `user_id`
- `day_of_week`
- `item_ids` (array)
- `created_at`

### `custom_outfits`
- `id`
- `user_id`
- `purpose`
- `preferences`
- `item_ids`
- `created_at`

---

## Future Enhancements
- Weather API integration for weather-based outfit suggestions
- Virtual Try-On feature
- Closet sharing between friends
- Travel packing assistant

---

## Summary
This document outlines the structured flow of the AI Closet App, covering key screens, actions, data handling, and Supabase schema setup. It can serve as the foundation for implementation by app developers using the chosen stack.

