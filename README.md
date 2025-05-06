# 🚚 Express Cargo API

A RESTful API built with **Express.js** and **MongoDB** for managing clients, orders, operations, and admin users in a cargo delivery system. This project follows a clean MVC architecture, service layer separation, and includes validation and error handling for robust backend operations.

---

## 📦 Features

- CRUD operations for:
  - Clients
  - Orders
  - Operations
  - Admins
  - Statuses & Currency Types
- Validation using Joi
- Global error handler middleware
- RESTful routing and service abstraction
- MongoDB with Mongoose
- Modular and scalable folder structure
- Pagination support

---

## 📁 Folder Structure

express_cargo/
│
├── config/ # Database configuration
├── controllers/ # Request logic handlers
├── middlewares/ # Validation and error-handling middleware
├── models/ # Mongoose schemas
├── routers/ # Express route definitions
├── services/ # Business logic and DB access
├── validations/ # Joi schemas for validation
├── app.js # Entry point
├── package.json
└── .env # Environment variables



---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/express_cargo.git
cd express_cargo


npm install


.env
PORT=3000
MONGO_URI=mongodb://localhost:27017/express_cargo

4. Start the Server
In development mode with nodemon:

npm run dev

Or in production mode:
npm start
