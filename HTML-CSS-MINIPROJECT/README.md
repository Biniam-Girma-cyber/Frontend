# 🎓 HTML & CSS Mini-Project: Design System & Implementation Instructions

> **Instructor Notice**: This guide provides the complete design specifications and step-by-step instructions for building both **Desktop** and **Mobile** views of all three web pages in this project. Please review these requirements carefully before writing your HTML and CSS.

---

## 📋 Project Overview

Your task is to build a modern, high-contrast dark-themed web application based on the design assets located in the `assets/` folder. The application consists of three pages:

1. **Dashboard Page** (`index.html`)
2. **Sign In Page** (`signin.html`)
3. **Sign Up Page** (`signup.html`)

---

## 🚀 Getting Started & Submission Guidelines

### Step 1: Download the Starter Zip File
1. Go to the project repository page on GitHub.
2. Click the green **Code** button at the top right of the repository.
3. Select **Download ZIP** from the dropdown menu.
4. Extract the downloaded `.zip` file into a folder on your local computer.
5. Open the folder in your code editor (e.g., Visual Studio Code).

### Step 2: Complete the Assignment
1. Carefully read all the **Design System Specifications** and page-by-page instructions below.
2. Open the design reference images in `assets/design/` for visual reference while building.
3. Write your semantic HTML inside `index.html`, `signin.html`, and `signup.html`.
4. Write your custom CSS styling inside the stylesheets in `assets/style/`.
5. Ensure your layouts are fully responsive across both **Desktop** and **Mobile** screen sizes.

### Step 3: Push Your Project to Your GitHub Repository
Once you have completed and tested your project locally, publish it to your GitHub account:

1. Create a new, public repository on your personal GitHub account (e.g., named `html-css-miniproject`).
2. Open your terminal in the root folder of your project and run the following commands:

```bash
# Initialize a local Git repository (if not already initialized)
git init

# Stage all your project files
git add .

# Create your first commit
git commit -m "feat: complete HTML and CSS mini-project design implementation"

# Rename default branch to main
git branch -M main

# Link your local repo to your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push your code to GitHub
git push -u origin main
```

3. Copy the URL of your GitHub repository and submit it as your assignment deliverable!

---

## 🎨 Global Design System & Specifications

Reference: `assets/design/design-guide.png`

### 1. Color Palette
- **Main Background**: `#111111` (Deep black/slate page background)
- **Cards & Containers**: `#1E1E1E` (Dark charcoal for card modules, sidebar, and form boxes)
- **Primary Action / Accent**: `#3B82F6` (Electric Blue for CTA buttons and highlighted links)
- **Primary Text**: `#FFFFFF` (Pure White for headings, primary text, and active labels)
- **Secondary Text & Borders**: `#94A3B8` (Cool Grey for subtext, captions, input borders, placeholders, and inactive icons)
- **Accent Card Themes (Dashboard)**:
  - *Today's Users*: Blue Accent (`#1E3A8A` / `#2563EB`)
  - *New Clients*: Emerald Green Accent (`#064E3B` / `#059669`)
  - *Total Sales*: Purple Accent (`#4C1D95` / `#7C3AED`)
  - *Active Status Indicator*: Bright Green (`#22C55E`)

### 2. Typography Rules
- **Font Family**: `'Inter', sans-serif` (Import from Google Fonts)
- **H1 Header**: `48px` | Bold (`700`)
- **H2 Section Title**: `32px` | Semi-Bold (`600`)
- **H3 Subsection Header**: `24px` | Medium (`500`)
- **H4 Component Title**: `18px` | Medium (`500`)
- **Body Text**: `16px` | Regular (`400`)
- **Caption / Small Text**: `14px` | Regular (`400`)

### 3. Spacing & Component Geometry
- **Border Radius**: `16px` across all cards, containers, input fields, and image frames.
- **Internal Card Padding**: `16px` (`1rem`) on top, right, bottom, and left.
- **Buttons**:
  - *Primary Button*: Pill shape / rounded container (`border-radius: 16px` or `24px`), `#3B82F6` blue background, white text, bold font.
  - *Secondary Button*: Transparent background with `#94A3B8` outline border.
