# 🍅 Tomato Food Delivery App

A modern, full-stack food delivery application built with the MERN stack (MongoDB, Express, React, Node.js).

![JavaScript](https://img.shields.io/badge/JavaScript-95.3%25-yellow)
![HTML](https://img.shields.io/badge/HTML-4.7%25-orange)
![License](https://img.shields.io/badge/License-MIT-blue)
![Electron](https://img.shields.io/badge/Built%20with-Electron-47848F)

## ✨ Features

- 🍔 Browse restaurant menus and items
- 🛒 Add items to cart and manage quantities
- 📦 Place and track food delivery orders
- 👤 User authentication and profiles
- 🎨 User-friendly, responsive interface
- ⚙️ Admin panel for managing restaurants and orders

## 🛠️ Tech Stack

- **Frontend**: React + Vite, JavaScript, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JustChillinBro92/Tomato-Food-Delivery-App.git
cd Tomato-Food-Delivery-App
```

### 2. Install Dependencies

Install dependencies for both frontend and backend:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install admin panel dependencies (if applicable)
cd ../admin
npm install
```

### 3. Environment Setup

Create a `.env` file in the backend root directory with your MongoDB connection string and other necessary configurations:

```env
MONGODB_URI=mongodb://localhost:27017/tomato-delivery
PORT=4000
# Add other environment variables as needed
```

### 4. Run the Application

#### Option A: Run Frontend and Backend Separately

**Terminal 1 - Backend:**
```bash
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 3 (Optional) - Admin Panel:**
```bash
cd admin
npm run dev
```

The frontend will typically be available at `http://localhost:5173` and the backend at `http://localhost:4000`.

## 📁 Project Structure

```
Tomato-Food-Delivery-App/
├── backend files and configuration
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## 📖 Usage

1. Start the backend and frontend servers using the commands above
2. Open your browser and navigate to the frontend URL (usually `http://localhost:5173`)
3. Browse restaurants and food items
4. Add items to your cart
5. Proceed to checkout and place an order
6. Track your delivery status

## 🔧 Available Scripts

### Backend
- `npm start` - Start the backend server

### Frontend
- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally

### Admin Panel
- `npm run dev` - Start the admin panel development server
- `npm run build` - Build the admin panel for production

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Contact & Support

For questions, suggestions, or issues, feel free to:
- Open an [issue](https://github.com/JustChillinBro92/Tomato-Food-Delivery-App/issues)
- Reach out directly

---

Happy coding! 🚀
