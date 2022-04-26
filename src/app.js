const express = require ('express');
const cors = require('cors');
const router = require('./routes/routesConfig');
const app = express();
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))

//coors settings
app.use(( req, res, next ) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if ( req.method === 'OPTIONS' ) {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
    }
    next();
   });

//routes
router(app);

module.exports = app ;