import db from "../helpers/db";
import Queries from "../helpers/queries";

export default class companyController {
  static async addCompany(req, res) {
    try {
      const { name, location, founder, employees, website } = req.body;
      const args = [name, location, founder, employees, website];

      console.log("xavier", args);
      const { rows } = await db.Query(Queries.createCompany, args);
      console.log("salang", rows);
      if (rows) {
        return res.status(201).json({
          status: "success",
          message: "comapny added successfully",
          data: rows,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllCompany(req, res) {
    try {
      const { rows } = await db.Query(Queries.getAllCompanies);
      return res.status(200).json({
        message: "success",
        message: "View all companies",
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async getSingleCompany(req, res) {
    try {
      const { id } = req.params;
      const args = [id];
      const { rows } = await db.Query(Queries.getSingleCompanies, args);
      return res.status(200).json({
        message: "success",
        message: "View company",
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateCompany(req, res) {
    try {
      const { id } = req.params;
      const { name, location, founder, employees, website } = req.body;
      const args = [name, location, founder, employees, website, id];
      const { rowCount } = await db.Query(Queries.updateCompanies, args);
      if (rowCount === 1) {
        return res.status(200).json({
          status: "success",
          message: "Company updated successfully",
          data: rowCount,
        });
      } else {
        return res.status(404).json({
          status: "error",
          message: "oops! company not found",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteCompany(req, res) {
    try {
      const { id } = req.params;
      const args = [id];
      const { rowCount } = await db.Query(Queries.deleteCompanies, args);
      if (rowCount === 1) {
        return res.status(200).json({
          status: "success",
          message: "Company deleted successfully",
        });
      } else {
        return res.status(404).json({
          status: "error",
          message: "oops! company not found",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
