/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/App.js":
/*!***************************!*\
  !*** ./client/src/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _screens_home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/home/Home */ \"./client/src/screens/home/Home.js\");\n/* harmony import */ var _screens_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/product-details */ \"./client/src/screens/product-details/index.js\");\n/* harmony import */ var _screens_TestComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/TestComponent */ \"./client/src/screens/TestComponent/index.js\");\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _screens_home_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/details/:productId\",\n    component: _screens_product_details__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/test\",\n    component: _screens_TestComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/src/App.js?");

/***/ }),

/***/ "./client/src/actions/types.js":
/*!*************************************!*\
  !*** ./client/src/actions/types.js ***!
  \*************************************/
/*! exports provided: UPDATE_MAIN_VALUE, UPDATE_FORM_VALUE, UPDATE_MODAL_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_MAIN_VALUE\", function() { return UPDATE_MAIN_VALUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_FORM_VALUE\", function() { return UPDATE_FORM_VALUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_MODAL_VALUE\", function() { return UPDATE_MODAL_VALUE; });\nvar UPDATE_MAIN_VALUE = 'update_main_value';\nvar UPDATE_FORM_VALUE = 'update_form_value';\nvar UPDATE_MODAL_VALUE = 'update_modal_value';\n\n//# sourceURL=webpack:///./client/src/actions/types.js?");

/***/ }),

/***/ "./client/src/common/Carousel/DetailCard.js":
/*!**************************************************!*\
  !*** ./client/src/common/Carousel/DetailCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DetailCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StarRating */ \"./client/src/common/Carousel/StarRating.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);\n\n\n // import BsHeart from 'react-icons/bs';\n\n\n\nfunction DetailCard(props) {\n  var detail = props.detail,\n      data1 = props.data1;\n  var img = detail.img,\n      name = detail.name,\n      price = detail.price;\n  return (\n    /*#__PURE__*/\n    // <div className=\"img_container\">\n    //   <div className=\"item1_div\">\n    //   {/* <BsHeart /> */}\n    //   <MdFavoriteBorder color=\"red\" size={30} style={{ position: 'absolute', right: 0, margin: 5}} />\n    //     <img src={img} className=\"item1_div__img\" alt=\"\" />\n    //     <div className=\"text-container\">\n    //       <div className=\"name_price\">\n    //         <h6><b>Name:{name}</b></h6>\n    //         <h6><b>Price: Rs.{price}</b></h6>\n    //       </div>\n    //       <div className=\"rating\">\n    //         <StarRating />\n    //       </div>\n    //     </div>\n    //   </div>\n    // </div>\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n      className: \"item1_div\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdFavoriteBorder\"], {\n      color: \"red\",\n      size: 30,\n      style: {\n        position: 'absolute',\n        right: 0,\n        margin: 5\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/details/test\",\n      className: \"item1_img_wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Img, {\n      className: \"item1_div__img\",\n      variant: \"top\",\n      src: img\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Title, {\n      className: \"card_title\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Name:\", name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Price: Rs.\", price))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Text, {\n      className: \"rating\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StarRating__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))))\n  );\n}\n\n//# sourceURL=webpack:///./client/src/common/Carousel/DetailCard.js?");

/***/ }),

/***/ "./client/src/common/Carousel/HighlightCard.js":
/*!*****************************************************!*\
  !*** ./client/src/common/Carousel/HighlightCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HighlightCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction HighlightCard(props) {\n  var img = props.img;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"item1_highlight_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: img,\n    className: \"item1_div__img\",\n    alt: \"\"\n  }));\n}\n\n//# sourceURL=webpack:///./client/src/common/Carousel/HighlightCard.js?");

/***/ }),

/***/ "./client/src/common/Carousel/Horizontalcarousel.js":
/*!**********************************************************!*\
  !*** ./client/src/common/Carousel/Horizontalcarousel.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cardimg; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"react-multi-carousel\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DetailCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailCard */ \"./client/src/common/Carousel/DetailCard.js\");\n/* harmony import */ var _HighlightCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HighlightCard */ \"./client/src/common/Carousel/HighlightCard.js\");\n\n\n\n\nfunction Cardimg(props) {\n  var data = props.data,\n      cardType = props.cardType;\n  console.log('Cart type', cardType);\n  var customItem = cardType === 'detail' ? 4 : 3;\n  var halfItem = cardType === 'detail' ? 20 : 40;\n  var mobileItem = cardType == 'detail' ? 2 : 1;\n  var halfMobileSize = cardType === 'detail' ? 0 : 45;\n  var responsive = {\n    superLargeDesktop: {\n      // the naming can be any, depends on you.\n      breakpoint: {\n        max: 4000,\n        min: 3000\n      },\n      items: 5,\n      partialVisibilityGutter: 40\n    },\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: customItem,\n      partialVisibilityGutter: halfItem\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2,\n      partialVisibilityGutter: 40\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: mobileItem,\n      partialVisibilityGutter: halfMobileSize\n    }\n  };\n  var cards = data.map(function (d) {\n    return cardType === 'detail' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      detail: d\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      img: d\n    });\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-main-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    responsive: responsive,\n    partialVisbile: true\n  }, cards));\n}\n\n//# sourceURL=webpack:///./client/src/common/Carousel/Horizontalcarousel.js?");

/***/ }),

/***/ "./client/src/common/Carousel/StarRating.js":
/*!**************************************************!*\
  !*** ./client/src/common/Carousel/StarRating.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-star-ratings */ \"react-star-ratings\");\n/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar StarRating = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StarRating, _React$Component);\n\n  var _super = _createSuper(StarRating);\n\n  function StarRating() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StarRating);\n\n    _this = _super.call(this);\n\n    _this.changeRating = function (value) {\n      console.log(value);\n      var rating = _this.state.rating;\n      var extactRating = Math.floor(rating);\n\n      if (extactRating === value) {\n        if (rating < value) {\n          _this.setState({\n            rating: _this.state.rating + 0.5\n          });\n        } else {\n          _this.setState({\n            rating: _this.state.rating - 0.5\n          });\n        }\n      } else {\n        _this.setState({\n          rating: value\n        });\n      }\n    };\n\n    _this.state = {\n      rating: 0\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StarRating, [{\n    key: \"render\",\n    value: function render() {\n      console.log('this start rating', this.state);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        rating: this.state.rating,\n        starRatedColor: \"yellow\",\n        starHoverColor: \"yellow\",\n        changeRating: this.changeRating,\n        numberOfStars: 5,\n        isAggregateRating: false,\n        starDimension: \"15px\",\n        starSpacing: \"3px\",\n        name: \"rating\"\n      });\n    }\n  }]);\n\n  return StarRating;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarRating);\n\n//# sourceURL=webpack:///./client/src/common/Carousel/StarRating.js?");

/***/ }),

/***/ "./client/src/common/footer/Footer.js":
/*!********************************************!*\
  !*** ./client/src/common/footer/Footer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // import Fb from '../../icons/facebook.jpg';\n// import Insta from '../../icons/insta.jpg';\n// import Tw from '../../icons/tw.png';\n// import Google from '../../icons/google.png';\n\nfunction Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"about_contact\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"\"\n  }, \"About Us\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"\"\n  }, \"Contact Us\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"social_media\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"google_div\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tw_div\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"insta_div\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fb_div\"\n  })));\n}\n\n//# sourceURL=webpack:///./client/src/common/footer/Footer.js?");

/***/ }),

