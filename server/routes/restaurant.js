import express from "express";
import {
  addNewRestaurant,
  getAllRestaurant,
  addNewDishes,
  getDishes,
  addQuantity,
} from "../controllers/restaurant.js";
const router = express.Router();
router.post("/add", addNewRestaurant);
// router.post("/restaurantList", selectFilteredRestaurant);
router.post("/allRestaurants", getAllRestaurant);
router.get("/allRestaurants", getAllRestaurant);
router.post("/addDishes", addNewDishes);
router.get("/getDishes", getDishes);
router.post("/getDishes", getDishes);
router.post("/addQuantity", addQuantity);
export default router;
