"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/movex.config.ts
var movex_config_exports = {};
__export(movex_config_exports, {
  default: () => movex_config_default
});
module.exports = __toCommonJS(movex_config_exports);

// src/counter.movex.ts
var initialCounterState = {
  count: 0
};
var reducer = (state = initialCounterState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1
    };
  }
  if (action.type === "incrementBy") {
    return {
      ...state,
      count: state.count + action.payload
    };
  }
  return state;
};
var counter_movex_default = reducer;

// src/movex.config.ts
var movex_config_default = {
  url: void 0,
  resources: {
    counter: counter_movex_default
  }
};
