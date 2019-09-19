"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useObservable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

function useObservable(state, options) {
  var instance = new _logic.Observable(state, options),
      reactiveInstance = (0, _compositionApi.reactive)(instance);
  return reactiveInstance;
}