"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAnimatable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

function useAnimatable(state, options) {
  var instance = new _logic.Animatable(state, options),
      reactiveInstance = (0, _compositionApi.reactive)(instance);
  return reactiveInstance;
}