/***/ "./client/src/common/header/Header.js":
/*!********************************************!*\
  !*** ./client/src/common/header/Header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\n // import Cart from '../../icons/cart.png';\n// import Home from '../../icons/home.jpg';\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header_wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"logo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"/assets/graphics/icons/home.jpg\",\n    className: \"logo_icon\",\n    alt: \"\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    action: \"\",\n    className: \"form_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-search-button-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input-search-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"input_div\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"srch_btn\"\n  }, \"Search\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"DropdownButton\"], {\n    bg: \"light\",\n    variant: \"light\",\n    id: \"dropdown-basic-button\",\n    title: \"Product\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Item, {\n    href: \"#/electric\"\n  }, \"Electric\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Item, {\n    href: \"#/non-electric\"\n  }, \"Non-Electric\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card1_div\"\n  }))));\n}\n\n//# sourceURL=webpack:///./client/src/common/header/Header.js?");

/***/ }),

/***/ "./client/src/common/highlights/Highlights.js":
/*!****************************************************!*\
  !*** ./client/src/common/highlights/Highlights.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Highlights; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Carousel_Horizontalcarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Carousel/Horizontalcarousel */ \"./client/src/common/Carousel/Horizontalcarousel.js\");\n\n\nfunction Highlights() {\n  var data = ['/assets/graphics/images/fan.jpg', '/assets/graphics/images/cooker.jpg', '/assets/graphics/images/heater.jpg', '/assets/graphics/images/iron.jpg', '/assets/graphics/images/mpi.jpg', '/assets/graphics/images/blender.jpg'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"highlights_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"highlight_text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"text_div\"\n  }, \"Highlights\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"first_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"first_card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel_Horizontalcarousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    data: data\n  }))));\n}\n\n//# sourceURL=webpack:///./client/src/common/highlights/Highlights.js?");

/***/ }),

/***/ "./client/src/common/similar-product/SimilarProduct.js":
/*!*************************************************************!*\
  !*** ./client/src/common/similar-product/SimilarProduct.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimilarProduct; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Carousel_DetailCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Carousel/DetailCard */ \"./client/src/common/Carousel/DetailCard.js\");\n\n\nfunction SimilarProduct() {\n  var data1 = ['/assets/images/fan.jpg', '/assets/images/cooker.jpg', '/assets/images/heater.jpg', '/assets/images/iron.jpg', '/assets/images/mpi.jpg', '/assets/images/blender.jpg'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"highlight_text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"text_div\"\n  }, \"Similar Product\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"first_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"first_card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel_DetailCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    data1: data1\n  }))));\n}\n\n//# sourceURL=webpack:///./client/src/common/similar-product/SimilarProduct.js?");

/***/ }),

/***/ "./client/src/config/index.js":
/*!************************************!*\
  !*** ./client/src/config/index.js ***!
  \************************************/
/*! exports provided: ENDPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENDPOINT\", function() { return ENDPOINT; });\n// export const ENDPOINT = 'https://sawarikinbech.com';\nvar ENDPOINT = 'http://localhost:4003';\n\n//# sourceURL=webpack:///./client/src/config/index.js?");

/***/ }),

/***/ "./client/src/reducers/ modalReducer.js":
/*!**********************************************!*\
  !*** ./client/src/reducers/ modalReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ \"./client/src/actions/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialModalState = {\n  showAddUserModal: false,\n  showAddSampleQuestionModal: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialModalState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"UPDATE_MODAL_VALUE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.payload.key, action.payload.value));\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/src/reducers/_modalReducer.js?");

/***/ }),

/***/ "./client/src/reducers/formReducer.js":
/*!********************************************!*\
  !*** ./client/src/reducers/formReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ \"./client/src/actions/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialFormState = {\n  login: {\n    userName: '',\n    password: '',\n    error: null,\n    success: null,\n    loading: null\n  },\n  multiSearch: {\n    searchType: 'budget',\n    buttonType: 'new',\n    typeId: null,\n    brandId: null,\n    productId: null,\n    error: null,\n    success: null,\n    loading: null\n  },\n  addEnquiry: {\n    name: '',\n    email: '',\n    phoneno: '',\n    address: '',\n    message: '',\n    error: null,\n    success: null,\n    loading: null\n  },\n  addBrand: {\n    stypeId: null,\n    brandName: null,\n    image: null,\n    sid: 1,\n    loading: null,\n    error: null,\n    success: null\n  },\n  addModel: {\n    stypeId: null,\n    name: null,\n    image: null,\n    sid: 1,\n    loading: null,\n    error: null,\n    success: null\n  },\n  sendEmail: {\n    email: null,\n    message: null,\n    success: null,\n    error: null,\n    loading: null\n  },\n  ServiceTypeBrandModelVarient: {\n    sid: 1,\n    stypeId: null,\n    sbId: null,\n    modelId: null,\n    name: null,\n    onRoadPrice: null,\n    exShowRoomPrice: null,\n    bodyType: null,\n    error: null,\n    loading: null,\n    success: null\n  },\n  CarVarientOverview: {\n    varientId: null,\n    mileage: null,\n    engine: null,\n    BHP: null,\n    transmission: null,\n    seats: null,\n    serviceCost: null,\n    error: null,\n    loading: null,\n    success: null\n  },\n  CarVarientKeySpecification: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientKeyFeatures: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientEngineTransmission: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientFuelPerformance: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientSuspensionSteeringBreak: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientDimentionCapacity: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientComfortConvenience: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientInterior: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientExterior: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientSafty: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  CarVarientEntertainmentCommunication: {\n    loading: null,\n    error: null,\n    success: null\n  },\n  BikeVarientOverview: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  BikeVarientKeySpecification: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  BikeVarientKeyFeaturs: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  BikeVarientEngineTransmission: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  BikeVarientFeatursSafety: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  BikeVarientMileagePerformance: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  BikeVarientChassisSuspension: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  BikeVarientDimensionCapacity: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  BikeVarientElectricals: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  BikeVarientTyresBrakes: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  DiscountOffer: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  addDealer: {\n    province: null,\n    type: null,\n    sId: 1,\n    name: null,\n    phoneNo: null,\n    description: null,\n    latitude: null,\n    city: null,\n    logitude: null,\n    loading: null,\n    error: null,\n    success: null\n  },\n  addServiceCenter: {\n    province: null,\n    type: null,\n    sId: 1,\n    name: null,\n    phoneNo: null,\n    description: null,\n    latitude: null,\n    city: null,\n    logitude: null,\n    loading: null,\n    error: null,\n    success: null\n  },\n  sellVehicle: {\n    stypeId: null,\n    sbId: null,\n    vehicleName: null,\n    kmsDriven: null,\n    ownerShip: null,\n    city: null,\n    expectedPrice: null,\n    ownerName: null,\n    ownerEmail: null,\n    ownerPhoneNo: null,\n    image1: null,\n    image2: null,\n    image3: null,\n    image4: null,\n    image5: null,\n    loading: null,\n    success: null,\n    error: null\n  },\n  dealerEnquiry: {\n    name: '',\n    email: '',\n    phoneno: '',\n    address: '',\n    message: '',\n    dealerId: null,\n    error: null,\n    success: null,\n    loading: null\n  },\n  serviceCenterEnquiry: {\n    name: '',\n    email: '',\n    phoneno: '',\n    address: '',\n    message: '',\n    error: null,\n    success: null,\n    loading: null\n  },\n  sellVehicleFilter: {},\n  User: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  Videos: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  News: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  fileUpload: {\n    loading: null,\n    success: null,\n    error: null\n  },\n  modelReview: {\n    loading: null,\n    success: null,\n    error: null\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialFormState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"UPDATE_FORM_VALUE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.payload.schema, _objectSpread(_objectSpread({}, state[action.payload.schema]), action.payload.data)));\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/src/reducers/formReducer.js?");

/***/ }),