- **Form Input Fields**: Dark fill background, `16px` rounded corners, subtle border, and cool grey placeholder text.

---

## 🖼️ Media & Asset Mapping Guide

Use the corresponding images from `assets/images/` for each component:

| Image File | Component Target |
| :--- | :--- |
| `mark_Johnson.jpg` | Dashboard "Welcome back" card profile avatar & Top Header user icon |
| `recent_referrals.jpg` | Dashboard "Recent Referrals" card header banner image |
| `global_performance_summary.jpg` | Dashboard "Global Performance Summary" section image |
| `Alica_M.jpg` | Active Team Member card: **Alice M.** |
| `Bob_S.jpg` | Active Team Member card: **Bob S.** |
| `Charli_H.jpg` | Active Team Member card: **Charlie H.** |
| `Diana W.jpg` | Active Team Member card: **Diana W.** |

---

## 📐 Page 1: Dashboard (`index.html`)

### Desktop View Specification
Reference: `assets/design/Desktop/screen.png`

1. **Sidebar Navigation (Left Panel)**:
   - Width: ~`240px` fixed height panel with `#1E1E1E` background and `16px` rounded corners.
   - Vertical nav items with icons: *Dashboard*, *Tables*, *Billing*, *RTL*, *Profile*, *Sign In*, *Sign Up*.
   - Highlight the active link (*Dashboard*) with a subtle dark pill container background.
   - Bottom section: "Need help?" support prompt widget with question icon.

2. **Top Header Bar**:
   - Left side search bar (`Type here...`) with a search glass icon inside a rounded input.
   - Right side profile cluster: User headshot avatar, settings gear icon, notification bell icon with badge.

3. **Metric Summary Grid (Row 1)**:
   - 4-column layout (`repeat(4, 1fr)`).
   - Stat Cards:
     1. *Today's Money*: `$53,000` + Wallet Icon
     2. *Today's Users*: `2,300` + Globe Icon (Blue card background)
     3. *New Clients*: `+3,052` + Document Icon (Teal/Green card background)
     4. *Total Sales*: `$173,000` + Cart Icon (Purple card background)

4. **Middle Section Grid (Row 2)**:
   - 3-column layout:
     - **Card 1 (Welcome Card)**: User avatar (`mark_Johnson.jpg`), "Welcome back, Mark Johnson", intro paragraph, and a pill action button `Tap to record ->`.
     - **Card 2 (Customer Feedback)**: Quotation icon (`“`), testimonial text (`"Excellent service and intuitive platform! Highly recommend."`), and author signature (`- Sarah L.`).
     - **Card 3 (Recent Referrals)**: Section header with menu dots (`...`), referral team banner (`recent_referrals.jpg`), subtitle and list of referral names.

5. **Bottom Section Grid (Row 3)**:
   - 2-column layout:
     - **Left Container (Global Performance Summary)**: Performance banner image (`global_performance_summary.jpg`), title "Global Performance Summary", and Q3 summary narrative text.
     - **Right Container (Active Team Members Grid)**: 2x2 grid featuring 4 user profile cards (Alice M., Bob S., Charlie H., Diana W.), each containing profile image, user name, and green `"Active Now"` status indicator.

### Mobile View Specification
Reference: `assets/design/Mobile/dashboard/screen1.png`, `screen2.png`, `screen3.png`

- **Mobile Navigation Bar**:
  - Transform sidebar into a top horizontal icon bar containing quick shortcuts (Home, Tables, Billing, Globe, Profile, Lock, Drop).
- **Single-Column Vertical Layout**:
  - Collapse all multi-column desktop grids into a single vertical layout (`flex-direction: column` / `grid-template-columns: 1fr`).
- **Vertical Card Order**:
  1. Top Icon Navigation & Search Bar
  2. Metric Cards (stacked 1-by-1 vertically)
  3. Welcome Back Mark Johnson Card
  4. Customer Feedback Testimonial Card
  5. Recent Referrals Card
  6. Global Performance Summary Card
  7. Active Team Members Grid (2-column layout inside mobile)

