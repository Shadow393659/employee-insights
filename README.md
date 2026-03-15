# Employee Insights Dashboard

A **React-based employee analytics dashboard** built as part of the technical assignment.
The application demonstrates **performance optimization, custom virtualization, browser hardware APIs, and clean architecture using React hooks and context.**

---

# Live Demo

**Application URL**

https://employee-insights-seven.vercel.app

---

# Features

### 1. Authentication

* Simple login system
* Authentication state stored in **localStorage**
* Protected routes implemented using **React Router**

### 2. High-Performance Employee Grid

* Data fetched from remote API
* Custom **Virtualized Table**
* Only rows visible in the viewport are rendered
* Handles large datasets efficiently

### 3. Analytics Dashboard

Includes interactive data visualization:

* Salary distribution chart
* City distribution visualization
* Employee statistics overview

Charts are built using **Chart.js**.

### 4. Identity Verification Page

Uses **browser hardware APIs**.

Capabilities:

* Access user **webcam**
* Capture user photo
* Draw signature using HTML Canvas
* Save captured signature

### 5. Signature Canvas

Custom component allowing users to:

* Draw digital signature
* Clear signature
* Save signature

### 6. React Architecture

The project follows a modular architecture:

```
src
│
├── api
│   └── employeeApi.js
│
├── components
│   ├── CityMap.jsx
│   ├── SalaryChart.jsx
│   ├── SignatureCanvas.jsx
│   └── VirtualTable.jsx
│
├── context
│   └── AuthContext.jsx
│
├── hooks
│   └── useVirtualScroll.js
│
├── pages
│   ├── Login.jsx
│   ├── List.jsx
│   ├── Analytics.jsx
│   └── Details.jsx
│
├── routes
│   └── ProtectedRoute.jsx
│
├── utils
│   └── helpers.js
│
└── App.jsx
```

---

# API Used

Employee data is fetched from:

```
POST https://backend.jotish.in/backend_dev/gettabledata.php
```

Payload:

```json
{
  "username": "test",
  "password": "123456"
}
```

The API returns employee records in the format:

```
[
  "Tiger Nixon",
  "System Architect",
  "Edinburgh",
  "5421",
  "2011/04/25",
  "$320,800"
]
```

These are mapped into structured objects for rendering.

---

# Custom Virtualization

To improve performance for large datasets, a **custom virtual scrolling hook** was implemented.

```
useVirtualScroll.js
```

Functionality:

* Calculates visible rows based on scroll position
* Renders only visible rows
* Adds buffer rows for smoother scrolling

Benefits:

* Reduces DOM nodes
* Improves rendering performance
* Handles thousands of rows efficiently

---

# Browser Hardware APIs

The application uses the **MediaDevices API**.

Used for:

* Camera access
* Photo capture
* Identity verification

```
navigator.mediaDevices.getUserMedia()
```

Captured image is drawn into a canvas and converted into Base64 format.

---

# Intentional Bug

An intentional issue was left in the **camera implementation**.

### Problem

After capturing a photo, the **camera stream remains active**, meaning the webcam continues running even after capture.

### Why this is a problem

* Wastes system resources
* Camera light remains on
* Stream is never stopped

### Example problematic code

```
navigator.mediaDevices.getUserMedia({ video: true })
```

The stream is assigned to the video element but never stopped.

### Proper fix

Stop the media stream tracks after capturing the image:

```javascript
const stream = videoRef.current.srcObject;

stream.getTracks().forEach(track => track.stop());
```

This will release the camera properly.

---

# Performance Optimizations

Implemented optimizations include:

* Custom virtualization
* React hooks for state management
* Memoized rendering
* Controlled API calls

---

# Deployment

The application is deployed on **Vercel**.

### Deployment Steps

1. Push project to GitHub
2. Import repository in Vercel
3. Configure build settings

Build settings:

```
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

### SPA Routing Fix

Since React Router uses client-side routing, refreshing pages like `/list` may return a 404 error.

To fix this, the following configuration is added:

`vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This ensures all routes redirect to `index.html`.

---

# Installation

Clone the repository:

```
git clone https://github.com/<your-username>/employee-insights-dashboard.git
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Build for production:

```
npm run build
```

---

# Dependencies

Main libraries used:

* React
* React Router
* Chart.js
* Tailwind CSS
* Axios

---

# Git Workflow

The project was developed using **structured commits** to maintain repository integrity.

Example commit messages:

```
feat: implement employee list virtualization
feat: add analytics charts
feat: add camera capture functionality
fix: handle API response structure
fix: add SPA routing support for Vercel
```

---

# Author

Noordeen

Frontend Developer | React | Performance Optimization

---

# Notes

This project focuses on:

* Clean architecture
* Performance optimization
* Real browser API usage
* Proper React design patterns
