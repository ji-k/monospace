# monospace

[Live](https://mono-space.herokuapp.com/)

![log-in](https://github.com/ji-k/monospace/blob/main/frontend/public/assets/images/ss1.png)

![index](https://github.com/ji-k/monospace/blob/main/frontend/public/assets/images/ss2.png)

![edit](https://github.com/ji-k/monospace/blob/main/frontend/public/assets/images/ss3.png)

## Target Features
* User authentication: users can sign up and sign in
* Posts: users can create posts
* Comments: users can comment on posts


## Technologies Used
### Backend
* Express
* Sequelize
* PostgresSQL
* JavaScript

### Frontend
* React
* Redux
* JavaScript
* CSS3
* HTML5

### Hosting
* Heroku

## How To Launch
### Backend
1. `cd` into the repository
2. `cd` into the `backend` directory
3. `npm install` the dependencies
4. Make a `.env` file based on the `.env.example` file given
   * Recommendation to generate a strong secret: create a random string using openssl (a library that should be installed in your Ubuntu/MacOS shell already). Run `openssl rand -base64 10` to generate a random JWT secret.
5. Create a user based on the user defined in the `.env` file by running this command: `psql -c "CREATE USER monospace_app WITH PASSWORD '<<user_password>>' CREATEDB;"`
6. Create a database by running this command: `npx dotenv sequelize db:create`
7. Migrate to apply the migrations to the database by running this command: `npx dotenv sequelize db:migrate`
8. Seed data to the database by running this command: `npx dotenv sequelize db:seed:all`

### Frontend
1. `cd` into the `frontend` directory
2. `npm install` the dependencies
