# VehicleDetect - Complete Usage Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [User Workflows](#user-workflows)
3. [Feature Guide](#feature-guide)
4. [Data Management](#data-management)
5. [Troubleshooting](#troubleshooting)
6. [Tips & Tricks](#tips--tricks)

---

## Getting Started

### System Requirements
- Node.js 18+ or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- ~500MB free disk space
- Internet connection

### Installation

1. **Clone/Extract Project**
   ```bash
   cd /vercel/share/v0-project
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start Development Server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - The app opens to the home page

### Initial Setup
No additional configuration needed! The app uses localStorage for demo purposes and is ready to use immediately.

---

## User Workflows

### Workflow 1: First-Time User (Registration & First Inspection)

**Duration**: ~5 minutes

1. **Visit Homepage**
   - URL: `http://localhost:3000/`
   - See hero section and features
   - Click "Sign Up" or "Upload Vehicle Image" button

2. **Create Account**
   - URL: `/signup`
   - Fill in form:
     - Name: Enter your full name
     - Email: Enter valid email
     - Password: Min 6 characters
     - Confirm Password: Must match
   - Click "Sign Up"
   - System validates inputs
   - Account created → Redirected to dashboard

3. **Upload First Image**
   - URL: `/dashboard`
   - Click upload area or drag image
   - Select vehicle image from device
   - See preview
   - Click "Analyze Image"
   - Wait for AI analysis (2 seconds demo)
   - View results immediately

4. **Review Results**
   - URL: `/result` (automatic)
   - See full damage report
   - Add remarks if desired
   - Click buttons to download/share
   - Click "Analyze Another" to upload more

### Workflow 2: Returning User (Login & View History)

**Duration**: ~2 minutes

1. **Login**
   - URL: `/login`
   - Enter email and password
   - Click "Login"
   - Redirected to dashboard

2. **View History**
   - Click "History" in navbar
   - See all past inspections
   - Use search to find specific inspection
   - Filter by severity (Low/Medium/High)
   - Click "View" to see details
   - Click "Delete" to remove record

3. **Check Profile**
   - Click "Profile" in navbar
   - View account information
   - Edit profile info
   - See activity statistics
   - Manage account settings

### Workflow 3: Detailed Inspection

**Duration**: ~5 minutes

1. **Upload & Analyze**
   - Go to `/dashboard`
   - Upload vehicle image
   - Click "Analyze Image"
   - Review damage detection

2. **View Full Report**
   - Automatically shown at `/result`
   - Review damage details:
     - Damage type
     - Location
     - Severity level
     - Confidence percentage
     - Classification (Cosmetic/Functional)
   - Add remarks about damage
   - Save changes

3. **Download Report**
   - Click "Download Report" button
   - PDF or image saved to device

4. **Share Report**
   - Click "Share Report" button
   - Copy link or email
   - Share with insurance/dealer

---

## Feature Guide

### 1. Landing Page (`/`)

**Components**:
- Hero section with CTA
- Problem description
- Solution explanation
- How it works (4 steps)
- Benefits showcase
- Contact information in footer

**Actions**:
- Click "Upload Vehicle Image" → Goes to `/signup` (if not logged in) or `/dashboard` (if logged in)
- Click "Get Started Now" → Same as above
- Scroll to learn about features
- Click footer links for terms, privacy, contact

### 2. Authentication Pages

#### Signup Page (`/signup`)
**Form Fields**:
- Full Name (required)
- Email Address (required, valid email)
- Password (required, min 6 chars)
- Confirm Password (must match)

**Actions**:
- Fill form and submit → Creates account
- Click "Login" link → Goes to `/login`

**Validation**:
- All fields required
- Email format validation
- Password length check (6+ chars)
- Password match check

#### Login Page (`/login`)
**Form Fields**:
- Email Address (required)
- Password (required)

**Actions**:
- Fill form and submit → Logs in
- Click "Sign Up" link → Goes to `/signup`
- Click "Forgot password?" → Goes to `/forgot-password`

**Features**:
- Remember login in localStorage
- Error messages for failed login
- Success redirect to dashboard

#### Forgot Password Page (`/forgot-password`)
**Form Fields**:
- Email Address (required)

**Process**:
1. Enter email
2. Click "Send Reset Link"
3. Confirmation message shown
4. Check email for reset link
5. Click link to reset password
6. Create new password

### 3. Dashboard (`/dashboard`)

**Protected Route**: Requires login

**Upload Methods**:

A. **Drag and Drop**
   - Drag image onto upload area
   - Release to upload

B. **Click to Browse**
   - Click upload area
   - Select file from device

C. **Camera**
   - Click "Take Photo" button
   - Use device camera
   - Capture image

D. **Gallery**
   - Click "From Gallery" button
   - Select from device gallery

**Supported Formats**:
- JPG, PNG, WebP
- Max size: 10MB

**Process**:
1. Upload image
2. See preview
3. Click "Analyze Image"
4. Loading animation (2 seconds)
5. Results displayed
6. Auto-redirect to `/result`

### 4. Result Page (`/result`)

**Protected Route**: Requires login

**Display Information**:
- Vehicle image with damage highlight
- Damage type
- Location
- Severity (color-coded)
- Confidence score (percentage)
- Classification (Cosmetic/Functional)
- Repair category
- AI explanation text

**Actions**:

**Remarks Section**:
- Click "Edit" to add notes
- Type remarks
- Click "Save" to store
- Click "Cancel" to discard

**Buttons**:
- "Download Report" → Save as PDF
- "Share Report" → Get shareable link
- "New Analysis" → Go back to dashboard

**Sidebar Stats**:
- Detection confidence
- Severity assessment
- Report date
- Helpful tips

### 5. History Page (`/history`)

**Protected Route**: Requires login

**Features**:

**Search**:
- Type damage type, location, or date
- Real-time filtering
- Shows matching inspections

**Filter**:
- Dropdown: "All Severity Levels"
- Options: Low, Medium, High
- Filters displayed list

**Inspection Cards**:
- Thumbnail image
- Damage type
- Location
- Severity badge
- Confidence percentage
- Date
- Action buttons

**Actions**:
- Click "View" → Go to full report
- Click "Delete" → Remove record (with confirmation)

**Empty State**:
- Shows when no inspections found
- Button to create new inspection

### 6. Profile Page (`/profile`)

**Protected Route**: Requires login

**Sections**:

**User Information**:
- Avatar/icon
- Name
- Email
- Member since date
- Edit button

**Edit Mode**:
- Change name
- Change email
- Save or cancel changes

**Activity Summary**:
- Total inspections count
- Account status (Active)
- Current plan (Free Tier)

**Security**:
- Change Password link
- Two-Factor Authentication option
- Session management

**Danger Zone**:
- Logout button → Log out user
- Delete Account button → Confirm and delete all data

**Help Section**:
- Contact Support link
- Documentation link

### 7. Analytics Page (`/analytics`)

**Protected Route**: Requires login

**Statistics Cards**:
- Total Inspections (count)
- Unique Damage Types (count)
- Most Common Severity (level)

**Charts**:

**Bar Chart** (Damage Type Frequency)
- X-axis: Damage types
- Y-axis: Count
- Shows frequency of each damage type

**Pie Chart** (Severity Distribution)
- Segments: Low, Medium, High
- Shows percentage/count of each severity
- Color-coded

**Line Chart** (Inspections Over Time)
- X-axis: Time period (week/month)
- Y-axis: Number of inspections
- Shows trend over time

**Insights Section**:
- Most detected damage type
- Most common severity
- Recommendations
- Tips for improvement

### 8. Public Pages

**Terms Page (`/terms`)**
- Legal terms and conditions
- Service restrictions
- User responsibilities

**Privacy Page (`/privacy`)**
- Data collection policy
- Privacy practices
- Data security
- User rights

**Contact Page (`/contact`)**
- Contact form
- Company contact info
- Support links
- Live chat option

### 9. Navigation & Layout

**Navbar Features**:
- Logo (links to home)
- Navigation links (responsive)
- Login/Signup buttons (public users)
- Logout button (logged-in users)
- Mobile hamburger menu
- Auto-hide menu on link click

**Footer Features**:
- About section
- Quick links
- Legal links
- Contact information
- Social media links
- Copyright notice

---

## Data Management

### What Data is Stored

#### In Browser (localStorage)

1. **Authentication**
   - `jwt_token` - Login token
   - `user_email` - User email
   - `user_name` - User name
   - `join_date` - Account creation date

2. **Inspections**
   - Array of inspection records
   - Each record contains:
     - ID
     - Image data (base64)
     - Damage type
     - Location
     - Severity
     - Confidence
     - Remarks
     - Date

### How to Access Data

**View in Browser DevTools**:
1. Right-click page → "Inspect"
2. Go to "Application" tab
3. Click "Local Storage"
4. Select your site
5. View all stored data

**Clear Data**:
1. Go to Application tab
2. Click "Clear site data"
3. All data deleted (irreversible)

### Data Backup

**Export Data** (Manual):
```javascript
// In browser console:
const data = localStorage;
const backup = JSON.stringify(localStorage);
console.log(backup);
// Copy to text file for backup
```

**Import Data**:
```javascript
// In browser console:
const backup = '{"key":"value"...}';
Object.entries(JSON.parse(backup)).forEach(([k, v]) => {
  localStorage.setItem(k, v);
});
```

### Data Limits

- localStorage typically supports 5-10MB per domain
- Image data stored as base64 (larger file size)
- Recommendation: Max 20-30 inspections per user

---

## Troubleshooting

### Common Issues & Solutions

#### 1. App Not Loading

**Problem**: Blank page or error on `localhost:3000`

**Solutions**:
1. Check terminal for errors
2. Ensure Node.js version: `node --version` (need 18+)
3. Kill dev server: `Ctrl+C`
4. Clear cache: `pnpm cache clean` or `npm cache clean --force`
5. Reinstall: `rm -rf node_modules && pnpm install`
6. Restart: `pnpm dev`

#### 2. Images Not Uploading

**Problem**: Upload fails or no preview shown

**Solutions**:
1. Check browser console for errors (F12 → Console)
2. Verify image format: JPG, PNG, WebP only
3. Check file size: Max 10MB
4. Try smaller image file
5. Clear localStorage: `localStorage.clear()` in console
6. Hard refresh: `Ctrl+Shift+R`

#### 3. Login Not Working

**Problem**: Can't login after signup

**Solutions**:
1. Check browser console for errors
2. Verify email and password are correct
3. localStorage might be disabled:
   - Check browser privacy settings
   - Try incognito/private window
4. Clear localStorage: `localStorage.clear()`
5. Try creating new account

#### 4. Data Lost After Refresh

**Problem**: Inspection data gone after closing browser

**Causes**:
- Browser cleared cache
- LocalStorage disabled
- Private/Incognito mode (clears on close)

**Solutions**:
1. Don't use private browsing
2. Check if localStorage is enabled
3. Disable browser cache clearing
4. Data is stored locally, won't sync across devices

#### 5. Styling Looks Wrong

**Problem**: Tailwind CSS not applying

**Solutions**:
1. Restart dev server: `Ctrl+C` then `pnpm dev`
2. Hard refresh browser: `Ctrl+Shift+R`
3. Check `globals.css` is imported in layout
4. Clear Next.js cache: `rm -rf .next`
5. Rebuild: `pnpm dev`

#### 6. Mobile Menu Not Working

**Problem**: Mobile hamburger menu doesn't open

**Solutions**:
1. Clear browser cache
2. Hard refresh
3. Check browser console for JavaScript errors
4. Try different browser
5. Restart dev server

#### 7. Analytics Charts Not Showing

**Problem**: Charts appear empty or error

**Solutions**:
1. Create multiple inspections first
2. Check browser console for errors
3. Ensure Recharts library loaded
4. Hard refresh browser
5. Try different browser

### Browser Console Debug

**Open DevTools**:
- Windows/Linux: `F12` or `Ctrl+Shift+I`
- Mac: `Cmd+Option+I`

**Check for Errors**:
1. Click "Console" tab
2. Look for red error messages
3. Fix based on error details

**Monitor Network**:
1. Click "Network" tab
2. Reload page
3. Check for failed requests
4. Look for red error indicators

### Performance Tips

1. **Faster Loading**:
   - Clear browser cache regularly
   - Close unused tabs
   - Restart browser
   - Restart dev server

2. **Smoother Experience**:
   - Use latest Chrome for best performance
   - Disable browser extensions
   - Close background apps
   - Use wired internet if possible

---

## Tips & Tricks

### Quick Navigation

**Keyboard Shortcuts**:
- `Home` - Go to home page
- `Ctrl+K` - Command palette (if implemented)
- `Escape` - Close menus/dialogs
- `Enter` - Submit forms

**Mobile Quick Access**:
- Click navbar hamburger (≡)
- Click logo to go home
- Swipe left to go back

### Optimizing Inspections

1. **Best Image Quality**:
   - Use good lighting
   - Clear, unobstructed view
   - Correct angle (perpendicular)
   - High resolution

2. **Accurate Detection**:
   - Include full vehicle area
   - Multiple angles recommended
   - Zoom in on damage area

3. **Better Remarks**:
   - Describe damage location
   - Mention impact history
   - Note previous repairs
   - Include context

### Using Search & Filter

**Search Examples**:
- By damage: "dent", "scratch", "crack"
- By location: "front", "door", "bumper"
- By date: "2024-01", "January"

**Filter Best Practices**:
- Filter high severity first
- Focus on high confidence results
- Review low confidence separately

### Data Organization Tips

1. **Name Your Remarks Clearly**:
   ```
   ✅ Good: "Impact from parking lot, needs paint repair"
   ❌ Bad: "damage"
   ```

2. **Regular Cleanup**:
   - Delete old test records
   - Keep only necessary data
   - Archive important reports

3. **Multiple Users**:
   - Each user needs own account
   - Data isolated by user
   - Can't share data between accounts

### Testing Features

**Test Account**:
- Email: `test@example.com`
- Password: `test123`

**Sample Images**:
- Use vehicle photos from internet
- Try different angles
- Test with different lighting

**Test Scenarios**:
1. Full workflow: signup → upload → result
2. History management: create → view → delete
3. Profile changes: edit info → logout → login
4. Analytics: create multiple inspections → view charts

### Maximizing Features

**Dashboard**:
- Try all upload methods
- Upload various vehicle types
- Test different image sizes

**Result Page**:
- Add detailed remarks
- Test download feature
- Practice sharing

**History**:
- Use search filters
- Sort by severity
- Batch operations (delete multiple)

**Analytics**:
- Create 5+ inspections to see charts
- Mix severity levels
- Track trends over time

### Advanced Tips

**Using DevTools for Testing**:
```javascript
// Get all stored data
console.log(localStorage);

// Check auth status
console.log(localStorage.getItem('jwt_token'));

// View all inspections
console.log(JSON.parse(localStorage.getItem('inspections')));

// Clear specific data
localStorage.removeItem('jwt_token');

// Test with dummy data
localStorage.setItem('test_key', 'test_value');
```

**Performance Monitoring**:
```javascript
// Check localStorage usage
let totalSize = 0;
for (let key in localStorage) {
  totalSize += localStorage[key].length + key.length;
}
console.log('Total localStorage:', totalSize, 'bytes');
```

---

## Getting Help

### Resources

1. **In-App Help**:
   - Profile → Help Section
   - Contact page for support
   - FAQ in footer

2. **Documentation**:
   - README.md - Full guide
   - QUICKSTART.md - Quick start
   - API_DOCUMENTATION.md - API reference

3. **External Help**:
   - Next.js: nextjs.org/docs
   - React: react.dev/learn
   - Tailwind: tailwindcss.com

### Report Issues

When reporting bugs, include:
1. Browser and version
2. Operating system
3. Steps to reproduce
4. Screenshots if applicable
5. Error messages from console
6. Browser console logs

---

## Summary

You now have a complete understanding of VehicleDetect's features and how to use them effectively. Start by:

1. Creating an account
2. Uploading your first image
3. Exploring the dashboard
4. Checking history and analytics
5. Customizing your profile

**Questions?** Check the documentation or browser console for errors.

**Ready to start?** Navigate to `http://localhost:3000` and click "Sign Up"!

---

**Happy inspecting! 🚗**
