webpackHotUpdate_N_E("pages/index",{

/***/ "./components/portfolio-components/PortfolioContactSection.tsx":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_home_components_HomeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home-components/HomeHeader */ "./components/home-components/HomeHeader.tsx");
/* harmony import */ var _components_home_components_HomeMobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home-components/HomeMobileNav */ "./components/home-components/HomeMobileNav.tsx");
/* harmony import */ var _components_home_components_HomeServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home-components/HomeServices */ "./components/home-components/HomeServices.tsx");
/* harmony import */ var _utils_variants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/variants */ "./utils/variants.ts");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _components_home_components_HomeBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home-components/HomeBackground */ "./components/home-components/HomeBackground.tsx");
/* harmony import */ var _components_home_components_HomeDesktopNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home-components/HomeDesktopNav */ "./components/home-components/HomeDesktopNav.tsx");



var _jsxFileName = "C:\\Users\\12086\\OneDrive\\Desktop\\next_portfolio\\portfolio\\pages\\index.tsx",
    _s = $RefreshSig$();










function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      drawerOpen = _useState[0],
      setDrawerOpen = _useState[1];

  var desktop = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])("(min-width:1000px)");

  var drawerOpenHandler = function drawerOpenHandler() {
    setDrawerOpen(true);
  };

  var drawerCloseHandler = function drawerCloseHandler() {
    setDrawerOpen(false);
  };

  var current = "home";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeBackground__WEBPACK_IMPORTED_MODULE_8__["HomeBackground"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), desktop ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeDesktopNav__WEBPACK_IMPORTED_MODULE_9__["HomeDesktopNav"], {
      current: current
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeMobileNav__WEBPACK_IMPORTED_MODULE_4__["HomeMobileNav"], {
      open: drawerOpen,
      drawerOpenHandler: drawerOpenHandler,
      drawerCloseHandler: drawerCloseHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeServices__WEBPACK_IMPORTED_MODULE_5__["HomeServices"], {
      variants: _utils_variants__WEBPACK_IMPORTED_MODULE_6__["variants"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "myexzrTquxKGFLHj9bU0LV6h8ws=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImRyYXdlck9wZW4iLCJzZXREcmF3ZXJPcGVuIiwiZGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJkcmF3ZXJPcGVuSGFuZGxlciIsImRyYXdlckNsb3NlSGFuZGxlciIsImN1cnJlbnQiLCJ2YXJpYW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEtBQUQsQ0FEZjtBQUFBLE1BQ3RCQyxVQURzQjtBQUFBLE1BQ1ZDLGFBRFU7O0FBRzdCLE1BQU1DLE9BQU8sR0FBR0MsdUVBQWEsQ0FBQyxvQkFBRCxDQUE3Qjs7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJILGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsR0FGRDs7QUFHQSxNQUFNSSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JKLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSyxPQUFPLEdBQUcsTUFBaEI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHSixPQUFPLGdCQUNOLHFFQUFDLHlGQUFEO0FBQWdCLGFBQU8sRUFBRUk7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGdCQUdOLHFFQUFDLHVGQUFEO0FBQ0UsVUFBSSxFQUFFTixVQURSO0FBRUUsdUJBQWlCLEVBQUVJLGlCQUZyQjtBQUdFLHdCQUFrQixFQUFFQztBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFXRSxxRUFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFZRSxxRUFBQyxxRkFBRDtBQUFjLGNBQVEsRUFBRUUsd0RBQVFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWFFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBLGtCQURGO0FBaUJEOztHQS9CdUJULEk7VUFHTkssK0Q7OztLQUhNTCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwOWJjYjZlNTQ2NzdjMjcxNGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEhvbWVIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1jb21wb25lbnRzL0hvbWVIZWFkZXJcIjtcclxuaW1wb3J0IHsgSG9tZU1vYmlsZU5hdiB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50cy9Ib21lTW9iaWxlTmF2XCI7XHJcbmltcG9ydCB7IEhvbWVTZXJ2aWNlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50cy9Ib21lU2VydmljZXNcIjtcclxuaW1wb3J0IHsgdmFyaWFudHMgfSBmcm9tIFwiLi4vdXRpbHMvdmFyaWFudHNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgSG9tZUJhY2tncm91bmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZUJhY2tncm91bmRcIjtcclxuaW1wb3J0IHsgSG9tZURlc2t0b3BOYXYgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZURlc2t0b3BOYXZcIjtcclxuaW1wb3J0IFBvcnRmb2xpb0NvbnRhY3RTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcnRmb2xpby1jb21wb25lbnRzL1BvcnRmb2xpb0NvbnRhY3RTZWN0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtkcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoXCIobWluLXdpZHRoOjEwMDBweClcIik7XHJcblxyXG4gIGNvbnN0IGRyYXdlck9wZW5IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0RHJhd2VyT3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGRyYXdlckNsb3NlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldERyYXdlck9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1cnJlbnQgPSBcImhvbWVcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIb21lQmFja2dyb3VuZCAvPlxyXG4gICAgICB7ZGVza3RvcCA/IChcclxuICAgICAgICA8SG9tZURlc2t0b3BOYXYgY3VycmVudD17Y3VycmVudH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8SG9tZU1vYmlsZU5hdlxyXG4gICAgICAgICAgb3Blbj17ZHJhd2VyT3Blbn1cclxuICAgICAgICAgIGRyYXdlck9wZW5IYW5kbGVyPXtkcmF3ZXJPcGVuSGFuZGxlcn1cclxuICAgICAgICAgIGRyYXdlckNsb3NlSGFuZGxlcj17ZHJhd2VyQ2xvc2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxIb21lSGVhZGVyIC8+XHJcbiAgICAgIDxIb21lU2VydmljZXMgdmFyaWFudHM9e3ZhcmlhbnRzfSAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=