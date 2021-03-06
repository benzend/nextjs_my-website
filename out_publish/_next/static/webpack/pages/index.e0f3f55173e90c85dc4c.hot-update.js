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
      marginBottom: "12rem"
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
      fontSize: "3rem"
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
      textShadow: "4px 0 5px #0007",
      fontWeight: 200
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ctaText, theme.breakpoints.up("sm"), {
      fontSize: "1.5rem"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ctaText, theme.breakpoints.up("md"), {
      fontSize: "2.6rem"
    }), _ctaText),
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
                  lineNumber: 101,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
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
              lineNumber: 110,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
              lineNumber: 121,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
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
                lineNumber: 137,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZUhlYWRlci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwidGl0bGUiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRleHRTaGFkb3ciLCJicmVha3BvaW50cyIsInVwIiwidGl0bGUyIiwibWFpbiIsInRpdGxlQ29udGFpbmVyIiwicGFkZGluZyIsInN1YnRpdGxlIiwicHJpbWFyeSIsInRleHRDb250YWluZXIiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY3RhVGV4dCIsImZvbnRXZWlnaHQiLCJjdGFCdXR0b24iLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiSG9tZUhlYWRlciIsImNsYXNzZXMiLCJsb2FkVGltZSIsInkiLCJvcGFjaXR5IiwiZGVsYXkiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsWUFBTSxFQUFFLE9BREo7QUFFSkMsV0FBSyxFQUFFLE9BRkg7QUFHSkMsa0JBQVksRUFBRTtBQUhWLEtBRGlDO0FBTXZDQyxTQUFLO0FBQ0hDLFdBQUssRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLFlBRDVCO0FBRUhDLGNBQVEsRUFBRSxRQUZQO0FBR0hDLGVBQVMsRUFBRSxRQUhSO0FBSUhDLGdCQUFVLEVBQUU7QUFKVCx5R0FLRlosS0FBSyxDQUFDYSxXQUFOLENBQWtCQyxF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VUFDTmpDLFM7OztLQURNaUMsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMGYzZjU1MTczZTkwYzg1ZGM0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBtYWtlU3R5bGVzLFxyXG4gIEdyaWQsXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxMnJlbVwiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBmb250U2l6ZTogXCIyLjVyZW1cIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHRleHRTaGFkb3c6IFwiNHB4IDAgNXB4ICMwMDA3XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiNHJlbVwiLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCI2cmVtXCIsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwieGxcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjhyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZTI6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgdGV4dFNoYWRvdzogXCI0cHggMCA1cHggIzAwMDdcIixcclxuICB9LFxyXG4gIHRpdGxlQ29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiBcIjFyZW0gMCAycmVtIDBcIixcclxuICB9LFxyXG4gIHN1YnRpdGxlOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHRleHRTaGFkb3c6IFwiNHB4IDAgNXB4ICMwMDA3XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiMS44cmVtXCIsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjNyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0Q29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgIHBhZGRpbmc6IFwiNnJlbSAwXCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjdGFUZXh0OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHRleHRTaGFkb3c6IFwiNHB4IDAgNXB4ICMwMDA3XCIsXHJcbiAgICBmb250V2VpZ2h0OiAyMDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjIuNnJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGN0YUJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkYyNzI3IDAlLCByZ2JhKDIzNSwgODEsIDgxLCAwKSAxMDAlKVwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInhsXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZUhlYWRlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgbG9hZFRpbWUgPSAxO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRhaW5lcn0gY29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC01MCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwICsgbG9hZFRpbWUgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAgICBNYWRlPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlMn0+VW5saW5rZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6IC01MCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgeDogMCwgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNCArIGxvYWRUaW1lIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9IHZhcmlhbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgV2ViIERldmVsb3BtZW50IE1hZGUgRWFzeVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAxICsgbG9hZFRpbWUgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5jdGFUZXh0fSB2YXJpYW50PVwiYm9keTFcIj5cclxuICAgICAgICAgICAgICAgIE5lZWQgQW4gQXBwIE9yIFdlYnNpdGU/XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAxLjQgKyBsb2FkVGltZSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN0YUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q2xpY2sgSGVyZTwvTGluaz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=