"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDelayable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

function useDelayable(state, options) {
  var instance = new _logic.Delayable(state, options),
      reactiveInstance = (0, _compositionApi.reactive)(instance);
  return reactiveInstance;
}