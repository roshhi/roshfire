import mongoose from "mongoose";

// Defining schema that how my each document will look like in the mongoDB i.e.
// {
//     "title": "AK-47",
//     "price": "2500",
//     "img": "https://pakarms.co/wp-content/uploads/2024/11/IMG_6442-300x300.jpeg",
//     "pagecats": ["Assault Rifles", "Military"]
// }

const WeaponSchema = new mongoose.Schema({
    title: String,
    price: String,
    img: String,
    pagecats: Array
});

// Defining model named Weapon which represents my mongoDb collection named weapons and it 
// provides method to interact with my mongoDb database
// For example: Create a new weapon

// const newWeapon = new Weapon({
//     title: "Glock 19",
//     price: "800",
//     img: "glock.jpg",
//     pagecats: ["pistol"]
// });

export default mongoose.model("Weapon", WeaponSchema);
