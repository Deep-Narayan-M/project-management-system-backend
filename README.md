# WorkNest - Project Management System Backend

<div align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</div>

<br>

A robust RESTful API backend for the WorkNest project management system. Built with Node.js, Express, and MongoDB to provide secure and scalable services for task management, user authentication, and data analytics.

## ✨ Features

- **Authentication** - JWT-based authentication system
- **User Management** - Create and manage user accounts with different roles
- **Project API** - CRUD operations for projects with filtering and sorting
- **Task Management** - Create, update, and track tasks with status and priority
- **Team Collaboration** - Assign tasks to team members
- **File Uploads** - Support for file attachments with Cloudinary integration
- **Analytics** - Generate reports and dashboard statistics
- **Security** - Rate limiting, data validation, and secure password handling

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud storage for images
- **ExcelJS** - Report generation

## 🚀 Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:5173
   ADMIN_INVITE_TOKEN=your_admin_invite_token
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Start production server**
   ```bash
   npm start
   ```

## 📝 API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Users

- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Tasks

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PUT /api/tasks/:id/status` - Update task status
- `PUT /api/tasks/:id/checklist` - Update task checklist

### Reports

- `GET /api/reports/tasks` - Generate task reports

### Dashboard

- `GET /api/tasks/dashboard-data` - Get admin dashboard data
- `GET /api/tasks/user-dashboard-data` - Get user dashboard data

## 📂 Project Structure

```
backend/
├── config/             # Configuration files
│   ├── cloudinary.js   # Cloudinary configuration
│   └── db.js           # Database connection
├── controllers/        # Request handlers
├── middlewares/        # Custom middleware functions
├── models/             # MongoDB schema models
├── routes/             # API routes
└── server.js           # Entry point
```

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Rate limiting to prevent brute force attacks
- CORS configuration
- Input validation and sanitization

---
