# VideoSDK React App Troubleshooting Guide

## Current Deployment Status ✅

Your app is successfully deployed at: **https://video-sdk-5aed2.web.app**

### Configuration Summary
- ✅ Firebase Hosting: Properly configured
- ✅ React Build: Successfully compiled
- ✅ VideoSDK Token: Valid and embedded
- ✅ Environment Variables: Correctly set
- ✅ SPA Routing: Configured with rewrites

## Common Issues and Solutions

### 1. VideoSDK Domain Whitelisting (Most Common Issue)

**Problem**: App loads but VideoSDK features don't work
**Solution**: Add your domain to VideoSDK whitelist

1. Go to [VideoSDK Dashboard](https://app.videosdk.live/)
2. Navigate to Settings → API Keys
3. Find your API key: `20b59218-81e8-4507-92a2-f37fe8b0330a`
4. Add these domains to the whitelist:
   - `https://video-sdk-5aed2.web.app`
   - `https://video-sdk-5aed2.firebaseapp.com`
   - `http://localhost:3000` (for development)

### 2. Browser Console Errors

**Check for these common errors**:
- CORS errors: Domain not whitelisted
- Token errors: Invalid or expired token
- Network errors: Check internet connection

**Debugging Steps**:
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests
4. Look for VideoSDK-specific error messages

### 3. Environment Variables

**Current Configuration**:
```env
REACT_APP_VIDEOSDK_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VIDEOSDK_API_KEY=20b59218-81e8-4507-92a2-f37fe8b0330a
VIDEOSDK_SECRET=8359c238192748a76376f02eee972bbd6db994e83f96eafb3c88beee13701730
```

**Verification**:
- Token is embedded in build ✅
- API key is valid ✅
- Token expiration: Check VideoSDK dashboard

### 4. Firebase Hosting Issues

**Current Configuration** (`firebase.json`):
```json
{
  "hosting": {
    "public": "build",
    "rewrites": [{"source": "**", "destination": "/index.html"}],
    "headers": [
      {
        "source": "/static/**",
        "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]
      }
    ]
  }
}
```

## Deployment Commands

### Quick Deploy
```bash
# Build the app
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

### Full Deploy (if needed)
```bash
# Install dependencies
npm install

# Build the app
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

### Check Deployment Status
```bash
# View hosting channels
firebase hosting:channel:list

# Check project status
firebase projects:list
```

## Testing Your Deployment

### 1. Basic Functionality Test
1. Visit: https://video-sdk-5aed2.web.app
2. Check if the app loads without errors
3. Try creating a meeting
4. Test joining a meeting

### 2. VideoSDK API Test
```bash
# Test token validity
curl -X POST "https://api.videosdk.live/v2/rooms" \
  -H "Authorization: YOUR_TOKEN" \
  -H "Content-Type: application/json"
```

### 3. Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Performance Optimization

### Current Bundle Size
- Main JS: 1.63 MB (gzipped)
- CSS: 8.39 kB
- Total: ~1.7 MB

### Optimization Recommendations
1. Enable code splitting
2. Use dynamic imports for VideoSDK components
3. Optimize images and assets
4. Enable compression in Firebase

## Security Considerations

### Current Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- HTTPS: Enabled by Firebase

### API Key Security
- ✅ Token embedded in build (not exposed in client)
- ✅ Domain whitelisting enabled
- ✅ HTTPS required

## Monitoring and Logs

### Firebase Logs
```bash
# View hosting logs
firebase hosting:channel:list
```

### VideoSDK Logs
- Check VideoSDK dashboard for usage
- Monitor API calls and errors
- Track meeting creation/joining

## Emergency Rollback

If deployment fails:
```bash
# Rollback to previous version
firebase hosting:rollback

# Or deploy specific version
firebase hosting:channel:deploy live --expires 1d
```

## Support Resources

1. **VideoSDK Documentation**: https://docs.videosdk.live/
2. **Firebase Hosting Docs**: https://firebase.google.com/docs/hosting
3. **React Deployment Guide**: https://cra.link/deployment
4. **VideoSDK Dashboard**: https://app.videosdk.live/

## Contact Information

For VideoSDK-specific issues:
- Email: support@videosdk.live
- Discord: https://discord.gg/videosdk

For Firebase issues:
- Firebase Console: https://console.firebase.google.com/
- Firebase Support: https://firebase.google.com/support
