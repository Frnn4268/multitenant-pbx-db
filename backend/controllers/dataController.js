const pool = require('../config/connectionMariaDB');

const getData = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query('SELECT * FROM cel');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
};

module.exports = { getData };
