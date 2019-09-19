"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toProvided;

var _compositionApi = require("@vue/composition-api");

function toProvided(reactiveInstance) {
  return (0, _compositionApi.computed)(function () {
    return reactiveInstance;
  });
}