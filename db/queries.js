const pool = require('./pool');

async function getLifts() {

    try {
        const lifts = await pool.query('SELECT * FROM lifts');
        return lifts.rows;
    } catch (error) {
        console.error('Error getting lifts', error);
        return [];
    }
}