---

## 📐 Page 2: Sign In Page (`signin.html`)

### Desktop View Specification
Reference: `assets/design/Desktop/dashboard_sign_in.png`

- **50/50 Split-Screen Layout**:
  - **Left Half**: Full-height featured office image banner showcasing a modern workplace workspace.
  - **Right Half**: Dark form container with `#111111` background.
- **Form Component Details**:
  - Main Title: `Sign In` (`32px`/`48px` white text).
  - Form Label & Input: `Email` (dark fill input with `16px` border-radius).
  - Form Label & Input: `Password` (dark fill input with `16px` border-radius).
  - Control Switch: `Remember me` toggle switch and label.
  - Primary CTA Button: Full-width electric blue button (`Sign In`).
  - Navigation Links: `Forgot password?` link text and `Don't have an account? Sign Up` redirect link.

### Mobile View Specification
Reference: `assets/design/Mobile/signin.png`

- **Top Navigation Bar**: Dark top bar containing a hamburger menu icon, logo text `DataSync Pro`, and application grid icon with notification badge.
- **Hero Image & Overlapping Card Layout**:
  - The office workspace image serves as the top hero background image.
  - The Sign In form container transforms into a rounded dark floating card (`#1E1E1E`, `16px` border-radius) overlapping the bottom portion of the header image.

---

## 📐 Page 3: Sign Up Page (`singup.html` / `signup.html`)

### Desktop View Specification
Reference: `assets/design/Desktop/dashboard_sign_up.png`

- **Side-by-Side Dual Container Layout**:
  - **Left Container**: Office collaboration banner image with `16px` rounded corners.
  - **Right Container**: Centered Sign Up card module (`#1E1E1E` background, `16px` rounded corners, `16px` internal padding).
- **Form Component Details**:
  - Main Title: `Sign Up`.
  - Input 1: `Full Name` with user line icon on the left.
  - Input 2: `Email` with email envelope line icon on the left.
  - Input 3: `Password` with lock line icon on the left and eye visibility toggle line icon on the right.
  - Primary CTA Button: Full-width `Create Account` blue button (`#3B82F6`).
  - Link: `Already have an account? Sign In` (linking to `signin.html`).

### Mobile View Specification
Reference: `assets/design/Mobile/signup.png`

- **Vertical Stack Structure**:
  - Top header banner image featuring team collaboration with `16px` rounded corners.
  - Full-width Sign Up form card module (`#1E1E1E`) placed directly underneath.
  - High contrast form inputs and full-width `Create Account` CTA button.

---

## 🛠️ Step-by-Step Student Implementation Steps

### Step 1: HTML Semantic Structure
- Use appropriate HTML5 tags (`<header>`, `<nav>`, `<aside>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Ensure all form inputs have proper `id`, `name`, `<label>` elements, and `placeholder` attributes.

### Step 2: Styling Foundation & CSS Variables
- Declare CSS variables for colors (`--bg-main`, `--bg-card`, `--color-primary`, `--text-main`, `--text-muted`).
- Set up global reset rule (`box-sizing: border-box`, `margin: 0`, `padding: 0`).
- Apply `'Inter', sans-serif` typography across all elements.

### Step 3: Card & Utility Classes
- Create reusable component classes for cards (`background-color: #1E1E1E; border-radius: 16px; padding: 16px;`).
- Create button classes for primary CTA (`#3B82F6`) and secondary outline buttons.

### Step 4: Building Desktop Layouts
- Implement CSS Flexbox for navigation, headers, and form alignment.
- Implement CSS Grid (`grid-template-columns`) for the dashboard metric cards and multi-column sections.

### Step 5: Mobile Responsiveness (Media Queries)
- Add `@media (max-width: 768px)` breakpoints.
- Convert desktop multi-column layouts into single-column vertical stacks.
- Adjust font sizes and element spacing for smaller screen viewports.

### Step 6: Verification
- Cross-check your implemented pages against all screenshots in `assets/design/Desktop/` and `assets/design/Mobile/`.