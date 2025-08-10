# Firebase Deployment Guide

This guide will help you deploy your VideoSDK React RTC app to Firebase Hosting.

## Prerequisites

1. **Node.js** (version 14 or higher)
2. **npm** or **yarn**
3. **Firebase CLI** - Install globally:
   ```bash
   npm install -g firebase-tools
   ```

## Step 1: Set Up Firebase Project

1. **Create a Firebase project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard
   - Note down your project ID

2. **Update project ID:**
   - Replace `your-firebase-project-id` in `.firebaserc` with your actual Firebase project ID

## Step 2: Environment Variables

Create a `.env` file in the root directory with your VideoSDK credentials:

```env
REACT_APP_VIDEOSDK_TOKEN=your_videosdk_token_here
REACT_APP_AUTH_URL=your_auth_url_here
```

**Important:** For production deployment, you'll need to set these environment variables in Firebase:
- Go to Firebase Console → Hosting → Your site
- Add environment variables in the hosting settings

## Step 3: Build and Deploy

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Build the app:**
   ```bash
   npm run build
   # or
   yarn build
   ```

3. **Login to Firebase:**
   ```bash
   firebase login
   ```

4. **Initialize Firebase (first time only):**
   ```bash
   firebase init hosting
   ```
   - Select your project
   - Use `build` as public directory
   - Configure as single-page app: **Yes**
   - Don't overwrite index.html: **No**

5. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

## Step 4: Verify Deployment

After deployment, Firebase will provide you with a URL like:
`https://your-project-id.web.app`

## Environment Variables for Production

For production, you can set environment variables using Firebase Functions or by using a build-time approach:

### Option 1: Build-time Environment Variables
Set environment variables before building:
```bash
REACT_APP_VIDEOSDK_TOKEN=your_token npm run build
```

### Option 2: Firebase Functions (Advanced)
If you need server-side environment variables, consider using Firebase Functions.

## Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check that all dependencies are installed
   - Verify environment variables are set correctly

2. **App doesn't load:**
   - Check browser console for errors
   - Verify VideoSDK token is valid
   - Ensure HTTPS is enabled (Firebase provides this automatically)

3. **Environment variables not working:**
   - Remember that React apps require `REACT_APP_` prefix
   - Rebuild after changing environment variables

### Useful Commands:

```bash
# View deployment history
firebase hosting:releases

# Rollback to previous version
firebase hosting:rollback

# View logs
firebase hosting:channel:list
```

## Security Considerations

1. **API Keys:** Never commit API keys to version control
2. **HTTPS:** Firebase Hosting provides HTTPS by default
3. **CORS:** Configure CORS if your app makes API calls to external services

## Performance Optimization

Firebase Hosting automatically:
- Serves static assets with optimal caching
- Provides CDN distribution
- Enables gzip compression
- Optimizes for mobile devices

Your app is now ready for production deployment on Firebase! 🚀