/***/ "./client/src/reducers/index.js":
/*!**************************************!*\
  !*** ./client/src/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mainReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainReducer */ \"./client/src/reducers/mainReducer.js\");\n/* harmony import */ var _modalReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ modalReducer */ \"./client/src/reducers/ modalReducer.js\");\n/* harmony import */ var _formReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formReducer */ \"./client/src/reducers/formReducer.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  main: _mainReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  form: _formReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  modal: _modalReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./client/src/reducers/index.js?");

/***/ }),

/***/ "./client/src/reducers/mainReducer.js":
/*!********************************************!*\
  !*** ./client/src/reducers/mainReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ \"./client/src/actions/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialAppState = {\n  ansqsn: [],\n  screen: 'login',\n  modal: false,\n  initialData: {},\n  initialAdminData: {},\n  currentAdminContent: '',\n  currentCarDetail: null,\n  loginDetail: null,\n  currentUserDetails: null,\n  multiSearchResult: null,\n  currentUsedVehicleDetails: null,\n  filter: {\n    priceRange: [0, 50]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialAppState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"UPDATE_MAIN_VALUE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.payload.key, action.payload.value));\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/src/reducers/mainReducer.js?");

/***/ }),

/***/ "./client/src/renderer/index.js":
/*!**************************************!*\
  !*** ./client/src/renderer/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _webConfig_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webConfig.json */ \"./webConfig.json\");\nvar _webConfig_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../webConfig.json */ \"./webConfig.json\", 1);\n\n\n/* eslint-disable react/no-danger */\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\nvar HTML = function HTML(_ref) {\n  var content = _ref.content,\n      state = _ref.state,\n      helmet = _ref.helmet,\n      seo = _ref.seo;\n  var htmlAttrs = helmet.htmlAttributes.toComponent();\n  var bodyAttrs = helmet.bodyAttributes.toComponent();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"html\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    lang: \"en\"\n  }, htmlAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"head\", {\n    dangerouslySetInnerHTML: {\n      __html: \"\\n       \".concat(seo, \"\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n    \").concat(helmet.meta.toString(), \"\\n    <link rel=\\\"shortcut icon\\\" href=\\\"\").concat(_webConfig_json__WEBPACK_IMPORTED_MODULE_2__.siteURL, \"/assets/graphics/logo.png\\\">\\n    <link href=\\\"\").concat(_webConfig_json__WEBPACK_IMPORTED_MODULE_2__.siteURL, \"/assets/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\" type=\\\"text/css\\\" />\\n    <link href=\\\"\").concat(_webConfig_json__WEBPACK_IMPORTED_MODULE_2__.siteURL, \"/assets/css/carousel.min.css\\\" rel=\\\"stylesheet\\\" type=\\\"text/css\\\" />\\n    <link href=\\\"\").concat(_webConfig_json__WEBPACK_IMPORTED_MODULE_2__.siteURL, \"/assets/css/index.css\\\" rel=\\\"stylesheet\\\" type=\\\"text/css\\\" />\\n    <link href=\\\"\").concat(_webConfig_json__WEBPACK_IMPORTED_MODULE_2__.siteURL, \"/assets/css/styles.css\\\" rel=\\\"stylesheet\\\" type=\\\"text/css\\\" />\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap\\\" rel=\\\"stylesheet\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css\\\"\\n      integrity=\\\"sha256-raGUlaaCI4l2GoQ6cxLH8ODuDTwuQVL9RU06sSvpD6w=\\\" crossorigin=\\\"anonymous\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\\\"\\n      integrity=\\\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\\\" crossorigin=\\\"anonymous\\\">\\n      <script data-ad-client=\\\"ca-pub-3939364143951817\\\" async src=\\\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\\\"></script>\\n    \")\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"body\", bodyAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    id: \"root\",\n    dangerouslySetInnerHTML: {\n      __html: content\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"script\", {\n    dangerouslySetInnerHTML: {\n      __html: \"window.__APOLLO_STATE__=\".concat(JSON.stringify(state).replace(/</g, \"\\\\u003c\"), \";\")\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"script\", {\n    src: \"\".concat(_webConfig_json__WEBPACK_IMPORTED_MODULE_2__.siteURL, \"/client_bundle.js\")\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HTML);\n\n//# sourceURL=webpack:///./client/src/renderer/index.js?");

/***/ }),

/***/ "./client/src/screens/TestComponent/index.js":
/*!***************************************************!*\
  !*** ./client/src/screens/TestComponent/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Test; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_image_magnify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-magnify */ \"react-image-magnify\");\n/* harmony import */ var react_image_magnify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image_magnify__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar url = '/assets/graphics/images/fan.jpg';\n\nvar Test = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Test, _React$Component);\n\n  var _super = _createSuper(Test);\n\n  function Test() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Test);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Test, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        style: {\n          height: 400,\n          width: 400\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_image_magnify__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        smallImage: {\n          alt: 'Wristwatch by Ted Baker London',\n          isFluidWidth: true,\n          src: url\n        },\n        largeImage: {\n          src: url,\n          width: 300,\n          height: 300,\n          shouldHideHintAfterFirstActivation: false\n        }\n      })) // \"test\"\n      ;\n    }\n  }]);\n\n  return Test;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./client/src/screens/TestComponent/index.js?");

/***/ }),

/***/ "./client/src/screens/home/Home.js":
/*!*****************************************!*\
  !*** ./client/src/screens/home/Home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/footer/Footer */ \"./client/src/common/footer/Footer.js\");\n/* harmony import */ var _common_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/header/Header */ \"./client/src/common/header/Header.js\");\n/* harmony import */ var _common_highlights_Highlights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/highlights/Highlights */ \"./client/src/common/highlights/Highlights.js\");\n/* harmony import */ var _slider_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slider/Slider */ \"./client/src/screens/slider/Slider.js\");\n/* harmony import */ var _popular_brand_Popularbrand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popular-brand/Popularbrand */ \"./client/src/screens/popular-brand/Popularbrand.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _summer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../summer */ \"./client/src/screens/summer/index.js\");\n/* harmony import */ var _winter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../winter */ \"./client/src/screens/winter/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    fetchData();\n  });\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://localhost:4000/Products');\n\n            case 2:\n              data = _context.sent;\n              console.log('server data', data);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"home_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"header_wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"slider_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_slider_Slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"highlights\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_highlights_Highlights__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"brand\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_popular_brand_Popularbrand__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"summer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_summer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"winter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_winter__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"footer_wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n}\n\n//# sourceURL=webpack:///./client/src/screens/home/Home.js?");

/***/ }),

