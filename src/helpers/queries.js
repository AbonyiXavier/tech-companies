export default class Queries {
  static get createCompany() {
    return `INSERT INTO companies (name, location, founder, employees, website)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  }

  static get getAllCompanies() {
    return `SELECT * FROM companies`;
  }

  static get getSingleCompanies() {
    return `SELECT * FROM companies WHERE
     id = $1`;
  }

  static get updateCompanies() {
    return `UPDATE companies SET name = $1, location = $2, founder = $3, employees = $4, website = $5
     WHERE id = $6`;
  }

  static get deleteCompanies() {
    return `DELETE FROM companies WHERE
     id = $1`;
  }
}
