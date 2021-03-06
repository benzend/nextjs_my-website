webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _components_home_components_HomeBackground__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home-components/HomeBackground */ "./components/home-components/HomeBackground.tsx");
/* harmony import */ var _components_home_components_HomeDesktopNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home-components/HomeDesktopNav */ "./components/home-components/HomeDesktopNav.tsx");
/* harmony import */ var _components_portfolio_components_PortfolioContactSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/portfolio-components/PortfolioContactSection */ "./components/portfolio-components/PortfolioContactSection.tsx");



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

  var animate = false;
  var variants = {};
  var current = "home";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeBackground__WEBPACK_IMPORTED_MODULE_7__["HomeBackground"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), desktop ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeDesktopNav__WEBPACK_IMPORTED_MODULE_8__["HomeDesktopNav"], {
      current: current
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeMobileNav__WEBPACK_IMPORTED_MODULE_4__["HomeMobileNav"], {
      open: drawerOpen,
      drawerOpenHandler: drawerOpenHandler,
      drawerCloseHandler: drawerCloseHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_components_HomeServices__WEBPACK_IMPORTED_MODULE_5__["HomeServices"], {
      variants: variants
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_portfolio_components_PortfolioContactSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
      animate: animate,
      variants: variants
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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

/***/ }),

/***/ "./utils/variants.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImRyYXdlck9wZW4iLCJzZXREcmF3ZXJPcGVuIiwiZGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJkcmF3ZXJPcGVuSGFuZGxlciIsImRyYXdlckNsb3NlSGFuZGxlciIsImFuaW1hdGUiLCJ2YXJpYW50cyIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxNQUN0QkMsVUFEc0I7QUFBQSxNQUNWQyxhQURVOztBQUc3QixNQUFNQyxPQUFPLEdBQUdDLHVFQUFhLENBQUMsb0JBQUQsQ0FBN0I7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCSCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBR0EsTUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CSixpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTUssT0FBTyxHQUFHLEtBQWhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyx5RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR04sT0FBTyxnQkFDTixxRUFBQyx5RkFBRDtBQUFnQixhQUFPLEVBQUVNO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFHTixxRUFBQyx1RkFBRDtBQUNFLFVBQUksRUFBRVIsVUFEUjtBQUVFLHVCQUFpQixFQUFFSSxpQkFGckI7QUFHRSx3QkFBa0IsRUFBRUM7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBV0UscUVBQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBWUUscUVBQUMscUZBQUQ7QUFBYyxjQUFRLEVBQUVFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWFFLHFFQUFDLGdHQUFEO0FBQXlCLGFBQU8sRUFBRUQsT0FBbEM7QUFBMkMsY0FBUSxFQUFFQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFjRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQSxrQkFERjtBQWtCRDs7R0FuQ3VCVCxJO1VBR05LLCtEOzs7S0FITUwsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZGI0YzUzNzZmYzQ3MTY1YzI0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBIb21lSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50cy9Ib21lSGVhZGVyXCI7XHJcbmltcG9ydCB7IEhvbWVNb2JpbGVOYXYgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZU1vYmlsZU5hdlwiO1xyXG5pbXBvcnQgeyBIb21lU2VydmljZXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IHZhcmlhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL3ZhcmlhbnRzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCB7IEhvbWVCYWNrZ3JvdW5kIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1jb21wb25lbnRzL0hvbWVCYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCB7IEhvbWVEZXNrdG9wTmF2IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS1jb21wb25lbnRzL0hvbWVEZXNrdG9wTmF2XCI7XHJcbmltcG9ydCBQb3J0Zm9saW9Db250YWN0U2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3J0Zm9saW8tY29tcG9uZW50cy9Qb3J0Zm9saW9Db250YWN0U2VjdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGRlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDoxMDAwcHgpXCIpO1xyXG5cclxuICBjb25zdCBkcmF3ZXJPcGVuSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldERyYXdlck9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBkcmF3ZXJDbG9zZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXREcmF3ZXJPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlID0gZmFsc2U7XHJcbiAgY29uc3QgdmFyaWFudHMgPSB7fTtcclxuXHJcbiAgY29uc3QgY3VycmVudCA9IFwiaG9tZVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhvbWVCYWNrZ3JvdW5kIC8+XHJcbiAgICAgIHtkZXNrdG9wID8gKFxyXG4gICAgICAgIDxIb21lRGVza3RvcE5hdiBjdXJyZW50PXtjdXJyZW50fSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxIb21lTW9iaWxlTmF2XHJcbiAgICAgICAgICBvcGVuPXtkcmF3ZXJPcGVufVxyXG4gICAgICAgICAgZHJhd2VyT3BlbkhhbmRsZXI9e2RyYXdlck9wZW5IYW5kbGVyfVxyXG4gICAgICAgICAgZHJhd2VyQ2xvc2VIYW5kbGVyPXtkcmF3ZXJDbG9zZUhhbmRsZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPEhvbWVIZWFkZXIgLz5cclxuICAgICAgPEhvbWVTZXJ2aWNlcyB2YXJpYW50cz17dmFyaWFudHN9IC8+XHJcbiAgICAgIDxQb3J0Zm9saW9Db250YWN0U2VjdGlvbiBhbmltYXRlPXthbmltYXRlfSB2YXJpYW50cz17dmFyaWFudHN9IC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==