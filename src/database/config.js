import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pg;
let connectionString = process.env.HEROKU_URL;
let ssl = false;

if (process.env.NODE_ENV === "test") {
  connectionString = process.env.HEROKU_URL;
} else {
  connectionString = process.env.HEROKU_URL;
}

const pool = new Pool({
  connectionString,
  ssl,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// const pool = new Pool({
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDATABASE,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   ssl: false,
//   idleTimeoutMillis: 3600000,
//   connectionTimeoutMillis: 3600000,
// });
pool.on("connect", () => {
  console.log(`Connected to Database on  ${connectionString}`);
});
pool.on("error", () => {
  console.log(`Error occured while connecting to ${connectionString}`);
});

export default pool;
