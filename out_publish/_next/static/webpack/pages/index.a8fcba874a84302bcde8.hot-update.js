webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home-components/ServicesContainer.tsx":
/*!**********************************************************!*\
  !*** ./components/home-components/ServicesContainer.tsx ***!
  \**********************************************************/
/*! exports provided: ServicesContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesContainer", function() { return ServicesContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _ServiceContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceContainer */ "./components/home-components/ServiceContainer.tsx");



var _jsxFileName = "C:\\Users\\12086\\OneDrive\\Desktop\\next_portfolio\\portfolio\\components\\home-components\\ServicesContainer.tsx",
    _this = undefined;



var ServicesContainer = function ServicesContainer(_ref) {
  var rootStyle = _ref.rootStyle,
      variants = _ref.variants,
      mainTitle = _ref.mainTitle,
      mainTitleStyle = _ref.mainTitleStyle,
      listItemStyle = _ref.listItemStyle,
      serviceGridStyle = _ref.serviceGridStyle,
      services = _ref.services;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: rootStyle,
    container: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        className: mainTitleStyle,
        variant: "h4",
        component: "h3",
        children: mainTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        spacing: 3,
        className: serviceGridStyle,
        container: true,
        children: services.map(function (service) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
            item: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ServiceContainer__WEBPACK_IMPORTED_MODULE_2__["ServiceContainer"], {
              title: service.title,
              link: service.link,
              Icon: service.icon,
              mentorship: service.mentorship,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: service.descs.map(function (description, i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
                    variant: "body2",
                    className: listItemStyle,
                    children: description
                  }, service.title + " " + i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this)
          }, service.title, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};
_c = ServicesContainer;

var _c;

$RefreshReg$(_c, "ServicesContainer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvU2VydmljZXNDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIlNlcnZpY2VzQ29udGFpbmVyIiwicm9vdFN0eWxlIiwidmFyaWFudHMiLCJtYWluVGl0bGUiLCJtYWluVGl0bGVTdHlsZSIsImxpc3RJdGVtU3R5bGUiLCJzZXJ2aWNlR3JpZFN0eWxlIiwic2VydmljZXMiLCJtYXAiLCJzZXJ2aWNlIiwidGl0bGUiLCJsaW5rIiwiaWNvbiIsIm1lbnRvcnNoaXAiLCJkZXNjcyIsImRlc2NyaXB0aW9uIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFrQk8sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQVFQO0FBQUEsTUFQeEJDLFNBT3dCLFFBUHhCQSxTQU93QjtBQUFBLE1BTnhCQyxRQU13QixRQU54QkEsUUFNd0I7QUFBQSxNQUx4QkMsU0FLd0IsUUFMeEJBLFNBS3dCO0FBQUEsTUFKeEJDLGNBSXdCLFFBSnhCQSxjQUl3QjtBQUFBLE1BSHhCQyxhQUd3QixRQUh4QkEsYUFHd0I7QUFBQSxNQUZ4QkMsZ0JBRXdCLFFBRnhCQSxnQkFFd0I7QUFBQSxNQUR4QkMsUUFDd0IsUUFEeEJBLFFBQ3dCO0FBQ3hCLHNCQUNFLHFFQUFDLHNEQUFEO0FBQU0sYUFBUyxFQUFFTixTQUFqQjtBQUE0QixhQUFTLE1BQXJDO0FBQUEsNEJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBQSw2QkFDRSxxRUFBQyw0REFBRDtBQUFZLGlCQUFTLEVBQUVHLGNBQXZCO0FBQXVDLGVBQU8sRUFBQyxJQUEvQztBQUFvRCxpQkFBUyxFQUFDLElBQTlEO0FBQUEsa0JBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLHFFQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQUEsNkJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxlQUFPLEVBQUUsQ0FBZjtBQUFrQixpQkFBUyxFQUFFRyxnQkFBN0I7QUFBK0MsaUJBQVMsTUFBeEQ7QUFBQSxrQkFDR0MsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDhCQUNaLHFFQUFDLHNEQUFEO0FBQTBCLGdCQUFJLE1BQTlCO0FBQUEsbUNBQ0UscUVBQUMsa0VBQUQ7QUFDRSxtQkFBSyxFQUFFQSxPQUFPLENBQUNDLEtBRGpCO0FBRUUsa0JBQUksRUFBRUQsT0FBTyxDQUFDRSxJQUZoQjtBQUdFLGtCQUFJLEVBQUVGLE9BQU8sQ0FBQ0csSUFIaEI7QUFJRSx3QkFBVSxFQUFFSCxPQUFPLENBQUNJLFVBSnRCO0FBQUEscUNBTUU7QUFBQSwwQkFDR0osT0FBTyxDQUFDSyxLQUFSLENBQWNOLEdBQWQsQ0FBa0IsVUFBQ08sV0FBRCxFQUFjQyxDQUFkO0FBQUEsc0NBQ2pCLHFFQUFDLDREQUFEO0FBRUUsMkJBQU8sRUFBQyxPQUZWO0FBR0UsNkJBQVMsRUFBRVgsYUFIYjtBQUFBLDhCQUtHVTtBQUxILHFCQUNPTixPQUFPLENBQUNDLEtBQVIsR0FBZ0IsR0FBaEIsR0FBc0JNLENBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRGlCO0FBQUEsaUJBQWxCO0FBREg7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBV1AsT0FBTyxDQUFDQyxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0E1Q007S0FBTVYsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYThmY2JhODc0YTg0MzAyYmNkZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgU3ZnSWNvblR5cGVNYXAsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgT3ZlcnJpZGFibGVDb21wb25lbnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvT3ZlcnJpZGFibGVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgU2VydmljZUNvbnRhaW5lciB9IGZyb20gXCIuL1NlcnZpY2VDb250YWluZXJcIjtcclxuXHJcbmludGVyZmFjZSBJU2VydmljZXNDb250YWluZXIge1xyXG4gIHJvb3RTdHlsZTogYW55O1xyXG4gIHZhcmlhbnRzOiBhbnk7XHJcbiAgbWFpblRpdGxlOiBzdHJpbmc7XHJcbiAgbWFpblRpdGxlU3R5bGU6IGFueTtcclxuICBsaXN0SXRlbVN0eWxlOiBhbnk7XHJcbiAgc2VydmljZUdyaWRTdHlsZTogYW55O1xyXG4gIHNlcnZpY2VzOiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgaWNvbjogT3ZlcnJpZGFibGVDb21wb25lbnQ8U3ZnSWNvblR5cGVNYXA8e30sIFwic3ZnXCI+PjtcclxuICAgIGRlc2NzOiBzdHJpbmdbXTtcclxuICAgIG1lbnRvcnNoaXA/OiBib29sZWFuO1xyXG4gIH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzQ29udGFpbmVyID0gKHtcclxuICByb290U3R5bGUsXHJcbiAgdmFyaWFudHMsXHJcbiAgbWFpblRpdGxlLFxyXG4gIG1haW5UaXRsZVN0eWxlLFxyXG4gIGxpc3RJdGVtU3R5bGUsXHJcbiAgc2VydmljZUdyaWRTdHlsZSxcclxuICBzZXJ2aWNlcyxcclxufTogSVNlcnZpY2VzQ29udGFpbmVyKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNsYXNzTmFtZT17cm9vdFN0eWxlfSBjb250YWluZXI+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXttYWluVGl0bGVTdHlsZX0gdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwiaDNcIj5cclxuICAgICAgICAgIHttYWluVGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEdyaWQgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzZXJ2aWNlR3JpZFN0eWxlfSBjb250YWluZXI+XHJcbiAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlKSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGtleT17c2VydmljZS50aXRsZX0gaXRlbT5cclxuICAgICAgICAgICAgICA8U2VydmljZUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlcnZpY2UudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBsaW5rPXtzZXJ2aWNlLmxpbmt9XHJcbiAgICAgICAgICAgICAgICBJY29uPXtzZXJ2aWNlLmljb259XHJcbiAgICAgICAgICAgICAgICBtZW50b3JzaGlwPXtzZXJ2aWNlLm1lbnRvcnNoaXB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3NlcnZpY2UuZGVzY3MubWFwKChkZXNjcmlwdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NlcnZpY2UudGl0bGUgKyBcIiBcIiArIGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtsaXN0SXRlbVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgPC9TZXJ2aWNlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9