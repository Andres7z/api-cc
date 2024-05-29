const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AxentsJ19",
    database: "Qwaqsy",
});

const getMateriasBySemestre = (idCarrera, semestre) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT m.nombre 
            FROM materias m
            JOIN carreras c ON m.id_carrera = c.id
            WHERE c.id = ? AND m.semestre = ?;
        `;
        connection.query(query, [idCarrera, semestre], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};
const getMaterias = (idCarrera) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT materias.nombre 
            FROM materias WHERE materias.id_carrera= ?;
        `;
        connection.query(query, [idCarrera], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

module.exports = {
    getMateriasBySemestre,
    getMaterias
};
