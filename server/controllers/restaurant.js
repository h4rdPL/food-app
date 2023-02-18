import { db } from "../config/db.js";
import express from "express";
import multer from "multer";
import url from "url";
// const storage = multer.memoryStorage();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
  },
});
const upload = multer({
  storage,
});
export const addNewRestaurant = (req, res) => {
  const data = req.body;

  console.log(data.restaurantPhoto);
  const values = [
    data.currentUser.id,
    data.restaurantName,
    data.restaurantPhoto,
    data.dishesType,
    data.restaurantPlace,
  ];
  console.log(values);
  const q =
    "INSERT INTO restaurants( user_id, restaurant_name, restaurant_image, dishes_type,address) VALUES (?)";
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
export const selectFilteredRestaurant = (req, res) => {
  const q = "SELECT * FROM restaurants";
  db.query(db, q, (err, data) => {
    if (err) return res.status(500).json(err);
    returnres.status(200).json(data);
  });
};

export const getAllRestaurant = (req, res) => {
  let city;
  if (req.method === "POST") {
    city = req.body["visitorsPlace"];
  } else if (req.method === "GET") {
    city = req.query.visitorsPlace;
  }
  console.log(city);
  // const q = `SELECT * FROM restaurants WHERE address LIKE '%${city}%'`;
  const q = "SELECT * FROM restaurants";
  console.log(q);
  db.query(q, [city], (err, data) => {
    if (err) return res.status(500).json(err);
    console.log(data);

    return res.status(200).json(data);
  });
};
export const addNewDishes = (req, res) => {
  const dish = req.body;
  const q1 =
    "SELECT id, restaurant_name FROM restaurants WHERE restaurant_name = ?";
  db.query(q1, [dish.restaurantName], (err, data) => {
    const values = [
      dish.dishName,
      dish.dishPrice,
      dish.dishPhoto,
      dish.restaurantName,
      data[0].id,
    ];
    if (data.length > 0) {
      const q =
        "INSERT INTO dishes(dish_name, dish_price, dish_photo, dish_restaurant, retaurant_id) VALUES (?)";
      db.query(q, [values], (err, data) => {
        if (err) {
          return res.status(500).json(err);
        } else {
          return res.status(200).json(data);
        }
      });
    } else {
      return res.status(500).json(err);
    }
  });
};

export const getDishes = (req, res) => {
  const requestUrl = req.url;
  const parsedUrl = url.parse(requestUrl, true);
  const pathname = parsedUrl.query.id;
  const value = [pathname];
  const q = "SELECT * FROM dishes WHERE retaurant_id = ?";
  db.query(q, [value], (err, data) => {
    if (err) res.status(500).json(err);
    console.log(data);
    return res.status(200).json(data);
  });
};

export const addQuantity = (req, res) => {
  const dish = req.body;
  const values = [dish.quantity, dish.id];
  const q1 = "INSERT INTO dish_quantity (dish_id, dish_counter) VALUES (?)";
  db.query(q1, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) {
      const q = "UPDATE dish_quantity SET dish_counter = ? WHERE id = ?";
      db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Zakutalizowano poprawnie!");
      });
    }
    return res.status(200).json(`dodano: ${data}`);
  });
};
