const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../cfg');
const { asyncHandler } = require('../middleware');

// global vars
const pool = mysql.createPool(dbConfig);

// Create Route
const expRouter = express.Router();

// GET /api/exps - get all expenses
// SELECT * FROM expenses
expRouter.get(
   '/api/exp_all',
   asyncHandler(async (req, res) => {
      const [rows] = await pool.execute('SELECT * FROM expenses');
      res.json(rows);
   })
);

// GET /api/exp/:id - get expense by ID
// SELECT * FROM `expenses`
// WHERE id=id;
expRouter.get(
   '/api/exp/:id',
   asyncHandler(async (req, res) => {
      const expID = req.params.id;
      const sql = 'SELECT * FROM expenses WHERE id=?';
      const [rows] = await pool.execute(sql, [expID]);
      if (rows.length === 0) {
         throw new Error(`Post by ID === ${expID} not found`);
      }
      res.json(...rows);
   })
);

// CREATE /api/exp/ - create ne expense
// `INSERT INTO expenses(cat_id, comment, date, amount) VALUES (?,?,?,?)`
expRouter.post(
   '/api/exp',
   asyncHandler(async (req, res) => {
      const { cat_id, comment, date, amount } = req.body;
      const sql = `
      INSERT INTO expenses (cat_id, comment, date, amount) 
      VALUES (?,?,?,?)`;
      const [rows] = await pool.execute(sql, [cat_id, comment, date, amount]);
      if (rows.affectedRows === 0) {
         throw new Error(`ERROR creating new expense`);
      }
      res.json({ msg: `New Expense has been created` });
   })
);

// DELETE /api/exp/:id - delete expense by ID
// DELETE FROM `expenses`
// WHERE id=id;
expRouter.delete(
   '/api/exp/:id',
   asyncHandler(async (req, res) => {
      const expID = req.params.id;
      const sql = 'DELETE FROM expenses WHERE id=?';
      const [rows] = await pool.execute(sql, [expID]);
      if (rows.affectedRows === 0) {
         throw new Error(`Post by ID === ${expID} not found, check ID.`);
      }
      res.json({ msg: `Expense by ID === ${expID} has been deleted` });
   })
);

module.exports = expRouter;
