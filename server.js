require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const companyRoutes = require('./routes/companyRoutes');
const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/companies', companyRoutes);

// Error handling middleware
app.use(errorHandler);

app.use('/api/companies', companyRoutes);
app.use('/api/users', userRoutes);

app.get('/',(req,res)=>{
    res.send("Hello Mohit Ji!");
})

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
