"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();
require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay);
var _clienteRoutes = require('./routes/clienteRoutes'); var _clienteRoutes2 = _interopRequireDefault(_clienteRoutes);
var _usuarioRoutes = require('./routes/usuarioRoutes'); var _usuarioRoutes2 = _interopRequireDefault(_usuarioRoutes);
var _tokemRoutes = require('./routes/tokemRoutes'); var _tokemRoutes2 = _interopRequireDefault(_tokemRoutes);
var _reservaRoutes = require('./routes/reservaRoutes'); var _reservaRoutes2 = _interopRequireDefault(_reservaRoutes);
var _correioRoutes = require('./routes/correioRoutes'); var _correioRoutes2 = _interopRequireDefault(_correioRoutes);
var _produtoRoutes = require('./routes/produtoRoutes'); var _produtoRoutes2 = _interopRequireDefault(_produtoRoutes);
var _orcamentoRoutes = require('./routes/orcamentoRoutes'); var _orcamentoRoutes2 = _interopRequireDefault(_orcamentoRoutes);
var _tipoQuartoRoutes = require('./routes/tipoQuartoRoutes'); var _tipoQuartoRoutes2 = _interopRequireDefault(_tipoQuartoRoutes);

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
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    // this.app.use(cors(corsOptions));
    // this.app.use(delay(2000));
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/tokem/", _tokemRoutes2.default);
    this.app.use("/cliente/", _clienteRoutes2.default);
    this.app.use("/usuario/", _usuarioRoutes2.default);
    this.app.use("/reserva/", _reservaRoutes2.default);
    this.app.use("/correio/", _correioRoutes2.default);
    this.app.use("/produto/", _produtoRoutes2.default);
    this.app.use("/orcamento/", _orcamentoRoutes2.default);
    this.app.use("/tipoQuarto/", _tipoQuartoRoutes2.default);
  }
}
exports. default = new App().app;
