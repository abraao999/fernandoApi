import dontenv from "dotenv";
import { resolve } from "path";

dontenv.config();
import "./database";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import delay from "express-delay";
import clienteRoutes from "./routes/clienteRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";
import tokemRoutes from "./routes/tokemRoutes";
import reservaRoutes from "./routes/reservaRoutes";
import correioRoutes from "./routes/correioRoutes";
import produtoRoutes from "./routes/produtoRoutes";
import orcamentoRoutes from "./routes/orcamentoRoutes";
import tipoQuartoRoutes from "./routes/tipoQuartoRoutes";

const whiteList = [
  // dados do servidor
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error("not allowed by cors"));
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // this.app.use(cors(corsOptions));
    // this.app.use(delay(2000));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.static(resolve(__dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/tokem/", tokemRoutes);
    this.app.use("/cliente/", clienteRoutes);
    this.app.use("/usuario/", usuarioRoutes);
    this.app.use("/reserva/", reservaRoutes);
    this.app.use("/correio/", correioRoutes);
    this.app.use("/produto/", produtoRoutes);
    this.app.use("/orcamento/", orcamentoRoutes);
    this.app.use("/tipoQuarto/", tipoQuartoRoutes);
  }
}
export default new App().app;
