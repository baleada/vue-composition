"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSyncable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

function useSyncable(state, options) {
  var instance = new _logic.Syncable(state, options),
      reactiveInstance = (0, _compositionApi.reactive)(instance);
  return reactiveInstance;
}