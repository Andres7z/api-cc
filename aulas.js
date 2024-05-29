const mysql = require("mysql");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "AxentsJ19",
        database: "Qwaqsy",
    }
);

const getAulas=()=>{
    return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM aulas",(error,results)=>{
            if(error){
                return reject(error);

            }
            resolve(results);
        });
    });

};
module.exports={
    getAulas,
};

