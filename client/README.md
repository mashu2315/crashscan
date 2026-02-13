# VehicleDetect - AI-Driven Vehicle Damage Detection & Intelligent Assessment

A complete professional frontend for AI-powered vehicle damage detection and assessment. Built with React (JavaScript), Next.js, and Tailwind CSS.

## Project Overview

VehicleDetect is an intelligent vehicle inspection system that uses AI to:
- **Detect vehicle damage** from images (scratches, dents, paint chips, cracks)
- **Classify damage type** (cosmetic vs functional)
- **Assess severity** (low, medium, high)
- **Provide explainability** with visual overlays and confidence scores
- **Support multiple vehicle types** (motorcycles, scooters, 3W, 4W)

## Features

### 1. Authentication System
- **Signup Page**: User registration with name, email, and password
- **Login Page**: Secure login with email and password
- **Forgot Password**: Password reset functionality
- **Logout**: Secure logout with session cleanup
- **Protected Routes**: Dashboard and history require authentication

### 2. Landing Page
- **Hero Section**: Compelling headline and CTA
- **Problem Section**: Highlights current challenges
- **Solution Section**: AI-powered benefits
- **How It Works**: 4-step process explanation
- **Benefits Section**: Key advantages with icons
- **CTA Section**: Call-to-action for getting started

### 3. Dashboard (Upload & Predict)
- **Image Upload**: Drag-and-drop or file selection
- **Camera/Gallery Options**: Multiple upload methods
- **Image Preview**: View selected image before submission
- **Loading States**: Animated feedback during analysis
- **AI Results**: Display damage detection results
- **Error Handling**: Comprehensive error messages

### 4. Inspection Result Page
- **Detailed Report**: Complete damage analysis
- **Visual Overlay**: Highlighted damage area on image
- **Classification**: Damage type and category information
- **Confidence Score**: Visual progress bar for AI confidence
- **Remarks Section**: Add and edit notes
- **Download & Share**: Export inspection reports
- **Quick Stats**: Key metrics in sidebar

### 5. History Page
- **Inspection List**: View all past inspections
- **Thumbnails**: Image previews for quick identification
- **Search & Filter**: Find inspections by damage type, location, or severity
- **Sort Options**: Organize by date, severity, or type
- **Quick Actions**: View or delete records
- **Metadata**: Date, severity, confidence, and remarks display

### 6. Profile Page
- **User Information**: Name, email, join date
- **Edit Profile**: Update account details
- **Activity Summary**: Total inspections and account status
- **Security Settings**: Password and 2FA options
- **Account Management**: Logout and delete account options
- **Help Section**: Support and documentation links

### 7. Analytics Dashboard
- **Bar Chart**: Damage type frequency distribution
- **Pie Chart**: Severity level distribution
- **Line Chart**: Inspection trends over time
- **Statistics Cards**: Key metrics overview
- **Insights Section**: Pattern analysis and recommendations

### 8. Navigation & Layout
- **Responsive Navbar**: Mobile and desktop menus
- **Dynamic Links**: Auth-aware navigation
- **Professional Footer**: Links and contact information
- **Consistent Layout**: Header, content, footer structure

### 9. Utility Pages
- **Terms of Service**: Legal terms
- **Privacy Policy**: Data handling and privacy
- **Contact Page**: Support information and contact form

## Folder Structure

```
app/
├── components/
│   ├── Navbar.jsx              # Main navigation component
│   ├── Footer.jsx              # Footer component
│   ├── Layout.jsx              # Layout wrapper
│   ├── LandingPage.jsx         # Homepage
│   ├── Dashboard.jsx           # Image upload & analysis
│   ├── ResultPage.jsx          # Inspection results
│   ├── HistoryPage.jsx         # Past inspections
│   ├── ProfilePage.jsx         # User profile
│   ├── Analytics.jsx           # Charts and analytics
│   └── auth/
│       ├── Signup.jsx          # Signup form
│       ├── Login.jsx           # Login form
│       └── ForgotPassword.jsx  # Password reset
├── api/
│   └── auth/
│       ├── signup/route.js
│       ├── login/route.js
│       └── forgot-password/route.js
├── dashboard/page.tsx
├── login/page.tsx
├── signup/page.tsx
├── forgot-password/page.tsx
├── history/page.tsx
├── profile/page.tsx
├── result/page.tsx
├── analytics/page.tsx
├── terms/page.tsx
├── privacy/page.tsx
├── contact/page.tsx
├── page.tsx                    # Homepage route
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles
└── ... (other config files)
```

## Technology Stack

- **Frontend Framework**: React 19.2.3 with Next.js 16
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React (544+ icons)
- **Charts**: Recharts 2.15.0
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Shadcn/ui + Radix UI
- **State Management**: LocalStorage (for demo), ready for Redux/Context
- **Build Tool**: Turbopack (Next.js default)

## Installation & Setup

### Prerequisites
- Node.js 18+ or higher
- npm or pnpm package manager

### Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd vehicle-detect
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run Development Server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - The app will hot-reload on file changes

### Build for Production
```bash
pnpm build
pnpm start
```

## User Workflow

### First-Time User
1. Visit homepage at `/`
2. Click "Sign Up" button
3. Fill in name, email, password
4. Get redirected to dashboard
5. Start uploading vehicle images

### Returning User
1. Navigate to `/login`
2. Enter email and password
3. Access dashboard and history
4. View past inspections

### Upload & Analyze
1. Go to Dashboard (`/dashboard`)
2. Drag-drop or click to upload image
3. Preview image before submission
4. Click "Analyze Image"
5. View results with AI predictions
6. Add remarks and notes
7. Download or share report

### View History
1. Go to History (`/history`)
2. Search or filter inspections
3. Click "View" to see detailed report
4. Delete records as needed

## API Integration (Placeholder)

The app includes mock API endpoints for demonstration:

### Authentication Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Password reset

### Inspection Endpoints (To be implemented)
- `POST /api/inspection/upload` - Upload and analyze image
- `GET /api/inspection/history` - Get inspection history
- `GET /api/inspection/:id` - Get specific inspection
- `DELETE /api/inspection/:id` - Delete inspection
- `PUT /api/inspection/:id` - Update inspection remarks

## Data Persistence

Currently uses **localStorage** for demo purposes:
- `jwt_token` - Authentication token
- `user_email` - User email
- `user_name` - User name
- `inspections` - Array of inspection records

### Ready for Production Database Integration:
- Supabase PostgreSQL
- MongoDB
- Firebase
- MySQL / PostgreSQL
- AWS DynamoDB

## AI Model Integration

The current implementation includes **simulated AI responses**. To integrate real AI:

### Option 1: YOLOv8 (Object Detection)
```javascript
// Replace simulated response with actual detection
import * as ort from 'onnxruntime-web';
```

### Option 2: TensorFlow.js
```javascript
// Load pre-trained model
const model = await tf.loadLayersModel('model-url');
const predictions = model.predict(imageData);
```

### Option 3: Cloud API (Google Vision, AWS Rekognition)
```javascript
// Call cloud detection service
const result = await cloudVisionAPI.detectObjects(image);
```

## Configuration

### Environment Variables (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=VehicleDetect
```

### Tailwind CSS Customization
Edit `tailwind.config.ts` for:
- Color schemes
- Typography
- Spacing
- Breakpoints

## Performance Optimizations

- **Code Splitting**: Route-based code splitting with Next.js
- **Image Optimization**: Next.js Image component ready
- **Lazy Loading**: Dynamic imports for heavy components
- **Caching**: LocalStorage for quick data access
- **Responsive Design**: Mobile-first approach

## Security Considerations

⚠️ **This is a frontend demo. For production:**

1. **Authentication**
   - Implement proper JWT with httpOnly cookies
   - Use secure password hashing (bcrypt)
   - Add rate limiting on auth endpoints

2. **Data Protection**
   - Encrypt sensitive data in transit (HTTPS)
   - Implement Row-Level Security (RLS)
   - Validate all inputs server-side

3. **File Uploads**
   - Validate file types server-side
   - Scan for malware
   - Store in secure cloud storage
   - Implement file size limits

4. **API Security**
   - Implement CORS properly
   - Add request signing/verification
   - Rate limit API endpoints
   - Validate all requests

## Testing

### Manual Testing Checklist
- [ ] Navigation between pages works
- [ ] Form validation works
- [ ] Auth state persists
- [ ] Inspection upload/analysis works
- [ ] History CRUD operations work
- [ ] Profile updates work
- [ ] Analytics display correctly
- [ ] Responsive design works on mobile

### Automated Testing (To be added)
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e
```

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## Future Enhancements

- [ ] Real AI model integration (YOLOv8/CNN)
- [ ] Real-time collaboration
- [ ] PDF report generation
- [ ] Batch upload/processing
- [ ] Mobile app (React Native)
- [ ] Video inspection support
- [ ] Multi-language support
- [ ] Advanced analytics (heatmaps, trends)
- [ ] Integration with insurance systems
- [ ] 3D damage visualization

## Troubleshooting

### App not loading?
1. Check Node.js version: `node --version`
2. Clear npm cache: `pnpm cache clean` or `npm cache clean --force`
3. Delete node_modules and reinstall: `rm -rf node_modules && pnpm install`

### Styling issues?
1. Ensure Tailwind is configured in `tailwind.config.ts`
2. Check global.css has Tailwind directives
3. Rebuild: `pnpm dev`

### LocalStorage not working?
1. Clear browser cache
2. Check browser privacy settings
3. Ensure localStorage is enabled

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For support, reach out to:
- Email: support@vehicledetect.com
- Website: https://vehicledetect.com
- Documentation: https://docs.vehicledetect.com

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI by [Shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Charts by [Recharts](https://recharts.org)
- Styling with [Tailwind CSS](https://tailwindcss.com)

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Status**: Development/Demo
