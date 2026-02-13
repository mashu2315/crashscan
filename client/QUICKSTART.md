# VehicleDetect - Quick Start Guide

## Getting Started in 5 Minutes

### Step 1: Start the Development Server
```bash
pnpm install
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 2: Explore the Landing Page
The homepage shows:
- Hero section with CTA buttons
- Problem description
- Solution explanation
- How it works process
- Key benefits
- Call-to-action sections

### Step 3: Create an Account
1. Click "Sign Up" button
2. Enter Name: `John Doe`
3. Email: `john@example.com`
4. Password: `password123`
5. Click "Sign Up"

### Step 4: Upload Your First Image
1. You'll be redirected to Dashboard
2. Click the upload area or drag-drop an image
3. Click "Analyze Image"
4. AI will analyze the image and show results
5. View the detailed report

### Step 5: Check Your History
1. Click "History" in navbar
2. See all your past inspections
3. Filter by severity or search
4. Click "View" to see full details

## Key Routes

| Route | Purpose | Auth Required |
|-------|---------|---------------|
| `/` | Home/Landing | No |
| `/signup` | Create account | No |
| `/login` | Sign in | No |
| `/forgot-password` | Reset password | No |
| `/dashboard` | Upload images | Yes |
| `/result` | View inspection | Yes |
| `/history` | Past inspections | Yes |
| `/profile` | User settings | Yes |
| `/analytics` | Charts & stats | Yes |
| `/terms` | Terms of service | No |
| `/privacy` | Privacy policy | No |
| `/contact` | Contact support | No |

## Test Accounts

Use these for testing:
- Email: `test@example.com`
- Password: `test123`

Or create your own account with any email/password.

## Features Overview

### Authentication
- Signup with email
- Login/Logout
- Password reset flow
- Protected routes

### Dashboard
- Upload images (drag-drop or click)
- View preview before upload
- Simulated AI analysis
- Display results with confidence

### Results
- Full damage report
- Damage classification
- Add remarks/notes
- Download reports

### History
- List all inspections
- Search and filter
- View details
- Delete records

### Profile
- Edit user info
- View account stats
- Security settings
- Account management

### Analytics
- Damage type charts
- Severity distribution
- Inspection timeline
- Trends and insights

## Sample Workflow

### Complete Inspection Process
1. **Login**: Use test account credentials
2. **Upload Image**: Choose a vehicle image
3. **Analyze**: Click analyze button
4. **Review Results**: Check detected damage
5. **Add Remarks**: Add notes to inspection
6. **View History**: See past inspections
7. **Check Analytics**: View trends

### Data Persistence
All data is stored in localStorage:
- User authentication tokens
- Inspection records
- User profile info
- Remarks and notes

Clearing browser data will clear all stored information.

## Customization

### Change Application Name
Edit `app/components/Navbar.jsx` and `app/components/Footer.jsx`:
```javascript
// Find and change:
<span>VehicleDetect</span>
```

### Update Colors
Edit `tailwind.config.ts` for custom color schemes.

### Modify Form Fields
Edit individual components like `app/components/auth/Signup.jsx`.

### Add New Pages
1. Create component in `app/components/`
2. Create route file: `app/newpage/page.tsx`
3. Import and wrap with `<Layout>`

## Troubleshooting

### App not loading?
1. Check terminal for errors
2. Ensure Node.js 18+ is installed
3. Run `pnpm install` again

### Images not uploading?
1. Check browser console for errors
2. Ensure localStorage is enabled
3. Try a smaller image file

### Authentication not working?
1. Clear browser localStorage
2. Hard refresh (Ctrl+Shift+R)
3. Create a new test account

### Styling looks broken?
1. Run `pnpm dev` to restart dev server
2. Hard refresh browser
3. Check globals.css is imported

## Component Structure

```
App
├── Navbar (navigation)
│   ├── Logo/brand
│   ├── Nav links
│   └── Auth buttons
├── Main Content
│   ├── Landing/Dashboard/History/etc.
└── Footer
    ├── Links
    └── Contact info
```

## Available Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Create production build
pnpm start            # Run production build
pnpm lint             # Run ESLint

# Cleaning
pnpm cache clean      # Clear pnpm cache
rm -rf node_modules   # Remove dependencies
```

## Next Steps

1. **Integrate Real AI Model**
   - Replace simulated results in Dashboard.jsx
   - Connect YOLOv8 or TensorFlow.js
   - Update result display

2. **Add Backend Database**
   - Set up Supabase/MongoDB/Firebase
   - Replace localStorage with API calls
   - Implement real authentication

3. **Enhance UI/UX**
   - Add loading animations
   - Implement notifications (toast messages)
   - Add dark mode support
   - Mobile app (React Native)

4. **Add More Features**
   - Bulk upload
   - PDF report generation
   - Export to CSV
   - Integration with insurance systems
   - Video support

5. **Deployment**
   - Deploy to Vercel
   - Set up custom domain
   - Configure production env variables
   - Enable analytics

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Recharts Documentation](https://recharts.org)

## Common Issues & Solutions

**Q: Why is localStorage being used?**
A: It's a demo for frontend-only testing. For production, use a real backend database.

**Q: Can I use this with a real AI model?**
A: Yes! Replace the mock results in `Dashboard.jsx` with actual API calls to your AI service.

**Q: How do I deploy this?**
A: Run `vercel deploy` after installing Vercel CLI, or push to GitHub for automatic deployment.

**Q: Can I modify the design?**
A: Absolutely! Edit Tailwind classes in components or modify `tailwind.config.ts` for global changes.

## Support

For issues or questions:
1. Check the full README.md
2. Review component source code
3. Check browser console for errors
4. Try clearing localStorage and browser cache

---

**Happy coding! 🚀**
