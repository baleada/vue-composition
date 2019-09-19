"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNavigable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

function useNavigable(state, options) {
  var instance = new _logic.Navigable(state, options),
      reactiveInstance = (0, _compositionApi.reactive)(instance);
  return reactiveInstance;
}