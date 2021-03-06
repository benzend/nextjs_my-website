webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home-components/HomeHeader.tsx":
/*!***************************************************!*\
  !*** ./components/home-components/HomeHeader.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeHeader; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");



var _jsxFileName = "C:\\Users\\12086\\OneDrive\\Desktop\\next_portfolio\\portfolio\\components\\home-components\\HomeHeader.tsx",
    _s = $RefreshSig$();




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  var _title, _subtitle, _ctaText;

  return {
    root: {
      height: "100vh",
      width: "100vw",
      paddingBottom: "5rem"
    },
    title: (_title = {
      color: theme.palette.secondary.contrastText,
      fontSize: "2.5rem",
      textAlign: "center",
      textShadow: "4px 0 5px #0007"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, theme.breakpoints.up("sm"), {
      fontSize: "4rem"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, theme.breakpoints.up("md"), {
      fontSize: "6rem"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, theme.breakpoints.up("xl"), {
      fontSize: "8rem"
    }), _title),
    title2: {
      color: theme.palette.secondary.main,
      textShadow: "4px 0 5px #0007"
    },
    titleContainer: {
      padding: "1rem 0 2rem 0"
    },
    subtitle: (_subtitle = {
      color: theme.palette.primary.contrastText,
      fontSize: "1rem",
      textAlign: "center",
      textShadow: "4px 0 5px #0007"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle, theme.breakpoints.up("sm"), {
      fontSize: "1.8rem"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle, theme.breakpoints.up("md"), {
      fontSize: "2rem"
    }), _subtitle),
    textContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: "100vh",
      padding: "6rem 0",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center"
    }, theme.breakpoints.up("md"), {
      justifyContent: "space-around"
    }),
    ctaText: (_ctaText = {
      color: theme.palette.primary.contrastText,
      textAlign: "center",
      textShadow: "4px 0 5px #0007"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ctaText, theme.breakpoints.up("sm"), {
      fontSize: "1.5rem"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ctaText, theme.breakpoints.up("md"), {}), _ctaText),
    ctaButton: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      background: "linear-gradient(180deg, #FF2727 0%, rgba(235, 81, 81, 0) 100%)",
      boxShadow: "none",
      borderRadius: 0
    }, theme.breakpoints.up("xl"), {
      fontSize: "1.2rem"
    })
  };
});
function HomeHeader() {
  _s();

  var classes = useStyles();
  var loadTime = 1;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        className: classes.textContainer,
        container: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
            className: classes.titleContainer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
              initial: {
                y: -50,
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1
              },
              transition: {
                delay: 0 + loadTime
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                className: classes.title,
                variant: "h1",
                children: ["Made", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: classes.title2,
                  children: "Unlinked"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
            initial: {
              x: -50,
              opacity: 0
            },
            animate: {
              x: 0,
              opacity: 1
            },
            transition: {
              delay: 0.4 + loadTime
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
              className: classes.subtitle,
              variant: "h2",
              children: "Web Development Made Easy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            transition: {
              delay: 1 + loadTime
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
              className: classes.ctaText,
              variant: "body1",
              children: "Need An App Or Website?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
            initial: {
              y: 50,
              opacity: 0
            },
            animate: {
              y: 0,
              opacity: 1
            },
            transition: {
              delay: 1.4 + loadTime
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              className: classes.ctaButton,
              fullWidth: true,
              variant: "contained",
              color: "secondary",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/contact",
                children: "Click Here"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

_s(HomeHeader, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = HomeHeader;

var _c;

$RefreshReg$(_c, "HomeHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZUhlYWRlci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImhlaWdodCIsIndpZHRoIiwicGFkZGluZ0JvdHRvbSIsInRpdGxlIiwiY29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwiY29udHJhc3RUZXh0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJ0ZXh0U2hhZG93IiwiYnJlYWtwb2ludHMiLCJ1cCIsInRpdGxlMiIsIm1haW4iLCJ0aXRsZUNvbnRhaW5lciIsInBhZGRpbmciLCJzdWJ0aXRsZSIsInByaW1hcnkiLCJ0ZXh0Q29udGFpbmVyIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImN0YVRleHQiLCJjdGFCdXR0b24iLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiSG9tZUhlYWRlciIsImNsYXNzZXMiLCJsb2FkVGltZSIsInkiLCJvcGFjaXR5IiwiZGVsYXkiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsWUFBTSxFQUFFLE9BREo7QUFFSkMsV0FBSyxFQUFFLE9BRkg7QUFHSkMsbUJBQWEsRUFBRTtBQUhYLEtBRGlDO0FBTXZDQyxTQUFLO0FBQ0hDLFdBQUssRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLFlBRDVCO0FBRUhDLGNBQVEsRUFBRSxRQUZQO0FBR0hDLGVBQVMsRUFBRSxRQUhSO0FBSUhDLGdCQUFVLEVBQUU7QUFKVCx5R0FLRlosS0FBSyxDQUFDYSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJ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NmJlMjJhMTQ1MTFiZWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENvbnRhaW5lcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgR3JpZCxcclxuICBCdXR0b24sXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogXCI1cmVtXCIsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIGZvbnRTaXplOiBcIjIuNXJlbVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgdGV4dFNoYWRvdzogXCI0cHggMCA1cHggIzAwMDdcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCI0cmVtXCIsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjZyZW1cIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJ4bFwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiOHJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlMjoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICB0ZXh0U2hhZG93OiBcIjRweCAwIDVweCAjMDAwN1wiLFxyXG4gIH0sXHJcbiAgdGl0bGVDb250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiMXJlbSAwIDJyZW0gMFwiLFxyXG4gIH0sXHJcbiAgc3VidGl0bGU6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgdGV4dFNoYWRvdzogXCI0cHggMCA1cHggIzAwMDdcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCIxLjhyZW1cIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHRDb250YWluZXI6IHtcclxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgcGFkZGluZzogXCI2cmVtIDBcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGN0YVRleHQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgdGV4dFNoYWRvdzogXCI0cHggMCA1cHggIzAwMDdcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHt9LFxyXG4gIH0sXHJcbiAgY3RhQnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRjI3MjcgMCUsIHJnYmEoMjM1LCA4MSwgODEsIDApIDEwMCUpXCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwieGxcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lSGVhZGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBsb2FkVGltZSA9IDE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0Q29udGFpbmVyfSBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogLTUwLCBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAgKyBsb2FkVGltZSB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgICAgIE1hZGU8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGUyfT5VbmxpbmtlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgeDogLTUwLCBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiAwLCBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC40ICsgbG9hZFRpbWUgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0gdmFyaWFudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICBXZWIgRGV2ZWxvcG1lbnQgTWFkZSBFYXN5XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDEgKyBsb2FkVGltZSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmN0YVRleHR9IHZhcmlhbnQ9XCJib2R5MVwiPlxyXG4gICAgICAgICAgICAgICAgTmVlZCBBbiBBcHAgT3IgV2Vic2l0ZT9cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDEuNCArIGxvYWRUaW1lIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3RhQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5DbGljayBIZXJlPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==