/***/ "./client/src/screens/popular-brand/Popularbrand.js":
/*!**********************************************************!*\
  !*** ./client/src/screens/popular-brand/Popularbrand.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Popularbrand; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_Carousel_Horizontalcarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Carousel/Horizontalcarousel */ \"./client/src/common/Carousel/Horizontalcarousel.js\");\n\n\nfunction Popularbrand() {\n  var data = ['/assets/graphics/popular_brand/baltra.jpg', '/assets/graphics/popular_brand/godrej.jpg', '/assets/graphics/popular_brand/sony.jpeg', '/assets/graphics/popular_brand/philips.png', '/assets/graphics/popular_brand/godrej.jpeg', '/assets/graphics/popular_brand/philips.jpg'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"brand_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"brand-text-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"brand_text\"\n  }, \"Popular Brand\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"brand_carousel_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"brand_carousel\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Carousel_Horizontalcarousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    data: data\n  }))));\n}\n\n//# sourceURL=webpack:///./client/src/screens/popular-brand/Popularbrand.js?");

/***/ }),

/***/ "./client/src/screens/product-details/Features.js":
/*!********************************************************!*\
  !*** ./client/src/screens/product-details/Features.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Features; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Features() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"product_features\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"features_wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"features_list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Energy Savings\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Remote Control\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Light Weight\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Good Looks\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Variable Speed\")))));\n}\n\n//# sourceURL=webpack:///./client/src/screens/product-details/Features.js?");

/***/ }),

/***/ "./client/src/screens/product-details/Overviews.js":
/*!*********************************************************!*\
  !*** ./client/src/screens/product-details/Overviews.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Overviews; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Overviews() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"product_overviews\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"overviews_shadow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"overviews_content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Get excellent ventilation in your room having dimension as 430x170x430 mm (LxWxH) with the Croma CRF0026 Pivot Fan. It's powered by a 45 watts motor that provides with powerful airflow and a performance up to 1350 RPM. The 30 cm air circulator fan delivers cooling to a wider area. Set the air speed appropriately using the 3 speed control option of this device. The wall mount option is available for this Croma fan.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Use the 90 degrees fan tilt axis to position it as required for adjusting the airflow angle. It can be adjusted up to 180 degrees. Thermal safety has been provided to its motor for reliable and durable performance. It can be installed and assembled with ease. Its maintenance is a breeze. Just remove its grill and clean it comfortably. This vertically adjustable fan has been efficiently designed for extra silent operation.\")))));\n}\n\n//# sourceURL=webpack:///./client/src/screens/product-details/Overviews.js?");

/***/ }),

/***/ "./client/src/screens/product-details/Specifications.js":
/*!**************************************************************!*\
  !*** ./client/src/screens/product-details/Specifications.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Specifications; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Specifications() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"product_specification\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"specifiacation_shadow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pro_category\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cat_title\"\n  }, \"Product Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pro_installation\"\n  }, \" Installation Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_type\"\n  }, \"Floor Standing\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pro_category\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cat_title\"\n  }, \"Manufacturer Details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pro_installation\"\n  }, \" Brand\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_type\"\n  }, \"Croma\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pro_features\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_title\"\n  }, \"Features\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Max Spin Speed\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Speed Settings\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Inverter Compatibility\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items_ans\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"1350 rpm\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Yes\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"phy_attributes\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_title\"\n  }, \"Physical Attributes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"No. of Blades\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Controls Type\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items_ans\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Buttons\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pro_features\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_title\"\n  }, \"Plug Details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Power\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Voltage Rating\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Frequency\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items_ans\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"45 W\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"220 - 240 V\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"50 Hz\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"phy_attributes\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_title\"\n  }, \"Product Aesthetics\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Color\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Color Family\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items_ans\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Black\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Black\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pro_features\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_title\"\n  }, \"In The Box\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Generic Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Accessories\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Documents\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items_ans\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Fan\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Not Available\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"User Manual | Warranty Card\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"phy_attributes\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_title\"\n  }, \"Product Dimensions (Open)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Dimensions in cm (WxDxH)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Dimensions in Inches (WxDxH) \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items_ans\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Not Available\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Not Available\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pro_features\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_title\"\n  }, \"After Sales & Services\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Standard Warranty Period\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Warranty Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Installation & Demo\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items_ans\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"24 Months\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Carry-In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Not Applicable\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pro_features\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_title\"\n  }, \"Company Contact Information\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Manufacturer /Importer /Marketer Name & Address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Customer Support Number \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Customer Support Email\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items_ans\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"Infiniti Retail Limited | Unit No. 701 702 7th Floor Kaledonia Sahar Road Andheri East Mumbai- 400 069\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"7207666000\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"customersupport @croma.com\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"phy_attributes\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Country of Manufacture\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"items\"\n  }, \"Country of Brand Origin\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"fe_items_ans\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"China\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i_ans\"\n  }, \"India\")))))));\n}\n\n//# sourceURL=webpack:///./client/src/screens/product-details/Specifications.js?");

/***/ }),

/***/ "./client/src/screens/product-details/index.js":
/*!*****************************************************!*\
  !*** ./client/src/screens/product-details/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return index; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/footer/Footer */ \"./client/src/common/footer/Footer.js\");\n/* harmony import */ var _common_header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/header/Header */ \"./client/src/common/header/Header.js\");\n/* harmony import */ var _common_Carousel_StarRating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Carousel/StarRating */ \"./client/src/common/Carousel/StarRating.js\");\n/* harmony import */ var _Features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Features */ \"./client/src/screens/product-details/Features.js\");\n/* harmony import */ var _Specifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Specifications */ \"./client/src/screens/product-details/Specifications.js\");\n/* harmony import */ var _Overviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Overviews */ \"./client/src/screens/product-details/Overviews.js\");\n/* harmony import */ var _common_similar_product_SimilarProduct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/similar-product/SimilarProduct */ \"./client/src/common/similar-product/SimilarProduct.js\");\n/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Accordion */ \"react-bootstrap/Accordion\");\n/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import Img from '../../../src/assets/graphics/images/fan.jpg';\n\n\n\n\n\n\n\nvar index = /*#__PURE__*/function (_PureComponent) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(index, _PureComponent);\n\n  var _super = _createSuper(index);\n\n  function index() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, index);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(index, [{\n    key: \"render\",\n    value: function render() {\n      // console.info('this product dteila props', Accordion)\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_header_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"main-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"container-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"image-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"image-slider\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"image-div\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"details-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"product-details\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"name-with-detail\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h1\", null, \"DC Circulator Fan : SIF-SE10SC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"As a well-known dc circulator fan company, Shinil sold more than 2 million air circulator fans. Meet Shinil's powerful DC dual fan, SIF-SE10SC, with a BLDC motor.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"product-id-rating\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"product-id\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"PRODUCT ID: 236962\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"product-rating\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Carousel_StarRating__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"product-price\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"p\", null, \"Price: Rs. 2000/-\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"buying-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"add-buy-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", {\n        className: \"add-cart\"\n      }, \"ADD TO CART\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"button\", {\n        className: \"buy-now\"\n      }, \"BUY NOW\")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"accordion_div\",\n        style: {\n          width: \"90%\",\n          minHeight: '90vh'\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a, {\n        defaultActiveKey: \"0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {\n        eventKey: \"1\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"title\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h4\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"b\", null, \"Key Features\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Features__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a, {\n        defaultActiveKey: \"0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {\n        eventKey: \"2\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"spe_title\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h4\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"b\", null, \"Specification\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Specifications__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a, {\n        defaultActiveKey: \"0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {\n        eventKey: \"1\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"overviews_title\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h4\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"b\", null, \"Overview\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_13___default.a.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Overviews__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"foot_wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_footer_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n    }\n  }]);\n\n  return index;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"PureComponent\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/screens/product-details/index.js?");

