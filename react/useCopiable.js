"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCopiable;

var _react = require("react");

var _logic = require("@baleada/logic");

var _onChange = _interopRequireDefault(require("on-change"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useCopiable(state, options) {
  var _useReducer = (0, _react.useReducer)(function (x) {
    return x + 1;
  }, 0),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _ = _useReducer2[0],
      forceUpdate = _useReducer2[1],
      instance = new _logic.Copiable(state, options),
      reactiveInstance = (0, _onChange.default)(instance, forceUpdate);

  return reactiveInstance;
}