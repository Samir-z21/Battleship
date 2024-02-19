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
    background-color: rgb(163, 165, 164);
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

.personalBox {
    cursor: pointer;
}

.personalBox img {
    opacity: 0.7;
    z-index: -2;
}

.enemyBoxes:hover {
    cursor: crosshair;
    background-color: green;
}

.boxDisplay img {
    opacity: 0.7;
    z-index: -2;
}

.hidden {
    display: none;
}

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

.rejection:hover {
    background-color: rgb(255, 74, 74);
    cursor: not-allowed;
}

.carrier {
    position: relative;
    left: 100px;
    min-width: 225px;
    max-width: 225px;
    height: 35px;
}

.placeMessageDiv {
    font-size: 40px;
}

.axisSelection {
    font-size: 1.1rem;
    font-weight: 800;
    height: 50px;
    width: 80px;
    border: none;
    border-radius: 4px;
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
}`, "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0px;\n    margin: 0px;\n}\n\n\n\nbody { \n    height: 100vh;\n    background-color: #010034;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    gap: 50px;\n}\n\n#title {\n    display: flex;\n    align-items: center;\n    height: 100px;\n    font-size: 70px;\n    color: #4e4e50;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n}\n\n#introForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    height: 40vh;\n}\n\n#introForm label {\n    font-size: 30px;\n}\n\n#introForm input {\n    font-size: 20px;\n    font-weight: 800;\n    border-radius: 3px;\n    border: none;\n    height: 30px;\n    padding: 10px;\n}\n\n#introForm button {\n    height: 60px;\n    width: 150px;\n    font-size: 20px;\n}\n\n\n.messageBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 25px;\n    width: 75%;\n    height: 65px;\n    border: 1px solid white;\n    border-radius: 15px;\n    background: linear-gradient(to right, #373737, #292929, #292929, #373737);\n}\n  \n\n\n.boardsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 100px;\n}\n\n.boardSection {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 10px;\n}\n\n.boardName {\n    font-size: larger;\n    font-weight: 1000;\n} \n\n.boardsDisplay,\n.personalBoard {\n    display: grid;\n    grid-template-columns: repeat(10, 45px);\n    grid-template-rows:repeat(10, 45px);\n    gap: 5px;\n}\n\n.selection {\n    background-color: rgb(163, 165, 164);\n}\n\n\n\n.boxDisplay,\n.personalBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid white;\n    font-size: 2rem;\n    max-height: 45px;\n    max-width: 45px;\n}\n\n.personalBox {\n    cursor: pointer;\n}\n\n.personalBox img {\n    opacity: 0.7;\n    z-index: -2;\n}\n\n.enemyBoxes:hover {\n    cursor: crosshair;\n    background-color: green;\n}\n\n.boxDisplay img {\n    opacity: 0.7;\n    z-index: -2;\n}\n\n.hidden {\n    display: none;\n}\n\n.show {\n    display: block;\n    filter: brightness(50%);\n}\n\n.boxDisplay.hit::after, \n.boxDisplay.missedAttack::after{\n    position: absolute;\n    content: \"\";\n    width: 15px; \n    height: 15px;\n    background-color: red;\n    border-radius: 50%; \n    z-index:2; \n}\n\n.boxDisplay.missedAttack::after{\n    background-color: white;\n}\n\n.enemyBoxes.hit:hover,\n.enemyBoxes.boxDisplay.missedAttack:hover {\n    background-color: rgb(255, 45, 45);\n    cursor: not-allowed;\n}\n\n.rejection:hover {\n    background-color: rgb(255, 74, 74);\n    cursor: not-allowed;\n}\n\n.carrier {\n    position: relative;\n    left: 100px;\n    min-width: 225px;\n    max-width: 225px;\n    height: 35px;\n}\n\n.placeMessageDiv {\n    font-size: 40px;\n}\n\n.axisSelection {\n    font-size: 1.1rem;\n    font-weight: 800;\n    height: 50px;\n    width: 80px;\n    border: none;\n    border-radius: 4px;\n}\n\n.carrier.yAxis {\n    position: relative;\n    top: 100px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n.battleship {\n    position: relative;\n    left: 75px;\n    min-width: 180px;\n    max-width: 180px;\n    height: 30px;\n}\n\n.battleship.yAxis {\n    position: relative;\n    top: 75px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n.destroyer {\n    position: relative;\n    left: 50px;\n    min-width: 135px;\n    max-width: 135px;\n    height: 30px;\n}\n\n.destroyer.yAxis {\n    position: relative;\n    top: 50px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n.submarine {\n    position: relative;\n    left: 35px;\n    min-width: 160px;\n    max-width: 160px;\n    height: 60px;\n}\n\n.submarine.yAxis {\n    position: relative;\n    top: 35px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n\n.patrolBoat {\n    position: relative;\n    left: 10px;\n    min-width: 150px;\n    max-width: 150px;\n    height: 50px;\n}\n\n.patrolBoat.yAxis {\n    position: relative;\n    top: 10px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n\n\n.declareWinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80vh;\n    font-size: 4rem;\n    font-weight: 800;\n}"],"sourceRoot":""}]);
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

/***/ "./src/DOMintro.js":
/*!*************************!*\
  !*** ./src/DOMintro.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   axisSelection: () => (/* binding */ axisSelection),
/* harmony export */   showPersonalBoard: () => (/* binding */ showPersonalBoard)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const mainContainer = document.querySelector('#mainContainer');
const playerInput = document.querySelector('#playerName');
const submitBtn = document.querySelector('#submitBtn');


const personalBoxesDiv = [];
let currentShip = 'carrier';
let checking = false;
let storedVal = [];

const axisSelection = document.createElement('button');
axisSelection.classList.add('axisSelection');
const placeMessageDiv = document.createElement('div');

function showPersonalBoard (playerName) {

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild)
    }

    placeMessageDiv.textContent = `${playerName}, place your ${currentShip.charAt(0).toUpperCase() + currentShip.slice(1)}:`
    placeMessageDiv.classList.add('placeMessageDiv')
    mainContainer.appendChild(placeMessageDiv);

    axisSelection.textContent = "AXIS: X";
    axisSelection.addEventListener('click', () => {
        if (axisSelection.textContent === "AXIS: X") axisSelection.textContent = "AXIS: Y";
        else  axisSelection.textContent = "AXIS: X" 
    })
    mainContainer.appendChild(axisSelection);

    const personalBoard = document.createElement('div');
    personalBoard.classList.add('personalBoard');

    for (let i = 0; i < 100; i++) {
        const personalBox = document.createElement('div');
        personalBox.classList.add('personalBox');
        personalBox.value = i;
        personalBox.addEventListener('mouseenter', () => {
            potentialPlacement(axisSelection, personalBox.value)
        });

      


        personalBox.addEventListener('mouseleave', () => {
        
            let loop = 0;
            switch (currentShip) {
            case 'carrier':
                loop = 5;
            break;
            
            case 'battleship': 
                loop = 4;
            break;
    
            case 'destroyer':
                loop = 3;
            break;
    
            case 'submarine':
                loop = 3;
            break;
    
            case 'patrolBoat':
                loop = 2;
            break;
    
        }

        for (let i = 0; i < 100; i++) {
            if (personalBox.value + i <= 99) {
                personalBoxesDiv[personalBox.value + i].classList.remove('selection')   
            }
        }
        })

        personalBox.addEventListener('click', () => {
            placeShip(personalBox.value, playerName, axisSelection)
        })
        personalBoxesDiv.push(personalBox);
        personalBoard.appendChild(personalBox);
    }

    mainContainer.appendChild(personalBoard);


}

function potentialPlacement (axisSelection, index) {
    let loop = 0;
    switch (currentShip) {
        case 'carrier':
            loop = 5;
        break;
        
        case 'battleship': 
            loop = 4;
        break;

        case 'destroyer':
            loop = 3;
        break;

        case 'submarine':
            loop = 3;
        break;

        case 'patrolBoat':
            loop = 2;
        break;
    }

    let availableSpaces = true;
    if (axisSelection.textContent === "AXIS: X") {
        let findX = (Math.floor(index/10)*10) + 9; 


        for (let i = 0; i < loop; i++) {
            if (index + i > 99 || 
                index + i > findX || 
                storedVal.find(val => val === index + i )) {
                availableSpaces = false;
            }
        }        

                
        for (let i = 0; i < loop; i++) {
            if (availableSpaces) {
                personalBoxesDiv[index + i].classList.remove('rejection');
                personalBoxesDiv[index + i].classList.add('selection');
                checking = true
            } else if (!availableSpaces) {
                if (index + i <= 99)
                personalBoxesDiv[index + i].classList.add('rejection');
            }
        }


    } else {
        for (let i = 0; i < loop; i++) {
            if (index + i*10 > 99 || 
                storedVal.find(val => val === index + i*10 )) {
                availableSpaces = false;
            }
        }        

        for (let i = 0; i < loop; i++) {
            if (availableSpaces) {
                personalBoxesDiv[index + i*10].classList.remove('rejection');
                personalBoxesDiv[index + i*10].classList.add('selection');
                checking = true
            } else if (!availableSpaces) {
                if (index + i*10 <= 99)
                personalBoxesDiv[index + i*10].classList.add('rejection');
            }
        }
    }
}

function placeShip (value, playerName, axisSelection) {
    let counter = 0;
    let loop = 0;
    let chosenShip;
    if (_index__WEBPACK_IMPORTED_MODULE_0__.gameBoard.placeShip(value)) {
        if (checking) {
            switch (currentShip) {
                case 'carrier':
                counter = 1;
                loop = 5;
                const carrierPic = createImg("carrier");
                chosenShip = carrierPic
                personalBoxesDiv[value].appendChild(carrierPic);
                currentShip = 'battleship';
            break;
            
            case 'battleship': 
                counter = 2;
                loop = 4;
                const battleshipPic = createImg("battleship");
                chosenShip = battleshipPic;
                personalBoxesDiv[value].appendChild(battleshipPic);
                currentShip = 'destroyer';
            break;
    
            case 'destroyer':
                counter = 3;
                loop = 3;
                const destroyerPic = createImg("destroyer");
                chosenShip = destroyerPic;
                personalBoxesDiv[value].appendChild(destroyerPic);
                currentShip = 'submarine';
            break;
    
            case 'submarine':
                counter = 4;
                loop = 3;
                const submarinePic = createImg("submarine");
                chosenShip = submarinePic;
                personalBoxesDiv[value].appendChild(submarinePic);
                currentShip = 'patrolBoat';
            break;
    
            case 'patrolBoat':
                counter = 5;
                loop = 2;
                const patrolBoatPic = createImg("patrolBoat");
                chosenShip = patrolBoatPic;
                personalBoxesDiv[value].appendChild(patrolBoatPic);
                currentShip = '';
            break;
        }

        
        if (axisSelection.textContent === "AXIS: Y") {
            chosenShip.classList.add('yAxis') 
        }

            placeMessageDiv.textContent = `${playerName}, place your ${currentShip.charAt(0).toUpperCase() + currentShip.slice(1)}:`

            if (currentShip === 'patrolBoat') {
                placeMessageDiv.textContent = `${playerName}, place your Patrol Boat:`
            }

            for (let i = 0; i < loop; i++) {
                if (axisSelection.textContent === "AXIS: X") {
                    storedVal.push(value + i);
                    personalBoxesDiv[value + i].classList.remove('selection')
                } else {
                    storedVal.push(value + i*10);
                    personalBoxesDiv[value + i*10].classList.remove('selection')
                }
            }
        } 
       
        
    }
}



function createImg (className) {
    const img = document.createElement('img');
    img.classList.add(className);
    img.src = `./shipsPic/${className}.png`;

    return img
}







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
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild)
    }
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
let oneTimer = 0
let message = '';
let extra = '';
let timer = 500


function handleAttacks (cpuBox, index) {

    const declareWinner = document.createElement('div');
    declareWinner.classList.add('declareWinner');

    if (oneTime !== 0) {
        timer = 200
    }

    oneTimer = 1

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
    }, timer)   
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
/* harmony import */ var _DOMintro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMintro */ "./src/DOMintro.js");








const submitBtn = document.querySelector('#submitBtn');
const playerInput = document.querySelector('#playerName');

submitBtn.addEventListener('click', event => {
    event.preventDefault();
    let playerName = playerInput.value;
     (0,_DOMintro__WEBPACK_IMPORTED_MODULE_3__.showPersonalBoard)(playerName)
})

//Global value
const playerShipObjs = [];
const playerHeads = [];
const playerGameBoardArray = new Array(100).fill(0);
let gameEnd = false


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
    
    if (_DOMintro__WEBPACK_IMPORTED_MODULE_3__.axisSelection.textContent === "AXIS: X") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK0VBQStFLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksU0FBUyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE1BQU07QUFDTix3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkMsV0FBVyxlQUFlLDJEQUEyRDs7QUFFbEk7QUFDQSxpREFBaUQsV0FBVztBQUM1RDs7QUFFQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7O0FBRXRDO0FBQ0E7O0FBRXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVB6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdxRjtBQUNJO0FBQzVDOztBQUU3QztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVztBQUN6RDtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxJQUFJLHdEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUksK0NBQVc7QUFDZixnQkFBZ0Isd0RBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFvQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBb0I7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQW9CO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFvQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBb0I7QUFDcEM7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksMERBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBYTtBQUN6QixTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMLElBQUksaURBQVE7QUFDWixnQkFBZ0IsMERBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQWlCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQWlCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQWlCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQWlCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQWlCO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOztBQUV0QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEx3Qzs7QUFFeEM7QUFDQTs7QUFFQSxtQ0FBbUMsWUFBWTs7QUFFL0M7OztBQUdBOztBQUVBLHdCQUF3Qix3Q0FBSTtBQUM1QjtBQUNBO0FBQ0EsMkJBQTJCLHdDQUFJO0FBQy9CO0FBQ0E7QUFDQSwwQkFBMEIsd0NBQUk7QUFDOUI7O0FBRUEsMEJBQTBCLHdDQUFJO0FBQzlCOztBQUVBLDJCQUEyQix3Q0FBSTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUEsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFTO0FBQ2I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTHdFO0FBQ087QUFDWTs7QUFFM0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDZDQUFTLHFCQUFxQiwwREFBaUIsQ0FBQyxvREFBVztBQUNuRTtBQUNBO0FBQ0EsUUFBUSxnREFBVTtBQUNsQjs7QUFFQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0EsZ0JBQWdCLGdEQUFVO0FBQzFCLGFBQWE7QUFDYjs7QUFFQTs7O0FBR0E7QUFDQSxnQkFBZ0IsMERBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVc7QUFDM0Isb0NBQW9DLDBEQUFpQjtBQUNyRCx3QkFBd0IsaURBQVc7QUFDbkMsd0JBQXdCLGlEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQSxvQkFBb0IsZ0RBQVU7QUFDOUIsaUJBQWlCO0FBQ2pCOztBQUVBLFNBQVM7O0FBRVQ7QUFDQSxnQkFBZ0IsNkNBQVMsY0FBYyxvREFBVztBQUNsRDtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSw4REFBOEQsWUFBWTtBQUMxRSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0EsWUFBWSxnREFBVTtBQUN0QjtBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQSxvQkFBb0IsZ0RBQVU7QUFDOUIsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQVU7QUFDMUIsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBLHdCQUF3QixnREFBVTtBQUNsQyxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxxQ0FBcUMsOERBQWlCLENBQUMsd0RBQW9CLEVBQUUsa0RBQWM7QUFDM0Y7QUFDQSxvQkFBb0Isd0RBQW9CO0FBQ3hDO0FBQ0E7QUFDQSxvQkFBb0IsbURBQWE7QUFDakMsa0JBQWtCO0FBQ2xCO0FBQ0Esb0JBQW9CLG1EQUFhO0FBQ2pDO0FBQ0E7O0FBRUEsb0JBQW9CLGtEQUFjO0FBQ2xDLHdDQUF3Qyx3REFBb0I7QUFDNUQsNEJBQTRCLG9EQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBLHVDQUF1QyxJQUFJLDZDQUFTLGNBQWMsa0RBQWM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixnQ0FBZ0Msa0JBQWtCO0FBQ2xEO0FBQ0Esd0JBQXdCLGdEQUFVO0FBQ2xDLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTG9COztBQUVnRDtBQUM1QjtBQUNvQjs7OztBQUk1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNERBQWlCO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDBEQUFhO0FBQzdCLGdCQUFnQix1REFBYTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELCtCQUErQjtBQUNsRjs7QUFFQTtBQUNBLGdCQUFnQixvREFBTztBQUN2QixjQUFjO0FBQ2QsZ0JBQWdCLG9EQUFPO0FBQ3ZCOztBQUVBO0FBQ0EsZ0JBQWdCLG9EQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0EsUUFBUSxvREFBYTtBQUNyQjtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7QUFHQTtBQUNBOzs7O0FBSTJFOzs7Ozs7OztVQ3BQM0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hvbWUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hvbWUuY3NzPzdmOWMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTWludHJvLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NwdUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oYW5kbGVBdHRhY2tzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cblxuXG5ib2R5IHsgXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMDM0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBnYXA6IDUwcHg7XG59XG5cbiN0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIGNvbG9yOiAjNGU0ZTUwO1xufVxuXG4jbWFpbkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4jaW50cm9Gb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG4gICAgaGVpZ2h0OiA0MHZoO1xufVxuXG4jaW50cm9Gb3JtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbiNpbnRyb0Zvcm0gaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNpbnRyb0Zvcm0gYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG4ubWVzc2FnZUJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogNjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM3MzczNywgIzI5MjkyOSwgIzI5MjkyOSwgIzM3MzczNyk7XG59XG4gIFxuXG5cbi5ib2FyZHNDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwMHB4O1xufVxuXG4uYm9hcmRTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmJvYXJkTmFtZSB7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG59IFxuXG4uYm9hcmRzRGlzcGxheSxcbi5wZXJzb25hbEJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0NXB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KDEwLCA0NXB4KTtcbiAgICBnYXA6IDVweDtcbn1cblxuLnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTY1LCAxNjQpO1xufVxuXG5cblxuLmJveERpc3BsYXksXG4ucGVyc29uYWxCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWF4LWhlaWdodDogNDVweDtcbiAgICBtYXgtd2lkdGg6IDQ1cHg7XG59XG5cbi5wZXJzb25hbEJveCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGVyc29uYWxCb3ggaW1nIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgei1pbmRleDogLTI7XG59XG5cbi5lbmVteUJveGVzOmhvdmVyIHtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmJveERpc3BsYXkgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgei1pbmRleDogLTI7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcbn1cblxuLmJveERpc3BsYXkuaGl0OjphZnRlciwgXG4uYm94RGlzcGxheS5taXNzZWRBdHRhY2s6OmFmdGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxNXB4OyBcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgei1pbmRleDoyOyBcbn1cblxuLmJveERpc3BsYXkubWlzc2VkQXR0YWNrOjphZnRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmVuZW15Qm94ZXMuaGl0OmhvdmVyLFxuLmVuZW15Qm94ZXMuYm94RGlzcGxheS5taXNzZWRBdHRhY2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ1LCA0NSk7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnJlamVjdGlvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uY2FycmllciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIG1pbi13aWR0aDogMjI1cHg7XG4gICAgbWF4LXdpZHRoOiAyMjVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5wbGFjZU1lc3NhZ2VEaXYge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmF4aXNTZWxlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jYXJyaWVyLnlBeGlzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uYmF0dGxlc2hpcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDc1cHg7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmJhdHRsZXNoaXAueUF4aXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmRlc3Ryb3llciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgbWluLXdpZHRoOiAxMzVweDtcbiAgICBtYXgtd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmRlc3Ryb3llci55QXhpcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uc3VibWFyaW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMzVweDtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIG1heC13aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uc3VibWFyaW5lLnlBeGlzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzNXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cblxuLnBhdHJvbEJvYXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5wYXRyb2xCb2F0LnlBeGlzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cblxuLmRlY2xhcmVXaW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUVBQXlFO0FBQzdFOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7OztBQUlBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcblxcblxcbmJvZHkgeyBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDAzNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgY29sb3I6ICM0ZTRlNTA7XFxufVxcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuI2ludHJvRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGhlaWdodDogNDB2aDtcXG59XFxuXFxuI2ludHJvRm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI2ludHJvRm9ybSBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2ludHJvRm9ybSBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5cXG4ubWVzc2FnZUJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM3MzczNywgIzI5MjkyOSwgIzI5MjkyOSwgIzM3MzczNyk7XFxufVxcbiAgXFxuXFxuXFxuLmJvYXJkc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYm9hcmRTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5ib2FyZE5hbWUge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxufSBcXG5cXG4uYm9hcmRzRGlzcGxheSxcXG4ucGVyc29uYWxCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0NXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCgxMCwgNDVweCk7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTY1LCAxNjQpO1xcbn1cXG5cXG5cXG5cXG4uYm94RGlzcGxheSxcXG4ucGVyc29uYWxCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWF4LWhlaWdodDogNDVweDtcXG4gICAgbWF4LXdpZHRoOiA0NXB4O1xcbn1cXG5cXG4ucGVyc29uYWxCb3gge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wZXJzb25hbEJveCBpbWcge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIHotaW5kZXg6IC0yO1xcbn1cXG5cXG4uZW5lbXlCb3hlczpob3ZlciB7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJveERpc3BsYXkgaW1nIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICB6LWluZGV4OiAtMjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xcbn1cXG5cXG4uYm94RGlzcGxheS5oaXQ6OmFmdGVyLCBcXG4uYm94RGlzcGxheS5taXNzZWRBdHRhY2s6OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTVweDsgXFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxcbiAgICB6LWluZGV4OjI7IFxcbn1cXG5cXG4uYm94RGlzcGxheS5taXNzZWRBdHRhY2s6OmFmdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVuZW15Qm94ZXMuaGl0OmhvdmVyLFxcbi5lbmVteUJveGVzLmJveERpc3BsYXkubWlzc2VkQXR0YWNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDUsIDQ1KTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnJlamVjdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxMDBweDtcXG4gICAgbWluLXdpZHRoOiAyMjVweDtcXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4ucGxhY2VNZXNzYWdlRGl2IHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYXhpc1NlbGVjdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNhcnJpZXIueUF4aXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNzVweDtcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXG4gICAgbWF4LXdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcC55QXhpcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA3NXB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmRlc3Ryb3llciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNTBweDtcXG4gICAgbWluLXdpZHRoOiAxMzVweDtcXG4gICAgbWF4LXdpZHRoOiAxMzVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZGVzdHJveWVyLnlBeGlzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc3VibWFyaW5lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAzNXB4O1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5zdWJtYXJpbmUueUF4aXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMzVweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5wYXRyb2xCb2F0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5wYXRyb2xCb2F0LnlBeGlzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG5cXG4uZGVjbGFyZVdpbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250YWluZXInKTtcbmNvbnN0IHBsYXllcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllck5hbWUnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRCdG4nKTtcblxuXG5jb25zdCBwZXJzb25hbEJveGVzRGl2ID0gW107XG5sZXQgY3VycmVudFNoaXAgPSAnY2Fycmllcic7XG5sZXQgY2hlY2tpbmcgPSBmYWxzZTtcbmxldCBzdG9yZWRWYWwgPSBbXTtcblxuY29uc3QgYXhpc1NlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYXhpc1NlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdheGlzU2VsZWN0aW9uJyk7XG5jb25zdCBwbGFjZU1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZnVuY3Rpb24gc2hvd1BlcnNvbmFsQm9hcmQgKHBsYXllck5hbWUpIHtcblxuICAgIHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgfVxuXG4gICAgcGxhY2VNZXNzYWdlRGl2LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIHBsYWNlIHlvdXIgJHtjdXJyZW50U2hpcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGN1cnJlbnRTaGlwLnNsaWNlKDEpfTpgXG4gICAgcGxhY2VNZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYWNlTWVzc2FnZURpdicpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZU1lc3NhZ2VEaXYpO1xuXG4gICAgYXhpc1NlbGVjdGlvbi50ZXh0Q29udGVudCA9IFwiQVhJUzogWFwiO1xuICAgIGF4aXNTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChheGlzU2VsZWN0aW9uLnRleHRDb250ZW50ID09PSBcIkFYSVM6IFhcIikgYXhpc1NlbGVjdGlvbi50ZXh0Q29udGVudCA9IFwiQVhJUzogWVwiO1xuICAgICAgICBlbHNlICBheGlzU2VsZWN0aW9uLnRleHRDb250ZW50ID0gXCJBWElTOiBYXCIgXG4gICAgfSlcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGF4aXNTZWxlY3Rpb24pO1xuXG4gICAgY29uc3QgcGVyc29uYWxCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBlcnNvbmFsQm9hcmQuY2xhc3NMaXN0LmFkZCgncGVyc29uYWxCb2FyZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBjb25zdCBwZXJzb25hbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwZXJzb25hbEJveC5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbEJveCcpO1xuICAgICAgICBwZXJzb25hbEJveC52YWx1ZSA9IGk7XG4gICAgICAgIHBlcnNvbmFsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBwb3RlbnRpYWxQbGFjZW1lbnQoYXhpc1NlbGVjdGlvbiwgcGVyc29uYWxCb3gudmFsdWUpXG4gICAgICAgIH0pO1xuXG4gICAgICBcblxuXG4gICAgICAgIHBlcnNvbmFsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAgICAgbGV0IGxvb3AgPSAwO1xuICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50U2hpcCkge1xuICAgICAgICAgICAgY2FzZSAnY2Fycmllcic6XG4gICAgICAgICAgICAgICAgbG9vcCA9IDU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSAnYmF0dGxlc2hpcCc6IFxuICAgICAgICAgICAgICAgIGxvb3AgPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlICdkZXN0cm95ZXInOlxuICAgICAgICAgICAgICAgIGxvb3AgPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlICdzdWJtYXJpbmUnOlxuICAgICAgICAgICAgICAgIGxvb3AgPSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlICdwYXRyb2xCb2F0JzpcbiAgICAgICAgICAgICAgICBsb29wID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBlcnNvbmFsQm94LnZhbHVlICsgaSA8PSA5OSkge1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsQm94ZXNEaXZbcGVyc29uYWxCb3gudmFsdWUgKyBpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3Rpb24nKSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcGVyc29uYWxCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwbGFjZVNoaXAocGVyc29uYWxCb3gudmFsdWUsIHBsYXllck5hbWUsIGF4aXNTZWxlY3Rpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHBlcnNvbmFsQm94ZXNEaXYucHVzaChwZXJzb25hbEJveCk7XG4gICAgICAgIHBlcnNvbmFsQm9hcmQuYXBwZW5kQ2hpbGQocGVyc29uYWxCb3gpO1xuICAgIH1cblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGVyc29uYWxCb2FyZCk7XG5cblxufVxuXG5mdW5jdGlvbiBwb3RlbnRpYWxQbGFjZW1lbnQgKGF4aXNTZWxlY3Rpb24sIGluZGV4KSB7XG4gICAgbGV0IGxvb3AgPSAwO1xuICAgIHN3aXRjaCAoY3VycmVudFNoaXApIHtcbiAgICAgICAgY2FzZSAnY2Fycmllcic6XG4gICAgICAgICAgICBsb29wID0gNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICBjYXNlICdiYXR0bGVzaGlwJzogXG4gICAgICAgICAgICBsb29wID0gNDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZGVzdHJveWVyJzpcbiAgICAgICAgICAgIGxvb3AgPSAzO1xuICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzdWJtYXJpbmUnOlxuICAgICAgICAgICAgbG9vcCA9IDM7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3BhdHJvbEJvYXQnOlxuICAgICAgICAgICAgbG9vcCA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBhdmFpbGFibGVTcGFjZXMgPSB0cnVlO1xuICAgIGlmIChheGlzU2VsZWN0aW9uLnRleHRDb250ZW50ID09PSBcIkFYSVM6IFhcIikge1xuICAgICAgICBsZXQgZmluZFggPSAoTWF0aC5mbG9vcihpbmRleC8xMCkqMTApICsgOTsgXG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3A7IGkrKykge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgaSA+IDk5IHx8IFxuICAgICAgICAgICAgICAgIGluZGV4ICsgaSA+IGZpbmRYIHx8IFxuICAgICAgICAgICAgICAgIHN0b3JlZFZhbC5maW5kKHZhbCA9PiB2YWwgPT09IGluZGV4ICsgaSApKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlU3BhY2VzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlU3BhY2VzKSB7XG4gICAgICAgICAgICAgICAgcGVyc29uYWxCb3hlc0RpdltpbmRleCArIGldLmNsYXNzTGlzdC5yZW1vdmUoJ3JlamVjdGlvbicpO1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsQm94ZXNEaXZbaW5kZXggKyBpXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBjaGVja2luZyA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWF2YWlsYWJsZVNwYWNlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCArIGkgPD0gOTkpXG4gICAgICAgICAgICAgICAgcGVyc29uYWxCb3hlc0RpdltpbmRleCArIGldLmNsYXNzTGlzdC5hZGQoJ3JlamVjdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggKyBpKjEwID4gOTkgfHwgXG4gICAgICAgICAgICAgICAgc3RvcmVkVmFsLmZpbmQodmFsID0+IHZhbCA9PT0gaW5kZXggKyBpKjEwICkpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVTcGFjZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVTcGFjZXMpIHtcbiAgICAgICAgICAgICAgICBwZXJzb25hbEJveGVzRGl2W2luZGV4ICsgaSoxMF0uY2xhc3NMaXN0LnJlbW92ZSgncmVqZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgcGVyc29uYWxCb3hlc0RpdltpbmRleCArIGkqMTBdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIGNoZWNraW5nID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmICghYXZhaWxhYmxlU3BhY2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICsgaSoxMCA8PSA5OSlcbiAgICAgICAgICAgICAgICBwZXJzb25hbEJveGVzRGl2W2luZGV4ICsgaSoxMF0uY2xhc3NMaXN0LmFkZCgncmVqZWN0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcCAodmFsdWUsIHBsYXllck5hbWUsIGF4aXNTZWxlY3Rpb24pIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGxvb3AgPSAwO1xuICAgIGxldCBjaG9zZW5TaGlwO1xuICAgIGlmIChnYW1lQm9hcmQucGxhY2VTaGlwKHZhbHVlKSkge1xuICAgICAgICBpZiAoY2hlY2tpbmcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudFNoaXApIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjYXJyaWVyJzpcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gMTtcbiAgICAgICAgICAgICAgICBsb29wID0gNTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJyaWVyUGljID0gY3JlYXRlSW1nKFwiY2FycmllclwiKTtcbiAgICAgICAgICAgICAgICBjaG9zZW5TaGlwID0gY2FycmllclBpY1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsQm94ZXNEaXZbdmFsdWVdLmFwcGVuZENoaWxkKGNhcnJpZXJQaWMpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gJ2JhdHRsZXNoaXAnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ2JhdHRsZXNoaXAnOiBcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gMjtcbiAgICAgICAgICAgICAgICBsb29wID0gNDtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXR0bGVzaGlwUGljID0gY3JlYXRlSW1nKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgICAgICAgICBjaG9zZW5TaGlwID0gYmF0dGxlc2hpcFBpYztcbiAgICAgICAgICAgICAgICBwZXJzb25hbEJveGVzRGl2W3ZhbHVlXS5hcHBlbmRDaGlsZChiYXR0bGVzaGlwUGljKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hpcCA9ICdkZXN0cm95ZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlICdkZXN0cm95ZXInOlxuICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAzO1xuICAgICAgICAgICAgICAgIGxvb3AgPSAzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3Ryb3llclBpYyA9IGNyZWF0ZUltZyhcImRlc3Ryb3llclwiKTtcbiAgICAgICAgICAgICAgICBjaG9zZW5TaGlwID0gZGVzdHJveWVyUGljO1xuICAgICAgICAgICAgICAgIHBlcnNvbmFsQm94ZXNEaXZbdmFsdWVdLmFwcGVuZENoaWxkKGRlc3Ryb3llclBpYyk7XG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXAgPSAnc3VibWFyaW5lJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgY2FzZSAnc3VibWFyaW5lJzpcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gNDtcbiAgICAgICAgICAgICAgICBsb29wID0gMztcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtYXJpbmVQaWMgPSBjcmVhdGVJbWcoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgICAgICAgICAgY2hvc2VuU2hpcCA9IHN1Ym1hcmluZVBpYztcbiAgICAgICAgICAgICAgICBwZXJzb25hbEJveGVzRGl2W3ZhbHVlXS5hcHBlbmRDaGlsZChzdWJtYXJpbmVQaWMpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gJ3BhdHJvbEJvYXQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlICdwYXRyb2xCb2F0JzpcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gNTtcbiAgICAgICAgICAgICAgICBsb29wID0gMjtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRyb2xCb2F0UGljID0gY3JlYXRlSW1nKFwicGF0cm9sQm9hdFwiKTtcbiAgICAgICAgICAgICAgICBjaG9zZW5TaGlwID0gcGF0cm9sQm9hdFBpYztcbiAgICAgICAgICAgICAgICBwZXJzb25hbEJveGVzRGl2W3ZhbHVlXS5hcHBlbmRDaGlsZChwYXRyb2xCb2F0UGljKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hpcCA9ICcnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgaWYgKGF4aXNTZWxlY3Rpb24udGV4dENvbnRlbnQgPT09IFwiQVhJUzogWVwiKSB7XG4gICAgICAgICAgICBjaG9zZW5TaGlwLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJykgXG4gICAgICAgIH1cblxuICAgICAgICAgICAgcGxhY2VNZXNzYWdlRGl2LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIHBsYWNlIHlvdXIgJHtjdXJyZW50U2hpcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGN1cnJlbnRTaGlwLnNsaWNlKDEpfTpgXG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2hpcCA9PT0gJ3BhdHJvbEJvYXQnKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VNZXNzYWdlRGl2LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0sIHBsYWNlIHlvdXIgUGF0cm9sIEJvYXQ6YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3A7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChheGlzU2VsZWN0aW9uLnRleHRDb250ZW50ID09PSBcIkFYSVM6IFhcIikge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZWRWYWwucHVzaCh2YWx1ZSArIGkpO1xuICAgICAgICAgICAgICAgICAgICBwZXJzb25hbEJveGVzRGl2W3ZhbHVlICsgaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0aW9uJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZWRWYWwucHVzaCh2YWx1ZSArIGkqMTApO1xuICAgICAgICAgICAgICAgICAgICBwZXJzb25hbEJveGVzRGl2W3ZhbHVlICsgaSoxMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0aW9uJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUltZyAoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBpbWcuc3JjID0gYC4vc2hpcHNQaWMvJHtjbGFzc05hbWV9LnBuZ2A7XG5cbiAgICByZXR1cm4gaW1nXG59XG5cbmV4cG9ydCB7c2hvd1BlcnNvbmFsQm9hcmQsIGF4aXNTZWxlY3Rpb259XG5cblxuXG4iLCIvLyBjb2RlIGZvciByZW1vdmluZyBhbGwgcHJldmlvdXMgZWxlbWVudCBpbiBcbi8vIFxuLy8gXG4vLyBcbi8vIFxuLy8gXG5cblxuaW1wb3J0IHtnYW1lQm9hcmQsIHBsYXllckdhbWVCb2FyZEFycmF5LCBwbGF5ZXJTaGlwT2JqcywgcGxheWVySGVhZHN9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtnZW5lcmF0ZUNwdUF0dGFjaywgY3B1R2FtZUJvYXJkQXJyYXksIGNwdVNoaXBPYmpzLCBjcHVIZWFkc30gZnJvbSAnLi9jcHVDb250cm9sJztcbmltcG9ydCB7aGFuZGxlQXR0YWNrc30gZnJvbSAnLi9oYW5kbGVBdHRhY2tzJ1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250YWluZXInKTtcbmNvbnN0IG1lc3NhZ2VCb3ggPSBjcmVhdGVEaXYoJ21lc3NhZ2VCb3gnKTtcblxuXG5jb25zdCBwbGF5ZXJOYW1lID0gJ1NhbWlyJ1xuY29uc3QgcGxheWVyQm94RGl2cyA9IFtdO1xuY29uc3QgY3B1Qm94RGl2cyA9IFtdO1xuY29uc3QgcGxheWVyU2hpcFBpY3MgPSBbXTtcbmNvbnN0IGNwdVNoaXBQaWNzID0gW107XG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmRzICgpIHtcbiAgICB3aGlsZSAobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgIH1cbiAgICBsZXQgbWVzc2FnZSA9IGBBd2FpdGluZyBvcmRlcnMsIEFkbWlyYWwgJHtwbGF5ZXJOYW1lfWA7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtZXNzYWdlQm94LnRleHRDb250ZW50ICs9IChtZXNzYWdlLmNoYXJBdChpKSk7XG4gICAgICAgIH0sIDMwICogaSk7XG4gICAgfVxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlQm94KTtcbiAgICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gY3JlYXRlRGl2KCdib2FyZFNlY3Rpb24nKTsgIFxuICAgIGNvbnN0IHBsYXllckJvYXJkTmFtZSA9IGNyZWF0ZURpdignYm9hcmROYW1lJywgJ0ZSSUVORExZIFdBVEVSUycpO1xuICAgIGNvbnN0IHBsYXllckRpc3BsYXlCb2FyZCA9IGNyZWF0ZURpdignYm9hcmRzRGlzcGxheScpO1xuXG4gICAgcGxheWVyU2VjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZE5hbWUpO1xuICAgIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVyRGlzcGxheUJvYXJkKTtcblxuXG4gICAgcGxheWVyR2FtZUJvYXJkQXJyYXkuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllckJveCA9IGNyZWF0ZURpdignYm94RGlzcGxheScsIHVuZGVmaW5lZCwgaW5kZXgpO1xuICAgICAgICBwbGF5ZXJCb3hEaXZzLnB1c2gocGxheWVyQm94KTtcbiAgICAgICAgcGxheWVyRGlzcGxheUJvYXJkLmFwcGVuZENoaWxkKHBsYXllckJveCk7XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJIZWFkcy5mb3JFYWNoKHNwb3QgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBsYXllckdhbWVCb2FyZEFycmF5W3Nwb3RdKSB7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgY29uc3QgY2FycmllclBpYyA9IGNyZWF0ZUltZyhcImNhcnJpZXJcIik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGljcy5wdXNoKGNhcnJpZXJQaWMpO1xuICAgICAgICAgICAgcGxheWVyQm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChjYXJyaWVyUGljKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDEpIGNhcnJpZXJQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjb25zdCBiYXR0bGVzaGlwUGljID0gY3JlYXRlSW1nKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgICAgIHBsYXllclNoaXBQaWNzLnB1c2goYmF0dGxlc2hpcFBpYyk7XG4gICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW3Nwb3RdLmFwcGVuZENoaWxkKGJhdHRsZXNoaXBQaWMpO1xuICAgICAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gMikgYmF0dGxlc2hpcFBpYy5jbGFzc0xpc3QuYWRkKCd5QXhpcycpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzogXG4gICAgICAgICAgICBjb25zdCBkZXN0cm95ZXJQaWMgPSBjcmVhdGVJbWcoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGljcy5wdXNoKGRlc3Ryb3llclBpYyk7XG4gICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW3Nwb3RdLmFwcGVuZENoaWxkKGRlc3Ryb3llclBpYyk7XG4gICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbc3BvdCArIDFdICE9PSAzKSBkZXN0cm95ZXJQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBjb25zdCBzdWJtYXJpbmVQaWMgPSBjcmVhdGVJbWcoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGljcy5wdXNoKHN1Ym1hcmluZVBpYyk7XG4gICAgICAgICAgICBwbGF5ZXJCb3hEaXZzW3Nwb3RdLmFwcGVuZENoaWxkKHN1Ym1hcmluZVBpYyk7XG4gICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbc3BvdCArIDFdICE9PSA0KSBzdWJtYXJpbmVQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU6IFxuICAgICAgICAgICAgY29uc3QgcGF0cm9sQm9hdCA9IGNyZWF0ZUltZyhcInBhdHJvbEJvYXRcIik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGljcy5wdXNoKHBhdHJvbEJvYXQpO1xuICAgICAgICAgICAgcGxheWVyQm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChwYXRyb2xCb2F0KTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDUpIHBhdHJvbEJvYXQuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGVuZW15U2VjdGlvbiA9IGNyZWF0ZURpdignYm9hcmRTZWN0aW9uJylcbiAgICBjb25zdCBlbmVteUJvYXJkTmFtZSA9IGNyZWF0ZURpdignYm9hcmROYW1lJywgJ0VORU1ZIFdBVEVSUycpO1xuICAgIGNvbnN0IGNwdURpc3BsYXlCb2FyZCA9IGNyZWF0ZURpdignYm9hcmRzRGlzcGxheScpO1xuXG4gICAgZW5lbXlTZWN0aW9uLmFwcGVuZENoaWxkKGVuZW15Qm9hcmROYW1lKTtcbiAgICBlbmVteVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3B1RGlzcGxheUJvYXJkKTsgICAgXG5cbiAgICBjcHVHYW1lQm9hcmRBcnJheS5mb3JFYWNoKChib3gsaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY3B1Qm94ID0gY3JlYXRlRGl2KCdib3hEaXNwbGF5JywgdW5kZWZpbmVkLCBpbmRleCk7XG4gICAgICAgIGNwdUJveC5jbGFzc0xpc3QuYWRkKCdlbmVteUJveGVzJylcbiAgICAgICAgY3B1Qm94RGl2cy5wdXNoKGNwdUJveCk7XG4gICAgICAgIGNwdUJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZUF0dGFja3MoY3B1Qm94LCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjcHVEaXNwbGF5Qm9hcmQuYXBwZW5kQ2hpbGQoY3B1Qm94KTtcbiAgICB9KTtcblxuICAgIGNwdUhlYWRzLmZvckVhY2goc3BvdCA9PiB7XG4gICAgICAgIHN3aXRjaCAoY3B1R2FtZUJvYXJkQXJyYXlbc3BvdF0pIHtcbiAgICAgICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICBjb25zdCBjYXJyaWVyUGljID0gY3JlYXRlSW1nKFwiY2FycmllclwiKTtcbiAgICAgICAgICAgIGNhcnJpZXJQaWMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBjcHVTaGlwUGljcy5wdXNoKGNhcnJpZXJQaWMpO1xuICAgICAgICAgICAgY3B1Qm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChjYXJyaWVyUGljKTtcbiAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDEpIGNhcnJpZXJQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjb25zdCBiYXR0bGVzaGlwUGljID0gY3JlYXRlSW1nKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXBQaWMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBjcHVTaGlwUGljcy5wdXNoKGJhdHRsZXNoaXBQaWMpO1xuICAgICAgICAgICAgY3B1Qm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChiYXR0bGVzaGlwUGljKTtcbiAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtzcG90ICsgMV0gIT09IDIpIGJhdHRsZXNoaXBQaWMuY2xhc3NMaXN0LmFkZCgneUF4aXMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgY29uc3QgZGVzdHJveWVyUGljID0gY3JlYXRlSW1nKFwiZGVzdHJveWVyXCIpO1xuICAgICAgICAgICAgZGVzdHJveWVyUGljLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgY3B1U2hpcFBpY3MucHVzaChkZXN0cm95ZXJQaWMpO1xuICAgICAgICAgICAgY3B1Qm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChkZXN0cm95ZXJQaWMpO1xuICAgICAgICAgICAgaWYgKGNwdUdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gMykgZGVzdHJveWVyUGljLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgY29uc3Qgc3VibWFyaW5lUGljID0gY3JlYXRlSW1nKFwic3VibWFyaW5lXCIpO1xuICAgICAgICAgICAgc3VibWFyaW5lUGljLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgY3B1U2hpcFBpY3MucHVzaChzdWJtYXJpbmVQaWMpO1xuICAgICAgICAgICAgY3B1Qm94RGl2c1tzcG90XS5hcHBlbmRDaGlsZChzdWJtYXJpbmVQaWMpO1xuICAgICAgICAgICAgaWYgKGNwdUdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gNCkgc3VibWFyaW5lUGljLmNsYXNzTGlzdC5hZGQoJ3lBeGlzJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1OiBcbiAgICAgICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBjcmVhdGVJbWcoXCJwYXRyb2xCb2F0XCIpO1xuICAgICAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNwdVNoaXBQaWNzLnB1c2gocGF0cm9sQm9hdCk7XG4gICAgICAgICAgICBjcHVCb3hEaXZzW3Nwb3RdLmFwcGVuZENoaWxkKHBhdHJvbEJvYXQpO1xuICAgICAgICAgICAgaWYgKGNwdUdhbWVCb2FyZEFycmF5W3Nwb3QgKyAxXSAhPT0gNSkgcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKCd5QXhpcycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGNyZWF0ZURpdignYm9hcmRzQ29udGFpbmVyJyk7XG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclNlY3Rpb24pO1xuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteVNlY3Rpb24pO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpO1xuXG59O1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZURpdiAoY2xhc3NOYW1lLCB0ZXh0LCB2YWx1ZUFtb3VudCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZGl2LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBkaXYudmFsdWUgPSB2YWx1ZUFtb3VudDtcblxuICAgIHJldHVybiBkaXZcbn0gXG5cbmZ1bmN0aW9uIGNyZWF0ZUltZyAoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBpbWcuc3JjID0gYC4vc2hpcHNQaWMvJHtjbGFzc05hbWV9LnBuZ2A7XG5cbiAgICByZXR1cm4gaW1nXG59XG5cblxuXG5cblxuZXhwb3J0IHtkaXNwbGF5Qm9hcmRzLCBwbGF5ZXJCb3hEaXZzLCBjcHVTaGlwUGljcywgcGxheWVyU2hpcFBpY3MsIG1lc3NhZ2VCb3h9IiwiaW1wb3J0IHtTaGlwLCBnYW1lQm9hcmR9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBjcHVHYW1lQm9hcmRBcnJheSA9IG5ldyBBcnJheSgxMDApLmZpbGwoMCk7XG5jb25zdCBjcHVTaGlwT2JqcyA9IFtdO1xuXG5jb25zdCBzdG9yZWRBdHRhY2tzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAwfSwgKCkgPT4gMCk7XG5cbmNvbnN0IGNwdUhlYWRzID0gW11cblxuXG5mdW5jdGlvbiBwbGFjZUNwdVNoaXBzICgpIHtcblxuICAgIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1LCAwLCBmYWxzZSk7XG4gICAgY3B1U2hpcE9ianMucHVzaChjYXJyaWVyKTtcbiAgICBcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgMCwgZmFsc2UpO1xuICAgIGNwdVNoaXBPYmpzLnB1c2goYmF0dGxlc2hpcCk7XG4gXG4gICAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoMywgMCwgZmFsc2UpO1xuICAgIGNwdVNoaXBPYmpzLnB1c2goZGVzdHJveWVyKTtcblxuICAgIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKDMsIDAsIGZhbHNlKTtcbiAgICBjcHVTaGlwT2Jqcy5wdXNoKHN1Ym1hcmluZSk7XG5cbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoMiwgMCwgZmFsc2UpO1xuICAgIGNwdVNoaXBPYmpzLnB1c2gocGF0cm9sQm9hdCk7XG4gICAgXG4gICAgbGV0IHNoaXBDb3VudGVyID0gMTtcblxuICAgIGNwdVNoaXBPYmpzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIGxldCBtb2RpZmllZEFycmF5ID0gW107XG4gICAgICAgIGxldCBjb250aW51ZUxvb3AgPSB0cnVlO1xuICAgICAgICBjb25zdCBheGlzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTsgLy8gMCA9IHgsIDEgPSB5XG4gICAgICAgIGNwdUdhbWVCb2FyZEFycmF5LmZvckVhY2goKGJvYXJkRWxlbWVudCwgYm9hcmRJbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJvYXJkRWxlbWVudCA9PT0gMCkgbW9kaWZpZWRBcnJheS5wdXNoKGJvYXJkSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gMDtcblxuICAgICAgICBpZiAoIWF4aXMpIHtcbiAgICAgICAgICAgIHdoaWxlIChjb250aW51ZUxvb3ApIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRQbGFjZW1lbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3REaWdpdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZERpZ2l0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG5cbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IE51bWJlcihmaXJzdERpZ2l0LnRvU3RyaW5nKCkgKyBzZWNvbmREaWdpdC50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbmRleCArIHNoaXAubGVuZ3RoIC0gMSA+IGZpcnN0RGlnaXQgKiAxMCArIDkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSAoZmlyc3REaWdpdCAqIDEwICsgOSkgLSBzaGlwLmxlbmd0aCArIDEgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjcHVHYW1lQm9hcmRBcnJheVtyYW5kb21JbmRleCArIGldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlmICh2YWxpZFBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwdUdhbWVCb2FyZEFycmF5W3JhbmRvbUluZGV4ICsgaV0gPSBzaGlwQ291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGV4aXQgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVMb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoY29udGludWVMb29wKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkUGxhY2VtZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0RGlnaXQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmREaWdpdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBOdW1iZXIoZmlyc3REaWdpdC50b1N0cmluZygpICsgc2Vjb25kRGlnaXQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW5kZXggKyAoKHNoaXAubGVuZ3RoIC0xKSAqIDEwKSA+IDk5ICkge1xuICAgICAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9ICg5OSAtIHJhbmRvbUluZGV4KTsgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3B1R2FtZUJvYXJkQXJyYXlbcmFuZG9tSW5kZXggKyAoaSoxMCldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsaWRQbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcHVHYW1lQm9hcmRBcnJheVtyYW5kb21JbmRleCArIChpKjEwKV0gPSBzaGlwQ291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB0byBleGl0IHdoaWxlIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVMb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gICAgIFxuICAgICAgICB9XG4gICAgY3B1SGVhZHMucHVzaChyYW5kb21JbmRleClcbiAgICBzaGlwQ291bnRlcisrO1xuIH0pXG4vLyAgY29uc29sZS5sb2coY3B1R2FtZUJvYXJkQXJyYXkpXG4gcmV0dXJuIGNwdUdhbWVCb2FyZEFycmF5XG59XG5cblxuXG5cbmxldCBvcmlnaW5hbFZhbHVlID0gMTAwO1xubGV0IGJvdGhNaXNzZWRDb3VudGVyID0gMDtcbmxldCBpZk1pc3NlZCA9IGZhbHNlO1xuXG5jb25zdCAgZ2VuZXJhdGVDcHVBdHRhY2sgPSAoZ2FtZUJvYXJkQXJyYXksIHNoaXBPYmpzLCBjdXJyZW50VHVybikgPT4ge1xuICAgIGxldCBhdHRhY2tWYWx1ZTtcbiAgICBsZXQgZm91bmRIaXQ7XG4gICAgbGV0IGluZGV4SGl0OyBcbiAgIFxuICAgIGlmIChpZk1pc3NlZCkge1xuICAgICAgICBmb3VuZEhpdCA9IHRydWU7XG4gICAgICAgIGluZGV4SGl0ID0gb3JpZ2luYWxWYWx1ZTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm91bmRIaXQgPSBzdG9yZWRBdHRhY2tzLmZpbmQoKHNoaXBCb3gpID0+IHNoaXBCb3ggPT09IFwiaGl0XCIpO1xuICAgICAgICBpbmRleEhpdCA9IHN0b3JlZEF0dGFja3MuaW5kZXhPZihmb3VuZEhpdCk7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kSGl0ICYmIGJvdGhNaXNzZWRDb3VudGVyIDwgMikge1xuICAgICAgICBpZiAoc3RvcmVkQXR0YWNrc1tpbmRleEhpdCArIDFdID09PSAwICYmIGluZGV4SGl0ICsgMSA8PSA5OSkge1xuICAgICAgICAgICAgYXR0YWNrVmFsdWUgPSBpbmRleEhpdCArIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RvcmVkQXR0YWNrc1tpbmRleEhpdCAtIDEgXSA9PT0gMCAmJiBpbmRleEhpdCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgYXR0YWNrVmFsdWUgPSBpbmRleEhpdCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNraW5nQXJyYXkgPSBzdG9yZWRBdHRhY2tzLm1hcCgoc3BvdCwgaW5kZXgpID0+IChzcG90ID09PSAwID8gaW5kZXggOiB1bmRlZmluZWQpKVxuICAgICAgICAuZmlsdGVyKGluZGV4ID0+IGluZGV4ICE9PSB1bmRlZmluZWQpOyAgICAgICAgXG4gICAgICAgIGF0dGFja1ZhbHVlID0gYXR0YWNraW5nQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmF0dGFja2luZ0FycmF5Lmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0gZWxzZSBpZiAoZm91bmRIaXQgJiYgYm90aE1pc3NlZENvdW50ZXIgPj0gMikge1xuICAgICAgICBpZiAoc3RvcmVkQXR0YWNrc1tpbmRleEhpdCArIDEwIF0gPT09IDAgJiYgaW5kZXhIaXQgKyAxMCA8PSA5OSkge1xuICAgICAgICAgICAgYXR0YWNrVmFsdWUgPSBpbmRleEhpdCArIDEwO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3JlZEF0dGFja3NbaW5kZXhIaXQgLSAxMCBdID09PSAwICYmIGluZGV4SGl0IC0gMTAgPj0gMCkge1xuICAgICAgICAgICAgYXR0YWNrVmFsdWUgPSBpbmRleEhpdCAtIDEwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGF0dGFja2luZ0FycmF5ID0gc3RvcmVkQXR0YWNrcy5tYXAoKHNwb3QsIGluZGV4KSA9PiAoc3BvdCA9PT0gMCA/IGluZGV4IDogdW5kZWZpbmVkKSlcbiAgICAgICAgLmZpbHRlcihpbmRleCA9PiBpbmRleCAhPT0gdW5kZWZpbmVkKTsgICAgICAgIFxuICAgICAgICBhdHRhY2tWYWx1ZSA9IGF0dGFja2luZ0FycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphdHRhY2tpbmdBcnJheS5sZW5ndGgpXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhdHRhY2tpbmdBcnJheSA9IHN0b3JlZEF0dGFja3MubWFwKChzcG90LCBpbmRleCkgPT4gKHNwb3QgPT09IDAgPyBpbmRleCA6IHVuZGVmaW5lZCkpXG4gICAgICAgIC5maWx0ZXIoaW5kZXggPT4gaW5kZXggIT09IHVuZGVmaW5lZCk7ICAgICAgICBcbiAgICAgICAgYXR0YWNrVmFsdWUgPSBhdHRhY2tpbmdBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYXR0YWNraW5nQXJyYXkubGVuZ3RoKV07XG4gICAgfVxuICAgIFxuICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1ZhbHVlLGdhbWVCb2FyZEFycmF5LCBzaGlwT2JqcywgY3VycmVudFR1cm4pO1xuICAgIHJldHVybiBhdHRhY2tWYWx1ZVxufVxuXG5cbmNvbnN0IGNwdUhpdHMgPSBjb29yZGluYXRlVmFsID0+IHtcbiAgICBpZiAoc3RvcmVkQXR0YWNrcy5pbmRleE9mKCdoaXQnKSAhPT0gLTEpIHtcbiAgICAgICAgc3RvcmVkQXR0YWNrc1tzdG9yZWRBdHRhY2tzLmluZGV4T2YoJ2hpdCcpXSA9ICdoaXR0ZW4nO1xuICAgICAgICBzdG9yZWRBdHRhY2tzW2Nvb3JkaW5hdGVWYWxdID0gJ2hpdCc7XG4gICAgICAgIGlmTWlzc2VkID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yZWRBdHRhY2tzW2Nvb3JkaW5hdGVWYWxdID0gJ2hpdCc7XG4gICAgICAgIG9yaWdpbmFsVmFsdWUgPSBjb29yZGluYXRlVmFsO1xuICAgIH1cbn1cblxuY29uc3QgY3B1TWlzcyA9IGNvb3JkaW5hdGVWYWwgPT4ge1xuICAgIHN0b3JlZEF0dGFja3NbY29vcmRpbmF0ZVZhbF0gPSAnbWlzcyc7XG4gICAgaWYgKCEob3JpZ2luYWxWYWx1ZSA9PT0gMTAwKSkge1xuICAgICAgICBpZk1pc3NlZCA9IHRydWU7XG4gICAgICAgIGJvdGhNaXNzZWRDb3VudGVyKytcbiAgICB9XG59XG5cbmNvbnN0IGNwdVN1bmsgPSBjb29yZGluYXRlVmFsID0+IHtcbiAgICBzdG9yZWRBdHRhY2tzW2Nvb3JkaW5hdGVWYWxdID0gJ3N1bmtlZCc7IFxuICAgIG9yaWdpbmFsVmFsdWUgPSAxMDA7XG4gICAgYm90aE1pc3NlZENvdW50ZXIgPSAwO1xufSBcblxuXG5cbmV4cG9ydCB7XG4gICAgcGxhY2VDcHVTaGlwcyxcbiAgICBnZW5lcmF0ZUNwdUF0dGFjayxcbiAgICBjcHVIaXRzLCBcbiAgICBjcHVNaXNzLFxuICAgIGNwdVN1bmssXG4gICAgY3B1R2FtZUJvYXJkQXJyYXksXG4gICAgY3B1U2hpcE9ianMsXG4gICAgY3B1SGVhZHNcbn0iLCJpbXBvcnQge2dhbWVCb2FyZCwgcGxheWVyR2FtZUJvYXJkQXJyYXksIHBsYXllclNoaXBPYmpzfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7Z2VuZXJhdGVDcHVBdHRhY2ssIGNwdUdhbWVCb2FyZEFycmF5LCBjcHVTaGlwT2Jqc30gZnJvbSAnLi9jcHVDb250cm9sJztcbmltcG9ydCB7cGxheWVyQm94RGl2cywgY3B1U2hpcFBpY3MsIHBsYXllclNoaXBQaWNzLCBtZXNzYWdlQm94LCBhd2FpdGluZ30gZnJvbSAnLi9ET01wbGF5JztcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluQ29udGFpbmVyJyk7XG5cbmNvbnN0IHNob3RGaXJlZE1wMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG90RmlyZWQnKVxuY29uc3Qgc2hvdEhpdE1wMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG90SGl0JylcbmNvbnN0IHNob3RNaXNzZWRNcDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdE1pc3NlZCcpXG5cbiBcblxuXG5cbmNvbnN0IHBsYXllck5hbWUgPSAnU2FtaXInO1xubGV0IGNwdUZpbmlzaGVkID0gZmFsc2U7XG5sZXQgb25lVGltZSA9IDA7XG5sZXQgb25lVGltZXIgPSAwXG5sZXQgbWVzc2FnZSA9ICcnO1xubGV0IGV4dHJhID0gJyc7XG5sZXQgdGltZXIgPSA1MDBcblxuXG5mdW5jdGlvbiBoYW5kbGVBdHRhY2tzIChjcHVCb3gsIGluZGV4KSB7XG5cbiAgICBjb25zdCBkZWNsYXJlV2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVjbGFyZVdpbm5lci5jbGFzc0xpc3QuYWRkKCdkZWNsYXJlV2lubmVyJyk7XG5cbiAgICBpZiAob25lVGltZSAhPT0gMCkge1xuICAgICAgICB0aW1lciA9IDIwMFxuICAgIH1cblxuICAgIG9uZVRpbWVyID0gMVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNwdUZpbmlzaGVkIHx8IG9uZVRpbWUgIT09IDApIHJldHVyblxuICAgIGlmIChnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCxjcHVHYW1lQm9hcmRBcnJheSxjcHVTaGlwT2JqcywgJ3BsYXllclR1cm4nKSkge1xuICAgICAgICBjcHVGaW5pc2hlZCA9IHRydWVcbiAgICAgICAgbGV0IGF0dGFja2VkSW5kZXggPSBpbmRleFxuICAgICAgICBtZXNzYWdlQm94LnRleHRDb250ZW50ID0gJydcbiAgICAgICAgbWVzc2FnZSA9ICdZb3UgZmlyZSBhIHNob3QgaW50byBlbmVteSB3YXRlcnMgLi4uLi4uICc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgKz0gKG1lc3NhZ2UuY2hhckF0KGkpKTtcbiAgICAgICAgICAgIH0sIDMwICogaSk7XG4gICAgICAgIH1cblxuICAgICAgICBzaG90RmlyZWRNcDMucGxheSgpO1xuXG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY3B1R2FtZUJvYXJkQXJyYXlbYXR0YWNrZWRJbmRleF0gPT09ICdtaXNzJykge1xuICAgICAgICAgICAgICAgIGV4dHJhID0gJyBhbmQgbWlzcy4nXG4gICAgICAgICAgICAgICAgc2hvdE1pc3NlZE1wMy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgY3B1Qm94LmNsYXNzTGlzdC5hZGQoJ21pc3NlZEF0dGFjaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRyYSA9IFwiIGFuZCBpdCdzIGEgaGl0IVwiXG4gICAgICAgICAgICAgICAgY3B1Qm94LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgIHNob3RIaXRNcDMucGxheSgpXG4gICAgICAgICAgICAgICAgY3B1U2hpcE9ianMuZm9yRWFjaCgob2JqLCBpbmRleCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouc3VuayAmJiBjcHVHYW1lQm9hcmRBcnJheVthdHRhY2tlZEluZGV4XS5pbmNsdWRlcyhpbmRleCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcHVTaGlwUGljc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcHVTaGlwUGljc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBleHRyYSA9IGBZb3Ugc3VuayB0aGVpciBDYXJyaWVyISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiBleHRyYSA9IGBZb3Ugc3VuayB0aGVpciBCYXR0bGVTaGlwISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiBleHRyYSA9IGBZb3Ugc3VuayB0aGVpciBEZXN0cm95ZXIhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IGV4dHJhID0gYFlvdSBzdW5rIHRoZWlyIFN1Ym1hcmluZSEgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogZXh0cmEgPSBgWW91IHN1bmsgdGhlaXIgUGF0cm9sIEJvYXQhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4dHJhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCArPSAoZXh0cmEuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICB9LCAzMCAqIGkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIDE1MDApXG5cbiAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGdhbWVCb2FyZC5lbmRHYW1lQ2hlY2soY3B1U2hpcE9ianMpKSB7XG4gICAgICAgICAgICAvLyBjb2RlIHRvIHJlbW92ZSBldmVyeXRoaW5nIHdpdGhpbiBpdFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2xhcmVXaW5uZXIpO1xuICAgICAgICAgICAgZGVjbGFyZVdpbm5lci50ZXh0Q29udGVudCA9IGAgV2lubmVyIGlzIEdlbmVyYWwgJHtwbGF5ZXJOYW1lfSAhIWA7XG4gICAgICAgICAgICB9LCAyMjAwKVxuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWVzc2FnZUJveC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgbWVzc2FnZSA9ICdZb3VyIG9wcG9uZW50IGlzIGFpbWluZyAuLi4uLi4gJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgKz0gKG1lc3NhZ2UuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICB9LCAzMCAqIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMzAwMClcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2hvdEZpcmVkTXAzLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ1RoZSBlbmVteSBmaXJlcyBhIHNob3QgaW50byB5b3VyIHdhdGVycyAuLi4uLi4gJ1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgKz0gKG1lc3NhZ2UuY2hhckF0KGkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAgKiBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MDAwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBjcHVBdHRhY2tWYWx1ZSA9IGdlbmVyYXRlQ3B1QXR0YWNrKHBsYXllckdhbWVCb2FyZEFycmF5LCBwbGF5ZXJTaGlwT2JqcywgJ2NwdVR1cm4nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbY3B1QXR0YWNrVmFsdWVdID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdE1pc3NlZE1wMy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhID0gJyBhbmQgbWlzc2VzLidcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm94RGl2c1tjcHVBdHRhY2tWYWx1ZV0uY2xhc3NMaXN0LmFkZCgnbWlzc2VkQXR0YWNrJykgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdEhpdE1wMy5wbGF5KClcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm94RGl2c1tjcHVBdHRhY2tWYWx1ZV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhID0gXCJpdCdzIGEgaGl0IVwiIFxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwT2Jqcy5mb3JFYWNoKChvYmosIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouc3VuayAmJiBwbGF5ZXJHYW1lQm9hcmRBcnJheVtjcHVBdHRhY2tWYWx1ZV0uaW5jbHVkZXMoaW5kZXggKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBQaWNzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDogZXh0cmEgPSBgdGhleSBzdW5rIHlvdXIgQ2FycmllciEgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiBleHRyYSA9IGB0aGV5IHN1bmsgeW91ciBCYXR0bGVTaGlwISBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IGV4dHJhID0gYHRoZXkgc3VuayB5b3VyIERlc3Ryb3llciEgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiBleHRyYSA9IGB0aGV5IHN1bmsgeW91ciBTdWJtYXJpbmUhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogZXh0cmEgPSBgdGhleSBzdW5rIHlvdXIgUGF0cm9sIEJvYXQhIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge2lmIChnYW1lQm9hcmQuZW5kR2FtZUNoZWNrKHBsYXllclNoaXBPYmpzKSkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNsYXJlV2lubmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyZVdpbm5lci50ZXh0Q29udGVudCA9IGAgV2lubmVyIGlzIENQVWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwMClcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXh0cmEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgKz0gKGV4dHJhLmNoYXJBdChpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwICogaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNwdUZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG9uZVRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH0sIDkwMClcbiAgICAgICAgICAgIH0sIDcwMDApOyBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgfSwgdGltZXIpICAgXG59XG5cblxuXG5leHBvcnQge2hhbmRsZUF0dGFja3N9IiwiaW1wb3J0ICcuL2hvbWUuY3NzJztcblxuaW1wb3J0IHtwbGFjZUNwdVNoaXBzLGNwdUhpdHMsIGNwdU1pc3MsY3B1U3Vua30gZnJvbSAnLi9jcHVDb250cm9sJztcbmltcG9ydCB7ZGlzcGxheUJvYXJkc30gZnJvbSAnLi9ET01wbGF5JztcbmltcG9ydCB7c2hvd1BlcnNvbmFsQm9hcmQsIGF4aXNTZWxlY3Rpb259IGZyb20gJy4vRE9NaW50cm8nO1xuXG5cblxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdEJ0bicpO1xuY29uc3QgcGxheWVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyTmFtZScpO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcGxheWVyTmFtZSA9IHBsYXllcklucHV0LnZhbHVlO1xuICAgICBzaG93UGVyc29uYWxCb2FyZChwbGF5ZXJOYW1lKVxufSlcblxuLy9HbG9iYWwgdmFsdWVcbmNvbnN0IHBsYXllclNoaXBPYmpzID0gW107XG5jb25zdCBwbGF5ZXJIZWFkcyA9IFtdO1xuY29uc3QgcGxheWVyR2FtZUJvYXJkQXJyYXkgPSBuZXcgQXJyYXkoMTAwKS5maWxsKDApO1xubGV0IGdhbWVFbmQgPSBmYWxzZVxuXG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yIChsZW5ndGgsIGhpdHMsIHN1bmspIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IGhpdHM7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgaXNTdW5rICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5jb25zdCBnYW1lQm9hcmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVycm9ySW52YWxpZFBvc2l0aW9uID0gZmFsc2VcbiAgICBsZXQgc2hpcENvdW50ZXIgPSAxO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gdmFsdWUgPT4ge1xuICAgICAgICBsZXQgcGxheWVyU2hpcEFycmF5ID0gW107XG4gICAgICAgIGlmIChzaGlwQ291bnRlciA+IDUpIHJldHVybiBmYWxzZVxuICAgICAgICBzd2l0Y2ggKHNoaXBDb3VudGVyKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZFBsYWNlbWVudCg1LCB2YWx1ZSwgcGxheWVyU2hpcEFycmF5LCBzaGlwQ291bnRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvckludmFsaWRQb3NpdGlvblxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgY29uc3QgY2FycmllciA9IG5ldyBTaGlwKDUsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwT2Jqcy5wdXNoKGNhcnJpZXIpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkUGxhY2VtZW50KDQsIHZhbHVlLCBwbGF5ZXJTaGlwQXJyYXksIHNoaXBDb3VudGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ySW52YWxpZFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBPYmpzLnB1c2goYmF0dGxlc2hpcClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZFBsYWNlbWVudCgzLCB2YWx1ZSwgcGxheWVyU2hpcEFycmF5LCBzaGlwQ291bnRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvckludmFsaWRQb3NpdGlvblxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoMywgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBPYmpzLnB1c2goZGVzdHJveWVyKVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0OiBcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkUGxhY2VtZW50KDMsIHZhbHVlLCBwbGF5ZXJTaGlwQXJyYXksIHNoaXBDb3VudGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ySW52YWxpZFBvc2l0aW9uIFxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoMywgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBPYmpzLnB1c2goc3VibWFyaW5lKVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSA1OiBcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkUGxhY2VtZW50KDIsIHZhbHVlLCBwbGF5ZXJTaGlwQXJyYXksIHNoaXBDb3VudGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ySW52YWxpZFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcE9ianMucHVzaChwYXRyb2xCb2F0KVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAvLyBleHRyYSBlcnJvciBoYW5kbGluZ1xuICAgICAgICBpZiAocGxheWVyU2hpcEFycmF5ID09PSBbXSkgcmV0dXJuIGVycm9ySW52YWxpZFBvc2l0aW9uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHBsYXllclNoaXBBcnJheSApe1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmRBcnJheVtlbGVtZW50XSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTaGlwQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9IGVsc2UgcGxheWVyR2FtZUJvYXJkQXJyYXlbZWxlbWVudF0gPSBzaGlwQ291bnRlcjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwQ291bnRlcisrO1xuICAgICAgICAgICAgcGxheWVySGVhZHMucHVzaCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChzaGlwQ291bnRlciA+IDUpIHtcbiAgICAgICAgICAgICAgICBwbGFjZUNwdVNoaXBzKCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUJvYXJkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBsYXllclNoaXBBcnJheVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVWYWwsIGdhbWVCb2FyZEFycmF5LCBzaGlwT2JqcywgY3VycmVudFR1cm4pID0+IHtcblxuICAgICAgICBpZiAoIShnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9PT0gMCB8fCBcbiAgICAgICAgICAgIGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID09PSAxIHx8IFxuICAgICAgICAgICAgZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPT09IDIgfHwgXG4gICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9PT0gMyB8fCBcbiAgICAgICAgICAgIGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID09PSA0IHx8IFxuICAgICAgICAgICAgZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPT09IDUpXG4gICAgICAgICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjcHVTdW5rZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJTdW5rZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9PT0gMCkgZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gPSBcIm1pc3NcIjtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoaXBPYmpzW2dhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdIC0gMV0uaGl0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hpcE9ianNbZ2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF0gLSAxXS5pc1N1bmsoKSAmJiBjdXJyZW50VHVybiA9PT0gJ2NwdVR1cm4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNwdVN1bmtlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChzaGlwT2Jqc1tnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSAtIDFdLmlzU3VuaygpICYmIGN1cnJlbnRUdXJuID09PSAncGxheWVyVHVybicpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3Vua2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdID0gYCR7Z2FtZUJvYXJkQXJyYXlbY29vcmRpbmF0ZVZhbF19IGhpdGA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChnYW1lQm9hcmRBcnJheVtjb29yZGluYXRlVmFsXSA9PT0gJ21pc3MnICYmIGN1cnJlbnRUdXJuID09PSAnY3B1VHVybicpe1xuICAgICAgICAgICAgICAgIGNwdU1pc3MoY29vcmRpbmF0ZVZhbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVCb2FyZEFycmF5W2Nvb3JkaW5hdGVWYWxdLmluY2x1ZGVzKCdoaXQnKSAgJiYgY3VycmVudFR1cm4gPT09ICdjcHVUdXJuJykge1xuICAgICAgICAgICAgICAgIGNwdUhpdHMoY29vcmRpbmF0ZVZhbCk7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBpZiAoY3B1U3Vua2VkKSB7XG4gICAgICAgICAgICAgICAgY3B1U3Vuayhjb29yZGluYXRlVmFsKVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgZW5kR2FtZUNoZWNrID0gc2hpcE9ianMgPT4ge1xuICAgICAgICBpZiAoIShzaGlwT2Jqcy5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5zdW5rID09PSBmYWxzZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlU2hpcCwgXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGVuZEdhbWVDaGVja1xuICAgIH1cbn0pKClcblxuXG5cbmZ1bmN0aW9uIHZhbGlkUGxhY2VtZW50IChsZW5ndGhTaGlwLCB2YWx1ZSwgcGxheWVyU2hpcEFycmF5KSB7XG4gICAgXG4gICAgaWYgKGF4aXNTZWxlY3Rpb24udGV4dENvbnRlbnQgPT09IFwiQVhJUzogWFwiKSB7XG4gICAgICAgIGxldCBmaW5kWCA9IChNYXRoLmZsb29yKHZhbHVlLzEwKSoxMCkgKyA5OyBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhTaGlwOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmRBcnJheVt2YWx1ZSArIGldICE9PSAwIHx8IFxuICAgICAgICAgICAgICAgIHZhbHVlICsgaSA+IDk5ICB8fFxuICAgICAgICAgICAgICAgIHZhbHVlICsgaSA+IGZpbmRYKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllclNoaXBBcnJheS5wdXNoKHZhbHVlICsgaSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoU2hpcDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkQXJyYXlbdmFsdWUgKyAoaSoxMCldICE9PSAwIHx8IFxuICAgICAgICAgICAgICAgIHZhbHVlICsgKGkqMTApID4gOTkpIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyU2hpcEFycmF5LnB1c2godmFsdWUgKyAoaSoxMCkpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG59XG5cbi8vIGdhbWVCb2FyZC5wbGFjZVNoaXAoMjMpXG4vLyBnYW1lQm9hcmQucGxhY2VTaGlwKDExKVxuLy8gZ2FtZUJvYXJkLnBsYWNlU2hpcCgzNClcbi8vIGdhbWVCb2FyZC5wbGFjZVNoaXAoMClcbi8vIGdhbWVCb2FyZC5wbGFjZVNoaXAoODIpXG5cblxuXG4vLyBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjaygyOSwgY3B1R2FtZUJvYXJkQXJyYXksIGNwdVNoaXBPYmpzLCAncGxheWVyVHVybicpXG4vLyBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayg0MiwgY3B1R2FtZUJvYXJkQXJyYXksIGNwdVNoaXBPYmpzLCAncGxheWVyVHVybicpXG4vLyBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayg1NSwgY3B1R2FtZUJvYXJkQXJyYXksIGNwdVNoaXBPYmpzLCAncGxheWVyVHVybicpXG4vLyBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjaygyNSwgY3B1R2FtZUJvYXJkQXJyYXksIGNwdVNoaXBPYmpzLCAncGxheWVyVHVybicpXG4vLyBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayg0MCwgY3B1R2FtZUJvYXJkQXJyYXksIGNwdVNoaXBPYmpzLCAncGxheWVyVHVybicpXG5cblxuLy8gZ2VuZXJhdGVDcHVBdHRhY2socGxheWVyR2FtZUJvYXJkQXJyYXksIHBsYXllclNoaXBPYmpzLCAnY3B1VHVybicpXG4vLyBnZW5lcmF0ZUNwdUF0dGFjayhwbGF5ZXJHYW1lQm9hcmRBcnJheSwgcGxheWVyU2hpcE9ianMsICdjcHVUdXJuJylcbi8vIGdlbmVyYXRlQ3B1QXR0YWNrKHBsYXllckdhbWVCb2FyZEFycmF5LCBwbGF5ZXJTaGlwT2JqcywgJ2NwdVR1cm4nKVxuLy8gZ2VuZXJhdGVDcHVBdHRhY2socGxheWVyR2FtZUJvYXJkQXJyYXksIHBsYXllclNoaXBPYmpzLCAnY3B1VHVybicpXG4vLyBnZW5lcmF0ZUNwdUF0dGFjayhwbGF5ZXJHYW1lQm9hcmRBcnJheSwgcGxheWVyU2hpcE9ianMsICdjcHVUdXJuJylcblxuXG5cblxuLy8gY29uc29sZS5sb2cocGxheWVyR2FtZUJvYXJkQXJyYXkpXG5cblxuLy8gY29uc29sZS5sb2coZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soMjkpKVxuLy8gY29uc29sZS5sb2coZ2FtZUJvYXJkLmVuZEdhbWVDaGVjaygpKVxuXG5cblxuZXhwb3J0IHtTaGlwLCBnYW1lQm9hcmQsIHBsYXllckdhbWVCb2FyZEFycmF5LCBwbGF5ZXJTaGlwT2JqcywgcGxheWVySGVhZHN9XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9