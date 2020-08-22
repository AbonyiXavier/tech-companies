import dotenv from "dotenv";
import pool from "./config";

dotenv.config();
async function createSchema() {
  const dropTable = `DROP TABLE IF EXISTS companies`;
  const createCompanyTable = `CREATE TABLE IF NOT EXISTS companies (
    id BIGSERIAL PRIMARY KEY UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL,
    location VARCHAR(200) NOT NULL,
    founder VARCHAR(200) NOT NULL,
    employees INTEGER NOT NULL,
    website VARCHAR(200) )`;

  const client = await pool.connect();
  try {
    await client.query(dropTable);
    await client.query(createCompanyTable);
  } catch (e) {
    console.log(e.stack);
  } finally {
    client.release();
  }
  return false;
}
createSchema();