/***/ }),

/***/ "./client/src/screens/slider/Slider.js":
/*!*********************************************!*\
  !*** ./client/src/screens/slider/Slider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"react-responsive-carousel\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Slider() {\n  var data = ['http://www.smartcareint.com/wp-content/uploads/2015/04/banner04.png', 'https://allrounderthemes.com/salespower/wp-content/uploads/sites/4/2019/03/when-to-buy-appliances-kitchen-appliances-for-incredible-kitchen-appliance-stores.jpg', // 'https://i.dlpng.com/static/png/6921778_preview.png',\n  'http://www.panaceaservices.co.in/wp-content/uploads/2020/08/Appliances-banner-1-1536x493.jpg', 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-818-home-appliances-festival-atmospheric-lights-red-background-image_158775.jpg'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"slide_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n    showStatus: false,\n    infiniteLoop: true,\n    showThumbs: false,\n    autoPlay: true,\n    transitionTime: 500\n  }, data.map(function (img) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"slide_img\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"slide_img__div\",\n      src: img\n    }));\n  })));\n}\n\n//# sourceURL=webpack:///./client/src/screens/slider/Slider.js?");

/***/ }),

/***/ "./client/src/screens/summer/index.js":
/*!********************************************!*\
  !*** ./client/src/screens/summer/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Summer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_Carousel_Horizontalcarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Carousel/Horizontalcarousel */ \"./client/src/common/Carousel/Horizontalcarousel.js\");\n\n\nfunction Summer() {\n  var data = [{\n    img: '/assets/graphics/summer/blackfan.jpg',\n    name: \"pruduct1\"\n  }, {\n    img: '/assets/graphics/summer/air conditioner.jpg',\n    name: 'product2'\n  }, {\n    img: '/assets/graphics/summer/dc-fan.jpg',\n    name: 'product3'\n  }, {\n    img: '/assets/graphics/summer/sma.jpg',\n    name: 'product4'\n  }, {\n    img: '/assets/graphics/summer/window-airconditioner.jpg',\n    name: 'product5'\n  }, {\n    img: '/assets/graphics/summer/circulator fan.jpg',\n    name: 'product6'\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"summer_brand\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"summer-text-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"summer_text\"\n  }, \"Summer\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"summer_carousel_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"summer_carousel\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Carousel_Horizontalcarousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    data: data,\n    cardType: \"detail\"\n  }))));\n}\n\n//# sourceURL=webpack:///./client/src/screens/summer/index.js?");

/***/ }),

/***/ "./client/src/screens/winter/index.js":
/*!********************************************!*\
  !*** ./client/src/screens/winter/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Winter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_Carousel_Horizontalcarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Carousel/Horizontalcarousel */ \"./client/src/common/Carousel/Horizontalcarousel.js\");\n\n\nfunction Winter() {\n  var data = [{\n    img: '/assets/graphics/winter/electric kettle.jpeg',\n    name: 'Product 1',\n    price: '1000'\n  }, {\n    img: '/assets/graphics/winter/electric heater.jpeg',\n    name: 'Product 2'\n  }, {\n    img: '/assets/graphics/winter/electric jug.jpeg',\n    name: 'Product 3'\n  }, {\n    img: '/assets/graphics/winter/good heater.jpg',\n    name: 'Product 4'\n  }, {\n    img: '/assets/graphics/winter/winter and sumer heater.jpg',\n    name: 'Product 5'\n  }, {\n    img: '/assets/graphics/winter/ovan.jpeg',\n    name: 'Product 6'\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"winter_brand\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"winter-text-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"winter_text\"\n  }, \"Winter\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"winter_carousel_div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"winter_carousel\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Carousel_Horizontalcarousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    data: data,\n    cardType: \"detail\"\n  }))));\n}\n\n//# sourceURL=webpack:///./client/src/screens/winter/index.js?");

/***/ }),

/***/ "./client/src/store/index.js":
/*!***********************************!*\
  !*** ./client/src/store/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./client/src/reducers/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));\n\n//# sourceURL=webpack:///./client/src/store/index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var app_node__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app-node */ \"app-node\");\n/* harmony import */ var app_node__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(app_node__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _webConfig_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./webConfig.json */ \"./webConfig.json\");\nvar _webConfig_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./webConfig.json */ \"./webConfig.json\", 1);\n/* harmony import */ var _server_src_db__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./server/src/db */ \"./server/src/db/index.js\");\n/* harmony import */ var _client_src_App__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./client/src/App */ \"./client/src/App.js\");\n/* harmony import */ var _client_src_renderer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./client/src/renderer */ \"./client/src/renderer/index.js\");\n/* harmony import */ var _client_src_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./client/src/store */ \"./client/src/store/index.js\");\n/* harmony import */ var _server_src_express__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./server/src/express */ \"./server/src/express/index.js\");\n/* harmony import */ var _server_src_graphql_schema__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./server/src/graphql/schema */ \"./server/src/graphql/schema/index.js\");\n/* harmony import */ var _server_src_graphql_schema__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_server_src_graphql_schema__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _server_src_graphql_resolvers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./server/src/graphql/resolvers */ \"./server/src/graphql/resolvers/index.js\");\n/* harmony import */ var _server_src_seo_index__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./server/src/seo/index */ \"./server/src/seo/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import createSitemap from './site-map/sitemapGenerator';\n// createSitemap();\n\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\nvar PORT = process.env.PORT || 3000;\napp.use(compression__WEBPACK_IMPORTED_MODULE_17___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_15___default()({\n  origin: \"\".concat(_webConfig_json__WEBPACK_IMPORTED_MODULE_20__.siteURL),\n  credentials: true\n})); // app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_6___default.a.json({\n  limit: '50mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_6___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_7___default()());\napp.use('/', express__WEBPACK_IMPORTED_MODULE_4___default.a.static('build/public'));\napp_node__WEBPACK_IMPORTED_MODULE_16___default()( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(_server_src_db__WEBPACK_IMPORTED_MODULE_21__[\"init\"])();\n\n        case 2:\n          app.use('/graphql', Object(express_graphql__WEBPACK_IMPORTED_MODULE_5__[\"graphqlHTTP\"])({\n            schema: _server_src_graphql_schema__WEBPACK_IMPORTED_MODULE_26___default.a,\n            rootValue: _server_src_graphql_resolvers__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n            graphiql: true\n          }));\n          app.get(['*/:param', '*'], function (req, res) {\n            var urlParam = req.params.param ? req.params.param : null;\n            var client = new apollo_client__WEBPACK_IMPORTED_MODULE_13__[\"ApolloClient\"]({\n              ssrMode: true,\n              // Remember that this is the interface the SSR server will use to connect to the\n              // API server, so we need to ensure it isn't firewalled, etc\n              link: Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_14__[\"createHttpLink\"])({\n                uri: \"\".concat(_webConfig_json__WEBPACK_IMPORTED_MODULE_20__.siteURL, \"/graphql\"),\n                credentials: 'same-origin',\n                headers: {\n                  cookie: req.header('Cookie')\n                }\n              }),\n              cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__[\"InMemoryCache\"]()\n            });\n            var context = {\n              urlParam: urlParam\n            }; // The client-side App will instead use <BrowserRouter>\n\n            var App = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_12__[\"ApolloProvider\"], {\n              client: client\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_19__[\"Provider\"], {\n              store: _client_src_store__WEBPACK_IMPORTED_MODULE_24__[\"default\"]\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"StaticRouter\"], {\n              location: req.url,\n              context: context\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_client_src_App__WEBPACK_IMPORTED_MODULE_22__[\"default\"], null)))); // Handle queries etc.. before sending raw html\n\n            Object(react_apollo__WEBPACK_IMPORTED_MODULE_12__[\"getDataFromTree\"])(App).then( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n              var content, helmet, SEO, initialState, html;\n              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n                while (1) {\n                  switch (_context.prev = _context.next) {\n                    case 0:\n                      content = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToString(App);\n                      helmet = react_helmet__WEBPACK_IMPORTED_MODULE_18__[\"Helmet\"].renderStatic();\n                      _context.next = 4;\n                      return Object(_server_src_seo_index__WEBPACK_IMPORTED_MODULE_28__[\"default\"])(req.params);\n\n                    case 4:\n                      SEO = _context.sent;\n                      // console.log('final seo tag', SEO);\n                      initialState = client.extract(); // console.log('React helmet', helmet);\n\n                      html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_client_src_renderer__WEBPACK_IMPORTED_MODULE_23__[\"default\"], {\n                        content: content,\n                        state: initialState,\n                        helmet: helmet,\n                        seo: SEO\n                      });\n                      res.status(200);\n                      res.send(\"<!doctype html>\\n\".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToStaticMarkup(html)));\n                      res.end();\n\n                    case 10:\n                    case \"end\":\n                      return _context.stop();\n                  }\n                }\n              }, _callee);\n            })));\n          });\n          Object(_server_src_express__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(app);\n          app.listen(PORT, function () {\n            return console.log(\"App running on port \".concat(PORT));\n          });\n\n        case 6:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _callee2);\n})));\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./server/src/db/deleteQuery.js":
