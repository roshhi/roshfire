## RoshFire

A modern firearm e-commerce store built using **React + Tailwind**, powered by a **Node.js + MongoDB backend**, with **Firebase Authentication** and **Firestore** for user cart management.

---

## Tech Stack

### **Frontend**

* **React**
* **Tailwind CSS**
* **Framer Motion** 
* **Swiper.js / Slider.js**
* **Custom React Hooks**

### **Backend**

* **Node.js + Express**
* **MongoDB Atlas (Cloud Database)**
* **Environment Variables (.env)**

### **Authentication & User Data**

* **Firebase Authentication**
* **Firestore Database** (user carts, cart items, etc.)

---

## Features

### **Frontend**

* Beautiful & responsive UI (built with Tailwind)
* Weapons shop with:

  * Image, price, brand, details
  * Add-to-cart functionality
* Animated components using Framer Motion
* Custom testimonial slider (Slider.js)
  

### **Authentication**

* Firebase Email/Password login
* Protected user cart
* Auto-fetch user cart on login
* Realtime cart updates

### **Cart System (Firestore)**

* Add item
* Remove item
* Increase quantity
* Decrease quantity
* Cart stored in:

  ```
  users/{userId}/cartItems/{itemId}
  ```

### **Backend API**

* Express routes for weapon data
* MongoDB Atlas storage
* Fetch all weapons
* CORS enabled for frontend communication

---

## 📁 Folder Structure

```
/frontend
  /src
    /components
    /hooks
    /pages
    App.jsx
    main.jsx

/backend
  server.js
  /models
  /routes
  .env
```

---

## What I Learned

### **React Concepts**

* Custom Hooks (`useCart`)
* `useEffect` for API calls & Firebase listeners
* `useState` for UI state handling
* `useRef` for slider and animations
* Component-based architecture
* Prop drilling + state lifting

### **Animations**

* Framer Motion:

  * stagger animations
  * fade-in
  * slide-up
  * spring transitions

### **Backend + Database**

* Connecting React frontend to backend
* Storing & fetching data from MongoDB Cloud
* Structuring schemas & routes

### **Firebase**

* Authentication system
* Firestore cart storage
* Real-time syncing

### **Other**

* Responsive UI with Tailwind
* Integrating external libraries (Swiper/Slider.js)

---

## Screenshots

(Add screenshots of your UI, product cards, animation, slider, cart, etc.)

---

## Contributing

Pull requests are welcome.
For major changes, open an issue first to discuss your proposal.

---

## 📄 License

MIT License.

