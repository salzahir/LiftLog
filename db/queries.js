const pool = require('./pool');

async function getLifts() {

    try {
        console.log('Getting lifts');
        const lifts = await pool.query('SELECT * FROM workouts');
        console.log('Got lifts');
        return lifts.rows;
    } catch (error) {
        console.error('Error getting lifts', error);
        return [];
    }
}

module.exports = {
    getLifts,
};