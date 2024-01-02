const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../cfg');
const { asyncHandler } = require('../middleware');

// global vars
const pool = mysql.createPool(dbConfig);

// Create Route
const catsRouter = express.Router();

// GET /api/cats - get all expenses categories
catsRouter.get(
   '/api/cats',
   asyncHandler(async (req, res) => {
      const sql = `SELECT * FROM exp_cats`;
      const [rows] = await pool.execute(sql);
      res.json(rows);
   })
);

module.exports = catsRouter;
