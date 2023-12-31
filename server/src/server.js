require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const expRouter = require('./routes/expRoutes');
const catsRouter = require('./routes/catsRoutes');
const authRouter = require('./routes/authRoutes');

const app = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
   res.json('Expenses Server');
});

// Expenses Routes
app.use('/', expRouter);
app.use('/', catsRouter);
app.use('/', authRouter);

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});
