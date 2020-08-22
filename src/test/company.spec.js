import chai from "chai";
import chaiHttp from "chai-http";
import testData from "../fixtures/fixtures";
import server from "../server";

const { expect } = chai;
chai.use(chaiHttp);
const url = "/api/tech";

describe("Test for company endpoints", () => {
  describe("Add Company Test", async () => {
    it("should add company succesfully", async () => {
      const res = await chai
        .request(server)
        .post(`${url}/company`)
        .send(testData.addCompany());
      expect(res.status).to.be.equal(201);
    });
  });

  describe("Get all Company Test", async () => {
    it("should return all companies succesfully", async () => {
      const res = await chai.request(server).get(`${url}/company`);
      expect(res.status).to.be.equal(200);
      expect(res.body).to.have.property("message");
    });
  });

  describe("Get single Company Test", async () => {
    it("should return a company succesfully", async () => {
      const res = await chai.request(server).get(`${url}/company/1`);
      expect(res.status).to.be.equal(200);
      expect(res.body).to.have.property("message");
    });
  });

  describe("Update Company Test", async () => {
    it("should update company fields succesfully", async () => {
      const res = await chai
        .request(server)
        .patch(`${url}/company/1`)
        .send(testData.updateCompany());
      expect(res.status).to.be.equal(200);
      expect(res.body).to.have.property("message");
    });

    it("should return 400 error if company not found", async () => {
      const res = await chai
        .request(server)
        .patch(`${url}/company/390`)
        .send(testData.updateCompany());
      expect(res.status).to.be.equal(404);
      expect(res.body).to.have.property("message");
    });
  });

  describe("Delete Company Test", async () => {
    it("should delete all company succesfully", async () => {
      const res = await chai.request(server).delete(`${url}/company/1`);
      expect(res.status).to.be.equal(200);
      expect(res.body).to.have.property("message");
    });

    it("should return 404 error if company not found", async () => {
      const res = await chai.request(server).delete(`${url}/company/8888`);
      expect(res.status).to.be.equal(404);
      expect(res.body).to.have.property("message");
    });
  });
});
