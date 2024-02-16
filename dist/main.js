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

#introForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    height: 40vh;
}

#introForm label {
    font-size: 30px;
}

#introForm input {
    font-size: 20px;
    font-weight: 800;
    border-radius: 3px;
    border: none;
    height: 30px;
    padding: 10px;
}

#introForm button {
    height: 60px;
    width: 150px;
    font-size: 20px;
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

.boardsDisplay,
.personalBoard {
    display: grid;
    grid-template-columns: repeat(10, 45px);
    grid-template-rows:repeat(10, 45px);
    gap: 5px;
}

.selection {
    background-color: aquamarine;
}

.boxDisplay,
.personalBox {
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
}`, "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf;;;;AAIA;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,yEAAyE;AAC7E;;;;AAIA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,uCAAuC;IACvC,mCAAmC;IACnC,QAAQ;AACZ;;AAEA;IACI,4BAA4B;AAChC;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;;GAEG;;AAEH;IACI,cAAc;IACd,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,wBAAwB;AAC5B;;;AAGA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,wBAAwB;AAC5B;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["* {\n    padding: 0px;\n    margin: 0px;\n}\n\n\n\nbody { \n    height: 100vh;\n    background-color: #010034;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    gap: 50px;\n}\n\n#title {\n    display: flex;\n    align-items: center;\n    height: 100px;\n    font-size: 70px;\n    color: #4e4e50;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n}\n\n#introForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    height: 40vh;\n}\n\n#introForm label {\n    font-size: 30px;\n}\n\n#introForm input {\n    font-size: 20px;\n    font-weight: 800;\n    border-radius: 3px;\n    border: none;\n    height: 30px;\n    padding: 10px;\n}\n\n#introForm button {\n    height: 60px;\n    width: 150px;\n    font-size: 20px;\n}\n\n\n.messageBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 25px;\n    width: 75%;\n    height: 65px;\n    border: 1px solid white;\n    border-radius: 15px;\n    background: linear-gradient(to right, #373737, #292929, #292929, #373737);\n}\n  \n\n\n.boardsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 100px;\n}\n\n.boardSection {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 10px;\n}\n\n.boardName {\n    font-size: larger;\n    font-weight: 1000;\n} \n\n.boardsDisplay,\n.personalBoard {\n    display: grid;\n    grid-template-columns: repeat(10, 45px);\n    grid-template-rows:repeat(10, 45px);\n    gap: 5px;\n}\n\n.selection {\n    background-color: aquamarine;\n}\n\n.boxDisplay,\n.personalBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid white;\n    font-size: 2rem;\n    max-height: 45px;\n    max-width: 45px;\n}\n\n.enemyBoxes:hover {\n    cursor: crosshair;\n    background-color: green;\n}\n\n.boxDisplay img {\n    opacity: 0.7;\n    z-index: -2;\n}\n\n/* .hidden {\n    display: none;\n} */\n\n.show {\n    display: block;\n    filter: brightness(50%);\n}\n\n.boxDisplay.hit::after, \n.boxDisplay.missedAttack::after{\n    position: absolute;\n    content: \"\";\n    width: 15px; \n    height: 15px;\n    background-color: red;\n    border-radius: 50%; \n    z-index:2; \n}\n\n.boxDisplay.missedAttack::after{\n    background-color: white;\n}\n\n.enemyBoxes.hit:hover,\n.enemyBoxes.boxDisplay.missedAttack:hover {\n    background-color: rgb(255, 45, 45);\n    cursor: not-allowed;\n}\n\n.carrier {\n    position: relative;\n    left: 100px;\n    min-width: 225px;\n    max-width: 225px;\n    height: 35px;\n}\n\n.carrier.yAxis {\n    position: relative;\n    top: 100px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n.battleship {\n    position: relative;\n    left: 75px;\n    min-width: 180px;\n    max-width: 180px;\n    height: 30px;\n}\n\n.battleship.yAxis {\n    position: relative;\n    top: 75px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n.destroyer {\n    position: relative;\n    left: 50px;\n    min-width: 135px;\n    max-width: 135px;\n    height: 30px;\n}\n\n.destroyer.yAxis {\n    position: relative;\n    top: 50px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n.submarine {\n    position: relative;\n    left: 35px;\n    min-width: 160px;\n    max-width: 160px;\n    height: 60px;\n}\n\n.submarine.yAxis {\n    position: relative;\n    top: 35px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n\n.patrolBoat {\n    position: relative;\n    left: 10px;\n    min-width: 150px;\n    max-width: 150px;\n    height: 50px;\n}\n\n.patrolBoat.yAxis {\n    position: relative;\n    top: 10px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n\n.declareWinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80vh;\n    font-size: 4rem;\n    font-weight: 800;\n}"],"sourceRoot":""}]);
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
                shotMissedMp3.play();
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
                shotFiredMp3.play();
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
                    shotMissedMp3.play();
                    extra = ' and misses.'
                    _DOMplay__WEBPACK_IMPORTED_MODULE_2__.playerBoxDivs[cpuAttackValue].classList.add('missedAttack')    
                } else {
                    shotHitMp3.play()
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
    const errorInvalidPosition = false
    let shipCounter = 1;

    const placeShip = value => {
        let playerShipArray = [];
        axis = Math.round(Math.random())
        if (shipCounter > 5) return false
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

// gameBoard.placeShip(23)
// gameBoard.placeShip(11)
// gameBoard.placeShip(34)
// gameBoard.placeShip(0)
// gameBoard.placeShip(82)



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrRUFBK0UsVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVks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QUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ob21lLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ob21lLmNzcz83ZjljIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01wbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3B1Q29udHJvbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hhbmRsZUF0dGFja3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuXG5cbmJvZHkgeyBcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTAwMzQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGdhcDogNTBweDtcbn1cblxuI3RpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgY29sb3I6ICM0ZTRlNTA7XG59XG5cbiNtYWluQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbiNpbnRyb0Zvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjVweDtcbiAgICBoZWlnaHQ6IDQwdmg7XG59XG5cbiNpbnRyb0Zvcm0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI2ludHJvRm9ybSBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI2ludHJvRm9ybSBidXR0b24ge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5cbi5tZXNzYWdlQm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzczNzM3LCAjMjkyOTI5LCAjMjkyOTI5LCAjMzczNzM3KTtcbn1cbiAgXG5cblxuLmJvYXJkc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTAwcHg7XG59XG5cbi5ib2FyZFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYm9hcmROYW1lIHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbn0gXG5cbi5ib2FyZHNEaXNwbGF5LFxuLnBlcnNvbmFsQm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQ1cHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoMTAsIDQ1cHgpO1xuICAgIGdhcDogNXB4O1xufVxuXG4uc2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuXG4uYm94RGlzcGxheSxcbi5wZXJzb25hbEJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIG1heC13aWR0aDogNDVweDtcbn1cblxuLmVuZW15Qm94ZXM6aG92ZXIge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYm94RGlzcGxheSBpbWcge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB6LWluZGV4OiAtMjtcbn1cblxuLyogLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0gKi9cblxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xufVxuXG4uYm94RGlzcGxheS5oaXQ6OmFmdGVyLCBcbi5ib3hEaXNwbGF5Lm1pc3NlZEF0dGFjazo6YWZ0ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDE1cHg7IFxuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcbiAgICB6LWluZGV4OjI7IFxufVxuXG4uYm94RGlzcGxheS5taXNzZWRBdHRhY2s6OmFmdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZW5lbXlCb3hlcy5oaXQ6aG92ZXIsXG4uZW5lbXlCb3hlcy5ib3hEaXNwbGF5Lm1pc3NlZEF0dGFjazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDUsIDQ1KTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uY2FycmllciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIG1pbi13aWR0aDogMjI1cHg7XG4gICAgbWF4LXdpZHRoOiAyMjVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jYXJyaWVyLnlBeGlzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uYmF0dGxlc2hpcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDc1cHg7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmJhdHRsZXNoaXAueUF4aXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmRlc3Ryb3llciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgbWluLXdpZHRoOiAxMzVweDtcbiAgICBtYXgtd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmRlc3Ryb3llci55QXhpcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uc3VibWFyaW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMzVweDtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIG1heC13aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uc3VibWFyaW5lLnlBeGlzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzNXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cblxuLnBhdHJvbEJvYXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5wYXRyb2xCb2F0LnlBeGlzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cblxuLmRlY2xhcmVXaW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUVBQXlFO0FBQzdFOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcblxcblxcbmJvZHkgeyBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDAzNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgY29sb3I6ICM0ZTRlNTA7XFxufVxcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuI2ludHJvRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGhlaWdodDogNDB2aDtcXG59XFxuXFxuI2ludHJvRm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI2ludHJvRm9ybSBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2ludHJvRm9ybSBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5cXG4ubWVzc2FnZUJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM3MzczNywgIzI5MjkyOSwgIzI5MjkyOSwgIzM3MzczNyk7XFxufVxcbiAgXFxuXFxuXFxuLmJvYXJkc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYm9hcmRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5ib2FyZE5hbWUge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxufSBcXG5cXG4uYm9hcmRzRGlzcGxheSxcXG4ucGVyc29uYWxCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0NXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCgxMCwgNDVweCk7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLmJveERpc3BsYXksXFxuLnBlcnNvbmFsQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1heC1oZWlnaHQ6IDQ1cHg7XFxuICAgIG1heC13aWR0aDogNDVweDtcXG59XFxuXFxuLmVuZW15Qm94ZXM6aG92ZXIge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5ib3hEaXNwbGF5IGltZyB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgei1pbmRleDogLTI7XFxufVxcblxcbi8qIC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gKi9cXG5cXG4uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcXG59XFxuXFxuLmJveERpc3BsYXkuaGl0OjphZnRlciwgXFxuLmJveERpc3BsYXkubWlzc2VkQXR0YWNrOjphZnRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDE1cHg7IFxcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gICAgei1pbmRleDoyOyBcXG59XFxuXFxuLmJveERpc3BsYXkubWlzc2VkQXR0YWNrOjphZnRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5lbmVteUJveGVzLmhpdDpob3ZlcixcXG4uZW5lbXlCb3hlcy5ib3hEaXNwbGF5Lm1pc3NlZEF0dGFjazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ1LCA0NSk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxMDBweDtcXG4gICAgbWluLXdpZHRoOiAyMjVweDtcXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uY2Fycmllci55QXhpcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5iYXR0bGVzaGlwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA3NXB4O1xcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5iYXR0bGVzaGlwLnlBeGlzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDc1cHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uZGVzdHJveWVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1MHB4O1xcbiAgICBtaW4td2lkdGg6IDEzNXB4O1xcbiAgICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5kZXN0cm95ZXIueUF4aXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNTBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zdWJtYXJpbmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDM1cHg7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIG1heC13aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnN1Ym1hcmluZS55QXhpcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzNXB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnBhdHJvbEJvYXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnBhdHJvbEJvYXQueUF4aXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5kZWNsYXJlV2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGNvZGUgZm9yIHJlbW92aW5nIGFsbCBwcmV2aW91cyBlbGVtZW50IGluIFxuLy8gXG4vLyBcbi8vIFxuLy8gXG4vLyBcblxuXG5pbXBvcnQge2dhbWVCb2FyZCwgcGxheWVyR2FtZUJvYXJkQXJyYXksIHBsYXllclNoaXBPYmpzLCBwbGF5ZXJIZWFkc30gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQge2dlbmVyYXRlQ3B1QXR0YWNrLCBjcHVHYW1lQm9hcmRBcnJheSwgY3B1U2hpcE9ianMsIGNwdUhlYWRzfSBmcm9tICcuL2NwdUNvbnRyb2wnO1xuaW1wb3J0IHtoYW5kbGVBdHRhY2tzfSBmcm9tICcuL2hhbmRsZUF0dGFja3MnXG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkNvbnRhaW5lcicpO1xuY29uc3QgbWVzc2FnZUJveCA9IGNyZWF0ZURpdignbWVzc2FnZUJveCcpO1xuXG5cbmNvbnN0IHBsYXllck5hbWUgPSAnU2FtaXInXG5jb25zdCBwbGF5ZXJCb3hEaXZzID0gW107XG5jb25zdCBjcHVCb3hEaXZzID0gW107XG5jb25zdCBwbGF5ZXJTaGlwUGljcyA9IFtdO1xuY29uc3QgY3B1U2hpcFBpY3MgPSBbXTtcblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZHMgKCkge1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBgQXdhaXRpbmcgb3JkZXJzLCBBZG1pcmFsICR7cGxheWVyTmFtZX1gO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCArPSAobWVzc2FnZS5jaGFyQXQoaSkpO1xuICAgICAgICB9LCAzMCAqIGkpO1xuICAgIH1cblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUJveCk7XG4gICAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGNyZWF0ZURpdignYm9hcmRTZWN0aW9uJyk7ICBcbiAgICBjb25zdCBwbGF5ZXJCb2FyZE5hbWUgPSBjcmVhdGVEaXYoJ2JvYXJkTmFtZScsICdGUklFTkRMWSBXQVRFUlMnKTtcbiAgICBjb25zdCBwbGF5ZXJEaXNwbGF5Qm9hcmQgPSBjcmVhdGVEaXYoJ2JvYXJkc0Rpc3BsYXknKTtcblxuICAgIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVyQm9hcmROYW1lKTtcbiAgICBwbGF5ZXJTZWN0aW9uLmFwcGVuZENoaWxkKHBsYXllckRpc3BsYXlCb2FyZCk7XG5cblxuICAgIHBsYXllckdhbWVCb2FyZEFycmF5LmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJCb3ggPSBjcmVhdGVEaXYoJ2JveERpc3BsYXknLCB1bmRlZmluZWQsIGluZGV4KTtcbiAgICAgICAgcGxheWVyQm94RGl2cy5wdXNoKHBsYXllckJveCk7XG4gICAgICAgIHBsYXllckRpc3BsYXlCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJCb3gpO1xuICAgIH0pO1xuXG4gICAgcGxheWVySGVhZHMuZm9yRWFjaChzcG90ID0+IHtcbiAgICAgICAgc3dpdGNoIChwbGF5ZXJHYW1lQm9hcmRBcnJheVtzcG90XSkge1xuICAgICAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgIGNvbnN0IGNhcnJpZXJQaWMgPSBjcmVhdGVJbWcoXCJjYXJyaWVyXCIpO1xuICAgICAgICAgICAgcGxheWVyU2hpcFBpY3MucHVzaChjYXJyaWVyUGljKTtcbiAgICAgICAgICAgIHBsYXllckJveERpdnNbc3BvdF0uYXBwZW5kQ2hpbGQoY2FycmllclBpYyk7XG4gICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbc3BvdCArIDFdICE9PSAxKSBjYXJyaWVyUGljLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY29uc3QgYmF0dGxlc2hpcFBpYyA9IGNyZWF0ZUltZyhcImJhdHRsZXNoaXBcIik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGljcy5wdXNoKGJhdHRsZXNoaXBQaWMpO1xuICAgICAgICAgICAgcGxheWVyQm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChiYXR0bGVzaGlwUGljKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDIpIGJhdHRsZXNoaXBQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgY29uc3QgZGVzdHJveWVyUGljID0gY3JlYXRlSW1nKFwiZGVzdHJveWVyXCIpO1xuICAgICAgICAgICAgcGxheWVyU2hpcFBpY3MucHVzaChkZXN0cm95ZXJQaWMpO1xuICAgICAgICAgICAgcGxheWVyQm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChkZXN0cm95ZXJQaWMpO1xuICAgICAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gMykgZGVzdHJveWVyUGljLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgY29uc3Qgc3VibWFyaW5lUGljID0gY3JlYXRlSW1nKFwic3VibWFyaW5lXCIpO1xuICAgICAgICAgICAgcGxheWVyU2hpcFBpY3MucHVzaChzdWJtYXJpbmVQaWMpO1xuICAgICAgICAgICAgcGxheWVyQm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChzdWJtYXJpbmVQaWMpO1xuICAgICAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gNCkgc3VibWFyaW5lUGljLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1OiBcbiAgICAgICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBjcmVhdGVJbWcoXCJwYXRyb2xCb2F0XCIpO1xuICAgICAgICAgICAgcGxheWVyU2hpcFBpY3MucHVzaChwYXRyb2xCb2F0KTtcbiAgICAgICAgICAgIHBsYXllckJveERpdnNbc3BvdF0uYXBwZW5kQ2hpbGQocGF0cm9sQm9hdCk7XG4gICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbc3BvdCArIDFdICE9PSA1KSBwYXRyb2xCb2F0LmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBlbmVteVNlY3Rpb24gPSBjcmVhdGVEaXYoJ2JvYXJkU2VjdGlvbicpXG4gICAgY29uc3QgZW5lbXlCb2FyZE5hbWUgPSBjcmVhdGVEaXYoJ2JvYXJkTmFtZScsICdFTkVNWSBXQVRFUlMnKTtcbiAgICBjb25zdCBjcHVEaXNwbGF5Qm9hcmQgPSBjcmVhdGVEaXYoJ2JvYXJkc0Rpc3BsYXknKTtcblxuICAgIGVuZW15U2VjdGlvbi5hcHBlbmRDaGlsZChlbmVteUJvYXJkTmFtZSk7XG4gICAgZW5lbXlTZWN0aW9uLmFwcGVuZENoaWxkKGNwdURpc3BsYXlCb2FyZCk7ICAgIFxuXG4gICAgY3B1R2FtZUJvYXJkQXJyYXkuZm9yRWFjaCgoYm94LGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNwdUJveCA9IGNyZWF0ZURpdignYm94RGlzcGxheScsIHVuZGVmaW5lZCwgaW5kZXgpO1xuICAgICAgICBjcHVCb3guY2xhc3NMaXN0LmFkZCgnZW5lbXlCb3hlcycpXG4gICAgICAgIGNwdUJveERpdnMucHVzaChjcHVCb3gpO1xuICAgICAgICBjcHVCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVBdHRhY2tzKGNwdUJveCwgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY3B1RGlzcGxheUJvYXJkLmFwcGVuZENoaWxkKGNwdUJveCk7XG4gICAgfSk7XG5cbiAgICBjcHVIZWFkcy5mb3JFYWNoKHNwb3QgPT4ge1xuICAgICAgICBzd2l0Y2ggKGNwdUdhbWVCb2FyZEFycmF5W3Nwb3RdKSB7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgY29uc3QgY2FycmllclBpYyA9IGNyZWF0ZUltZyhcImNhcnJpZXJcIik7XG4gICAgICAgICAgICBjYXJyaWVyUGljLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgY3B1U2hpcFBpY3MucHVzaChjYXJyaWVyUGljKTtcbiAgICAgICAgICAgIGNwdUJveERpdnNbc3BvdF0uYXBwZW5kQ2hpbGQoY2FycmllclBpYyk7XG4gICAgICAgICAgICBpZiAoY3B1R2FtZUJvYXJkQXJyYXlbc3BvdCArIDFdICE9PSAxKSBjYXJyaWVyUGljLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY29uc3QgYmF0dGxlc2hpcFBpYyA9IGNyZWF0ZUltZyhcImJhdHRsZXNoaXBcIik7XG4gICAgICAgICAgICBiYXR0bGVzaGlwUGljLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgY3B1U2hpcFBpY3MucHVzaChiYXR0bGVzaGlwUGljKTtcbiAgICAgICAgICAgIGNwdUJveERpdnNbc3BvdF0uYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcFBpYyk7XG4gICAgICAgICAgICBpZiAoY3B1R2FtZUJvYXJkQXJyYXlbc3BvdCArIDFdICE9PSAyKSBiYXR0bGVzaGlwUGljLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzOiBcbiAgICAgICAgICAgIGNvbnN0IGRlc3Ryb3llclBpYyA9IGNyZWF0ZUltZyhcImRlc3Ryb3llclwiKTtcbiAgICAgICAgICAgIGRlc3Ryb3llclBpYy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNwdVNoaXBQaWNzLnB1c2goZGVzdHJveWVyUGljKTtcbiAgICAgICAgICAgIGNwdUJveERpdnNbc3BvdF0uYXBwZW5kQ2hpbGQoZGVzdHJveWVyUGljKTtcbiAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDMpIGRlc3Ryb3llclBpYy5jbGFzc0xpc3QuYWRkKCd5QXhpcycpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1hcmluZVBpYyA9IGNyZWF0ZUltZyhcInN1Ym1hcmluZVwiKTtcbiAgICAgICAgICAgIHN1Ym1hcmluZVBpYy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNwdVNoaXBQaWNzLnB1c2goc3VibWFyaW5lUGljKTtcbiAgICAgICAgICAgIGNwdUJveERpdnNbc3BvdF0uYXBwZW5kQ2hpbGQoc3VibWFyaW5lUGljKTtcbiAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDQpIHN1Ym1hcmluZVBpYy5jbGFzc0xpc3QuYWRkKCd5QXhpcycpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTogXG4gICAgICAgICAgICBjb25zdCBwYXRyb2xCb2F0ID0gY3JlYXRlSW1nKFwicGF0cm9sQm9hdFwiKTtcbiAgICAgICAgICAgIHBhdHJvbEJvYXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBjcHVTaGlwUGljcy5wdXNoKHBhdHJvbEJvYXQpO1xuICAgICAgICAgICAgY3B1Qm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChwYXRyb2xCb2F0KTtcbiAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDUpIHBhdHJvbEJvYXQuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBib2FyZHNDb250YWluZXIgPSBjcmVhdGVEaXYoJ2JvYXJkc0NvbnRhaW5lcicpO1xuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJTZWN0aW9uKTtcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlTZWN0aW9uKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKTtcblxuICAgIC8vXG59O1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZURpdiAoY2xhc3NOYW1lLCB0ZXh0LCB2YWx1ZUFtb3VudCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBkaXYudmFsdWUgPSB2YWx1ZUFtb3VudDtcblxuICAgIHJldHVybiBkaXZcbn0gXG5cbmZ1bmN0aW9uIGNyZWF0ZUltZyAoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBpbWcuc3JjID0gYC4vc2hpcHNQaWMvJHtjbGFzc05hbWV9LnBuZ2A7XG5cbiAgICByZXR1cm4gaW1nXG59XG5cblxuXG5cblxuZXhwb3J0IHtkaXNwbGF5Qm9hcmRzLCBwbGF5ZXJCb3hEaXZzLCBjcHVTaGlwUGljcywgcGxheWVyU2hpcFBpY3MsIG1lc3NhZ2VCb3h9IiwiaW1wb3J0IHtTaGlwLCBnYW1lQm9hcmR9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBjcHVHYW1lQm9hcmRBcnJheSA9IG5ldyBBcnJheSgxMDApLmZpbGwoMCk7XG5jb25zdCBjcHVTaGlwT2JqcyA9IFtdO1xuXG5jb25zdCBzdG9yZWRBdHRhY2tzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAwfSwgKCkgPT4gMCk7XG5cbmNvbnN0IGNwdUhlYWRzID0gW11cblxuXG5mdW5jdGlvbiBwbGFjZUNwdVNoaXBzICgpIHtcblxuICAgIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1LCAwLCBmYWxzZSk7XG4gICAgY3B1U2hpcE9ianMucHVzaChjYXJyaWVyKTtcbiAgICBcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgMCwgZmFsc2UpO1xuICAgIGNwdVNoaXBPYmpzLnB1c2goYmF0dGxlc2hpcCk7XG4gXG4gICAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoMywgMCwgZmFsc2UpO1xuICAgIGNwdVNoaXBPYmpzLnB1c2goZGVzdHJveWVyKTtcblxuICAgIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKDMsIDAsIGZhbHNlKTtcbiAgICBjcHVTaGlwT2Jqcy5wdXNoKHN1Ym1hcmluZSk7XG5cbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoMiwgMCwgZmFsc2UpO1xuICAgIGNwdVNoaXBPYmpzLnB1c2gocGF0cm9sQm9hdCk7XG4gICAgXG4gICAgbGV0IHNoaXBDb3VudGVyID0gMTtcblxuICAgIGNwdVNoaXBPYmpzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIGxldCBtb2RpZmllZEFycmF5ID0gW107XG4gICAgICAgIGxldCBjb250aW51ZUxvb3AgPSB0cnVlO1xuICAgICAgICBjb25zdCBheGlzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTsgLy8gMCA9IHgsIDEgPSB5XG4gICAgICAgIGNwdUdhbWVCb2FyZEFycmF5LmZvckVhY2goKGJvYXJkRWxlbWVudCwgYm9hcmRJbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJvYXJkRWxlbWVudCA9PT0gMCkgbW9kaWZpZWRBcnJheS5wdXNoKGJvYXJkSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gMDtcblxuICAgICAgICBpZiAoIWF4aXMpIHtcbiAgICAgICAgICAgIHdoaWxlIChjb250aW51ZUxvb3ApIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRQbGFjZW1lbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3REaWdpdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZERpZ2l0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG5cbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IE51bWJlcihmaXJzdERpZ2l0LnRvU3RyaW5nKCkgKyBzZWNvbmREaWdpdC50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbmRleCArIHNoaXAubGVuZ3RoIC0gMSA+IGZpcnN0RGlnaXQgKiAxMCArIDkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSAoZmlyc3REaWdpdCAqIDEwICsgOSkgLSBzaGlwLmxlbmd0aCArIDEgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtyYW5kb21JbmRleCArIGldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlmICh2YWxpZFBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwdUdhbWVCb2FyZEFycmF5W3JhbmRvbUluZGV4ICsgaV0gPSBzaGlwQ291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGV4aXQgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVMb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoY29udGludWVMb29wKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkUGxhY2VtZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0RGlnaXQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmREaWdpdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBOdW1iZXIoZmlyc3REaWdpdC50b1N0cmluZygpICsgc2Vjb25kRGlnaXQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW5kZXggKyAoKHNoaXAubGVuZ3RoIC0xKSAqIDEwKSA+IDk5ICkge1xuICAgICAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9ICg5OSAtIHJhbmRvbUluZGV4KTsgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3B1R2FtZUJvYXJkQXJyYXlbcmFuZG9tSW5kZXggKyAoaSoxMCldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsaWRQbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcHVHYW1lQm9hcmRBcnJheVtyYW5kb21JbmRleCArIChpKjEwKV0gPSBzaGlwQ291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB0byBleGl0IHdoaWxlIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVMb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gICAgIFxuICAgICAgICB9XG4gICAgY3B1SGVhZHMucHVzaChyYW5kb21JbmRleClcbiAgICBzaGlwQ291bnRlcisrO1xuIH0pXG4vLyAgY29uc29sZS5sb2coY3B1R2FtZUJvYXJkQXJyYXkpXG4gcmV0dXJuIGNwdUdhbWVCb2FyZEFycmF5XG59XG5cblxuXG5cbmxldCBvcmlnaW5hbFZhbHVlID0gMTAwO1xubGV0IGJvdGhNaXNzZWRDb3VudGVyID0gMDtcbmxldCBpZk1pc3NlZCA9IGZhbHNlO1xuXG5jb25zdCAgZ2VuZXJhdGVDcHVBdHRhY2sgPSAoZ2FtZUJvYXJkQXJyYXksIHNoaXBPYmpzLCBjdXJyZW50VHVybikgPT4ge1xuICAgIGxldCBhdHRhY2tWYWx1ZTtcbiAgICBsZXQgZm91bmRIaXQ7XG4gICAgbGV0IGluZGV4SGl0OyBcbiAgIFxuICAgIGlmIChpZk1pc3NlZCkge1xuICAgICAgICBmb3VuZEhpdCA9IHRydWU7XG4gICAgICAgIGluZGV4SGl0ID0gb3JpZ2luYWxWYWx1ZTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm91bmRIaXQgPSBzdG9yZWRBdHRhY2tzLmZpbmQoKHNoaXBCb3gpID0+IHNoaXBCb3ggPT09IFwiaGl0XCIpO1xuICAgICAgICBpbmRleEhpdCA9IHN0b3JlZEF0dGFja3MuaW5kZXhPZihmb3VuZEhpdCk7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kSGl0ICYmIGJvdGhNaXNzZWRDb3VudGVyIDwgMikge1xuICAgICAgICBpZiAoc3RvcmVkQXR0YWNrc1tpbmRleEhpdCArIDFdID09PSAwICYmIGluZGV4SGl0ICsgMSA8PSA5OSkge1xuICAgICAgICAgICAgYXR0YWNrVmFsdWUgPSBpbmRleEhpdCArIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RvcmVkQXR0YWNrc1tpbmRleEhpdCAtIDEgXSA9PT0gMCAmJiBpbmRleEhpdCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgYXR0YWNrVmFsdWUgPSBpbmRleEhpdCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNraW5nQXJyYXkgPSBzdG9yZWRBdHRhY2tzLm1hcCgoc3BvdCwgaW5kZXgpID0+IChzcG90ID09PSAwID8gaW5kZXggOiB1bmRlZmluZWQpKVxuICAgICAgICAuZmlsdGVyKGluZGV4ID0+IGluZGV4ICE9PSB1bmRlZmluZWQpOyAgICAgICAgXG4gICAgICAgIGF0dGFja1ZhbHVlID0gYXR0YWNraW5nQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmF0dGFja2luZ0FycmF5Lmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0gZWxzZSBpZiAoZm91bmRIaXQgJiYgYm90aE1pc3NlZENvdW50ZXIgPj0gMikge1xuICAgICAgICBpZiAoc3RvcmVkQXR0YWNrc1tpbmRleEhpdCArIDEwIF0gPT09IDAgJiYgaW5kZXhIaXQgKyAxMCA8PSA5OSkge1xuICAgICAgICAgICAgYXR0YWNrVmFsdWUgPSBpbmRleEhpdCArIDEwO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3JlZEF0dGFja3NbaW5kZXhIaXQgLSAxMCBdID09PSAwICYmIGluZGV4SGl0IC0gMTAgPj0gMCkge1xuICAgICAgICAgICAgYXR0YWNrVmFsdWUgPSBpbmRleEhpdCAtIDEwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGF0dGFja2luZ0FycmF5ID0gc3RvcmVkQXR0YWNrcy5tYXAoKHNwb3QsIGluZGV4KSA9PiAoc3BvdCA9PT0gMCA/IGluZGV4IDogdW5kZWZpbmVkKSlcbiAgICAgICAgLmZpbHRlcihpbmRleCA9PiBpbmRleCAhPT0gdW5kZWZpbmVkKTsgICAgICAgIFxuICAgICAgICBhdHRhY2tWYWx1ZSA9IGF0dGFja2luZ0FycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphdHRhY2tpbmdBcnJheS5sZW5ndGgpXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhdHRhY2tpbmdBcnJheSA9IHN0b3JlZEF0dGFja3MubWFwKChzcG90LCBpbmRleCkgPT4gKHNwb3QgPT09IDAgPyBpbmRleCA6IHVuZGVmaW5lZCkpXG4gICAgICAgIC5maWx0ZXIoaW5kZXggPT4gaW5kZXggIT09IHVuZGVmaW5lZCk7ICAgICAgICBcbiAgICAgICAgYXR0YWNrVmFsdWUgPSBhdHRhY2tpbmdBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYXR0YWNraW5nQXJyYXkubGVuZ3RoKV07XG4gICAgfVxuICAgIFxuICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1ZhbHVlLGdhbWVCb2FyZEFycmF5LCBzaGlwT2JqcywgY3VycmVudFR1cm4pO1xuICAgIHJldHVybiBhdHRhY2tWYWx1ZVxufVxuXG5cbmNvbnN0IGNwdUhpdHMgPSBjb29yZGluYXRlVmFsID0+IHtcbiAgICBpZiAoc3RvcmVkQXR0YWNrcy5pbmRleE9mKCdoaXQnKSAhPT0gLTEpIHtcbiAgICAgICAgc3RvcmVkQXR0YWNrc1tzdG9yZWRBdHRhY2tzLmluZGV4T2YoJ2hpdCcpXSA9ICdoaXR0ZW4nO1xuICAgICAgICBzdG9yZWRBdHRhY2tzW2Nvb3JkaW5hdGVWYWxdID0gJ2hpdCc7XG4gICAgICAgIGlmTWlzc2VkID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yZWRBdHRhY2tzW2Nvb3JkaW5hdGVWYWxdID0gJ2hpdCc7XG4gICAgICAgIG9yaWdpbmFsVmFsdWUgPSBjb29yZGluYXRlVmFsO1xuICAgIH1cbn1cblxuY29uc3QgY3B1TWlzcyA9IGNvb3JkaW5hdGVWYWwgPT4ge1xuICAgIHN0b3JlZEF0dGFja3NbY29vcmRpbmF0ZVZhbF0gPSAnbWlzcyc7XG4gICAgaWYgKCEob3JpZ2luYWxWYWx1ZSA9PT0gMTAwKSkge1xuICAgICAgICBpZk1pc3NlZCA9IHRydWU7XG4gICAgICAgIGJvdGhNaXNzZWRDb3VudGVyKytcbiAgICB9XG59XG5cbmNvbnN0IGNwdVN1bmsgPSBjb29yZGluYXRlVmFsID0+IHtcbiAgICBzdG9yZWRBdHRhY2tzW2Nvb3JkaW5hdGVWYWxdID0gJ3N1bmtlZCc7IFxuICAgIG9yaWdpbmFsVmFsdWUgPSAxMDA7XG4gICAgYm90aE1pc3NlZENvdW50ZXIgPSAwO1xufSBcblxuXG5cbmV4cG9ydCB7XG4gICAgcGxhY2VDcHVTaGlwcyxcbiAgICBnZW5lcmF0ZUNwdUF0dGFjayxcbiAgICBjcHVIaXRzLCBcbiAgICBjcHVNaXNzLFxuICAgIGNwdVN1bmssXG4gICAgY3B1R2FtZUJvYXJkQXJyYXksXG4gICAgY3B1U2hpcE9ianMsXG4gICAgY3B1SGVhZHNcbn0iLCJpbXBvcnQge2dhbWVCb2FyZCwgcGxheWVyR2FtZUJvYXJkQXJyYXksIHBsYXllclNoaXBPYmpzfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7Z2VuZXJhdGVDcHVBdHRhY2ssIGNwdUdhbWVCb2FyZEFycmF5LCBjcHVTaGlwT2Jqc30gZnJvbSAnLi9jcHVDb250cm9sJztcbmltcG9ydCB7cGxheWVyQm94RGl2cywgY3B1U2hpcFBpY3MsIHBsYXllclNoaXBQaWNzLCBtZXNzYWdlQm94LCBhd2FpdGluZ30gZnJvbSAnLi9ET01wbGF5JztcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluQ29udGFpbmVyJyk7XG5cbmNvbnN0IHNob3RGaXJlZE1wMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG90RmlyZWQnKVxuY29uc3Qgc2hvdEhpdE1wMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG90SGl0JylcbmNvbnN0IHNob3RNaXNzZWRNcDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdE1pc3NlZCcpXG5cbiBcblxuXG5cbmNvbnN0IHBsYXllck5hbWUgPSAnU2FtaXInO1xubGV0IGNwdUZpbmlzaGVkID0gZmFsc2U7XG5sZXQgb25lVGltZSA9IDA7XG5sZXQgbWVzc2FnZSA9ICcnO1xubGV0IGV4dHJhID0gJyc7XG5cblxuZnVuY3Rpb24gaGFuZGxlQXR0YWNrcyAoY3B1Qm94LCBpbmRleCkge1xuXG4gICAgY29uc3QgZGVjbGFyZVdpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlY2xhcmVXaW5uZXIuY2xhc3NMaXN0LmFkZCgnZGVjbGFyZVdpbm5lcicpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNwdUZpbmlzaGVkIHx8IG9uZVRpbWUgIT09IDApIHJldHVyblxuICAgIGlmIChnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCxjcHVHYW1lQm9hcmRBcnJheSxjcHVTaGlwT2JqcywgJ3BsYXllclR1cm4nKSkge1xuICAgICAgICBjcHVGaW5pc2hlZCA9IHRydWVcbiAgICAgICAgbGV0IGF0dGFja2VkSW5kZXggPSBpbmRleFxuICAgICAgICBtZXNzYWdlQm94LnRleHRDb250ZW50ID0gJydcbiAgICAgICAgbWVzc2FnZSA9ICdZb3UgZmlyZSBhIHNob3QgaW50byBlbmVteSB3YXRlcnMgLi4uLi4uICc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgKz0gKG1lc3NhZ2UuY2hhckF0KGkpKTtcbiAgICAgICAgICAgIH0sIDMwICogaSk7XG4gICAgICAgIH1cblxuICAgICAgICBzaG90RmlyZWRNcDMucGxheSgpO1xuXG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY3B1R2FtZUJvYXJkQXJyYXlbYXR0YWNrZWRJbmRleF0gPT09ICdtaXNzJykge1xuICAgICAgICAgICAgICAgIGV4dHJhID0gJyBhbmQgbWlzcy4nXG4gICAgICAgICAgICAgICAgc2hvdE1pc3NlZE1wMy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgY3B1Qm94LmNsYXNzTGlzdC5hZGQoJ21pc3NlZEF0dGFjaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRyYSA9IFwiIGFuZCBpdCdzIGEgaGl0IVwiXG4gICAgICAgICAgICAgICAgY3B1Qm94LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgIHNob3RIaXRNcDMucGxheSgpXG4gICAgICAgICAgICAgICAgY3B1U2hpcE9ianMuZm9yRWFjaCgob2JqLCBpbmRleCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouc3VuayAmJiBjcHVHYW1lQm9hcmRBcnJheVthdHRhY2tlZEluZGV4XS5pbmNsdWRlcyhpbmRleCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcHVTaGlwUGljc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcHVTaGlwUGljc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBleHRyYSA9IGBZb3Ugc3VuayB0aGVpciBDYXJyaWVyISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiBleHRyYSA9IGBZb3Ugc3VuayB0aGVpciBCYXR0bGVTaGlwISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiBleHRyYSA9IGBZb3Ugc3VuayB0aGVpciBEZXN0cm95ZXIhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IGV4dHJhID0gYFlvdSBzdW5rIHRoZWlyIFN1Ym1hcmluZSEgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogZXh0cmEgPSBgWW91IHN1bmsgdGhlaXIgUGF0cm9sIEJvYXQhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4dHJhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCArPSAoZXh0cmEuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICB9LCAzMCAqIGkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIDE1MDApXG5cbiAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGdhbWVCb2FyZC5lbmRHYW1lQ2hlY2soY3B1U2hpcE9ianMpKSB7XG4gICAgICAgICAgICAvLyBjb2RlIHRvIHJlbW92ZSBldmVyeXRoaW5nIHdpdGhpbiBpdFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2xhcmVXaW5uZXIpO1xuICAgICAgICAgICAgZGVjbGFyZVdpbm5lci50ZXh0Q29udGVudCA9IGAgV2lubmVyIGlzIEdlbmVyYWwgJHtwbGF5ZXJOYW1lfSAhIWA7XG4gICAgICAgICAgICB9LCAyMjAwKVxuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgbWVzc2FnZSA9ICdZb3VyIG9wcG9uZW50IGlzIGFpbWluZyAuLi4uLi4gJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgKz0gKG1lc3NhZ2UuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICB9LCAzMCAqIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMzAwMClcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2hvdEZpcmVkTXAzLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ1RoZSBlbmVteSBmaXJlcyBhIHNob3QgaW50byB5b3VyIHdhdGVycyAuLi4uLi4gJ1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgKz0gKG1lc3NhZ2UuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAgKiBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MDAwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBjcHVBdHRhY2tWYWx1ZSA9IGdlbmVyYXRlQ3B1QXR0YWNrKHBsYXllckdhbWVCb2FyZEFycmF5LCBwbGF5ZXJTaGlwT2JqcywgJ2NwdVR1cm4nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJTaGlwT2JqcylcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmRBcnJheVtjcHVBdHRhY2tWYWx1ZV0gPT09ICdtaXNzJykge1xuICAgICAgICAgICAgICAgICAgICBzaG90TWlzc2VkTXAzLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmEgPSAnIGFuZCBtaXNzZXMuJ1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW2NwdUF0dGFja1ZhbHVlXS5jbGFzc0xpc3QuYWRkKCdtaXNzZWRBdHRhY2snKSAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG90SGl0TXAzLnBsYXkoKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW2NwdUF0dGFja1ZhbHVlXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmEgPSBcIml0J3MgYSBoaXQhXCIgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBPYmpzLmZvckVhY2goKG9iaiwgaW5kZXgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5zdW5rICYmIHBsYXllckdhbWVCb2FyZEFycmF5W2NwdUF0dGFja1ZhbHVlXS5pbmNsdWRlcyhpbmRleCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcFBpY3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBleHRyYSA9IGB0aGV5IHN1bmsgeW91ciBDYXJyaWVyISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IGV4dHJhID0gYHRoZXkgc3VuayB5b3VyIEJhdHRsZVNoaXAhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjogZXh0cmEgPSBgdGhleSBzdW5rIHlvdXIgRGVzdHJveWVyISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IGV4dHJhID0gYHRoZXkgc3VuayB5b3VyIFN1Ym1hcmluZSEgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiBleHRyYSA9IGB0aGV5IHN1bmsgeW91ciBQYXRyb2wgQm9hdCEgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7aWYgKGdhbWVCb2FyZC5lbmRHYW1lQ2hlY2socGxheWVyU2hpcE9ianMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2xhcmVXaW5uZXIpO1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJlV2lubmVyLnRleHRDb250ZW50ID0gYCBXaW5uZXIgaXMgQ1BVYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHRyYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCArPSAoZXh0cmEuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAgKiBpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3B1RmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgb25lVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgfSwgOTAwKVxuICAgICAgICAgICAgfSwgNzAwMCk7IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICB9LCA1MDApICAgXG59XG5cblxuXG5leHBvcnQge2hhbmRsZUF0dGFja3N9IiwiaW1wb3J0ICcuL2hvbWUuY3NzJztcblxuaW1wb3J0IHtwbGFjZUNwdVNoaXBzLGNwdUhpdHMsIGNwdU1pc3MsY3B1U3Vua1xufSBmcm9tICcuL2NwdUNvbnRyb2wnO1xuXG5pbXBvcnQge2Rpc3BsYXlCb2FyZHN9IGZyb20gJy4vRE9NcGxheSc7XG5cbi8vR2xvYmFsIHZhbHVlXG5jb25zdCBwbGF5ZXJTaGlwT2JqcyA9IFtdO1xuY29uc3QgcGxheWVySGVhZHMgPSBbXTtcbmNvbnN0IHBsYXllckdhbWVCb2FyZEFycmF5ID0gbmV3IEFycmF5KDEwMCkuZmlsbCgwKTtcbmxldCBnYW1lRW5kID0gZmFsc2Vcbi8vIGp1c3QgZm9yIG5vd1xubGV0IGF4aXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpOyAvLyAwID0geCwgMSA9IHk7XG5cblxuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IgKGxlbmd0aCwgaGl0cywgc3Vuaykge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gaGl0cztcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICB9XG5cbiAgICBpc1N1bmsgKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmNvbnN0IGdhbWVCb2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZXJyb3JJbnZhbGlkUG9zaXRpb24gPSBmYWxzZVxuICAgIGxldCBzaGlwQ291bnRlciA9IDE7XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSB2YWx1ZSA9PiB7XG4gICAgICAgIGxldCBwbGF5ZXJTaGlwQXJyYXkgPSBbXTtcbiAgICAgICAgYXhpcyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSlcbiAgICAgICAgaWYgKHNoaXBDb3VudGVyID4gNSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHN3aXRjaCAoc2hpcENvdW50ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkUGxhY2VtZW50KDUsIHZhbHVlLCBwbGF5ZXJTaGlwQXJyYXksIHNoaXBDb3VudGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ySW52YWxpZFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoNSwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBPYmpzLnB1c2goY2FycmllcilcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRQbGFjZW1lbnQoNCwgdmFsdWUsIHBsYXllclNoaXBBcnJheSwgc2hpcENvdW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JJbnZhbGlkUG9zaXRpb25cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0LCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcE9ianMucHVzaChiYXR0bGVzaGlwKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkUGxhY2VtZW50KDMsIHZhbHVlLCBwbGF5ZXJTaGlwQXJyYXksIHNoaXBDb3VudGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ySW52YWxpZFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcCgzLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcE9ianMucHVzaChkZXN0cm95ZXIpXG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ6IFxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRQbGFjZW1lbnQoMywgdmFsdWUsIHBsYXllclNoaXBBcnJheSwgc2hpcENvdW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JJbnZhbGlkUG9zaXRpb24gXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgzLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcE9ianMucHVzaChzdWJtYXJpbmUpXG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIDU6IFxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRQbGFjZW1lbnQoMiwgdmFsdWUsIHBsYXllclNoaXBBcnJheSwgc2hpcENvdW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JJbnZhbGlkUG9zaXRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0cm9sQm9hdCA9IG5ldyBTaGlwKDIsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwT2Jqcy5wdXNoKHBhdHJvbEJvYXQpXG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC8vIGV4dHJhIGVycm9yIGhhbmRsaW5nXG4gICAgICAgIGlmIChwbGF5ZXJTaGlwQXJyYXkgPT09IFtdKSByZXR1cm4gZXJyb3JJbnZhbGlkUG9zaXRpb25cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcGxheWVyU2hpcEFycmF5ICl7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZEFycmF5W2VsZW1lbnRdICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH0gZWxzZSBwbGF5ZXJHYW1lQm9hcmRBcnJheVtlbGVtZW50XSA9IHNoaXBDb3VudGVyOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBDb3VudGVyKys7XG4gICAgICAgICAgICBwbGF5ZXJIZWFkcy5wdXNoKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHNoaXBDb3VudGVyID4gNSkge1xuICAgICAgICAgICAgICAgIHBsYWNlQ3B1U2hpcHMoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Qm9hcmRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGxheWVyU2hpcEFycmF5XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZVZhbCwgZ2FtZUJvYXJkQXJyYXksIHNoaXBPYmpzLCBjdXJyZW50VHVybikgPT4ge1xuXG4gICAgICAgIGlmICghKGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID09PSAwIHx8IFxuICAgICAgICAgICAgZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPT09IDEgfHwgXG4gICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9PT0gMiB8fCBcbiAgICAgICAgICAgIGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID09PSAzIHx8IFxuICAgICAgICAgICAgZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPT09IDQgfHwgXG4gICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9PT0gNSlcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNwdVN1bmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHBsYXllclN1bmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID09PSAwKSBnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9IFwibWlzc1wiO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcE9ianNbZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gLSAxXS5oaXQoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzaGlwT2Jqc1tnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSAtIDFdLmlzU3VuaygpICYmIGN1cnJlbnRUdXJuID09PSAnY3B1VHVybicpIHtcbiAgICAgICAgICAgICAgICAgICAgY3B1U3Vua2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBPYmpzW2dhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdIC0gMV0uaXNTdW5rKCkgJiYgY3VycmVudFR1cm4gPT09ICdwbGF5ZXJUdXJuJykge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTdW5rZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPSBgJHtnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXX0gaGl0YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID09PSAnbWlzcycgJiYgY3VycmVudFR1cm4gPT09ICdjcHVUdXJuJyl7XG4gICAgICAgICAgICAgICAgY3B1TWlzcyhjb29yZGluYXRlVmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0uaW5jbHVkZXMoJ2hpdCcpICAmJiBjdXJyZW50VHVybiA9PT0gJ2NwdVR1cm4nKSB7XG4gICAgICAgICAgICAgICAgY3B1SGl0cyhjb29yZGluYXRlVmFsKTtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGlmIChjcHVTdW5rZWQpIHtcbiAgICAgICAgICAgICAgICBjcHVTdW5rKGNvb3JkaW5hdGVWYWwpXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBlbmRHYW1lQ2hlY2sgPSBzaGlwT2JqcyA9PiB7XG4gICAgICAgIGlmICghKHNoaXBPYmpzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LnN1bmsgPT09IGZhbHNlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VTaGlwLCBcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgZW5kR2FtZUNoZWNrXG4gICAgfVxufSkoKVxuXG5cblxuZnVuY3Rpb24gdmFsaWRQbGFjZW1lbnQgKGxlbmd0aFNoaXAsIHZhbHVlLCBwbGF5ZXJTaGlwQXJyYXkpIHtcbiAgICBcbiAgICBpZiAoIWF4aXMpIHtcbiAgICAgICAgbGV0IGZpbmRYID0gKE1hdGguZmxvb3IodmFsdWUvMTApKjEwKSArIDk7IFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aFNoaXA7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZEFycmF5W3ZhbHVlICsgaV0gIT09IDAgfHwgXG4gICAgICAgICAgICAgICAgdmFsdWUgKyBpID4gOTkgIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUgKyBpID4gZmluZFgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcEFycmF5LnB1c2godmFsdWUgKyBpKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhTaGlwOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmRBcnJheVt2YWx1ZSArIChpKjEwKV0gIT09IDAgfHwgXG4gICAgICAgICAgICAgICAgdmFsdWUgKyAoaSoxMCkgPiA5OSkgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwQXJyYXkucHVzaCh2YWx1ZSArIChpKjEwKSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbn1cblxuLy8gZ2FtZUJvYXJkLnBsYWNlU2hpcCgyMylcbi8vIGdhbWVCb2FyZC5wbGFjZVNoaXAoMTEpXG4vLyBnYW1lQm9hcmQucGxhY2VTaGlwKDM0KVxuLy8gZ2FtZUJvYXJkLnBsYWNlU2hpcCgwKVxuLy8gZ2FtZUJvYXJkLnBsYWNlU2hpcCg4MilcblxuXG5cbi8vIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDI5LCBjcHVHYW1lQm9hcmRBcnJheSwgY3B1U2hpcE9ianMsICdwbGF5ZXJUdXJuJylcbi8vIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDQyLCBjcHVHYW1lQm9hcmRBcnJheSwgY3B1U2hpcE9ianMsICdwbGF5ZXJUdXJuJylcbi8vIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDU1LCBjcHVHYW1lQm9hcmRBcnJheSwgY3B1U2hpcE9ianMsICdwbGF5ZXJUdXJuJylcbi8vIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDI1LCBjcHVHYW1lQm9hcmRBcnJheSwgY3B1U2hpcE9ianMsICdwbGF5ZXJUdXJuJylcbi8vIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDQwLCBjcHVHYW1lQm9hcmRBcnJheSwgY3B1U2hpcE9ianMsICdwbGF5ZXJUdXJuJylcblxuXG4vLyBnZW5lcmF0ZUNwdUF0dGFjayhwbGF5ZXJHYW1lQm9hcmRBcnJheSwgcGxheWVyU2hpcE9ianMsICdjcHVUdXJuJylcbi8vIGdlbmVyYXRlQ3B1QXR0YWNrKHBsYXllckdhbWVCb2FyZEFycmF5LCBwbGF5ZXJTaGlwT2JqcywgJ2NwdVR1cm4nKVxuLy8gZ2VuZXJhdGVDcHVBdHRhY2socGxheWVyR2FtZUJvYXJkQXJyYXksIHBsYXllclNoaXBPYmpzLCAnY3B1VHVybicpXG4vLyBnZW5lcmF0ZUNwdUF0dGFjayhwbGF5ZXJHYW1lQm9hcmRBcnJheSwgcGxheWVyU2hpcE9ianMsICdjcHVUdXJuJylcbi8vIGdlbmVyYXRlQ3B1QXR0YWNrKHBsYXllckdhbWVCb2FyZEFycmF5LCBwbGF5ZXJTaGlwT2JqcywgJ2NwdVR1cm4nKVxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhwbGF5ZXJHYW1lQm9hcmRBcnJheSlcblxuXG4vLyBjb25zb2xlLmxvZyhnYW1lQm9hcmQucmVjZWl2ZUF0dGFjaygyOSkpXG4vLyBjb25zb2xlLmxvZyhnYW1lQm9hcmQuZW5kR2FtZUNoZWNrKCkpXG5cblxuXG5leHBvcnQge1NoaXAsIGdhbWVCb2FyZCwgcGxheWVyR2FtZUJvYXJkQXJyYXksIHBsYXllclNoaXBPYmpzLCBwbGF5ZXJIZWFkc31cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=