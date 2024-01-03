const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../cfg');
const { asyncHandler } = require('../middleware');

// global vars
const pool = mysql.createPool(dbConfig);

// Create Route
const expRouter = express.Router();

// GET /api/exps - get all expenses
expRouter.get(
   '/api/exp_all',
   asyncHandler(async (req, res) => {
      const sql = `
      SELECT expenses.id, expenses.cat_id AS catID, exp_cats.cat_name AS catName, expenses.amount, expenses.comment, expenses.date
      FROM expenses
      JOIN exp_cats ON expenses.cat_id=exp_cats.cat_id
      `;
      const [rows] = await pool.execute(sql);
      res.json(rows);
   })
);

// GET /api/exp/:id - get expense by ID
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

/// CREATE /api/exp/ - create new expense
expRouter.post(
   '/api/exp',
   asyncHandler(async (req, res) => {
      const { cat_id, comment, date, amount } = req.body;
      const insertSql = `
      INSERT INTO expenses (cat_id, comment, date, amount) 
      VALUES (?,?,?,?)`;
      const [insertResult] = await pool.execute(insertSql, [
         cat_id,
         comment,
         date,
         amount,
      ]);
      if (insertResult.affectedRows === 0) {
         throw new Error(`ERROR creating new expense`);
      }
      const idSql = 'SELECT LAST_INSERT_ID() as id';
      const [idResult] = await pool.execute(idSql);
      res.json({
         msg: `New Expense has been created with ID:`,
         id: idResult[0].id,
      });
   })
);

// UPDATE by ID
// PUT /api/exp/:id - edit expense by ID
expRouter.put(
   '/api/exp/:id',
   asyncHandler(async (req, res) => {
      const { cat_id, comment, date, amount } = req.body;
      const { id } = req.params;
      const sql = `
    UPDATE expenses 
    SET cat_id = ?, comment = ?, date = ?, amount = ?
    WHERE id = ?`;
      const [rows] = await pool.execute(sql, [
         cat_id,
         comment,
         date,
         amount,
         id,
      ]);
      if (rows.affectedRows === 0) {
         throw new Error(`ERROR updating expense with id ${id}`);
      }
      res.json({ msg: `Expense with id ${id} has been updated` });
   })
);

// DELETE /api/exp/:id - delete expense by ID
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
