const express = require('express');
const path = require('path');
const data = require('./NinjaNames.json');
const cors = require('cors');
const e = require('express');

const app = express();

app.set('json spaces', 1);
app.use(cors())

app.use('/ninjify', (req, res, next) => {
    const filters = req.query;
    const filteredNinjas = data.filter(ninja =>{
        let isValid = true;
        for (key in filters){
            isValid = isValid && ninja[key] == filters[key];
        }
        return isValid;
    });
    if(filteredNinjas){
        res.send(filteredNinjas);
    }
});