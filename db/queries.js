const pool = require('./pool');

async function getLifts() {

    try {
        console.log('Getting lifts');
        const lifts = await pool.query('SELECT * FROM workouts');
        console.log('Got lifts');
        console.log(lifts.rows);
        return lifts.rows;
    } catch (error) {
        console.error('Error getting lifts', error);
        return [];
    }
}

async function insertLift(lift) {
    try {
        console.log("Inserting Lift")
        await pool.query(`
            INSERT INTO workouts (id, name, sets, reps, weight, date)
            VALUES ($1, $2, $3, $4, $5, $6)
        `, [lift.id, lift.name, lift.sets, lift.reps, lift.weight, lift.date]);
    } catch (error) {
        console.error('Error inserting lift', error);
    }
}


module.exports = {
    getLifts,
    // insertLift
};