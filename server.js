const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Data = multer({ storage: storage });

app.post("/files", Data.any("files"), (req, res) => {
  if (res.status(200)) {
    console.log("Archivos cargados exitosamente");
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
    res.end();
  }
});

app.listen(5500, () => {
  console.log("Servidor iniciado en el puerto 5500");
});