/*!**************************************!*\
  !*** ./server/src/db/deleteQuery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deleteQuery; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction deleteQuery(_x, _x2, _x3) {\n  return _deleteQuery.apply(this, arguments);\n}\n\nfunction _deleteQuery() {\n  _deleteQuery = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(db, table, condition) {\n    var fields, conditionStr, params, sql, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            fields = Object.keys(condition);\n            conditionStr = fields.map(function (f) {\n              return \"[\".concat(f, \"]=?\");\n            }).join(' AND ');\n            params = fields.map(function (f) {\n              return condition[f];\n            });\n            sql = \"DELETE FROM [\".concat(table, \"] WHERE \").concat(conditionStr);\n            _context.next = 6;\n            return db.run.apply(db, [sql].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(params)));\n\n          case 6:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.stmt.changes);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _deleteQuery.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./server/src/db/deleteQuery.js?");

/***/ }),

/***/ "./server/src/db/executeSql.js":
/*!*************************************!*\
  !*** ./server/src/db/executeSql.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return executeSql; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction executeSql(_x, _x2, _x3) {\n  return _executeSql.apply(this, arguments);\n}\n\nfunction _executeSql() {\n  _executeSql = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(db, sql, params) {\n    var res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return db.all.apply(db, [sql].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(params)));\n\n          case 2:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _executeSql.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./server/src/db/executeSql.js?");

/***/ }),

/***/ "./server/src/db/find.js":
/*!*******************************!*\
  !*** ./server/src/db/find.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return find; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction find(_x, _x2, _x3) {\n  return _find.apply(this, arguments);\n}\n\nfunction _find() {\n  _find = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(db, table, condition) {\n    var fields, conditionStr, params, _sql, res, sql, allRes;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!condition) {\n              _context.next = 9;\n              break;\n            }\n\n            fields = Object.keys(condition);\n            conditionStr = fields.map(function (f) {\n              return \"[\".concat(f, \"]=?\");\n            }).join(' AND ');\n            params = fields.map(function (str) {\n              return condition[str];\n            });\n            _sql = \"SELECT * FROM \".concat(table, \" WHERE \").concat(conditionStr);\n            _context.next = 7;\n            return db.all.apply(db, [_sql].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(params)));\n\n          case 7:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res);\n\n          case 9:\n            sql = \"SELECT * FROM \".concat(table);\n            _context.next = 12;\n            return db.all(sql);\n\n          case 12:\n            allRes = _context.sent;\n            return _context.abrupt(\"return\", allRes);\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _find.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./server/src/db/find.js?");

/***/ }),

/***/ "./server/src/db/findOne.js":
/*!**********************************!*\
  !*** ./server/src/db/findOne.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return findOne; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction findOne(_x, _x2, _x3) {\n  return _findOne.apply(this, arguments);\n}\n\nfunction _findOne() {\n  _findOne = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(db, table, condition) {\n    var fields, conditionStr, params, sql, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            fields = Object.keys(condition);\n            conditionStr = fields.map(function (f) {\n              return \"[\".concat(f, \"]=?\");\n            }).join(' AND ');\n            params = fields.map(function (str) {\n              return condition[str];\n            });\n            sql = \"SELECT * FROM \".concat(table, \" WHERE \").concat(conditionStr);\n            _context.next = 6;\n            return db.get.apply(db, [sql].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(params)));\n\n          case 6:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _findOne.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./server/src/db/findOne.js?");

/***/ }),

/***/ "./server/src/db/index.js":
/*!********************************!*\
  !*** ./server/src/db/index.js ***!
  \********************************/
/*! exports provided: dbPromise, init, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbPromise\", function() { return dbPromise; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sqlite */ \"sqlite\");\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sqlite__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insert */ \"./server/src/db/insert.js\");\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find */ \"./server/src/db/find.js\");\n/* harmony import */ var _findOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./findOne */ \"./server/src/db/findOne.js\");\n/* harmony import */ var _upsert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upsert */ \"./server/src/db/upsert.js\");\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update */ \"./server/src/db/update.js\");\n/* harmony import */ var _deleteQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deleteQuery */ \"./server/src/db/deleteQuery.js\");\n/* harmony import */ var _executeSql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./executeSql */ \"./server/src/db/executeSql.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar dbPromise = sqlite__WEBPACK_IMPORTED_MODULE_3___default.a.open('automobile.sqlite', {\n  Promise: bluebird__WEBPACK_IMPORTED_MODULE_4___default.a\n});\nvar dbInstance = null;\n\nvar getInstance = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var db;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(dbInstance !== null)) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\", dbInstance);\n\n          case 2:\n            _context.next = 4;\n            return dbPromise;\n\n          case 4:\n            db = _context.sent;\n            _context.next = 7;\n            return db.migrate({\n              migrationsPath: path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), 'build', 'migrations')\n            });\n\n          case 7:\n            dbInstance = {\n              insert: _insert__WEBPACK_IMPORTED_MODULE_5__[\"default\"].bind(null, db),\n              find: _find__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bind(null, db),\n              findOne: _findOne__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bind(null, db),\n              update: _update__WEBPACK_IMPORTED_MODULE_9__[\"default\"].bind(null, db),\n              upsert: _upsert__WEBPACK_IMPORTED_MODULE_8__[\"default\"].bind(null, db),\n              deleteQuery: _deleteQuery__WEBPACK_IMPORTED_MODULE_10__[\"default\"].bind(null, db),\n              executeSql: _executeSql__WEBPACK_IMPORTED_MODULE_11__[\"default\"].bind(null, db)\n            };\n            return _context.abrupt(\"return\", dbInstance);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getInstance() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar init = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return getInstance();\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function init() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  execute: function () {\n    var _execute = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(func) {\n      var db, res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return getInstance();\n\n            case 2:\n              db = _context3.sent;\n              _context3.next = 5;\n              return func(db);\n\n            case 5:\n              res = _context3.sent;\n              return _context3.abrupt(\"return\", res);\n\n            case 7:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    function execute(_x) {\n      return _execute.apply(this, arguments);\n    }\n\n    return execute;\n  }()\n});\n\n//# sourceURL=webpack:///./server/src/db/index.js?");

