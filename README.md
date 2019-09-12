# Adonis API application

The application imports data from the "planilha.xlsx" worksheet, located at the root of the project, into a database of your choice.

## Setup

The only dependencies of the framework are Node.js and npm.

Ensure your versions of those tools match the following criteria:

Node.js >= 8.0.0

npm >= 3.0.0

Install adonisjs cli

`npm i -g @adonisjs/cli` or `yarn global @adonisjs/cli`

Within the project directory run `npm install` or `yarn`.

### Migrations

Create an .env file, such as the example in the project root, and set up the database connection.

The connection with postgresSQL is already between dependencies, for other databases go to: config/database.js and check the necessary configuration.

Remembering you started a db container you chose

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Routes

GET `/create` - Upload data to database
<br />
GET `/infos` - Access information saved in database

The Route returns paginated, 20 lines per page. To access them just send the query with the desired page.

`?page=2` for example
