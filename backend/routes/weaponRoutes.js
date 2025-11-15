import express from "express";
import Weapon from "../models/Weapon.js"; //Importing our model to perform operation on it
                                         // like fetching data from mongo collection
const router = express.Router();
// GET all products
router.get("/", async (req, res) => {
  try {
    const weapons = await Weapon.find(); //Weapon.find() fetches all documents from the weapons collection.
    res.json(weapons); //Sends data to client in JSON format
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
