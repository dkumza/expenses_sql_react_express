const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');

const { asyncHandler } = require('../middleware');
const { dbConfig } = require('../cfg');
const pool = mysql.createPool(dbConfig);

const authRouter = express.Router();

// CREATE NEW USER
authRouter.post(
   '/api/auth/reg',
   asyncHandler(async (req, res) => {
      const { email, password } = req.body;
      console.log(req.body);
      const hashPsw = bcrypt.hashSync(password, 10);

      const sql = 'INSERT INTO users (email, password) VALUES (?,?)';

      const [rows] = await pool.execute(sql, [email, hashPsw]);
      res.json(rows);
   })
);

// LOG IN Existing user
authRouter.post(
   '/api/auth/log',
   asyncHandler(async (req, res) => {
      const { email, password: plainPsw } = req.body;
      const sql = 'SELECT * FROM `users` WHERE `email`= ?';
      const [usersArray] = await pool.execute(sql, [email]);

      // check if email matches, if no return
      if (usersArray.length === 0)
         return res.status(400).json({ msg: 'Email or password do not match' });

      // if found - check if password matches
      const foundUser = usersArray[0];
      if (!bcrypt.compareSync(plainPsw, foundUser.password))
         return res.status(400).json({ msg: 'Email or password do not match' });

      // if everything matches (email and password from DB)
      res.json({ msg: 'Login success' });
   })
);

module.exports = authRouter;
