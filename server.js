const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// const { filterByQuery, findById, createNewAnimal, validateAnimal }


const PORT = process.env.PORT || 3001;
const app = express();

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

//middleware to allow server access to all files in public 
app.use(express.static('public'));


//parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);




app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
