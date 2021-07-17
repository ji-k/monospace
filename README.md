# monospace

[Live](https://mono-space.herokuapp.com/)

[screenshot1]

[screenshot2]

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
`npm install`

Populate .env

Create database username and database

`npx dotenv sequelize db:create`

`npx dotenv sequelize db:migrate`

`npx dotenv sequelize db:seed:all`

### Frontend
`npm install`
