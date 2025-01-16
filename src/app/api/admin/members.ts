import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// Konfigurasi koneksi database
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bosstongym',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Koneksi ke database
        const connection = await mysql.createConnection(dbConfig);

        // Query untuk mendapatkan data members
        const [rows] = await connection.execute('SELECT * FROM members');

        // Mengirimkan data sebagai JSON
        res.status(200).json(rows);

        // Tutup koneksi
        await connection.end();
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ message: 'Failed to fetch members' });
    }
}
