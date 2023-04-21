const express = require("express");
const AdminEspecie = require("./AdminEspecie.js");

class PetLovers {
  constructor() {
    this.port = 3000;
    this.app = express();
    this.adminEspecie = new AdminEspecie();

    this.app.use(this.configurarCORS);
    this.app.use(express.json());

    this.app.post("/crear_especie", (req, res) => {
      this.adminEspecie.crearEspecie(req, res);
    });

    this.app.get("/listar_especies", (req, res) => {
      this.adminEspecie.listarEspecies(req, res);
    });
  }

  configurarCORS(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  }

  iniciarServidor() {
    this.app.listen(this.port, () => {
      console.log(`Servidor ejecutandoseen el puerto ${this.port}`);
    });
  }
}

const miEspecie = new PetLovers();

miEspecie.iniciarServidor();
