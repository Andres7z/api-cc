const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AxentsJ19",
    database: "Qwaqsy",
});

const getSemestres = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM semestres', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = {
    getSemestres,
};
