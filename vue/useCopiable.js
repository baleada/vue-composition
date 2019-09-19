"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCopiable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

function useCopiable(state, options) {
  var instance = new _logic.Copiable(state, options),
      reactiveInstance = (0, _compositionApi.reactive)(instance);
  return reactiveInstance;
}