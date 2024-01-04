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
      const hashPsw = bcrypt.hashSync(password, 10);

      const sql = 'INSERT INTO users (email, password) VALUES (?,?)';

      const [rows] = await pool.execute(sql, [email, hashPsw]);
      res.json(rows);
   })
);

module.exports = authRouter;
