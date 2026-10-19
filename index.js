import express from 'express';
import pg from 'pg';

const app = express();
const port = 3000;
const { Pool } = pg;

// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Konfigurasi koneksi PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mahasiswa',
  password: '1995',
  port: 5432,
});

