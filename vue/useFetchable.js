"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFetchable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

function useFetchable(state, options) {
  var instance = new _logic.Fetchable(state, options),
      reactiveInstance = (0, _compositionApi.reactive)(instance);
  return reactiveInstance;
}