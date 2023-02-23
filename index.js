import express from 'express';
import  cors from 'cors';
import path from "path";
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Route from './routes/route.js';

import { fileURLToPath } from 'url';



const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Route);

Connection();
//static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/build")))
app.get("*", (req, res) => {
  res.sendFile(
      path.join(__dirname, "../client/build/index.html"),
      function (err) {
          res.status(500).send(err)
      }
  )
})

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));