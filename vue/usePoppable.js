"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePoppable;

var _compositionApi = require("@vue/composition-api");

var _logic = require("@baleada/logic");

var _helpers = require("@baleada/logic/helpers");

function usePoppable(state, options) {
  var instance = (0, _compositionApi.reactive)(new _logic.Poppable(state, options));
  return (0, _compositionApi.computed)(function () {
    return (0, _helpers.toProvisions)(instance);
  });
}