/***/ }),

/***/ "./server/src/db/insert.js":
/*!*********************************!*\
  !*** ./server/src/db/insert.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return insert; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction insert(_x, _x2, _x3) {\n  return _insert.apply(this, arguments);\n}\n\nfunction _insert() {\n  _insert = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(db, table, values) {\n    var fields, fieldName, fieldPlaceHolder, params, sql, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            fields = Object.keys(values);\n            fieldName = fields.map(function (f) {\n              return \"[\".concat(f, \"]\");\n            }).join(',');\n            fieldPlaceHolder = fields.map(function () {\n              return '?';\n            }).join(',');\n            params = fields.map(function (f) {\n              return values[f];\n            });\n            sql = \"INSERT INTO [\".concat(table, \"](\").concat(fieldName, \") VALUES (\").concat(fieldPlaceHolder, \")\");\n            _context.next = 7;\n            return db.run.apply(db, [sql].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(params)));\n\n          case 7:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.stmt.lastID);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _insert.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./server/src/db/insert.js?");

/***/ }),

/***/ "./server/src/db/update.js":
/*!*********************************!*\
  !*** ./server/src/db/update.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return update; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction update(_x, _x2, _x3, _x4) {\n  return _update.apply(this, arguments);\n}\n\nfunction _update() {\n  _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(db, table, values, condition) {\n    var fields, set, fieldParams, conditionFields, conditionStr, conditionParams, sql, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            fields = Object.keys(values);\n            set = fields.map(function (f) {\n              return \"[\".concat(f, \"]=?\");\n            }).join(',');\n            fieldParams = fields.map(function (f) {\n              return values[f];\n            });\n            conditionFields = Object.keys(condition);\n            conditionStr = conditionFields.map(function (c) {\n              return \"[\".concat(c, \"]=?\");\n            }).join(' AND ');\n            conditionParams = conditionFields.map(function (c) {\n              return condition[c];\n            });\n            sql = \"UPDATE [\".concat(table, \"] SET \").concat(set, \" WHERE \").concat(conditionStr);\n            _context.next = 9;\n            return db.run.apply(db, [sql].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(fieldParams), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(conditionParams)));\n\n          case 9:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.stmt.changes);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _update.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./server/src/db/update.js?");

/***/ }),

/***/ "./server/src/db/upsert.js":
/*!*********************************!*\
  !*** ./server/src/db/upsert.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return insert; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction insert(_x, _x2, _x3) {\n  return _insert.apply(this, arguments);\n}\n\nfunction _insert() {\n  _insert = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(db, table, values) {\n    var fields, fieldNames, fieldPlaceHolders, params, sql, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            fields = Object.keys(values);\n            fieldNames = fields.map(function (f) {\n              return \"[\".concat(f, \"]\");\n            }).join(',');\n            fieldPlaceHolders = fields.map(function () {\n              return '?';\n            }).join(',');\n            params = fields.map(function (f) {\n              return values[f];\n            });\n            sql = \"INSERT OR REPLACE INTO [\".concat(table, \"](\").concat(fieldNames, \") VALUES(\").concat(fieldPlaceHolders, \")\");\n            _context.next = 7;\n            return db.run.apply(db, [sql].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(params)));\n\n          case 7:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.lastId);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _insert.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./server/src/db/upsert.js?");

/***/ }),

/***/ "./server/src/express/index.js":
/*!*************************************!*\
  !*** ./server/src/express/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import login from './request-handler/login';\n// import logout from './request-handler/logout';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use(function (req, res, next) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Credentials', true);\n    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n    next();\n  }); // app.post('/auth/login', login);\n  // app.post('/auth/logout', logout);\n});\n\n//# sourceURL=webpack:///./server/src/express/index.js?");

/***/ }),

/***/ "./server/src/graphql/resolvers/helper-functions/getSchema.js":
/*!********************************************************************!*\
  !*** ./server/src/graphql/resolvers/helper-functions/getSchema.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../db */ \"./server/src/db/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(schema, condition) {\n    var list;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].execute( /*#__PURE__*/function () {\n              var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref2) {\n                var find, res;\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        find = _ref2.find;\n                        res = [];\n\n                        if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(condition)) {\n                          _context.next = 7;\n                          break;\n                        }\n\n                        _context.next = 5;\n                        return find(schema, condition);\n\n                      case 5:\n                        res = _context.sent;\n                        return _context.abrupt(\"return\", res);\n\n                      case 7:\n                        _context.next = 9;\n                        return find(schema);\n\n                      case 9:\n                        res = _context.sent;\n                        return _context.abrupt(\"return\", res);\n\n                      case 11:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x3) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n\n          case 2:\n            list = _context2.sent;\n            return _context2.abrupt(\"return\", list);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./server/src/graphql/resolvers/helper-functions/getSchema.js?");

/***/ }),

/***/ "./server/src/graphql/resolvers/helper-functions/index.js":
/*!****************************************************************!*\
  !*** ./server/src/graphql/resolvers/helper-functions/index.js ***!
  \****************************************************************/
/*! exports provided: getSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSchema */ \"./server/src/graphql/resolvers/helper-functions/getSchema.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSchema\", function() { return _getSchema__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./server/src/graphql/resolvers/helper-functions/index.js?");

/***/ }),

/***/ "./server/src/graphql/resolvers/index.js":
/*!***********************************************!*\
  !*** ./server/src/graphql/resolvers/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper-functions */ \"./server/src/graphql/resolvers/helper-functions/index.js\");\n/* harmony import */ var _client_src_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../client/src/config */ \"./client/src/config/index.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  brandList: function () {\n    var _brandList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(context, args) {\n      var variables, res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              variables = args.body.variables;\n              _context.next = 3;\n              return Object(_helper_functions__WEBPACK_IMPORTED_MODULE_4__[\"getSchema\"])('ServiceTypeBrand');\n\n            case 3:\n              res = _context.sent;\n\n              if (variables.vehicleType) {\n                res = res.filter(function (b) {\n                  return b.stypeId === variables.vehicleType;\n                });\n              }\n\n              if (!variables.limit) {\n                _context.next = 9;\n                break;\n              }\n\n              if (!(variables.offset > res.length)) {\n                _context.next = 8;\n                break;\n              }\n\n              throw new Error('dataFetchComplete');\n\n            case 8:\n              res = res.slice(variables.offset, variables.offset + variables.limit);\n\n            case 9:\n              res = res.map(function (obj) {\n                return _objectSpread(_objectSpread({}, obj), {}, {\n                  brandImageUrl: \"\".concat(_client_src_config__WEBPACK_IMPORTED_MODULE_5__[\"ENDPOINT\"], \"/brand_image/\").concat(obj.brandImageUrl)\n                });\n              });\n              return _context.abrupt(\"return\", res);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function brandList(_x, _x2) {\n      return _brandList.apply(this, arguments);\n    }\n\n    return brandList;\n  }()\n});\n\n//# sourceURL=webpack:///./server/src/graphql/resolvers/index.js?");

