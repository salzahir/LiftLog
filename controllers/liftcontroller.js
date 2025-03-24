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

postNewLift = async(req, res) => {
    
    const {
        name,
        reps,
        sets,
        weight,
        date,
    } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const lift = {
        name,
        reps,
        sets,
        weight,
        date,
    };

    try {
        console.log('Inserting lift:', lift);
        await db.insertLift(lift);
        res.redirect('/lifts');
    } catch(error) {
        console.error('Error inserting lift:', error);
    }
}

module.exports = {
    getHome,
    getLifts,
    getNewLift,
    postNewLift,
};