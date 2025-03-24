const {body, validationResult} = require('express-validator');
const db = require('../db/queries');

getHome = (req, res) => {res.render('index');}

getNewLift = (req, res) => {res.render('newLift');}

async function getLifts(req, res) {  
    try {
        const lifts = await db.getLifts(); 
        res.render('lifts', {lifts});
    } catch (error) {
        res.status(500).send('Error getting lifts');
    }
};

function handleErrors(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return true;
    }
    return false;
}

async function postNewLift(req, res) {

    if(handleErrors(req, res)) {return;}

    try {
        await db.insertLift(req.body);
        res.redirect('/lifts');
    } catch (error) {
        console.error('Error inserting lift:', error);
    }
};

async function getUpdateLift(req, res) {
    const lift = await db.getLift(req.params.id);
    res.render('updateLift', {lift});
}

async function postUpdateLift (req, res) {
    const lift = await db.getLift(req.params.id);

    if(handleErrors(req, res)) {return;}

    const updatedLift = {
        id: req.params.id, 
        ...req.body
    }

    try {
        await db.updateLift(updatedLift);
        const updatedLiftFromDB = await db.getLift(req.params.id);
        res.redirect('/lifts');
    } catch(error) {
        console.error('Error updating lift:', error);
    }
}

module.exports = {
    getHome,
    getLifts,
    getNewLift,
    postNewLift,
    getUpdateLift,
    postUpdateLift
};