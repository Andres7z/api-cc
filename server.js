const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const carrerasD = require("./carrerasD");
const materias = require("./materias");
const aulas = require("./aulas");
const semestres = require('./semestres');


const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use("/api", router);


app.get("/", (_request, response) => {
  response.send("nos conectamos con exito");
});


router.route("/carreras").get((_request, response) => {
  carrerasD.getCarreras().then((resultset) => {
    response.json(resultset);
  });
});

router.route("/aulas").get((_request, response) => {
  aulas.getAulas().then((resultset) => {
    response.json(resultset);
  }).catch((error)=>{
    console.error("error",error);
    response.status(500).json({
      error:"error interno"
    });
  });
});
   

router.route("/materias/:idCarrera").get((request, response) => {
  const idCarrera = request.params.idCarrera;
  materias.getMaterias(idCarrera).then((resultset) => {
      response.json(resultset);
  }).catch((error) => {
      console.error("Error al obtener materias:", error);
      response.status(500).json({ error: "Error interno del servidor" });
  });
});

router.route("/semestres/:idCarrera").get((request, response) => {
  const idCarrera = request.params.idCarrera;
  semestres.getSemestres(idCarrera).then((resultset) => {
      response.json(resultset);
  }).catch((error) => {
      console.error("Error al obtener semestres:", error);
      response.status(500).json({ error: "Error interno del servidor" });
  });
});
router.route("/materias/:idCarrera").get((request, response) => {
  const idCarrera = request.params.idCarrera;
  materias.getMaterias(idCarrera).then((resultset) => {
      response.json(resultset);
  }).catch((error) => {
      console.error("Error al obtener materias :", error);
      response.status(500).json({ error: "Error interno del servidor" });
  });
});


const port = process.env.PORT || 8090;
app.listen(port, () => {
  console.log("API REST Iniciada en el puerto : " + port);
});

