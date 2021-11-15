const { Pool } = require("pg");
const pool = new Pool({
  user: "root",
  host: "localhost",
  database: "movies",
  password: "root",
  port: 5432,
});

const getAllHorrors = (request, response) => {
  pool.query("SELECT * FROM horrors;", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getHorrorbyId = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM horrors WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const posthorror = (request, response) => {
  const { name, rating } = request.body;

  pool.query(
    "INSERT INTO horrors (name,rating) VALUES ($1, $2);",
    [name, rating],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`${name} added `);
    }
  );
};

const updateHorror = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, rating } = request.body;

  pool.query(
    "UPDATE horrors SET name = $1, rating = $2 WHERE id = $3",
    [name, rating, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

module.exports = {
  getAllHorrors,
  getHorrorbyId,
  posthorror,
  updateHorror,
};
