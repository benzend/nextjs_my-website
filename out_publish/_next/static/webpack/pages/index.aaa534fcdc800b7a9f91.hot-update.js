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
      fontSize: "3rem"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZUhlYWRlci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwidGl0bGUiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRleHRTaGFkb3ciLCJicmVha3BvaW50cyIsInVwIiwidGl0bGUyIiwibWFpbiIsInRpdGxlQ29udGFpbmVyIiwicGFkZGluZyIsInN1YnRpdGxlIiwicHJpbWFyeSIsInRleHRDb250YWluZXIiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY3RhVGV4dCIsImN0YUJ1dHRvbiIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJIb21lSGVhZGVyIiwiY2xhc3NlcyIsImxvYWRUaW1lIiwieSIsIm9wYWNpdHkiLCJkZWxheSIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsT0FESjtBQUVKQyxXQUFLLEVBQUUsT0FGSDtBQUdKQyxrQkFBWSxFQUFFO0FBSFYsS0FEaUM7QUFNdkNDLFNBQUs7QUFDSEMsV0FBSyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QkMsWUFENUI7QUFFSEMsY0FBUSxFQUFFLFFBRlA7QUFHSEMsZUFBUyxFQUFFLFFBSFI7QUFJSEMsZ0JBQVUsRUFBRTtBQUpULHlHQUtGWixLQUFLLENBQUNhLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElB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ZmNkYzgwMGI3YTlmOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ29udGFpbmVyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgbWFrZVN0eWxlcyxcclxuICBHcmlkLFxyXG4gIEJ1dHRvbixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTJyZW1cIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgZm9udFNpemU6IFwiMi41cmVtXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjRweCAwIDVweCAjMDAwN1wiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjRyZW1cIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiNnJlbVwiLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInhsXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCI4cmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGUyOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIHRleHRTaGFkb3c6IFwiNHB4IDAgNXB4ICMwMDA3XCIsXHJcbiAgfSxcclxuICB0aXRsZUNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIxcmVtIDAgMnJlbSAwXCIsXHJcbiAgfSxcclxuICBzdWJ0aXRsZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXHJcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjRweCAwIDVweCAjMDAwN1wiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjNyZW1cIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHRDb250YWluZXI6IHtcclxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgcGFkZGluZzogXCI2cmVtIDBcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGN0YVRleHQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgdGV4dFNoYWRvdzogXCI0cHggMCA1cHggIzAwMDdcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHt9LFxyXG4gIH0sXHJcbiAgY3RhQnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRjI3MjcgMCUsIHJnYmEoMjM1LCA4MSwgODEsIDApIDEwMCUpXCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwieGxcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lSGVhZGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBsb2FkVGltZSA9IDE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0Q29udGFpbmVyfSBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogLTUwLCBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAgKyBsb2FkVGltZSB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgICAgIE1hZGU8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGUyfT5VbmxpbmtlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgeDogLTUwLCBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiAwLCBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC40ICsgbG9hZFRpbWUgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0gdmFyaWFudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICBXZWIgRGV2ZWxvcG1lbnQgTWFkZSBFYXN5XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDEgKyBsb2FkVGltZSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmN0YVRleHR9IHZhcmlhbnQ9XCJib2R5MVwiPlxyXG4gICAgICAgICAgICAgICAgTmVlZCBBbiBBcHAgT3IgV2Vic2l0ZT9cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDEuNCArIGxvYWRUaW1lIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3RhQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5DbGljayBIZXJlPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==