const {body, validationResult} = require('express-validator');
const db = require('../db/queries');

getHome = (req, res) => {
    res.render('index');
}

getLifts = async (req, res) => {  
    try {
        const lifts = await db.getLifts(); 
        res.render('lifts', {lifts});
    } catch (error) {
        console.error('Error getting lifts:', error);
        res.status(500).send('Error getting lifts');
    }
};

getNewLift = (req, res) => {
    res.render('newLift');
}

// postNewLift = async(req, res) => {

// }


module.exports = {
    getHome,
    getLifts,
    getNewLift,
};