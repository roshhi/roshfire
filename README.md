## RoshFire

A modern firearm e-commerce store built using **React + Tailwind**, powered by a **Node.js + MongoDB backend**, with **Firebase Authentication** and **Firestore** for user cart management.

---

## Preview

<img width="3840" height="2486" alt="Screenshot 2025-11-19 at 6 07 37 AM" src="https://github.com/user-attachments/assets/7111a332-7fa0-40b3-9069-1f03ed0e497b" />

<img width="3840" height="2486" alt="Screenshot 2025-11-19 at 6 07 55 AM" src="https://github.com/user-attachments/assets/f8693ff3-4c58-4e15-9696-21075a6855a8" />

<img width="3840" height="2486" alt="Screenshot 2025-11-19 at 6 08 13 AM" src="https://github.com/user-attachments/assets/1f24bb1f-2b55-4e59-8bee-adb4358b8bb3" />

<img width="3840" height="2486" alt="Screenshot 2025-11-19 at 6 08 25 AM" src="https://github.com/user-attachments/assets/e73cbc09-3048-4e23-a90c-3e29b6eab076" />

<img width="3840" height="2486" alt="Screenshot 2025-11-19 at 6 09 50 AM (3)" src="https://github.com/user-attachments/assets/58a49b29-0505-40bf-bdc9-db681d424b00" />

<img width="3840" height="2486" alt="Screenshot 2025-11-19 at 6 10 20 AM" src="https://github.com/user-attachments/assets/2493a4a8-5e4b-4bc3-bf79-12c043d45537" />

<img width="3840" height="2486" alt="Screenshot 2025-11-19 at 6 10 33 AM" src="https://github.com/user-attachments/assets/a43b6402-375b-400e-8a3d-8eb6441a92b7" />

<img width="3840" height="2486" alt="Screenshot 2025-11-19 at 6 10 59 AM" src="https://github.com/user-attachments/assets/e17b8105-6b0f-483d-894b-24a1b3f2b4a0" />

<img width="3840" height="2486" alt="Screenshot 2025-11-19 at 6 11 28 AM" src="https://github.com/user-attachments/assets/5e220979-a37c-4214-932d-4b5320ab811e" />

---

## Tech Stack

### **Frontend**

* **React**
* **Tailwind CSS**
* **Framer Motion** 
* **Swiper.js**
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

## Contributing

Pull requests are welcome.
For major changes, open an issue first to discuss your proposal.

---

## Credits

Design inspired from https://dribbble.com/shots/23729899-Armaments-Online-Gun-Shop-Web-UI-Kit

---

## License

MIT License.

