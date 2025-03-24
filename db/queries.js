const pool = require('./pool');

async function getLifts() {

    try {
        const lifts = await pool.query('SELECT * FROM workouts');
        return lifts.rows;
    } catch (error) {
        console.error('Error getting lifts', error);
        return [];
    }
}

async function insertLift(lift) {
    try {
        await pool.query(`
            INSERT INTO workouts (name, reps, sets, weight, date)
            VALUES ($1, $2, $3, $4, $5)
        `, [lift.name, lift.reps, lift.sets,  lift.weight, lift.date]);
    } catch (error) {
        console.error('Error inserting lift', error);
    }
}

async function getLift(id) {
    try {
        const lift = await pool.query('SELECT * FROM workouts WHERE id = $1', [id]);

        console.log('Lift date');
        console.log(lift.rows[0].date);
        if (lift.date) {
            lift.date = lift.date.toISOString().split('T')[0];
        }

        return lift.rows[0];
    } catch (error) {
        console.error('Error getting lift', error);
        return [];
    }
}

async function updateLift(lift) {
    try {
        await pool.query(`
            UPDATE workouts
            SET name = $1, reps = $2, sets = $3, weight = $4, date = $5
            WHERE id = $6
        `, [lift.name, lift.reps, lift.sets, lift.weight, lift.date, lift.id]);
    } catch (error) {
        console.error('Error updating lift', error);
    }
}

async function deleteLift(id) {
    try {
        await pool.query('DELETE FROM workouts WHERE id = $1', [id]);
    } catch (error) {
        console.error('Error deleting lift', error);
    }
}

module.exports = {
    getLifts,
    insertLift,
    getLift, 
    updateLift,
    deleteLift
};