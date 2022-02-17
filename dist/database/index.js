"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Produto = require('../models/Produto'); var _Produto2 = _interopRequireDefault(_Produto);
var _Cliente = require('../models/Cliente'); var _Cliente2 = _interopRequireDefault(_Cliente);
var _Reserva = require('../models/Reserva'); var _Reserva2 = _interopRequireDefault(_Reserva);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _Orcamento = require('../models/Orcamento'); var _Orcamento2 = _interopRequireDefault(_Orcamento);
var _TipoQuarto = require('../models/TipoQuarto'); var _TipoQuarto2 = _interopRequireDefault(_TipoQuarto);

const models = [_Cliente2.default, _Usuario2.default, _Reserva2.default, _Produto2.default, _Orcamento2.default, _TipoQuarto2.default];
const connection = new (0, _sequelize2.default)(_database2.default);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
