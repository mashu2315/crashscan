# VehicleDetect - API Documentation

## Overview

This document describes the API endpoints for the VehicleDetect application. Currently, the API includes authentication endpoints with placeholder implementations. Backend API endpoints for inspection processing are documented for future implementation.

## Base URL

```
Development: http://localhost:3000
Production: https://api.vehicledetect.com
```

## Authentication

Authentication uses JWT tokens stored in localStorage:

```javascript
// Token stored in localStorage
localStorage.setItem('jwt_token', token);

// Included in requests
const headers = {
  'Authorization': `Bearer ${token}`
};
```

## Authentication Endpoints

### 1. Sign Up

Create a new user account.

**Endpoint**: `POST /api/auth/signup`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (Success - 200)**:
```json
{
  "message": "Signup successful",
  "token": "jwt_token_xyz...",
  "user": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response (Error - 400)**:
```json
{
  "message": "All fields are required"
}
```

**cURL Example**:
```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

---

### 2. Login

Authenticate user and obtain JWT token.

**Endpoint**: `POST /api/auth/login`

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (Success - 200)**:
```json
{
  "message": "Login successful",
  "token": "jwt_token_xyz...",
  "user": {
    "email": "john@example.com"
  }
}
```

**Response (Error - 400)**:
```json
{
  "message": "Email and password are required"
}
```

**cURL Example**:
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

---

### 3. Forgot Password

Initiate password reset process.

**Endpoint**: `POST /api/auth/forgot-password`

**Request Body**:
```json
{
  "email": "john@example.com"
}
```

**Response (Success - 200)**:
```json
{
  "message": "Password reset email sent successfully. Check your inbox."
}
```

**Response (Error - 400)**:
```json
{
  "message": "Email is required"
}
```

**cURL Example**:
```bash
curl -X POST http://localhost:3000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com"
  }'
```

---

## Inspection API (To Be Implemented)

These endpoints are placeholders for real inspection processing API.

### 4. Upload and Analyze Image

Process a vehicle image and detect damage.

**Endpoint**: `POST /api/inspection/upload`

**Headers**:
```
Authorization: Bearer {token}
Content-Type: multipart/form-data
```

**Request Body** (FormData):
```
- image: File
- vehicle_type: "4w" | "3w" | "2w" | "scooter"
- angle: "front" | "side" | "rear" (optional)
```

**Response (Success - 200)**:
```json
{
  "id": "insp_123xyz",
  "damage_type": "dent",
  "location": "front-left-door",
  "severity": "medium",
  "confidence": 0.91,
  "cosmetic": true,
  "repair_category": "minor-repair",
  "explanation": "Detected dent on front left door with medium severity. Cosmetic damage affecting appearance.",
  "bounding_box": {
    "x": 150,
    "y": 200,
    "width": 100,
    "height": 80
  },
  "processing_time": 1.234,
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Implementation Example**:
```javascript
// Frontend
const formData = new FormData();
formData.append('image', imageFile);
formData.append('vehicle_type', '4w');

const response = await fetch('/api/inspection/upload', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
});

const result = await response.json();
console.log(result);
```

---

### 5. Get Inspection History

Retrieve all user inspections.

**Endpoint**: `GET /api/inspection/history`

**Headers**:
```
Authorization: Bearer {token}
```

**Query Parameters**:
```
limit=20          # Number of results (default: 20)
offset=0          # Pagination offset (default: 0)
severity=medium   # Filter by severity (optional)
sort=date_desc    # Sort order (default: date_desc)
```

**Response (Success - 200)**:
```json
{
  "inspections": [
    {
      "id": "insp_123xyz",
      "image_url": "/images/insp_123xyz.jpg",
      "damage_type": "dent",
      "location": "front-left-door",
      "severity": "medium",
      "confidence": 0.91,
      "date": "2024-01-15T10:30:00Z",
      "remarks": "Follow up after paint repair"
    }
  ],
  "total": 45,
  "limit": 20,
  "offset": 0
}
```

**Implementation Example**:
```javascript
const response = await fetch('/api/inspection/history?limit=20&severity=medium', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

const { inspections, total } = await response.json();
```

---

### 6. Get Single Inspection

Retrieve detailed inspection report.

**Endpoint**: `GET /api/inspection/:id`

**Headers**:
```
Authorization: Bearer {token}
```

**URL Parameters**:
```
id: inspection_id (required)
```

**Response (Success - 200)**:
```json
{
  "id": "insp_123xyz",
  "user_id": "user_456abc",
  "image_url": "/images/insp_123xyz.jpg",
  "vehicle_type": "4w",
  "angle": "front",
  "damage_type": "dent",
  "location": "front-left-door",
  "severity": "medium",
  "confidence": 0.91,
  "cosmetic": true,
  "repair_category": "minor-repair",
  "repair_cost_estimate": "$150-300",
  "explanation": "Detected dent on front left door with medium severity...",
  "bounding_box": { "x": 150, "y": 200, "width": 100, "height": 80 },
  "remarks": "Customer noted impact from parking lot incident",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:35:00Z"
}
```

**Response (Error - 404)**:
```json
{
  "message": "Inspection not found"
}
```

---

### 7. Update Inspection Remarks

Add or update remarks for an inspection.

**Endpoint**: `PUT /api/inspection/:id`

**Headers**:
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request Body**:
```json
{
  "remarks": "Updated remarks about the damage and repair"
}
```

**Response (Success - 200)**:
```json
{
  "id": "insp_123xyz",
  "remarks": "Updated remarks about the damage and repair",
  "updated_at": "2024-01-15T10:35:00Z",
  "message": "Inspection updated successfully"
}
```

---

### 8. Delete Inspection

Remove an inspection record.

**Endpoint**: `DELETE /api/inspection/:id`

**Headers**:
```
Authorization: Bearer {token}
```

**Response (Success - 200)**:
```json
{
  "message": "Inspection deleted successfully",
  "id": "insp_123xyz"
}
```

**Response (Error - 404)**:
```json
{
  "message": "Inspection not found"
}
```

---

## Profile API (To Be Implemented)

### 9. Get User Profile

**Endpoint**: `GET /api/profile`

**Headers**:
```
Authorization: Bearer {token}
```

**Response**:
```json
{
  "id": "user_456abc",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar_url": "/images/avatar.jpg",
  "total_inspections": 45,
  "account_status": "active",
  "plan": "free",
  "created_at": "2023-12-01T09:00:00Z"
}
```

### 10. Update User Profile

**Endpoint**: `PUT /api/profile`

**Headers**:
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request Body**:
```json
{
  "name": "John Updated",
  "avatar_url": "https://example.com/avatar.jpg"
}
```

---

## Error Handling

### Standard Error Response

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "details": {
      "field": "field_name",
      "issue": "description"
    }
  }
}
```

### Common Error Codes

```
400 - Bad Request (validation error)
401 - Unauthorized (missing/invalid token)
403 - Forbidden (insufficient permissions)
404 - Not Found (resource doesn't exist)
409 - Conflict (duplicate resource)
413 - Payload Too Large (file too large)
429 - Too Many Requests (rate limited)
500 - Internal Server Error
503 - Service Unavailable
```

---

## Rate Limiting

API endpoints are rate limited to prevent abuse:

```
General Endpoints: 100 requests/hour
Auth Endpoints: 10 requests/hour
Upload Endpoint: 50 requests/hour
```

Response headers include rate limit info:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1705327200
```

---

## Request/Response Examples

### Example: Complete Signup & Login Flow

```javascript
// 1. Sign up
const signupResponse = await fetch('/api/auth/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
  })
});

