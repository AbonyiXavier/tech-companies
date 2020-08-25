<span>
[![Build Status](https://travis-ci.org/AbonyiXavier/tech-companies.svg?branch=Develop)](https://travis-ci.org/AbonyiXavier/tech-companies)
</span>
<span>
[![Coverage Status](https://coveralls.io/repos/github/AbonyiXavier/tech-companies/badge.svg?branch=Develop)](https://coveralls.io/github/AbonyiXavier/tech-companies?branch=Develop)
</span>

# Tech-companies Backend

Tech-companies is a CRUD App that list the top tech companies in Nigeria. It is higly flexible because it provides users with opportunity to:

- Add companies
- Get all companies
- Get single company
- Update company
- Delete a company

# Getting Started

- To obtain a copy of this app download or clone the repository at this [url](https://github.com/AbonyiXavier/tech-companies)
- Create a .env file and add the necessary variables to your file, follow the .env-sample.
- npm run migrations to create a database table
- npm run test to run unit tests

# Prerequisites

You must have

- NodeJs Installed
- A browser Installed
- A REST API client(like POSTMAN) Installed
- An Internet connection to download the dependencies.

## Installing locally

- (If the repository wasn't cloned)Extract the contents of the downloaded zip file into any suitable location on the computer
- In the command prompt, cd to the root of the directory you extracted the app into
- Run 'npm install' to install all dependencies
- Run 'npm start' to start the application
- In a browser address bar navigate to 'http://localhost:4000'

## Using Tech-companies through its Gui locally

- Input http://localhost:4000 in the address bar.
- Enter appropriate information

## Using Tech-companies through a restful client (hosted on heroku)

- Open any restful client application initially installed
- Select the appropriate http method. Either GET, POST, DELETE, PUT

# Sample format to fully test this project

1. Add company: POST: https://tech-company.herokuapp.com/api/tech/company

{

- "name": "Xavier-Tech",
- "location": "Abuja",
- "founder": "francis Xavier",
- "employees": 200,
- "website": "xavier-tech.com"
  }

2. Get all companies: GET: https://tech-company.herokuapp.com/api/tech/company

3. Get single companies: GET: https://tech-company.herokuapp.com/api/tech/company/1

4. Update company: PATCH: https://tech-company.herokuapp.com/api/tech/company/1

{

- "name": "Xavier-Tech",
- "location": "Abuja",
- "founder": "francis Xavier",
- "employees": 230,
- "website": "xavier-tech.com.ng"
  }

3. Delete single companies: DELETE: https://tech-company.herokuapp.com/api/tech/company/1

# Running Tests

If all the dependencies installed correctly run 'npm test' in the root of the installation folder in the command prompt/Terminal. Each test tests each aforementioned operation individually.

## Technologies used

Node.js/Express.js
Postgres
Travis CI/ Code Climate
Git
Heroku

## Tested With

- Mocha
- Chai

## Author

- Francis Xavier Abonyi

## Acknowledgment

- Devcareer
