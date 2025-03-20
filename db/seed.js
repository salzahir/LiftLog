const {Client} = require('pg');
require('dotenv').config({ path: '../.env' });
const path = require('path');
const fs = require('fs');

async function seedDatabase() {

    if (!process.env.DATABASE_URL) {
        console.error('Missing DATABASE_URL in .env file');
        process.exit(1);
    }

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        console.log('Connecting to database');
        const SQL = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf-8');
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