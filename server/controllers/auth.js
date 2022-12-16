import { db } from "../config/db.js";
import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";

// register
export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const q =
      "INSERT INTO users(name, email, password, address, isBusinessPartner) VALUES (?)";
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.address,
      req.body.isBusinessPartner,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

// login
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    // const sessionToken = uuidv4();
    // const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const token = jwt.sign(req.body.email, "jwtkey");
    const { password, ...other } = data[0];

    let options = {
      maxAge: 1000 * 60 * 15, // would expire after 15 minutes
      httpOnly: true, // The cookie only accessible by the web server
    };

    // Set cookie
    res.cookie(`Cookie token name`, `encrypted cookie string Value`);
    res.send("Cookie have been saved successfully");
  });
  console.dir(req.cookies);
};
export const logout = (req, res) => {};
