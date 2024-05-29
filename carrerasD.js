const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AxentsJ19",
    database: "Qwaqsy",
});

const getCarreras = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM carreras";
        connection.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

module.exports = {
    getCarreras,
};
