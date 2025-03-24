const {Client} = require('pg');
require('dotenv').config({ path: '../.env' });
const path = require('path');
const fs = require('fs');

function checkEnv(url) {
    if (!url) {
        console.error('Missing DATABASE_URL in .env file');
        process.exit(1);
    }
}

async function seedDatabase() {

    checkEnv(process.env.DATABASE_URL);

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        console.log('Connecting to database');
        const SQL = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
        await client.connect();
        await client.query(SQL);
        console.log('Database seeded successfully');
    } catch(error) {
        console.error('Error connecting to database', error);
    } finally {
        await client.end();
        console.log('Database disconnected');
    }
}

seedDatabase().catch(console.error);