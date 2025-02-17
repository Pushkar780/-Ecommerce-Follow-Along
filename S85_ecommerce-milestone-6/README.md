# S85_ecommerce

# E-Commerce Website - Milestone 6

## 📌 Overview
This is the **Milestone 6** update for the **E-Commerce Website** project. It includes enhanced features, bug fixes, and performance improvements. The project is built using **Node.js, Express, MongoDB, and React**.

## 🚀 Features Implemented
### 🛒 User Authentication
- User **sign-up, login, and logout** with password hashing using **bcrypt.js**.
- JWT-based **authentication and authorization**.

### 📦 Product Management
- **CRUD operations** (Create, Read, Update, Delete) for products.
- Image uploads using **Cloudinary**.
- Category and filtering support.

### 🛍️ Shopping Cart
- Add, remove, and update products in the cart.
- Persistent cart using local storage & backend.

### 💳 Checkout & Payments
- Integrated **Stripe Payment Gateway** for secure transactions.
- Order summary and confirmation system.

### 🏪 Admin Dashboard
- **Manage users, products, and orders**.
- Role-based access control for security.

## 🛠️ Technologies Used
- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT, bcrypt.js
- **Payment Integration**: Stripe API
- **Cloud Storage**: Cloudinary
- **Version Control**: Git & GitHub

## ⚙️ Installation Guide
### 1️⃣ Clone the repository
```sh
git clone https://github.com/MadhavGarg98/S85_ecommerce.git
cd S85_ecommerce
```
### 2️⃣ Install dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd ../frontend
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file inside `backend/config/` and add:
```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
STRIPE_SECRET=<your-stripe-key>
CLOUDINARY_URL=<your-cloudinary-url>
```

### 4️⃣ Run the Application
#### Backend
```sh
cd backend
npm run dev
```
#### Frontend
```sh
cd frontend
npm start
```

## 📄 API Endpoints
### User Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (Protected)

### Product Routes
- `GET /api/products` - Get all products
- `POST /api/products` - Add a new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

## 🛠 Future Enhancements
- Wishlist functionality
- Product reviews & ratings
- Email notifications for order updates

## 🤝 Contributing
1. Fork the repo
2. Create a new branch (`feature-branch`)
3. Commit changes
4. Push and create a pull request

## 📜 License
This project is licensed under the MIT License.

---

🎉 **Happy Coding!** 🚀

