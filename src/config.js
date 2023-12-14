import dotenv from "dotenv";

dotenv.config();

const port = process.env.NODE_PORT || process.env.NODE_PORT_DEV;
const mongoUri = process.env.MONGO_URI || process.env.MONGO_URI_DEV;

console.log(process.env.MONGO_URI);

export { port, mongoUri };
