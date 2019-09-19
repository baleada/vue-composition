"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCompletable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

function useCompletable(state, options) {
  var instance = new _logic.Completable(state, options),
      reactiveInstance = (0, _compositionApi.reactive)(instance);
  return reactiveInstance;
}