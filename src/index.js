import app from "./app.js";
import { port } from "./config.js";
import "./db.js"

app.listen(port, () => console.log("Servidor corriendo en puerto ", port));