const signupData = await signupResponse.json();
localStorage.setItem('jwt_token', signupData.token);

// 2. Use token in subsequent requests
const historyResponse = await fetch('/api/inspection/history', {
  headers: {
    'Authorization': `Bearer ${signupData.token}`
  }
});

const historyData = await historyResponse.json();
console.log(historyData.inspections);

// 3. Upload image
const formData = new FormData();
formData.append('image', imageFile);

const uploadResponse = await fetch('/api/inspection/upload', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${signupData.token}`
  },
  body: formData
});

const uploadData = await uploadResponse.json();
console.log(uploadData); // Damage detection results
```

---

## Data Models

### User Model
```javascript
{
  id: string,
  name: string,
  email: string,
  password_hash: string,
  avatar_url: string | null,
  created_at: timestamp,
  updated_at: timestamp
}
```

### Inspection Model
```javascript
{
  id: string,
  user_id: string,
  image_url: string,
  vehicle_type: "4w" | "3w" | "2w" | "scooter",
  angle: string,
  damage_type: string,
  location: string,
  severity: "low" | "medium" | "high",
  confidence: float (0-1),
  cosmetic: boolean,
  repair_category: string,
  repair_cost_estimate: string,
  explanation: string,
  bounding_box: { x, y, width, height },
  remarks: string,
  created_at: timestamp,
  updated_at: timestamp
}
```

---

## Best Practices

### For Frontend Developers

1. **Always include auth header**
   ```javascript
   const token = localStorage.getItem('jwt_token');
   const headers = {
     'Authorization': `Bearer ${token}`
   };
   ```

2. **Handle errors gracefully**
   ```javascript
   if (!response.ok) {
     const error = await response.json();
     showErrorNotification(error.message);
   }
   ```

3. **Use proper content types**
   ```javascript
   // JSON
   headers: { 'Content-Type': 'application/json' }
   
   // FormData (for file uploads)
   headers: {} // Don't set Content-Type
   ```

4. **Implement request timeout**
   ```javascript
   const controller = new AbortController();
   const timeout = setTimeout(() => controller.abort(), 30000);
   
   fetch(url, { signal: controller.signal })
     .finally(() => clearTimeout(timeout));
   ```

### For Backend Developers

1. **Validate all inputs server-side**
2. **Hash passwords with bcrypt**
3. **Generate secure JWT tokens**
4. **Implement proper CORS**
5. **Add request logging**
6. **Implement proper pagination**
7. **Add field-level validation**
8. **Use transactions for data integrity**
9. **Implement caching strategically**
10. **Monitor API performance**

---

## Testing the API

### Using cURL

```bash
# Test signup
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","password":"test123"}'

# Test login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Using JavaScript Fetch

```javascript
async function testAPI() {
  // Signup
  const signupRes = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      password: 'test123'
    })
  });
  
  const signupData = await signupRes.json();
  console.log('Signup:', signupData);
}

testAPI();
```

---

## API Versioning

Current Version: **v1.0.0**

Future versions will use URL prefix:
```
/api/v1/auth/login
/api/v2/auth/login
```

---

## Support

For API issues:
- Check this documentation
- Review error messages
- Check browser console logs
- Review component source code
- Contact support@vehicledetect.com

---

**Last Updated**: 2024  
**Status**: Development  
**Next Phase**: Backend implementation with real database
