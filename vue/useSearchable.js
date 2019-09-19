"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSearchable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

function useSearchable(state, options) {
  var instance = new _logic.Searchable(state, options),
      reactiveInstance = (0, _compositionApi.reactive)(instance);
  return reactiveInstance;
}