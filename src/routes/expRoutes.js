const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../cfg');
const { asyncHandler } = require('../middleware');

// global vars
const pool = mysql.createPool(dbConfig);

// Create Route
const expRouter = express.Router();

//GET /api/exps - get all expenses
//SELECT * FROM expenses
expRouter.get(
   '/api/exp_all',
   asyncHandler(async (req, res) => {
      const [rows] = await pool.execute('SELECT * FROM expenses');
      res.json(rows);
   })
);

// GET /api/exp/:id - get expense by ID
// SELECT * FROM `expenses`
// WHERE id=postID;
expRouter.get(
   '/api/exp/:id',
   asyncHandler(async (req, res) => {
      const expID = req.params.id;
      //   console.log(expID);
      const sql = 'SELECT * FROM expenses WHERE id=?';
      const [rows] = await pool.execute(sql, [expID]);
      if (rows.length === 0) {
         throw new Error(`Post by ID === ${expID} not found`);
      }
      res.json(...rows);
   })
);

module.exports = expRouter;
