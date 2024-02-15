/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0px;
    margin: 0px;
}



body { 
    height: 100vh;
    background-color: #010034;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    gap: 50px;
}

#title {
    display: flex;
    align-items: center;
    height: 100px;
    font-size: 70px;
    color: #4e4e50;
}

#mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
}

.messageBox {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    width: 75%;
    height: 65px;
    border: 1px solid white;
    border-radius: 15px;
    background: linear-gradient(to right, #373737, #292929, #292929, #373737);
}
  


.boardsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
}

.boardSection {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
}

.boardName {
    font-size: larger;
    font-weight: 1000;
} 

.boardsDisplay {
    display: grid;
    grid-template-columns: repeat(10, 45px);
    grid-template-rows:repeat(10, 45px);
    gap: 5px;
}

.boxDisplay {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    font-size: 2rem;
    max-height: 45px;
    max-width: 45px;
}

.enemyBoxes:hover {
    cursor: crosshair;
    background-color: green;
}

.boxDisplay img {
    opacity: 0.7;
    z-index: -2;
}

/* .hidden {
    display: none;
} */

.show {
    display: block;
    filter: brightness(50%);
}

.boxDisplay.hit::after, 
.boxDisplay.missedAttack::after{
    position: absolute;
    content: "";
    width: 15px; 
    height: 15px;
    background-color: red;
    border-radius: 50%; 
    z-index:2; 
}

.boxDisplay.missedAttack::after{
    background-color: white;
}

.enemyBoxes.hit:hover,
.enemyBoxes.boxDisplay.missedAttack:hover {
    background-color: rgb(255, 45, 45);
    cursor: not-allowed;
}

.carrier {
    position: relative;
    left: 100px;
    min-width: 225px;
    max-width: 225px;
    height: 35px;
}

.carrier.yAxis {
    position: relative;
    top: 100px;
    left: 0px;
    transform: rotate(90deg);
}

.battleship {
    position: relative;
    left: 75px;
    min-width: 180px;
    max-width: 180px;
    height: 30px;
}

.battleship.yAxis {
    position: relative;
    top: 75px;
    left: 0px;
    transform: rotate(90deg);
}

.destroyer {
    position: relative;
    left: 50px;
    min-width: 135px;
    max-width: 135px;
    height: 30px;
}

.destroyer.yAxis {
    position: relative;
    top: 50px;
    left: 0px;
    transform: rotate(90deg);
}

.submarine {
    position: relative;
    left: 35px;
    min-width: 160px;
    max-width: 160px;
    height: 60px;
}

.submarine.yAxis {
    position: relative;
    top: 35px;
    left: 0px;
    transform: rotate(90deg);
}


.patrolBoat {
    position: relative;
    left: 10px;
    min-width: 150px;
    max-width: 150px;
    height: 50px;
}

.patrolBoat.yAxis {
    position: relative;
    top: 10px;
    left: 0px;
    transform: rotate(90deg);
}


.declareWinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    font-size: 4rem;
    font-weight: 800;
}`, "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf;;;;AAIA;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,yEAAyE;AAC7E;;;;AAIA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,mCAAmC;IACnC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;;GAEG;;AAEH;IACI,cAAc;IACd,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,wBAAwB;AAC5B;;;AAGA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,wBAAwB;AAC5B;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["* {\n    padding: 0px;\n    margin: 0px;\n}\n\n\n\nbody { \n    height: 100vh;\n    background-color: #010034;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    gap: 50px;\n}\n\n#title {\n    display: flex;\n    align-items: center;\n    height: 100px;\n    font-size: 70px;\n    color: #4e4e50;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n}\n\n.messageBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 25px;\n    width: 75%;\n    height: 65px;\n    border: 1px solid white;\n    border-radius: 15px;\n    background: linear-gradient(to right, #373737, #292929, #292929, #373737);\n}\n  \n\n\n.boardsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 100px;\n}\n\n.boardSection {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 10px;\n}\n\n.boardName {\n    font-size: larger;\n    font-weight: 1000;\n} \n\n.boardsDisplay {\n    display: grid;\n    grid-template-columns: repeat(10, 45px);\n    grid-template-rows:repeat(10, 45px);\n    gap: 5px;\n}\n\n.boxDisplay {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid white;\n    font-size: 2rem;\n    max-height: 45px;\n    max-width: 45px;\n}\n\n.enemyBoxes:hover {\n    cursor: crosshair;\n    background-color: green;\n}\n\n.boxDisplay img {\n    opacity: 0.7;\n    z-index: -2;\n}\n\n/* .hidden {\n    display: none;\n} */\n\n.show {\n    display: block;\n    filter: brightness(50%);\n}\n\n.boxDisplay.hit::after, \n.boxDisplay.missedAttack::after{\n    position: absolute;\n    content: \"\";\n    width: 15px; \n    height: 15px;\n    background-color: red;\n    border-radius: 50%; \n    z-index:2; \n}\n\n.boxDisplay.missedAttack::after{\n    background-color: white;\n}\n\n.enemyBoxes.hit:hover,\n.enemyBoxes.boxDisplay.missedAttack:hover {\n    background-color: rgb(255, 45, 45);\n    cursor: not-allowed;\n}\n\n.carrier {\n    position: relative;\n    left: 100px;\n    min-width: 225px;\n    max-width: 225px;\n    height: 35px;\n}\n\n.carrier.yAxis {\n    position: relative;\n    top: 100px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n.battleship {\n    position: relative;\n    left: 75px;\n    min-width: 180px;\n    max-width: 180px;\n    height: 30px;\n}\n\n.battleship.yAxis {\n    position: relative;\n    top: 75px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n.destroyer {\n    position: relative;\n    left: 50px;\n    min-width: 135px;\n    max-width: 135px;\n    height: 30px;\n}\n\n.destroyer.yAxis {\n    position: relative;\n    top: 50px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n.submarine {\n    position: relative;\n    left: 35px;\n    min-width: 160px;\n    max-width: 160px;\n    height: 60px;\n}\n\n.submarine.yAxis {\n    position: relative;\n    top: 35px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n\n.patrolBoat {\n    position: relative;\n    left: 10px;\n    min-width: 150px;\n    max-width: 150px;\n    height: 50px;\n}\n\n.patrolBoat.yAxis {\n    position: relative;\n    top: 10px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n\n.declareWinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80vh;\n    font-size: 4rem;\n    font-weight: 800;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMplay.js":
/*!************************!*\
  !*** ./src/DOMplay.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cpuShipPics: () => (/* binding */ cpuShipPics),
/* harmony export */   displayBoards: () => (/* binding */ displayBoards),
/* harmony export */   messageBox: () => (/* binding */ messageBox),
/* harmony export */   playerBoxDivs: () => (/* binding */ playerBoxDivs),
/* harmony export */   playerShipPics: () => (/* binding */ playerShipPics)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _cpuControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpuControl */ "./src/cpuControl.js");
/* harmony import */ var _handleAttacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleAttacks */ "./src/handleAttacks.js");
// code for removing all previous element in 
// 
// 
// 
// 
// 






const mainContainer = document.querySelector('#mainContainer');
const messageBox = createDiv('messageBox');


const playerName = 'Samir'
const playerBoxDivs = [];
const cpuBoxDivs = [];
const playerShipPics = [];
const cpuShipPics = [];



function displayBoards () {

    let message = `Awaiting orders, Admiral ${playerName}`;
    
    for (let i = 0; i < message.length; i++) {
        setTimeout(function() {
            messageBox.textContent += (message.charAt(i));
        }, 30 * i);
    }

    mainContainer.appendChild(messageBox);
    const playerSection = createDiv('boardSection');  
    const playerBoardName = createDiv('boardName', 'FRIENDLY WATERS');
    const playerDisplayBoard = createDiv('boardsDisplay');

    playerSection.appendChild(playerBoardName);
    playerSection.appendChild(playerDisplayBoard);


    _index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray.forEach(index => {
        const playerBox = createDiv('boxDisplay', undefined, index);
        playerBoxDivs.push(playerBox);
        playerDisplayBoard.appendChild(playerBox);
    });

    _index__WEBPACK_IMPORTED_MODULE_0__.playerHeads.forEach(spot => {
        switch (_index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray[spot]) {
            case 1: 
            const carrierPic = createImg("carrier");
            playerShipPics.push(carrierPic);
            playerBoxDivs[spot].appendChild(carrierPic);
            if (_index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray[spot + 1] !== 1) carrierPic.classList.add('yAxis');
            break;

            case 2:
            const battleshipPic = createImg("battleship");
            playerShipPics.push(battleshipPic);
            playerBoxDivs[spot].appendChild(battleshipPic);
            if (_index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray[spot + 1] !== 2) battleshipPic.classList.add('yAxis');
            break;

            case 3: 
            const destroyerPic = createImg("destroyer");
            playerShipPics.push(destroyerPic);
            playerBoxDivs[spot].appendChild(destroyerPic);
            if (_index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray[spot + 1] !== 3) destroyerPic.classList.add('yAxis');
            break;

            case 4:
            const submarinePic = createImg("submarine");
            playerShipPics.push(submarinePic);
            playerBoxDivs[spot].appendChild(submarinePic);
            if (_index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray[spot + 1] !== 4) submarinePic.classList.add('yAxis');
            break;

            case 5: 
            const patrolBoat = createImg("patrolBoat");
            playerShipPics.push(patrolBoat);
            playerBoxDivs[spot].appendChild(patrolBoat);
            if (_index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray[spot + 1] !== 5) patrolBoat.classList.add('yAxis');
            break;
        }
    });


    const enemySection = createDiv('boardSection')
    const enemyBoardName = createDiv('boardName', 'ENEMY WATERS');
    const cpuDisplayBoard = createDiv('boardsDisplay');

    enemySection.appendChild(enemyBoardName);
    enemySection.appendChild(cpuDisplayBoard);    

    _cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray.forEach((box,index) => {
        const cpuBox = createDiv('boxDisplay', undefined, index);
        cpuBox.classList.add('enemyBoxes')
        cpuBoxDivs.push(cpuBox);
        cpuBox.addEventListener('click', () => {
            (0,_handleAttacks__WEBPACK_IMPORTED_MODULE_2__.handleAttacks)(cpuBox, index);
        });
        cpuDisplayBoard.appendChild(cpuBox);
    });

    _cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuHeads.forEach(spot => {
        switch (_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray[spot]) {
            case 1: 
            const carrierPic = createImg("carrier");
            carrierPic.classList.add('hidden');
            cpuShipPics.push(carrierPic);
            cpuBoxDivs[spot].appendChild(carrierPic);
            if (_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray[spot + 1] !== 1) carrierPic.classList.add('yAxis');
            break;

            case 2:
            const battleshipPic = createImg("battleship");
            battleshipPic.classList.add('hidden');
            cpuShipPics.push(battleshipPic);
            cpuBoxDivs[spot].appendChild(battleshipPic);
            if (_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray[spot + 1] !== 2) battleshipPic.classList.add('yAxis');
            break;

            case 3: 
            const destroyerPic = createImg("destroyer");
            destroyerPic.classList.add('hidden');
            cpuShipPics.push(destroyerPic);
            cpuBoxDivs[spot].appendChild(destroyerPic);
            if (_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray[spot + 1] !== 3) destroyerPic.classList.add('yAxis');
            break;

            case 4:
            const submarinePic = createImg("submarine");
            submarinePic.classList.add('hidden');
            cpuShipPics.push(submarinePic);
            cpuBoxDivs[spot].appendChild(submarinePic);
            if (_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray[spot + 1] !== 4) submarinePic.classList.add('yAxis');
            break;

            case 5: 
            const patrolBoat = createImg("patrolBoat");
            patrolBoat.classList.add('hidden');
            cpuShipPics.push(patrolBoat);
            cpuBoxDivs[spot].appendChild(patrolBoat);
            if (_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray[spot + 1] !== 5) patrolBoat.classList.add('yAxis');
            break;
        }
    });

    const boardsContainer = createDiv('boardsContainer');
    boardsContainer.appendChild(playerSection);
    boardsContainer.appendChild(enemySection);

    mainContainer.appendChild(boardsContainer);

    //
};


function createDiv (className, text, valueAmount) {
    const div = document.createElement('div');
    div.classList.add(className);
    div.textContent = text;
    div.value = valueAmount;

    return div
} 

function createImg (className) {
    const img = document.createElement('img');
    img.classList.add(className);
    img.src = `./shipsPic/${className}.png`;

    return img
}







/***/ }),

/***/ "./src/cpuControl.js":
/*!***************************!*\
  !*** ./src/cpuControl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cpuGameBoardArray: () => (/* binding */ cpuGameBoardArray),
/* harmony export */   cpuHeads: () => (/* binding */ cpuHeads),
/* harmony export */   cpuHits: () => (/* binding */ cpuHits),
/* harmony export */   cpuMiss: () => (/* binding */ cpuMiss),
/* harmony export */   cpuShipObjs: () => (/* binding */ cpuShipObjs),
/* harmony export */   cpuSunk: () => (/* binding */ cpuSunk),
/* harmony export */   generateCpuAttack: () => (/* binding */ generateCpuAttack),
/* harmony export */   placeCpuShips: () => (/* binding */ placeCpuShips)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const cpuGameBoardArray = new Array(100).fill(0);
const cpuShipObjs = [];

const storedAttacks = Array.from({ length: 100}, () => 0);

const cpuHeads = []


function placeCpuShips () {

    const carrier = new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(5, 0, false);
    cpuShipObjs.push(carrier);
    
    const battleship = new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(4, 0, false);
    cpuShipObjs.push(battleship);
 
    const destroyer = new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(3, 0, false);
    cpuShipObjs.push(destroyer);

    const submarine = new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(3, 0, false);
    cpuShipObjs.push(submarine);

    const patrolBoat = new _index__WEBPACK_IMPORTED_MODULE_0__.Ship(2, 0, false);
    cpuShipObjs.push(patrolBoat);
    
    let shipCounter = 1;

    cpuShipObjs.forEach(ship => {
        let modifiedArray = [];
        let continueLoop = true;
        const axis = Math.round(Math.random()); // 0 = x, 1 = y
        cpuGameBoardArray.forEach((boardElement, boardIndex) => {
            if (boardElement === 0) modifiedArray.push(boardIndex);
        });
        let randomIndex = 0;

        if (!axis) {
            while (continueLoop) {
                let validPlacement = true;

                const firstDigit = Math.floor(Math.random() * 9);
                const secondDigit = Math.floor(Math.random() * 9);

                randomIndex = Number(firstDigit.toString() + secondDigit.toString());

                if (randomIndex + ship.length - 1 > firstDigit * 10 + 9) {
                    randomIndex = (firstDigit * 10 + 9) - ship.length + 1 
                }

                for (let i = 0; i < ship.length; i++) {
                    if (cpuGameBoardArray[randomIndex + i] !== 0) {
                        validPlacement = false;
                        break;
                    } 
                }
    
                if (validPlacement) {
                    for (let i = 0; i < ship.length; i++) {
                        cpuGameBoardArray[randomIndex + i] = shipCounter;
                        // to exit loop
                        continueLoop = false;
                    }
                }
            }
        } else {
            while (continueLoop) {
                let validPlacement = true;

                const firstDigit = Math.floor(Math.random() * 9);
                const secondDigit = Math.floor(Math.random() * 9);

                randomIndex = Number(firstDigit.toString() + secondDigit.toString());

                if (randomIndex + ((ship.length -1) * 10) > 99 ) {
                    randomIndex = (99 - randomIndex);    
                }



                for (let i = 0; i < ship.length; i++) {
                    if (cpuGameBoardArray[randomIndex + (i*10)] !== 0) {
                        validPlacement = false;
                        break;
                    }
                }

                if (validPlacement) {
                    for (let i = 0; i < ship.length; i++) {
                        cpuGameBoardArray[randomIndex + (i*10)] = shipCounter;
                    }
                    // to exit while loop
                    continueLoop = false;
                } 
            }     
        }
    cpuHeads.push(randomIndex)
    shipCounter++;
 })
//  console.log(cpuGameBoardArray)
 return cpuGameBoardArray
}




let originalValue = 100;
let bothMissedCounter = 0;
let ifMissed = false;

const  generateCpuAttack = (gameBoardArray, shipObjs, currentTurn) => {
    let attackValue;
    let foundHit;
    let indexHit; 
   
    if (ifMissed) {
        foundHit = true;
        indexHit = originalValue; 
    } else {
        foundHit = storedAttacks.find((shipBox) => shipBox === "hit");
        indexHit = storedAttacks.indexOf(foundHit);
    }

    if (foundHit && bothMissedCounter < 2) {
        if (storedAttacks[indexHit + 1] === 0 && indexHit + 1 <= 99) {
            attackValue = indexHit + 1;
        } else if (storedAttacks[indexHit - 1 ] === 0 && indexHit - 1 >= 0) {
            attackValue = indexHit - 1;
        } else {
            let attackingArray = storedAttacks.map((spot, index) => (spot === 0 ? index : undefined))
        .filter(index => index !== undefined);        
        attackValue = attackingArray[Math.floor(Math.random()*attackingArray.length)];
        }
        
    } else if (foundHit && bothMissedCounter >= 2) {
        if (storedAttacks[indexHit + 10 ] === 0 && indexHit + 10 <= 99) {
            attackValue = indexHit + 10;
        } else if (storedAttacks[indexHit - 10 ] === 0 && indexHit - 10 >= 0) {
            attackValue = indexHit - 10;
        }
        else {
            let attackingArray = storedAttacks.map((spot, index) => (spot === 0 ? index : undefined))
        .filter(index => index !== undefined);        
        attackValue = attackingArray[Math.floor(Math.random()*attackingArray.length)];
        }
    } else {
        let attackingArray = storedAttacks.map((spot, index) => (spot === 0 ? index : undefined))
        .filter(index => index !== undefined);        
        attackValue = attackingArray[Math.floor(Math.random()*attackingArray.length)];
    }
    
    _index__WEBPACK_IMPORTED_MODULE_0__.gameBoard.receiveAttack(attackValue,gameBoardArray, shipObjs, currentTurn);
    return attackValue
}


const cpuHits = coordinateVal => {
    if (storedAttacks.indexOf('hit') !== -1) {
        storedAttacks[storedAttacks.indexOf('hit')] = 'hitten';
        storedAttacks[coordinateVal] = 'hit';
        ifMissed = false
    } else {
        storedAttacks[coordinateVal] = 'hit';
        originalValue = coordinateVal;
    }
}

const cpuMiss = coordinateVal => {
    storedAttacks[coordinateVal] = 'miss';
    if (!(originalValue === 100)) {
        ifMissed = true;
        bothMissedCounter++
    }
}

const cpuSunk = coordinateVal => {
    storedAttacks[coordinateVal] = 'sunked'; 
    originalValue = 100;
    bothMissedCounter = 0;
} 





/***/ }),

/***/ "./src/handleAttacks.js":
/*!******************************!*\
  !*** ./src/handleAttacks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAttacks: () => (/* binding */ handleAttacks)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _cpuControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpuControl */ "./src/cpuControl.js");
/* harmony import */ var _DOMplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMplay */ "./src/DOMplay.js");




const mainContainer = document.querySelector('#mainContainer');

const shotFiredMp3 = document.querySelector('#shotFired')
const shotHitMp3 = document.querySelector('#shotHit')
const shotMissedMp3 = document.querySelector('#shotMissed')

 



const playerName = 'Samir';
let cpuFinished = false;
let oneTime = 0;
let message = '';
let extra = '';


function handleAttacks (cpuBox, index) {

    const declareWinner = document.createElement('div');
    declareWinner.classList.add('declareWinner');

    setTimeout(function () {
    if (cpuFinished || oneTime !== 0) return
    if (_index__WEBPACK_IMPORTED_MODULE_0__.gameBoard.receiveAttack(index,_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray,_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuShipObjs, 'playerTurn')) {
        cpuFinished = true
        let attackedIndex = index
        _DOMplay__WEBPACK_IMPORTED_MODULE_2__.messageBox.textContent = ''
        message = 'You fire a shot into enemy waters ...... ';

        for (let i = 0; i < message.length; i++) {
            setTimeout(function() {
                _DOMplay__WEBPACK_IMPORTED_MODULE_2__.messageBox.textContent += (message.charAt(i));
            }, 30 * i);
        }

        shotFiredMp3.play();


        setTimeout(function () {
            if (_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray[attackedIndex] === 'miss') {
                extra = ' and miss.'
                shotMissedMp3();
                cpuBox.classList.add('missedAttack');
            } else {
                extra = " and it's a hit!"
                cpuBox.classList.add('hit');
                shotHitMp3.play()
                _cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuShipObjs.forEach((obj, index)=> {
                    if (obj.sunk && _cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuGameBoardArray[attackedIndex].includes(index + 1)) {
                        _DOMplay__WEBPACK_IMPORTED_MODULE_2__.cpuShipPics[index].classList.remove('hidden');
                        _DOMplay__WEBPACK_IMPORTED_MODULE_2__.cpuShipPics[index].classList.add('show');
                        switch(index) {
                            case 0: extra = `You sunk their Carrier! `
                            break;
                            case 1: extra = `You sunk their BattleShip! `
                            break;
                            case 2: extra = `You sunk their Destroyer! `
                            break;
                            case 3: extra = `You sunk their Submarine! `
                            break;
                            case 4: extra = `You sunk their Patrol Boat! `
                            break; 
                        }
                    }
                })
            }

            for (let i = 0; i < extra.length; i++) {
                setTimeout(function() {
                    _DOMplay__WEBPACK_IMPORTED_MODULE_2__.messageBox.textContent += (extra.charAt(i));
                }, 30 * i);
            }

        }, 1500)

         
            if (_index__WEBPACK_IMPORTED_MODULE_0__.gameBoard.endGameCheck(_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuShipObjs)) {
            // code to remove everything within it
            setTimeout(function () { while (mainContainer.firstChild) {
                mainContainer.removeChild(mainContainer.firstChild);
            }
            mainContainer.appendChild(declareWinner);
            declareWinner.textContent = ` Winner is General ${playerName} !!`;
            }, 2200)
         } else {
            setTimeout(function () {
            _DOMplay__WEBPACK_IMPORTED_MODULE_2__.messageBox.textContent = '';
            message = 'Your opponent is aiming ...... ';
            for (let i = 0; i < message.length; i++) {
                setTimeout(function() {
                    _DOMplay__WEBPACK_IMPORTED_MODULE_2__.messageBox.textContent += (message.charAt(i));
                }, 30 * i);
            }
            }, 3000)

            setTimeout(function () {
                message = 'The enemy fires a shot into your waters ...... '
                _DOMplay__WEBPACK_IMPORTED_MODULE_2__.messageBox.textContent = '';
                for (let i = 0; i < message.length; i++) {
                    setTimeout(function() {
                        _DOMplay__WEBPACK_IMPORTED_MODULE_2__.messageBox.textContent += (message.charAt(i));
                    }, 30 * i);
                }
            }, 5000);

            setTimeout(function(){
                
                let cpuAttackValue = (0,_cpuControl__WEBPACK_IMPORTED_MODULE_1__.generateCpuAttack)(_index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray, _index__WEBPACK_IMPORTED_MODULE_0__.playerShipObjs, 'cpuTurn');
                
                console.log(_index__WEBPACK_IMPORTED_MODULE_0__.playerShipObjs)

                
                if (_index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray[cpuAttackValue] === 'miss') {
                    extra = ' and misses.'
                    _DOMplay__WEBPACK_IMPORTED_MODULE_2__.playerBoxDivs[cpuAttackValue].classList.add('missedAttack')    
                } else {
                    _DOMplay__WEBPACK_IMPORTED_MODULE_2__.playerBoxDivs[cpuAttackValue].classList.add('hit');
                    extra = "it's a hit!" 
                    

                    _index__WEBPACK_IMPORTED_MODULE_0__.playerShipObjs.forEach((obj, index)=> {
                        if (obj.sunk && _index__WEBPACK_IMPORTED_MODULE_0__.playerGameBoardArray[cpuAttackValue].includes(index + 1)) {
                            _DOMplay__WEBPACK_IMPORTED_MODULE_2__.playerShipPics[index].classList.add('show');
                            switch(index) {
                                case 0: extra = `they sunk your Carrier! `
                                break;
                                case 1: extra = `they sunk your BattleShip! `
                                break;
                                case 2: extra = `they sunk your Destroyer! `
                                break;
                                case 3: extra = `they sunk your Submarine! `
                                break;
                                case 4: extra = `they sunk your Patrol Boat! `
                                break; 
                            }
                        }

                        
                    })
                }

                

                setTimeout(function() {if (_index__WEBPACK_IMPORTED_MODULE_0__.gameBoard.endGameCheck(_index__WEBPACK_IMPORTED_MODULE_0__.playerShipObjs)) {
                    while (mainContainer.firstChild) {
                        mainContainer.removeChild(mainContainer.firstChild);
                    }
                    mainContainer.appendChild(declareWinner);
                    declareWinner.textContent = ` Winner is CPU`;
                }
            }, 2000)

                for (let i = 0; i < extra.length; i++) {
                    setTimeout(function() {
                        _DOMplay__WEBPACK_IMPORTED_MODULE_2__.messageBox.textContent += (extra.charAt(i));
                    }, 30 * i);
                }

                setTimeout(function () {
                    cpuFinished = false;
                    oneTime = 0;
                }, 900)
            }, 7000); 
        }
        
    }
    }, 500)   
}





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   gameBoard: () => (/* binding */ gameBoard),
/* harmony export */   playerGameBoardArray: () => (/* binding */ playerGameBoardArray),
/* harmony export */   playerHeads: () => (/* binding */ playerHeads),
/* harmony export */   playerShipObjs: () => (/* binding */ playerShipObjs)
/* harmony export */ });
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ "./src/home.css");
/* harmony import */ var _cpuControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpuControl */ "./src/cpuControl.js");
/* harmony import */ var _DOMplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMplay */ "./src/DOMplay.js");






//Global value
const playerShipObjs = [];
const playerHeads = [];
const playerGameBoardArray = new Array(100).fill(0);
let gameEnd = false
// just for now
let axis = Math.round(Math.random()); // 0 = x, 1 = y;


class Ship {
    constructor (length, hits, sunk) {
        this.length = length;
        this.hits = hits;
        this.sunk = false;
    }

    hit() {
        this.hits++;
    }

    isSunk () {
        if (this.hits === this.length) {
            this.sunk = true;
            return true
        } else return false
    }
}

const gameBoard = (() => {
    const errorInvalidPosition = "can't place your ship here";
    let shipCounter = 1;

    const placeShip = value => {
        let playerShipArray = [];
        axis = Math.round(Math.random())
        if (shipCounter > 5) return "all ships placed"
        switch (shipCounter) {
            case 1:
                if (!validPlacement(5, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                } 
                const carrier = new Ship(5, 0, false);
                playerShipObjs.push(carrier)
            break;
                
            case 2:
                if (!validPlacement(4, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                } 
                const battleship = new Ship(4, 0, false);
                playerShipObjs.push(battleship)
            break;
            
            case 3:
                if (!validPlacement(3, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                } 
                const destroyer = new Ship(3, 0, false);
                playerShipObjs.push(destroyer)

            break;

            case 4: 
                if (!validPlacement(3, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition 
                } 
                const submarine = new Ship(3, 0, false);
                playerShipObjs.push(submarine)

            break;
            
            case 5: 
                if (!validPlacement(2, value, playerShipArray, shipCounter)) {
                    playerShipArray = [];
                    return errorInvalidPosition
                }
                const patrolBoat = new Ship(2, 0, false);
                playerShipObjs.push(patrolBoat)

            break;
        }

        
        // extra error handling
        if (playerShipArray === []) return errorInvalidPosition
        else {
            for (const element of playerShipArray ){
                if (playerGameBoardArray[element] !== 0) {
                    playerShipArray = [];
                    break
                } else playerGameBoardArray[element] = shipCounter; 
            }
            shipCounter++;
            playerHeads.push(value);

            if (shipCounter > 5) {
                (0,_cpuControl__WEBPACK_IMPORTED_MODULE_1__.placeCpuShips)();
                (0,_DOMplay__WEBPACK_IMPORTED_MODULE_2__.displayBoards)();
            }
        }

        return playerShipArray
    }
    
    const receiveAttack = (coordinateVal, gameBoardArray, shipObjs, currentTurn) => {

        if (!(gameBoardArray[coordinateVal] === 0 || 
            gameBoardArray[coordinateVal] === 1 || 
            gameBoardArray[coordinateVal] === 2 || 
            gameBoardArray[coordinateVal] === 3 || 
            gameBoardArray[coordinateVal] === 4 || 
            gameBoardArray[coordinateVal] === 5)
        ){
            return false
        } else {
            let cpuSunked = false;
            let playerSunked = false;
            if (gameBoardArray[coordinateVal] === 0) gameBoardArray[coordinateVal] = "miss";
            else {
                shipObjs[gameBoardArray[coordinateVal] - 1].hit();

                if (shipObjs[gameBoardArray[coordinateVal] - 1].isSunk() && currentTurn === 'cpuTurn') {
                    cpuSunked = true;
                };

                if (shipObjs[gameBoardArray[coordinateVal] - 1].isSunk() && currentTurn === 'playerTurn') {
                    playerSunked = true;
                };
                gameBoardArray[coordinateVal] = `${gameBoardArray[coordinateVal]} hit`;
            }

            if (gameBoardArray[coordinateVal] === 'miss' && currentTurn === 'cpuTurn'){
                (0,_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuMiss)(coordinateVal);
            } else if (gameBoardArray[coordinateVal].includes('hit')  && currentTurn === 'cpuTurn') {
                (0,_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuHits)(coordinateVal);
            } 

            if (cpuSunked) {
                (0,_cpuControl__WEBPACK_IMPORTED_MODULE_1__.cpuSunk)(coordinateVal)
            }
        
           return true
        }
    }


    const endGameCheck = shipObjs => {
        if (!(shipObjs.find(element => element.sunk === false))) {
            return true;
        } else {
            return false;
        }

    }



    return {
        placeShip, 
        receiveAttack,
        endGameCheck
    }
})()



function validPlacement (lengthShip, value, playerShipArray) {
    
    if (!axis) {
        let findX = (Math.floor(value/10)*10) + 9; 
        for (let i = 0; i < lengthShip; i++) {
            if (playerGameBoardArray[value + i] !== 0 || 
                value + i > 99  ||
                value + i > findX)
                return false;
            else {
                playerShipArray.push(value + i); 
            }
            
            
        }
    } else {
        for (let i = 0; i < lengthShip; i++) {
            if (playerGameBoardArray[value + (i*10)] !== 0 || 
                value + (i*10) > 99) return false
            else {
                playerShipArray.push(value + (i*10)); 
            }
        }
    }

    return true
}

gameBoard.placeShip(23)
gameBoard.placeShip(11)
gameBoard.placeShip(34)
gameBoard.placeShip(0)
gameBoard.placeShip(82)



// gameBoard.receiveAttack(29, cpuGameBoardArray, cpuShipObjs, 'playerTurn')
// gameBoard.receiveAttack(42, cpuGameBoardArray, cpuShipObjs, 'playerTurn')
// gameBoard.receiveAttack(55, cpuGameBoardArray, cpuShipObjs, 'playerTurn')
// gameBoard.receiveAttack(25, cpuGameBoardArray, cpuShipObjs, 'playerTurn')
// gameBoard.receiveAttack(40, cpuGameBoardArray, cpuShipObjs, 'playerTurn')


// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')
// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')
// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')
// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')
// generateCpuAttack(playerGameBoardArray, playerShipObjs, 'cpuTurn')




// console.log(playerGameBoardArray)


// console.log(gameBoard.receiveAttack(29))
// console.log(gameBoard.endGameCheck())







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtFQUErRSxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksNkJBQTZCLG1CQUFtQixrQkFBa0IsR0FBRyxlQUFlLG9CQUFvQixnQ0FBZ0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsbUJBQW1CLGdCQUFnQixHQUFHLFlBQVksb0JBQW9CLDBCQUEwQixvQkFBb0Isc0JBQXNCLHFCQUFxQixHQUFHLG9CQUFvQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEdBQUcsaUJBQWlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixpQkFBaUIsbUJBQW1CLDhCQUE4QiwwQkFBMEIsZ0ZBQWdGLEdBQUcsNEJBQTRCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGlCQUFpQixHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLHlCQUF5QixnQkFBZ0IsR0FBRyxnQkFBZ0Isd0JBQXdCLHdCQUF3QixJQUFJLG9CQUFvQixvQkFBb0IsOENBQThDLDBDQUEwQyxlQUFlLEdBQUcsaUJBQWlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDhCQUE4QixzQkFBc0IsdUJBQXVCLHNCQUFzQixHQUFHLHVCQUF1Qix3QkFBd0IsOEJBQThCLEdBQUcscUJBQXFCLG1CQUFtQixrQkFBa0IsR0FBRyxnQkFBZ0Isb0JBQW9CLElBQUksYUFBYSxxQkFBcUIsOEJBQThCLEdBQUcsOERBQThELHlCQUF5QixvQkFBb0IsbUJBQW1CLG1CQUFtQiw0QkFBNEIsMEJBQTBCLGlCQUFpQixHQUFHLG9DQUFvQyw4QkFBOEIsR0FBRyx1RUFBdUUseUNBQXlDLDBCQUEwQixHQUFHLGNBQWMseUJBQXlCLGtCQUFrQix1QkFBdUIsdUJBQXVCLG1CQUFtQixHQUFHLG9CQUFvQix5QkFBeUIsaUJBQWlCLGdCQUFnQiwrQkFBK0IsR0FBRyxpQkFBaUIseUJBQXlCLGlCQUFpQix1QkFBdUIsdUJBQXVCLG1CQUFtQixHQUFHLHVCQUF1Qix5QkFBeUIsZ0JBQWdCLGdCQUFnQiwrQkFBK0IsR0FBRyxnQkFBZ0IseUJBQXlCLGlCQUFpQix1QkFBdUIsdUJBQXVCLG1CQUFtQixHQUFHLHNCQUFzQix5QkFBeUIsZ0JBQWdCLGdCQUFnQiwrQkFBK0IsR0FBRyxnQkFBZ0IseUJBQXlCLGlCQUFpQix1QkFBdUIsdUJBQXVCLG1CQUFtQixHQUFHLHNCQUFzQix5QkFBeUIsZ0JBQWdCLGdCQUFnQiwrQkFBK0IsR0FBRyxtQkFBbUIseUJBQXlCLGlCQUFpQix1QkFBdUIsdUJBQXVCLG1CQUFtQixHQUFHLHVCQUF1Qix5QkFBeUIsZ0JBQWdCLGdCQUFnQiwrQkFBK0IsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsbUJBQW1CLHNCQUFzQix1QkFBdUIsR0FBRyxtQkFBbUI7QUFDcG9LO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdE4xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0c7QUFDbEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUk0QztBQUNwRSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHcUY7QUFDSTtBQUM1Qzs7QUFFN0M7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLElBQUksd0RBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSwrQ0FBVztBQUNmLGdCQUFnQix3REFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQW9CO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFvQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBb0I7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQW9CO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFvQjtBQUNwQztBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSwwREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFhO0FBQ3pCLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUwsSUFBSSxpREFBUTtBQUNaLGdCQUFnQiwwREFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBaUI7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBaUI7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBaUI7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBaUI7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBaUI7QUFDakM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7QUFFdEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Ld0M7O0FBRXhDO0FBQ0E7O0FBRUEsbUNBQW1DLFlBQVk7O0FBRS9DOzs7QUFHQTs7QUFFQSx3QkFBd0Isd0NBQUk7QUFDNUI7QUFDQTtBQUNBLDJCQUEyQix3Q0FBSTtBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCLHdDQUFJO0FBQzlCOztBQUVBLDBCQUEwQix3Q0FBSTtBQUM5Qjs7QUFFQSwyQkFBMkIsd0NBQUk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBUztBQUNiO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEx3RTtBQUNPO0FBQ1k7O0FBRTNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNkNBQVMscUJBQXFCLDBEQUFpQixDQUFDLG9EQUFXO0FBQ25FO0FBQ0E7QUFDQSxRQUFRLGdEQUFVO0FBQ2xCOztBQUVBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQSxnQkFBZ0IsZ0RBQVU7QUFDMUIsYUFBYTtBQUNiOztBQUVBOzs7QUFHQTtBQUNBLGdCQUFnQiwwREFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBVztBQUMzQixvQ0FBb0MsMERBQWlCO0FBQ3JELHdCQUF3QixpREFBVztBQUNuQyx3QkFBd0IsaURBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBLG9CQUFvQixnREFBVTtBQUM5QixpQkFBaUI7QUFDakI7O0FBRUEsU0FBUzs7QUFFVDtBQUNBLGdCQUFnQiw2Q0FBUyxjQUFjLG9EQUFXO0FBQ2xEO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxZQUFZO0FBQzFFLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQSxZQUFZLGdEQUFVO0FBQ3RCO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBLG9CQUFvQixnREFBVTtBQUM5QixpQkFBaUI7QUFDakI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQVU7QUFDMUIsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBLHdCQUF3QixnREFBVTtBQUNsQyxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxxQ0FBcUMsOERBQWlCLENBQUMsd0RBQW9CLEVBQUUsa0RBQWM7QUFDM0Y7QUFDQSw0QkFBNEIsa0RBQWM7O0FBRTFDO0FBQ0Esb0JBQW9CLHdEQUFvQjtBQUN4QztBQUNBLG9CQUFvQixtREFBYTtBQUNqQyxrQkFBa0I7QUFDbEIsb0JBQW9CLG1EQUFhO0FBQ2pDO0FBQ0E7O0FBRUEsb0JBQW9CLGtEQUFjO0FBQ2xDLHdDQUF3Qyx3REFBb0I7QUFDNUQsNEJBQTRCLG9EQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBLHVDQUF1QyxJQUFJLDZDQUFTLGNBQWMsa0RBQWM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixnQ0FBZ0Msa0JBQWtCO0FBQ2xEO0FBQ0Esd0JBQXdCLGdEQUFVO0FBQ2xDLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLb0I7O0FBR0U7O0FBRWtCOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7OztBQUd0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwwREFBYTtBQUM3QixnQkFBZ0IsdURBQWE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwrQkFBK0I7QUFDbEY7O0FBRUE7QUFDQSxnQkFBZ0Isb0RBQU87QUFDdkIsY0FBYztBQUNkLGdCQUFnQixvREFBTztBQUN2Qjs7QUFFQTtBQUNBLGdCQUFnQixvREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7O0FBR0E7QUFDQTs7OztBQUkyRTs7Ozs7Ozs7VUM3TzNFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ob21lLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ob21lLmNzcz83ZjljIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01wbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3B1Q29udHJvbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hhbmRsZUF0dGFja3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuXG5cbmJvZHkgeyBcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTAwMzQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGdhcDogNTBweDtcbn1cblxuI3RpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgY29sb3I6ICM0ZTRlNTA7XG59XG5cbiNtYWluQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi5tZXNzYWdlQm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzczNzM3LCAjMjkyOTI5LCAjMjkyOTI5LCAjMzczNzM3KTtcbn1cbiAgXG5cblxuLmJvYXJkc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTAwcHg7XG59XG5cbi5ib2FyZFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYm9hcmROYW1lIHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbn0gXG5cbi5ib2FyZHNEaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0NXB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KDEwLCA0NXB4KTtcbiAgICBnYXA6IDVweDtcbn1cblxuLmJveERpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWF4LWhlaWdodDogNDVweDtcbiAgICBtYXgtd2lkdGg6IDQ1cHg7XG59XG5cbi5lbmVteUJveGVzOmhvdmVyIHtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmJveERpc3BsYXkgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgei1pbmRleDogLTI7XG59XG5cbi8qIC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59ICovXG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcbn1cblxuLmJveERpc3BsYXkuaGl0OjphZnRlciwgXG4uYm94RGlzcGxheS5taXNzZWRBdHRhY2s6OmFmdGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxNXB4OyBcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgei1pbmRleDoyOyBcbn1cblxuLmJveERpc3BsYXkubWlzc2VkQXR0YWNrOjphZnRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmVuZW15Qm94ZXMuaGl0OmhvdmVyLFxuLmVuZW15Qm94ZXMuYm94RGlzcGxheS5taXNzZWRBdHRhY2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ1LCA0NSk7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmNhcnJpZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICBtaW4td2lkdGg6IDIyNXB4O1xuICAgIG1heC13aWR0aDogMjI1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uY2Fycmllci55QXhpcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmJhdHRsZXNoaXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA3NXB4O1xuICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5iYXR0bGVzaGlwLnlBeGlzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA3NXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5kZXN0cm95ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MHB4O1xuICAgIG1pbi13aWR0aDogMTM1cHg7XG4gICAgbWF4LXdpZHRoOiAxMzVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5kZXN0cm95ZXIueUF4aXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnN1Ym1hcmluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDM1cHg7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLnN1Ym1hcmluZS55QXhpcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMzVweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG5cbi5wYXRyb2xCb2F0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTBweDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucGF0cm9sQm9hdC55QXhpcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG5cbi5kZWNsYXJlV2lubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5RUFBeUU7QUFDN0U7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcblxcblxcbmJvZHkgeyBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDAzNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgY29sb3I6ICM0ZTRlNTA7XFxufVxcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLm1lc3NhZ2VCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNzM3MzcsICMyOTI5MjksICMyOTI5MjksICMzNzM3MzcpO1xcbn1cXG4gIFxcblxcblxcbi5ib2FyZHNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmJvYXJkU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYm9hcmROYW1lIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbn0gXFxuXFxuLmJvYXJkc0Rpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoMTAsIDQ1cHgpO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmJveERpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWF4LWhlaWdodDogNDVweDtcXG4gICAgbWF4LXdpZHRoOiA0NXB4O1xcbn1cXG5cXG4uZW5lbXlCb3hlczpob3ZlciB7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJveERpc3BsYXkgaW1nIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICB6LWluZGV4OiAtMjtcXG59XFxuXFxuLyogLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xcbn1cXG5cXG4uYm94RGlzcGxheS5oaXQ6OmFmdGVyLCBcXG4uYm94RGlzcGxheS5taXNzZWRBdHRhY2s6OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTVweDsgXFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxcbiAgICB6LWluZGV4OjI7IFxcbn1cXG5cXG4uYm94RGlzcGxheS5taXNzZWRBdHRhY2s6OmFmdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVuZW15Qm94ZXMuaGl0OmhvdmVyLFxcbi5lbmVteUJveGVzLmJveERpc3BsYXkubWlzc2VkQXR0YWNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDUsIDQ1KTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEwMHB4O1xcbiAgICBtaW4td2lkdGg6IDIyNXB4O1xcbiAgICBtYXgtd2lkdGg6IDIyNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5jYXJyaWVyLnlBeGlzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmJhdHRsZXNoaXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDc1cHg7XFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxuICAgIG1heC13aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmJhdHRsZXNoaXAueUF4aXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNzVweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5kZXN0cm95ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogMTM1cHg7XFxuICAgIG1heC13aWR0aDogMTM1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmRlc3Ryb3llci55QXhpcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnN1Ym1hcmluZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMzVweDtcXG4gICAgbWluLXdpZHRoOiAxNjBweDtcXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uc3VibWFyaW5lLnlBeGlzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDM1cHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG5cXG4ucGF0cm9sQm9hdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGF0cm9sQm9hdC55QXhpcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLmRlY2xhcmVXaW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY29kZSBmb3IgcmVtb3ZpbmcgYWxsIHByZXZpb3VzIGVsZW1lbnQgaW4gXG4vLyBcbi8vIFxuLy8gXG4vLyBcbi8vIFxuXG5cbmltcG9ydCB7Z2FtZUJvYXJkLCBwbGF5ZXJHYW1lQm9hcmRBcnJheSwgcGxheWVyU2hpcE9ianMsIHBsYXllckhlYWRzfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7Z2VuZXJhdGVDcHVBdHRhY2ssIGNwdUdhbWVCb2FyZEFycmF5LCBjcHVTaGlwT2JqcywgY3B1SGVhZHN9IGZyb20gJy4vY3B1Q29udHJvbCc7XG5pbXBvcnQge2hhbmRsZUF0dGFja3N9IGZyb20gJy4vaGFuZGxlQXR0YWNrcydcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluQ29udGFpbmVyJyk7XG5jb25zdCBtZXNzYWdlQm94ID0gY3JlYXRlRGl2KCdtZXNzYWdlQm94Jyk7XG5cblxuY29uc3QgcGxheWVyTmFtZSA9ICdTYW1pcidcbmNvbnN0IHBsYXllckJveERpdnMgPSBbXTtcbmNvbnN0IGNwdUJveERpdnMgPSBbXTtcbmNvbnN0IHBsYXllclNoaXBQaWNzID0gW107XG5jb25zdCBjcHVTaGlwUGljcyA9IFtdO1xuXG5cblxuZnVuY3Rpb24gZGlzcGxheUJvYXJkcyAoKSB7XG5cbiAgICBsZXQgbWVzc2FnZSA9IGBBd2FpdGluZyBvcmRlcnMsIEFkbWlyYWwgJHtwbGF5ZXJOYW1lfWA7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtZXNzYWdlQm94LnRleHRDb250ZW50ICs9IChtZXNzYWdlLmNoYXJBdChpKSk7XG4gICAgICAgIH0sIDMwICogaSk7XG4gICAgfVxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlQm94KTtcbiAgICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gY3JlYXRlRGl2KCdib2FyZFNlY3Rpb24nKTsgIFxuICAgIGNvbnN0IHBsYXllckJvYXJkTmFtZSA9IGNyZWF0ZURpdignYm9hcmROYW1lJywgJ0ZSSUVORExZIFdBVEVSUycpO1xuICAgIGNvbnN0IHBsYXllckRpc3BsYXlCb2FyZCA9IGNyZWF0ZURpdignYm9hcmRzRGlzcGxheScpO1xuXG4gICAgcGxheWVyU2VjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZE5hbWUpO1xuICAgIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVyRGlzcGxheUJvYXJkKTtcblxuXG4gICAgcGxheWVyR2FtZUJvYXJkQXJyYXkuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllckJveCA9IGNyZWF0ZURpdignYm94RGlzcGxheScsIHVuZGVmaW5lZCwgaW5kZXgpO1xuICAgICAgICBwbGF5ZXJCb3hEaXZzLnB1c2gocGxheWVyQm94KTtcbiAgICAgICAgcGxheWVyRGlzcGxheUJvYXJkLmFwcGVuZENoaWxkKHBsYXllckJveCk7XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJIZWFkcy5mb3JFYWNoKHNwb3QgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBsYXllckdhbWVCb2FyZEFycmF5W3Nwb3RdKSB7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgY29uc3QgY2FycmllclBpYyA9IGNyZWF0ZUltZyhcImNhcnJpZXJcIik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGljcy5wdXNoKGNhcnJpZXJQaWMpO1xuICAgICAgICAgICAgcGxheWVyQm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChjYXJyaWVyUGljKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDEpIGNhcnJpZXJQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjb25zdCBiYXR0bGVzaGlwUGljID0gY3JlYXRlSW1nKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgICAgIHBsYXllclNoaXBQaWNzLnB1c2goYmF0dGxlc2hpcFBpYyk7XG4gICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW3Nwb3RdLmFwcGVuZENoaWxkKGJhdHRsZXNoaXBQaWMpO1xuICAgICAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gMikgYmF0dGxlc2hpcFBpYy5jbGFzc0xpc3QuYWRkKCd5QXhpcycpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzogXG4gICAgICAgICAgICBjb25zdCBkZXN0cm95ZXJQaWMgPSBjcmVhdGVJbWcoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGljcy5wdXNoKGRlc3Ryb3llclBpYyk7XG4gICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW3Nwb3RdLmFwcGVuZENoaWxkKGRlc3Ryb3llclBpYyk7XG4gICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbc3BvdCArIDFdICE9PSAzKSBkZXN0cm95ZXJQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBjb25zdCBzdWJtYXJpbmVQaWMgPSBjcmVhdGVJbWcoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGljcy5wdXNoKHN1Ym1hcmluZVBpYyk7XG4gICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW3Nwb3RdLmFwcGVuZENoaWxkKHN1Ym1hcmluZVBpYyk7XG4gICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbc3BvdCArIDFdICE9PSA0KSBzdWJtYXJpbmVQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU6IFxuICAgICAgICAgICAgY29uc3QgcGF0cm9sQm9hdCA9IGNyZWF0ZUltZyhcInBhdHJvbEJvYXRcIik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGljcy5wdXNoKHBhdHJvbEJvYXQpO1xuICAgICAgICAgICAgcGxheWVyQm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChwYXRyb2xCb2F0KTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDUpIHBhdHJvbEJvYXQuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGVuZW15U2VjdGlvbiA9IGNyZWF0ZURpdignYm9hcmRTZWN0aW9uJylcbiAgICBjb25zdCBlbmVteUJvYXJkTmFtZSA9IGNyZWF0ZURpdignYm9hcmROYW1lJywgJ0VORU1ZIFdBVEVSUycpO1xuICAgIGNvbnN0IGNwdURpc3BsYXlCb2FyZCA9IGNyZWF0ZURpdignYm9hcmRzRGlzcGxheScpO1xuXG4gICAgZW5lbXlTZWN0aW9uLmFwcGVuZENoaWxkKGVuZW15Qm9hcmROYW1lKTtcbiAgICBlbmVteVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3B1RGlzcGxheUJvYXJkKTsgICAgXG5cbiAgICBjcHVHYW1lQm9hcmRBcnJheS5mb3JFYWNoKChib3gsaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY3B1Qm94ID0gY3JlYXRlRGl2KCdib3hEaXNwbGF5JywgdW5kZWZpbmVkLCBpbmRleCk7XG4gICAgICAgIGNwdUJveC5jbGFzc0xpc3QuYWRkKCdlbmVteUJveGVzJylcbiAgICAgICAgY3B1Qm94RGl2cy5wdXNoKGNwdUJveCk7XG4gICAgICAgIGNwdUJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZUF0dGFja3MoY3B1Qm94LCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjcHVEaXNwbGF5Qm9hcmQuYXBwZW5kQ2hpbGQoY3B1Qm94KTtcbiAgICB9KTtcblxuICAgIGNwdUhlYWRzLmZvckVhY2goc3BvdCA9PiB7XG4gICAgICAgIHN3aXRjaCAoY3B1R2FtZUJvYXJkQXJyYXlbc3BvdF0pIHtcbiAgICAgICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICBjb25zdCBjYXJyaWVyUGljID0gY3JlYXRlSW1nKFwiY2FycmllclwiKTtcbiAgICAgICAgICAgIGNhcnJpZXJQaWMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBjcHVTaGlwUGljcy5wdXNoKGNhcnJpZXJQaWMpO1xuICAgICAgICAgICAgY3B1Qm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChjYXJyaWVyUGljKTtcbiAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDEpIGNhcnJpZXJQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjb25zdCBiYXR0bGVzaGlwUGljID0gY3JlYXRlSW1nKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXBQaWMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBjcHVTaGlwUGljcy5wdXNoKGJhdHRsZXNoaXBQaWMpO1xuICAgICAgICAgICAgY3B1Qm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChiYXR0bGVzaGlwUGljKTtcbiAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDIpIGJhdHRsZXNoaXBQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgY29uc3QgZGVzdHJveWVyUGljID0gY3JlYXRlSW1nKFwiZGVzdHJveWVyXCIpO1xuICAgICAgICAgICAgZGVzdHJveWVyUGljLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgY3B1U2hpcFBpY3MucHVzaChkZXN0cm95ZXJQaWMpO1xuICAgICAgICAgICAgY3B1Qm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChkZXN0cm95ZXJQaWMpO1xuICAgICAgICAgICAgaWYgKGNwdUdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gMykgZGVzdHJveWVyUGljLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgY29uc3Qgc3VibWFyaW5lUGljID0gY3JlYXRlSW1nKFwic3VibWFyaW5lXCIpO1xuICAgICAgICAgICAgc3VibWFyaW5lUGljLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgY3B1U2hpcFBpY3MucHVzaChzdWJtYXJpbmVQaWMpO1xuICAgICAgICAgICAgY3B1Qm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChzdWJtYXJpbmVQaWMpO1xuICAgICAgICAgICAgaWYgKGNwdUdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gNCkgc3VibWFyaW5lUGljLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1OiBcbiAgICAgICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBjcmVhdGVJbWcoXCJwYXRyb2xCb2F0XCIpO1xuICAgICAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNwdVNoaXBQaWNzLnB1c2gocGF0cm9sQm9hdCk7XG4gICAgICAgICAgICBjcHVCb3hEaXZzW3Nwb3RdLmFwcGVuZENoaWxkKHBhdHJvbEJvYXQpO1xuICAgICAgICAgICAgaWYgKGNwdUdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gNSkgcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKCd5QXhpcycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGNyZWF0ZURpdignYm9hcmRzQ29udGFpbmVyJyk7XG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclNlY3Rpb24pO1xuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteVNlY3Rpb24pO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpO1xuXG4gICAgLy9cbn07XG5cblxuZnVuY3Rpb24gY3JlYXRlRGl2IChjbGFzc05hbWUsIHRleHQsIHZhbHVlQW1vdW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRpdi52YWx1ZSA9IHZhbHVlQW1vdW50O1xuXG4gICAgcmV0dXJuIGRpdlxufSBcblxuZnVuY3Rpb24gY3JlYXRlSW1nIChjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGltZy5zcmMgPSBgLi9zaGlwc1BpYy8ke2NsYXNzTmFtZX0ucG5nYDtcblxuICAgIHJldHVybiBpbWdcbn1cblxuXG5cblxuXG5leHBvcnQge2Rpc3BsYXlCb2FyZHMsIHBsYXllckJveERpdnMsIGNwdVNoaXBQaWNzLCBwbGF5ZXJTaGlwUGljcywgbWVzc2FnZUJveH0iLCJpbXBvcnQge1NoaXAsIGdhbWVCb2FyZH0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IGNwdUdhbWVCb2FyZEFycmF5ID0gbmV3IEFycmF5KDEwMCkuZmlsbCgwKTtcbmNvbnN0IGNwdVNoaXBPYmpzID0gW107XG5cbmNvbnN0IHN0b3JlZEF0dGFja3MgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMDB9LCAoKSA9PiAwKTtcblxuY29uc3QgY3B1SGVhZHMgPSBbXVxuXG5cbmZ1bmN0aW9uIHBsYWNlQ3B1U2hpcHMgKCkge1xuXG4gICAgY29uc3QgY2FycmllciA9IG5ldyBTaGlwKDUsIDAsIGZhbHNlKTtcbiAgICBjcHVTaGlwT2Jqcy5wdXNoKGNhcnJpZXIpO1xuICAgIFxuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0LCAwLCBmYWxzZSk7XG4gICAgY3B1U2hpcE9ianMucHVzaChiYXR0bGVzaGlwKTtcbiBcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcCgzLCAwLCBmYWxzZSk7XG4gICAgY3B1U2hpcE9ianMucHVzaChkZXN0cm95ZXIpO1xuXG4gICAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoMywgMCwgZmFsc2UpO1xuICAgIGNwdVNoaXBPYmpzLnB1c2goc3VibWFyaW5lKTtcblxuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyLCAwLCBmYWxzZSk7XG4gICAgY3B1U2hpcE9ianMucHVzaChwYXRyb2xCb2F0KTtcbiAgICBcbiAgICBsZXQgc2hpcENvdW50ZXIgPSAxO1xuXG4gICAgY3B1U2hpcE9ianMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgbGV0IG1vZGlmaWVkQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGNvbnRpbnVlTG9vcCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpOyAvLyAwID0geCwgMSA9IHlcbiAgICAgICAgY3B1R2FtZUJvYXJkQXJyYXkuZm9yRWFjaCgoYm9hcmRFbGVtZW50LCBib2FyZEluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoYm9hcmRFbGVtZW50ID09PSAwKSBtb2RpZmllZEFycmF5LnB1c2goYm9hcmRJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSAwO1xuXG4gICAgICAgIGlmICghYXhpcykge1xuICAgICAgICAgICAgd2hpbGUgKGNvbnRpbnVlTG9vcCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWxpZFBsYWNlbWVudCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdERpZ2l0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kRGlnaXQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcblxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTnVtYmVyKGZpcnN0RGlnaXQudG9TdHJpbmcoKSArIHNlY29uZERpZ2l0LnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbUluZGV4ICsgc2hpcC5sZW5ndGggLSAxID4gZmlyc3REaWdpdCAqIDEwICsgOSkge1xuICAgICAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IChmaXJzdERpZ2l0ICogMTAgKyA5KSAtIHNoaXAubGVuZ3RoICsgMSBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNwdUdhbWVCb2FyZEFycmF5W3JhbmRvbUluZGV4ICsgaV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkUGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3B1R2FtZUJvYXJkQXJyYXlbcmFuZG9tSW5kZXggKyBpXSA9IHNoaXBDb3VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gZXhpdCBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZUxvb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChjb250aW51ZUxvb3ApIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRQbGFjZW1lbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3REaWdpdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZERpZ2l0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG5cbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IE51bWJlcihmaXJzdERpZ2l0LnRvU3RyaW5nKCkgKyBzZWNvbmREaWdpdC50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbmRleCArICgoc2hpcC5sZW5ndGggLTEpICogMTApID4gOTkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gKDk5IC0gcmFuZG9tSW5kZXgpOyAgICBcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtyYW5kb21JbmRleCArIChpKjEwKV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh2YWxpZFBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwdUdhbWVCb2FyZEFycmF5W3JhbmRvbUluZGV4ICsgKGkqMTApXSA9IHNoaXBDb3VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGV4aXQgd2hpbGUgbG9vcFxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZUxvb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSAgICAgXG4gICAgICAgIH1cbiAgICBjcHVIZWFkcy5wdXNoKHJhbmRvbUluZGV4KVxuICAgIHNoaXBDb3VudGVyKys7XG4gfSlcbi8vICBjb25zb2xlLmxvZyhjcHVHYW1lQm9hcmRBcnJheSlcbiByZXR1cm4gY3B1R2FtZUJvYXJkQXJyYXlcbn1cblxuXG5cblxubGV0IG9yaWdpbmFsVmFsdWUgPSAxMDA7XG5sZXQgYm90aE1pc3NlZENvdW50ZXIgPSAwO1xubGV0IGlmTWlzc2VkID0gZmFsc2U7XG5cbmNvbnN0ICBnZW5lcmF0ZUNwdUF0dGFjayA9IChnYW1lQm9hcmRBcnJheSwgc2hpcE9ianMsIGN1cnJlbnRUdXJuKSA9PiB7XG4gICAgbGV0IGF0dGFja1ZhbHVlO1xuICAgIGxldCBmb3VuZEhpdDtcbiAgICBsZXQgaW5kZXhIaXQ7IFxuICAgXG4gICAgaWYgKGlmTWlzc2VkKSB7XG4gICAgICAgIGZvdW5kSGl0ID0gdHJ1ZTtcbiAgICAgICAgaW5kZXhIaXQgPSBvcmlnaW5hbFZhbHVlOyBcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3VuZEhpdCA9IHN0b3JlZEF0dGFja3MuZmluZCgoc2hpcEJveCkgPT4gc2hpcEJveCA9PT0gXCJoaXRcIik7XG4gICAgICAgIGluZGV4SGl0ID0gc3RvcmVkQXR0YWNrcy5pbmRleE9mKGZvdW5kSGl0KTtcbiAgICB9XG5cbiAgICBpZiAoZm91bmRIaXQgJiYgYm90aE1pc3NlZENvdW50ZXIgPCAyKSB7XG4gICAgICAgIGlmIChzdG9yZWRBdHRhY2tzW2luZGV4SGl0ICsgMV0gPT09IDAgJiYgaW5kZXhIaXQgKyAxIDw9IDk5KSB7XG4gICAgICAgICAgICBhdHRhY2tWYWx1ZSA9IGluZGV4SGl0ICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChzdG9yZWRBdHRhY2tzW2luZGV4SGl0IC0gMSBdID09PSAwICYmIGluZGV4SGl0IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICBhdHRhY2tWYWx1ZSA9IGluZGV4SGl0IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhdHRhY2tpbmdBcnJheSA9IHN0b3JlZEF0dGFja3MubWFwKChzcG90LCBpbmRleCkgPT4gKHNwb3QgPT09IDAgPyBpbmRleCA6IHVuZGVmaW5lZCkpXG4gICAgICAgIC5maWx0ZXIoaW5kZXggPT4gaW5kZXggIT09IHVuZGVmaW5lZCk7ICAgICAgICBcbiAgICAgICAgYXR0YWNrVmFsdWUgPSBhdHRhY2tpbmdBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYXR0YWNraW5nQXJyYXkubGVuZ3RoKV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSBlbHNlIGlmIChmb3VuZEhpdCAmJiBib3RoTWlzc2VkQ291bnRlciA+PSAyKSB7XG4gICAgICAgIGlmIChzdG9yZWRBdHRhY2tzW2luZGV4SGl0ICsgMTAgXSA9PT0gMCAmJiBpbmRleEhpdCArIDEwIDw9IDk5KSB7XG4gICAgICAgICAgICBhdHRhY2tWYWx1ZSA9IGluZGV4SGl0ICsgMTA7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RvcmVkQXR0YWNrc1tpbmRleEhpdCAtIDEwIF0gPT09IDAgJiYgaW5kZXhIaXQgLSAxMCA+PSAwKSB7XG4gICAgICAgICAgICBhdHRhY2tWYWx1ZSA9IGluZGV4SGl0IC0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNraW5nQXJyYXkgPSBzdG9yZWRBdHRhY2tzLm1hcCgoc3BvdCwgaW5kZXgpID0+IChzcG90ID09PSAwID8gaW5kZXggOiB1bmRlZmluZWQpKVxuICAgICAgICAuZmlsdGVyKGluZGV4ID0+IGluZGV4ICE9PSB1bmRlZmluZWQpOyAgICAgICAgXG4gICAgICAgIGF0dGFja1ZhbHVlID0gYXR0YWNraW5nQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmF0dGFja2luZ0FycmF5Lmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGF0dGFja2luZ0FycmF5ID0gc3RvcmVkQXR0YWNrcy5tYXAoKHNwb3QsIGluZGV4KSA9PiAoc3BvdCA9PT0gMCA/IGluZGV4IDogdW5kZWZpbmVkKSlcbiAgICAgICAgLmZpbHRlcihpbmRleCA9PiBpbmRleCAhPT0gdW5kZWZpbmVkKTsgICAgICAgIFxuICAgICAgICBhdHRhY2tWYWx1ZSA9IGF0dGFja2luZ0FycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphdHRhY2tpbmdBcnJheS5sZW5ndGgpXTtcbiAgICB9XG4gICAgXG4gICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrVmFsdWUsZ2FtZUJvYXJkQXJyYXksIHNoaXBPYmpzLCBjdXJyZW50VHVybik7XG4gICAgcmV0dXJuIGF0dGFja1ZhbHVlXG59XG5cblxuY29uc3QgY3B1SGl0cyA9IGNvb3JkaW5hdGVWYWwgPT4ge1xuICAgIGlmIChzdG9yZWRBdHRhY2tzLmluZGV4T2YoJ2hpdCcpICE9PSAtMSkge1xuICAgICAgICBzdG9yZWRBdHRhY2tzW3N0b3JlZEF0dGFja3MuaW5kZXhPZignaGl0JyldID0gJ2hpdHRlbic7XG4gICAgICAgIHN0b3JlZEF0dGFja3NbY29vcmRpbmF0ZVZhbF0gPSAnaGl0JztcbiAgICAgICAgaWZNaXNzZWQgPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlZEF0dGFja3NbY29vcmRpbmF0ZVZhbF0gPSAnaGl0JztcbiAgICAgICAgb3JpZ2luYWxWYWx1ZSA9IGNvb3JkaW5hdGVWYWw7XG4gICAgfVxufVxuXG5jb25zdCBjcHVNaXNzID0gY29vcmRpbmF0ZVZhbCA9PiB7XG4gICAgc3RvcmVkQXR0YWNrc1tjb29yZGluYXRlVmFsXSA9ICdtaXNzJztcbiAgICBpZiAoIShvcmlnaW5hbFZhbHVlID09PSAxMDApKSB7XG4gICAgICAgIGlmTWlzc2VkID0gdHJ1ZTtcbiAgICAgICAgYm90aE1pc3NlZENvdW50ZXIrK1xuICAgIH1cbn1cblxuY29uc3QgY3B1U3VuayA9IGNvb3JkaW5hdGVWYWwgPT4ge1xuICAgIHN0b3JlZEF0dGFja3NbY29vcmRpbmF0ZVZhbF0gPSAnc3Vua2VkJzsgXG4gICAgb3JpZ2luYWxWYWx1ZSA9IDEwMDtcbiAgICBib3RoTWlzc2VkQ291bnRlciA9IDA7XG59IFxuXG5cblxuZXhwb3J0IHtcbiAgICBwbGFjZUNwdVNoaXBzLFxuICAgIGdlbmVyYXRlQ3B1QXR0YWNrLFxuICAgIGNwdUhpdHMsIFxuICAgIGNwdU1pc3MsXG4gICAgY3B1U3VuayxcbiAgICBjcHVHYW1lQm9hcmRBcnJheSxcbiAgICBjcHVTaGlwT2JqcyxcbiAgICBjcHVIZWFkc1xufSIsImltcG9ydCB7Z2FtZUJvYXJkLCBwbGF5ZXJHYW1lQm9hcmRBcnJheSwgcGxheWVyU2hpcE9ianN9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtnZW5lcmF0ZUNwdUF0dGFjaywgY3B1R2FtZUJvYXJkQXJyYXksIGNwdVNoaXBPYmpzfSBmcm9tICcuL2NwdUNvbnRyb2wnO1xuaW1wb3J0IHtwbGF5ZXJCb3hEaXZzLCBjcHVTaGlwUGljcywgcGxheWVyU2hpcFBpY3MsIG1lc3NhZ2VCb3gsIGF3YWl0aW5nfSBmcm9tICcuL0RPTXBsYXknO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250YWluZXInKTtcblxuY29uc3Qgc2hvdEZpcmVkTXAzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3RGaXJlZCcpXG5jb25zdCBzaG90SGl0TXAzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3RIaXQnKVxuY29uc3Qgc2hvdE1pc3NlZE1wMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG90TWlzc2VkJylcblxuIFxuXG5cblxuY29uc3QgcGxheWVyTmFtZSA9ICdTYW1pcic7XG5sZXQgY3B1RmluaXNoZWQgPSBmYWxzZTtcbmxldCBvbmVUaW1lID0gMDtcbmxldCBtZXNzYWdlID0gJyc7XG5sZXQgZXh0cmEgPSAnJztcblxuXG5mdW5jdGlvbiBoYW5kbGVBdHRhY2tzIChjcHVCb3gsIGluZGV4KSB7XG5cbiAgICBjb25zdCBkZWNsYXJlV2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVjbGFyZVdpbm5lci5jbGFzc0xpc3QuYWRkKCdkZWNsYXJlV2lubmVyJyk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3B1RmluaXNoZWQgfHwgb25lVGltZSAhPT0gMCkgcmV0dXJuXG4gICAgaWYgKGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4LGNwdUdhbWVCb2FyZEFycmF5LGNwdVNoaXBPYmpzLCAncGxheWVyVHVybicpKSB7XG4gICAgICAgIGNwdUZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICBsZXQgYXR0YWNrZWRJbmRleCA9IGluZGV4XG4gICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBtZXNzYWdlID0gJ1lvdSBmaXJlIGEgc2hvdCBpbnRvIGVuZW15IHdhdGVycyAuLi4uLi4gJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCArPSAobWVzc2FnZS5jaGFyQXQoaSkpO1xuICAgICAgICAgICAgfSwgMzAgKiBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3RGaXJlZE1wMy5wbGF5KCk7XG5cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVthdHRhY2tlZEluZGV4XSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICAgICAgZXh0cmEgPSAnIGFuZCBtaXNzLidcbiAgICAgICAgICAgICAgICBzaG90TWlzc2VkTXAzKCk7XG4gICAgICAgICAgICAgICAgY3B1Qm94LmNsYXNzTGlzdC5hZGQoJ21pc3NlZEF0dGFjaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRyYSA9IFwiIGFuZCBpdCdzIGEgaGl0IVwiXG4gICAgICAgICAgICAgICAgY3B1Qm94LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgIHNob3RIaXRNcDMucGxheSgpXG4gICAgICAgICAgICAgICAgY3B1U2hpcE9ianMuZm9yRWFjaCgob2JqLCBpbmRleCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouc3VuayAmJiBjcHVHYW1lQm9hcmRBcnJheVthdHRhY2tlZEluZGV4XS5pbmNsdWRlcyhpbmRleCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcHVTaGlwUGljc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcHVTaGlwUGljc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBleHRyYSA9IGBZb3Ugc3VuayB0aGVpciBDYXJyaWVyISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiBleHRyYSA9IGBZb3Ugc3VuayB0aGVpciBCYXR0bGVTaGlwISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiBleHRyYSA9IGBZb3Ugc3VuayB0aGVpciBEZXN0cm95ZXIhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IGV4dHJhID0gYFlvdSBzdW5rIHRoZWlyIFN1Ym1hcmluZSEgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogZXh0cmEgPSBgWW91IHN1bmsgdGhlaXIgUGF0cm9sIEJvYXQhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4dHJhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCArPSAoZXh0cmEuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICB9LCAzMCAqIGkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIDE1MDApXG5cbiAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGdhbWVCb2FyZC5lbmRHYW1lQ2hlY2soY3B1U2hpcE9ianMpKSB7XG4gICAgICAgICAgICAvLyBjb2RlIHRvIHJlbW92ZSBldmVyeXRoaW5nIHdpdGhpbiBpdFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2xhcmVXaW5uZXIpO1xuICAgICAgICAgICAgZGVjbGFyZVdpbm5lci50ZXh0Q29udGVudCA9IGAgV2lubmVyIGlzIEdlbmVyYWwgJHtwbGF5ZXJOYW1lfSAhIWA7XG4gICAgICAgICAgICB9LCAyMjAwKVxuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgbWVzc2FnZSA9ICdZb3VyIG9wcG9uZW50IGlzIGFpbWluZyAuLi4uLi4gJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgKz0gKG1lc3NhZ2UuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICB9LCAzMCAqIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMzAwMClcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdUaGUgZW5lbXkgZmlyZXMgYSBzaG90IGludG8geW91ciB3YXRlcnMgLi4uLi4uICdcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm94LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQm94LnRleHRDb250ZW50ICs9IChtZXNzYWdlLmNoYXJBdChpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwICogaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgY3B1QXR0YWNrVmFsdWUgPSBnZW5lcmF0ZUNwdUF0dGFjayhwbGF5ZXJHYW1lQm9hcmRBcnJheSwgcGxheWVyU2hpcE9ianMsICdjcHVUdXJuJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyU2hpcE9ianMpXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbY3B1QXR0YWNrVmFsdWVdID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmEgPSAnIGFuZCBtaXNzZXMuJ1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW2NwdUF0dGFja1ZhbHVlXS5jbGFzc0xpc3QuYWRkKCdtaXNzZWRBdHRhY2snKSAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW2NwdUF0dGFja1ZhbHVlXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmEgPSBcIml0J3MgYSBoaXQhXCIgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBPYmpzLmZvckVhY2goKG9iaiwgaW5kZXgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5zdW5rICYmIHBsYXllckdhbWVCb2FyZEFycmF5W2NwdUF0dGFja1ZhbHVlXS5pbmNsdWRlcyhpbmRleCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcFBpY3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBleHRyYSA9IGB0aGV5IHN1bmsgeW91ciBDYXJyaWVyISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IGV4dHJhID0gYHRoZXkgc3VuayB5b3VyIEJhdHRsZVNoaXAhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjogZXh0cmEgPSBgdGhleSBzdW5rIHlvdXIgRGVzdHJveWVyISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IGV4dHJhID0gYHRoZXkgc3VuayB5b3VyIFN1Ym1hcmluZSEgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiBleHRyYSA9IGB0aGV5IHN1bmsgeW91ciBQYXRyb2wgQm9hdCEgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7aWYgKGdhbWVCb2FyZC5lbmRHYW1lQ2hlY2socGxheWVyU2hpcE9ianMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2xhcmVXaW5uZXIpO1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJlV2lubmVyLnRleHRDb250ZW50ID0gYCBXaW5uZXIgaXMgQ1BVYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHRyYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCArPSAoZXh0cmEuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAgKiBpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3B1RmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgb25lVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgfSwgOTAwKVxuICAgICAgICAgICAgfSwgNzAwMCk7IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICB9LCA1MDApICAgXG59XG5cblxuXG5leHBvcnQge2hhbmRsZUF0dGFja3N9IiwiaW1wb3J0ICcuL2hvbWUuY3NzJztcblxuaW1wb3J0IHtwbGFjZUNwdVNoaXBzLGNwdUhpdHMsIGNwdU1pc3MsY3B1U3Vua1xufSBmcm9tICcuL2NwdUNvbnRyb2wnO1xuXG5pbXBvcnQge2Rpc3BsYXlCb2FyZHN9IGZyb20gJy4vRE9NcGxheSc7XG5cbi8vR2xvYmFsIHZhbHVlXG5jb25zdCBwbGF5ZXJTaGlwT2JqcyA9IFtdO1xuY29uc3QgcGxheWVySGVhZHMgPSBbXTtcbmNvbnN0IHBsYXllckdhbWVCb2FyZEFycmF5ID0gbmV3IEFycmF5KDEwMCkuZmlsbCgwKTtcbmxldCBnYW1lRW5kID0gZmFsc2Vcbi8vIGp1c3QgZm9yIG5vd1xubGV0IGF4aXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpOyAvLyAwID0geCwgMSA9IHk7XG5cblxuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IgKGxlbmd0aCwgaGl0cywgc3Vuaykge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gaGl0cztcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICB9XG5cbiAgICBpc1N1bmsgKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmNvbnN0IGdhbWVCb2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZXJyb3JJbnZhbGlkUG9zaXRpb24gPSBcImNhbid0IHBsYWNlIHlvdXIgc2hpcCBoZXJlXCI7XG4gICAgbGV0IHNoaXBDb3VudGVyID0gMTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IHZhbHVlID0+IHtcbiAgICAgICAgbGV0IHBsYXllclNoaXBBcnJheSA9IFtdO1xuICAgICAgICBheGlzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKVxuICAgICAgICBpZiAoc2hpcENvdW50ZXIgPiA1KSByZXR1cm4gXCJhbGwgc2hpcHMgcGxhY2VkXCJcbiAgICAgICAgc3dpdGNoIChzaGlwQ291bnRlcikge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRQbGFjZW1lbnQoNSwgdmFsdWUsIHBsYXllclNoaXBBcnJheSwgc2hpcENvdW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JJbnZhbGlkUG9zaXRpb25cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1LCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcE9ianMucHVzaChjYXJyaWVyKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZFBsYWNlbWVudCg0LCB2YWx1ZSwgcGxheWVyU2hpcEFycmF5LCBzaGlwQ291bnRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvckludmFsaWRQb3NpdGlvblxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwT2Jqcy5wdXNoKGJhdHRsZXNoaXApXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRQbGFjZW1lbnQoMywgdmFsdWUsIHBsYXllclNoaXBBcnJheSwgc2hpcENvdW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JJbnZhbGlkUG9zaXRpb25cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDMsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwT2Jqcy5wdXNoKGRlc3Ryb3llcilcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDogXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZFBsYWNlbWVudCgzLCB2YWx1ZSwgcGxheWVyU2hpcEFycmF5LCBzaGlwQ291bnRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvckludmFsaWRQb3NpdGlvbiBcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKDMsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwT2Jqcy5wdXNoKHN1Ym1hcmluZSlcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgNTogXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZFBsYWNlbWVudCgyLCB2YWx1ZSwgcGxheWVyU2hpcEFycmF5LCBzaGlwQ291bnRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvckludmFsaWRQb3NpdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoMiwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBPYmpzLnB1c2gocGF0cm9sQm9hdClcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgLy8gZXh0cmEgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgaWYgKHBsYXllclNoaXBBcnJheSA9PT0gW10pIHJldHVybiBlcnJvckludmFsaWRQb3NpdGlvblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBwbGF5ZXJTaGlwQXJyYXkgKXtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbZWxlbWVudF0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfSBlbHNlIHBsYXllckdhbWVCb2FyZEFycmF5W2VsZW1lbnRdID0gc2hpcENvdW50ZXI7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcENvdW50ZXIrKztcbiAgICAgICAgICAgIHBsYXllckhlYWRzLnB1c2godmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAoc2hpcENvdW50ZXIgPiA1KSB7XG4gICAgICAgICAgICAgICAgcGxhY2VDcHVTaGlwcygpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlCb2FyZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbGF5ZXJTaGlwQXJyYXlcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlVmFsLCBnYW1lQm9hcmRBcnJheSwgc2hpcE9ianMsIGN1cnJlbnRUdXJuKSA9PiB7XG5cbiAgICAgICAgaWYgKCEoZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPT09IDAgfHwgXG4gICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9PT0gMSB8fCBcbiAgICAgICAgICAgIGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID09PSAyIHx8IFxuICAgICAgICAgICAgZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPT09IDMgfHwgXG4gICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9PT0gNCB8fCBcbiAgICAgICAgICAgIGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID09PSA1KVxuICAgICAgICApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3B1U3Vua2VkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgcGxheWVyU3Vua2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPT09IDApIGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID0gXCJtaXNzXCI7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwT2Jqc1tnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSAtIDFdLmhpdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBPYmpzW2dhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdIC0gMV0uaXNTdW5rKCkgJiYgY3VycmVudFR1cm4gPT09ICdjcHVUdXJuJykge1xuICAgICAgICAgICAgICAgICAgICBjcHVTdW5rZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hpcE9ianNbZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gLSAxXS5pc1N1bmsoKSAmJiBjdXJyZW50VHVybiA9PT0gJ3BsYXllclR1cm4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclN1bmtlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9IGAke2dhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdfSBoaXRgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPT09ICdtaXNzJyAmJiBjdXJyZW50VHVybiA9PT0gJ2NwdVR1cm4nKXtcbiAgICAgICAgICAgICAgICBjcHVNaXNzKGNvb3JkaW5hdGVWYWwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXS5pbmNsdWRlcygnaGl0JykgICYmIGN1cnJlbnRUdXJuID09PSAnY3B1VHVybicpIHtcbiAgICAgICAgICAgICAgICBjcHVIaXRzKGNvb3JkaW5hdGVWYWwpO1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgaWYgKGNwdVN1bmtlZCkge1xuICAgICAgICAgICAgICAgIGNwdVN1bmsoY29vcmRpbmF0ZVZhbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGVuZEdhbWVDaGVjayA9IHNoaXBPYmpzID0+IHtcbiAgICAgICAgaWYgKCEoc2hpcE9ianMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuc3VuayA9PT0gZmFsc2UpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZVNoaXAsIFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBlbmRHYW1lQ2hlY2tcbiAgICB9XG59KSgpXG5cblxuXG5mdW5jdGlvbiB2YWxpZFBsYWNlbWVudCAobGVuZ3RoU2hpcCwgdmFsdWUsIHBsYXllclNoaXBBcnJheSkge1xuICAgIFxuICAgIGlmICghYXhpcykge1xuICAgICAgICBsZXQgZmluZFggPSAoTWF0aC5mbG9vcih2YWx1ZS8xMCkqMTApICsgOTsgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoU2hpcDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbdmFsdWUgKyBpXSAhPT0gMCB8fCBcbiAgICAgICAgICAgICAgICB2YWx1ZSArIGkgPiA5OSAgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZSArIGkgPiBmaW5kWClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwQXJyYXkucHVzaCh2YWx1ZSArIGkpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aFNoaXA7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZEFycmF5W3ZhbHVlICsgKGkqMTApXSAhPT0gMCB8fCBcbiAgICAgICAgICAgICAgICB2YWx1ZSArIChpKjEwKSA+IDk5KSByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBBcnJheS5wdXNoKHZhbHVlICsgKGkqMTApKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5nYW1lQm9hcmQucGxhY2VTaGlwKDIzKVxuZ2FtZUJvYXJkLnBsYWNlU2hpcCgxMSlcbmdhbWVCb2FyZC5wbGFjZVNoaXAoMzQpXG5nYW1lQm9hcmQucGxhY2VTaGlwKDApXG5nYW1lQm9hcmQucGxhY2VTaGlwKDgyKVxuXG5cblxuLy8gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soMjksIGNwdUdhbWVCb2FyZEFycmF5LCBjcHVTaGlwT2JqcywgJ3BsYXllclR1cm4nKVxuLy8gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soNDIsIGNwdUdhbWVCb2FyZEFycmF5LCBjcHVTaGlwT2JqcywgJ3BsYXllclR1cm4nKVxuLy8gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soNTUsIGNwdUdhbWVCb2FyZEFycmF5LCBjcHVTaGlwT2JqcywgJ3BsYXllclR1cm4nKVxuLy8gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soMjUsIGNwdUdhbWVCb2FyZEFycmF5LCBjcHVTaGlwT2JqcywgJ3BsYXllclR1cm4nKVxuLy8gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soNDAsIGNwdUdhbWVCb2FyZEFycmF5LCBjcHVTaGlwT2JqcywgJ3BsYXllclR1cm4nKVxuXG5cbi8vIGdlbmVyYXRlQ3B1QXR0YWNrKHBsYXllckdhbWVCb2FyZEFycmF5LCBwbGF5ZXJTaGlwT2JqcywgJ2NwdVR1cm4nKVxuLy8gZ2VuZXJhdGVDcHVBdHRhY2socGxheWVyR2FtZUJvYXJkQXJyYXksIHBsYXllclNoaXBPYmpzLCAnY3B1VHVybicpXG4vLyBnZW5lcmF0ZUNwdUF0dGFjayhwbGF5ZXJHYW1lQm9hcmRBcnJheSwgcGxheWVyU2hpcE9ianMsICdjcHVUdXJuJylcbi8vIGdlbmVyYXRlQ3B1QXR0YWNrKHBsYXllckdhbWVCb2FyZEFycmF5LCBwbGF5ZXJTaGlwT2JqcywgJ2NwdVR1cm4nKVxuLy8gZ2VuZXJhdGVDcHVBdHRhY2socGxheWVyR2FtZUJvYXJkQXJyYXksIHBsYXllclNoaXBPYmpzLCAnY3B1VHVybicpXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKHBsYXllckdhbWVCb2FyZEFycmF5KVxuXG5cbi8vIGNvbnNvbGUubG9nKGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDI5KSlcbi8vIGNvbnNvbGUubG9nKGdhbWVCb2FyZC5lbmRHYW1lQ2hlY2soKSlcblxuXG5cbmV4cG9ydCB7U2hpcCwgZ2FtZUJvYXJkLCBwbGF5ZXJHYW1lQm9hcmRBcnJheSwgcGxheWVyU2hpcE9ianMsIHBsYXllckhlYWRzfVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==