/***/ }),

/***/ "./server/src/graphql/schema/index.js":
/*!********************************************!*\
  !*** ./server/src/graphql/schema/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! graphql */ \"graphql\"),\n    buildSchema = _require.buildSchema;\n\nmodule.exports = buildSchema(\"\\ntype Brand {\\n  name: String\\n}\\ntype Query {\\n brandList(vehicleType: Int!, offset: Int, limit: Int): [Brand!]!\\n}\\n\");\n\n//# sourceURL=webpack:///./server/src/graphql/schema/index.js?");

/***/ }),

/***/ "./server/src/seo/index.js":
/*!*********************************!*\
  !*** ./server/src/seo/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db */ \"./server/src/db/index.js\");\n/* harmony import */ var _webConfig_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webConfig.json */ \"./webConfig.json\");\nvar _webConfig_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../webConfig.json */ \"./webConfig.json\", 1);\n\n\n\n // import titleDescriptionProvider from '../../../client/src/screens/common/react-helmet/titileDescriptionProvider';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url) {\n    var path, slug;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            path = url['0'];\n            slug = url.param; // console.log('path and url', url, path, slug);\n            // // for home page\n            // if (path === '/') {\n            //   return `\n            //   <title itemprop=\"name\">Sawari Kinbech: New Cars And Bikes in Nepal, Car And Bikes Prices in Nepal, Buy &amp; Sell Used Cars and Bikes in Nepal</title>\n            //   <meta name=\"description\" itemprop=\"description\" content=\"Thinking of buying a car or bike? At sawarikinbech.com, buy new and used cars and bikes, search by filter and preferences, compare bikes and cars, read latest news and updates, see 360 views &amp; more!\"/>\n            //   <meta name=\"keywords\" content=\"Sawari, kinbech, sawarikinbech, compare, bike, car, service, center, dealer in nepalm, bike price, car price\" />\n            //   `;\n            // }\n            // if (path === '/details') {\n            //   // const id = parseInt(slug.split('-')[1], 10);\n            //   const currentProductDetails = await db.execute(async ({ findOne }) => {\n            //     const result = await findOne('ServiceTypeBrandModel', { slug });\n            //     return result;\n            //   });\n            //   // for new product details meta tags\n            //   return  `<title>New ${currentProductDetails.name} 2021 Price In Nepal, Images, Review & Colours</title>\n            //             <meta property=\"og:image\" content=\"${siteURL}/model_image/${currentProductDetails.image}\" />\n            //             <meta property=\"og:image:secure_url\" content=\"${siteURL}/model_image/${currentProductDetails.image}\"/>\n            //             <meta name=\"description\" itemprop=\"description\" content=\"${currentProductDetails.name} price Read ${currentProductDetails.name} Reviews, view Mileage, Images, Specifications, Variants Details &amp; get ${currentProductDetails.name} latest news.\">`;\n            // }\n            // // for news meta tags\n            // if (path === '/news-details') {\n            //   const id = parseInt(slug.split('-')[1], 10);\n            //   const currentNews = await db.execute(async({ findOne }) => {\n            //     const result = await findOne('News', { slug });\n            //     return result;\n            //   });\n            //   const description = currentNews.content.replace(/(<([^>]+)>)/gi, '').slice(0, 145);\n            //   return  `<title>${currentNews.header}</title>\n            //   <meta property=\"og:image\" content=\"${siteURL}/images/${currentNews.image}\"/>\n            //   <meta property=\"og:image:secure_url\" content=\"${siteURL}/images/${currentNews.image}\"/>\n            //   <meta name=\"description\" content=\"${description}\"/>`;\n            // }\n            // // for used product details meta tags\n            // if (path === '/used-vehicle/details') {\n            //   const currentVehicle = await db.execute(async({ findOne }) => {\n            //     const result = await findOne('SellVehicle', { slug });\n            //     return result;\n            //   });\n            //   return `<title>${currentVehicle.model}</title>\n            //   <meta property=\"og:image\" content=\"${siteURL}/images/${currentVehicle.image1}\"/>\n            //   <meta property=\"og:image:secure_url\" content=\"${siteURL}/images/${currentVehicle.image1}\"/>\n            //   <meta name=\"description\" content=\"${currentVehicle.variant}\"/>`;\n            // }\n            // const { title, description } = titleDescriptionProvider(`${path}/${slug}`, slug);\n            // console.log('title', path, slug, title);\n            // return `\n            // <title itemprop=\"name\">${title}</title>\n            // <meta name=\"description\" itemprop=\"description\" content=\"${description}\">\n            // `;\n\n            return _context.abrupt(\"return\", '');\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./server/src/seo/index.js?");

/***/ }),

/***/ "./webConfig.json":
/*!************************!*\
  !*** ./webConfig.json ***!
  \************************/
/*! exports provided: siteURL, environment, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"siteURL\\\":\\\"http://localhost:3000\\\",\\\"environment\\\":\\\"development\\\"}\");\n\n//# sourceURL=webpack:///./webConfig.json?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/extends%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");\n\n//# sourceURL=webpack:///external_%22apollo-cache-inmemory%22?");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");\n\n//# sourceURL=webpack:///external_%22apollo-client%22?");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-http\");\n\n//# sourceURL=webpack:///external_%22apollo-link-http%22?");

/***/ }),

/***/ "app-node":
/*!***************************!*\
  !*** external "app-node" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"app-node\");\n\n//# sourceURL=webpack:///external_%22app-node%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-unfetch%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");\n\n//# sourceURL=webpack:///external_%22react-apollo%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-bootstrap/Accordion":
/*!********************************************!*\
  !*** external "react-bootstrap/Accordion" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Accordion\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap/Accordion%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/md\");\n\n//# sourceURL=webpack:///external_%22react-icons/md%22?");

/***/ }),

/***/ "react-image-magnify":
/*!**************************************!*\
  !*** external "react-image-magnify" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-image-magnify\");\n\n//# sourceURL=webpack:///external_%22react-image-magnify%22?");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-multi-carousel\");\n\n//# sourceURL=webpack:///external_%22react-multi-carousel%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-responsive-carousel\");\n\n//# sourceURL=webpack:///external_%22react-responsive-carousel%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-star-ratings":
/*!*************************************!*\
  !*** external "react-star-ratings" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-star-ratings\");\n\n//# sourceURL=webpack:///external_%22react-star-ratings%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "sqlite":
/*!*************************!*\
  !*** external "sqlite" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sqlite\");\n\n//# sourceURL=webpack:///external_%22sqlite%22?");

/***/ })

/******/ });