webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home-components/HomeServices.tsx":
/*!*****************************************************!*\
  !*** ./components/home-components/HomeServices.tsx ***!
  \*****************************************************/
/*! exports provided: HomeServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeServices", function() { return HomeServices; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _ServicesContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServicesContainer */ "./components/home-components/ServicesContainer.tsx");



var _jsxFileName = "C:\\Users\\12086\\OneDrive\\Desktop\\next_portfolio\\portfolio\\components\\home-components\\HomeServices.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {},
    mainContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: "4rem 0",
      justifyContent: "center",
      alignItems: "center"
    }, theme.breakpoints.up("lg"), {
      padding: "8rem 0",
      width: "100%"
    }),
    mainContainerItem: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up("lg"), {
      width: "100%"
    }),
    secondaryContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: "3.2rem 0",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }, theme.breakpoints.up("lg"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flexDirection: "row",
      padding: "5rem 0",
      width: "100%",
      margin: "5rem 0"
    }, "&.flipped", {
      flexDirection: "row-reverse"
    })),
    secondaryContainerItem: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up("lg"), {
      width: "50%"
    }),
    mainTitle: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: ".3rem 0",
      marginTop: "1rem",
      textShadow: "0 3px 3px #0007",
      textAlign: "center",
      boxShadow: "10px 10px 5px #0009",
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }, theme.breakpoints.up("lg"), {
      fontSize: "5rem"
    }),
    secondaryTitle: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      textAlign: "center",
      borderRadius: ".1rem",
      margin: "2rem 0 3rem",
      textShadow: "0 10px 3px #0007",
      color: theme.palette.secondary.contrastText
    }, theme.breakpoints.up("lg"), {
      fontSize: "4rem"
    }),
    serviceGrid: {
      justifyContent: "center",
      alignItems: "center"
    },
    listItem: {
      "&::before": {
        content: '"- "'
      }
    }
  };
});
var HomeServices = function HomeServices(_ref) {
  _s();

  var variants = _ref.variants;

  var _useStyles = useStyles(),
      mainTitle = _useStyles.mainTitle,
      secondaryTitle = _useStyles.secondaryTitle,
      mainContainer = _useStyles.mainContainer,
      mainContainerItem = _useStyles.mainContainerItem,
      secondaryContainer = _useStyles.secondaryContainer,
      secondaryContainerItem = _useStyles.secondaryContainerItem,
      root = _useStyles.root,
      serviceGrid = _useStyles.serviceGrid,
      listItem = _useStyles.listItem;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    id: "services",
    className: root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      overflow: "hidden",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        className: mainTitle,
        variant: "h2",
        children: "Services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      maxWidth: "xl",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        className: mainContainer,
        container: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          className: mainContainerItem,
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ServicesContainer__WEBPACK_IMPORTED_MODULE_4__["ServicesContainer"], {
            mainTitle: "Websites",
            mainTitleStyle: secondaryTitle,
            rootStyle: secondaryContainer,
            rootItemStyle: secondaryContainerItem,
            variants: variants,
            listItemStyle: listItem,
            serviceGridStyle: serviceGrid,
            services: [{
              title: "Next.js",
              icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["FlashOn"],
              link: "next-pricing",
              descs: ["Extremely Fast Performance", "Fully Customizable", "Low Maintenance", "Easily Scaleable"]
            }, {
              title: "Wordpress",
              icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Web"],
              link: "wordpress-pricing",
              descs: ["Quick Building / Prototyping", "Easy Customizability", "Thousands of Plugins"]
            }]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          className: mainContainerItem,
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ServicesContainer__WEBPACK_IMPORTED_MODULE_4__["ServicesContainer"], {
            mainTitle: "Apps",
            mainTitleStyle: secondaryTitle,
            rootStyle: secondaryContainer + " flipped",
            rootItemStyle: secondaryContainerItem,
            variants: variants,
            listItemStyle: listItem,
            serviceGridStyle: serviceGrid,
            services: [{
              title: "React.js",
              icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Code"],
              link: "react-pricing",
              descs: ["Lightning Fast Performance", "Fully Customizable", "Most Popular Framework (Library)", "Easily Scaleable"]
            }, {
              title: "React Native (Mobile)",
              icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["StayCurrentPortrait"],
              link: "react-native-pricing",
              descs: ["Specifically Mobile", "Easy Prototyping", "React Based"]
            }]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          className: mainContainerItem,
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ServicesContainer__WEBPACK_IMPORTED_MODULE_4__["ServicesContainer"], {
            mainTitle: "Mentorship",
            mainTitleStyle: secondaryTitle,
            rootStyle: secondaryContainer,
            rootItemStyle: secondaryContainerItem,
            variants: variants,
            listItemStyle: listItem,
            serviceGridStyle: serviceGrid,
            services: [{
              title: "HTML/CSS",
              icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["School"],
              link: "mentorship-pricing",
              descs: ["The Basics Of Web Development", "Getting You Comfortable", "Sticks And Stones"],
              mentorship: true
            }, {
              title: "JavaScript",
              icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["School"],
              link: "mentorship-pricing",
              descs: ["Figuring Out What's Under The Hood", "JavaScript Fundamentals", "Functions and Classes", "ES5 and ES6 Syntax", "Advanced JavaScript"],
              mentorship: true
            }, {
              title: "React",
              icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["School"],
              link: "mentorship-pricing",
              descs: ["How JavaScript Entertwines", "Getting You On Your Feet", "Functional and Class-based React"],
              mentorship: true
            }]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, _this);
};

_s(HomeServices, "ol/ao7z4EyhS3j0y12ewvrFS+w0=", false, function () {
  return [useStyles];
});

_c = HomeServices;

var _c;

$RefreshReg$(_c, "HomeServices");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFpbkNvbnRhaW5lciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsInVwIiwid2lkdGgiLCJtYWluQ29udGFpbmVySXRlbSIsInNlY29uZGFyeUNvbnRhaW5lciIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJzZWNvbmRhcnlDb250YWluZXJJdGVtIiwibWFpblRpdGxlIiwibWFyZ2luVG9wIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImNvbG9yIiwiY29udHJhc3RUZXh0IiwiZm9udFNpemUiLCJzZWNvbmRhcnlUaXRsZSIsImJvcmRlclJhZGl1cyIsInNlcnZpY2VHcmlkIiwibGlzdEl0ZW0iLCJjb250ZW50IiwiSG9tZVNlcnZpY2VzIiwidmFyaWFudHMiLCJ0aXRsZSIsImljb24iLCJGbGFzaE9uIiwibGluayIsImRlc2NzIiwiV2ViIiwiQ29kZSIsIlN0YXlDdXJyZW50UG9ydHJhaXQiLCJTY2hvb2wiLCJtZW50b3JzaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQVFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLFFBREU7QUFFWEMsb0JBQWMsRUFBRSxRQUZMO0FBR1hDLGdCQUFVLEVBQUU7QUFIRCxPQUlWTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENB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O0FBR0VMLGtCQUFJLEVBQUUsb0JBSFI7QUFJRUMsbUJBQUssRUFBRSxDQUNMLCtCQURLLEVBRUwseUJBRkssRUFHTCxtQkFISyxDQUpUO0FBU0VLLHdCQUFVLEVBQUU7QUFUZCxhQURRLEVBWVI7QUFDRVQsbUJBQUssRUFBRSxZQURUO0FBRUVDLGtCQUFJLEVBQUVPLHlEQUZSO0FBR0VMLGtCQUFJLEVBQUUsb0JBSFI7QUFJRUMsbUJBQUssRUFBRSxDQUNMLG9DQURLLEVBRUwseUJBRkssRUFHTCx1QkFISyxFQUlMLG9CQUpLLEVBS0wscUJBTEssQ0FKVDtBQVdFSyx3QkFBVSxFQUFFO0FBWGQsYUFaUSxFQXlCUjtBQUNFVCxtQkFBSyxFQUFFLE9BRFQ7QUFFRUMsa0JBQUksRUFBRU8seURBRlI7QUFHRUwsa0JBQUksRUFBRSxvQkFIUjtBQUlFQyxtQkFBSyxFQUFFLENBQ0wsNEJBREssRUFFTCwwQkFGSyxFQUdMLGtDQUhLLENBSlQ7QUFTRUssd0JBQVUsRUFBRTtBQVRkLGFBekJRO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlJRCxDQTdJTTs7R0FBTVgsWTtVQVdQakMsUzs7O0tBWE9pQyxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY2NGFkNDlhMTQ5MzAyOGNjNzQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBDb2RlLFxyXG4gIEZsYXNoT24sXHJcbiAgU2Nob29sLFxyXG4gIFN0YXlDdXJyZW50UG9ydHJhaXQsXHJcbiAgV2ViLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uUHJvcHMsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VzQ29udGFpbmVyIH0gZnJvbSBcIi4vU2VydmljZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG4gIG1haW5Db250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiNHJlbSAwXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgcGFkZGluZzogXCI4cmVtIDBcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1haW5Db250YWluZXJJdGVtOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIzLjJyZW0gMFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICBwYWRkaW5nOiBcIjVyZW0gMFwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIG1hcmdpbjogXCI1cmVtIDBcIixcclxuICAgICAgW1wiJi5mbGlwcGVkXCJdOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3ctcmV2ZXJzZVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNvbnRhaW5lckl0ZW06IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBtYWluVGl0bGU6IHtcclxuICAgIHBhZGRpbmc6IFwiLjNyZW0gMFwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcclxuICAgIHRleHRTaGFkb3c6IFwiMCAzcHggM3B4ICMwMDA3XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMTBweCAxMHB4IDVweCAjMDAwOVwiLFxyXG5cclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjVyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlUaXRsZToge1xyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIi4xcmVtXCIsXHJcbiAgICBtYXJnaW46IFwiMnJlbSAwIDNyZW1cIixcclxuICAgIHRleHRTaGFkb3c6IFwiMCAxMHB4IDNweCAjMDAwN1wiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCI0cmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmljZUdyaWQ6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBcIiY6OmJlZm9yZVwiOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIi0gXCInLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgSUhvbWVTZXJ2aWNlc1Byb3BzIHtcclxuICB2YXJpYW50czogQW5pbWF0aW9uUHJvcHNbXCJ2YXJpYW50c1wiXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVTZXJ2aWNlcyA9ICh7IHZhcmlhbnRzIH06IElIb21lU2VydmljZXNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG1haW5UaXRsZSxcclxuICAgIHNlY29uZGFyeVRpdGxlLFxyXG4gICAgbWFpbkNvbnRhaW5lcixcclxuICAgIG1haW5Db250YWluZXJJdGVtLFxyXG4gICAgc2Vjb25kYXJ5Q29udGFpbmVyLFxyXG4gICAgc2Vjb25kYXJ5Q29udGFpbmVySXRlbSxcclxuICAgIHJvb3QsXHJcbiAgICBzZXJ2aWNlR3JpZCxcclxuICAgIGxpc3RJdGVtLFxyXG4gIH0gPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPXtyb290fT5cclxuICAgICAgPEJveCBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17bWFpblRpdGxlfSB2YXJpYW50PVwiaDJcIj5cclxuICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XHJcbiAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXttYWluQ29udGFpbmVyfSBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e21haW5Db250YWluZXJJdGVtfSBpdGVtPlxyXG4gICAgICAgICAgICA8U2VydmljZXNDb250YWluZXJcclxuICAgICAgICAgICAgICBtYWluVGl0bGU9XCJXZWJzaXRlc1wiXHJcbiAgICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyfVxyXG4gICAgICAgICAgICAgIHJvb3RJdGVtU3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lckl0ZW19XHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICAgIHNlcnZpY2VHcmlkU3R5bGU9e3NlcnZpY2VHcmlkfVxyXG4gICAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5leHQuanNcIixcclxuICAgICAgICAgICAgICAgICAgaWNvbjogRmxhc2hPbixcclxuICAgICAgICAgICAgICAgICAgbGluazogXCJuZXh0LXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkV4dHJlbWVseSBGYXN0IFBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJGdWxseSBDdXN0b21pemFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkxvdyBNYWludGVuYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV29yZHByZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgIGljb246IFdlYixcclxuICAgICAgICAgICAgICAgICAgbGluazogXCJ3b3JkcHJlc3MtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiUXVpY2sgQnVpbGRpbmcgLyBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRWFzeSBDdXN0b21pemFiaWxpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlRob3VzYW5kcyBvZiBQbHVnaW5zXCIsXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e21haW5Db250YWluZXJJdGVtfSBpdGVtPlxyXG4gICAgICAgICAgICA8U2VydmljZXNDb250YWluZXJcclxuICAgICAgICAgICAgICBtYWluVGl0bGU9XCJBcHBzXCJcclxuICAgICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgICAgcm9vdFN0eWxlPXtzZWNvbmRhcnlDb250YWluZXIgKyBcIiBmbGlwcGVkXCJ9XHJcbiAgICAgICAgICAgICAgcm9vdEl0ZW1TdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVySXRlbX1cclxuICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1TdHlsZT17bGlzdEl0ZW19XHJcbiAgICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3QuanNcIixcclxuICAgICAgICAgICAgICAgICAgaWNvbjogQ29kZSxcclxuICAgICAgICAgICAgICAgICAgbGluazogXCJyZWFjdC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaWdodG5pbmcgRmFzdCBQZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnVsbHkgQ3VzdG9taXphYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNb3N0IFBvcHVsYXIgRnJhbWV3b3JrIChMaWJyYXJ5KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3QgTmF0aXZlIChNb2JpbGUpXCIsXHJcbiAgICAgICAgICAgICAgICAgIGljb246IFN0YXlDdXJyZW50UG9ydHJhaXQsXHJcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwicmVhY3QtbmF0aXZlLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkVhc3kgUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlJlYWN0IEJhc2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e21haW5Db250YWluZXJJdGVtfSBpdGVtPlxyXG4gICAgICAgICAgICA8U2VydmljZXNDb250YWluZXJcclxuICAgICAgICAgICAgICBtYWluVGl0bGU9XCJNZW50b3JzaGlwXCJcclxuICAgICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgICAgcm9vdFN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgcm9vdEl0ZW1TdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVySXRlbX1cclxuICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1TdHlsZT17bGlzdEl0ZW19XHJcbiAgICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSFRNTC9DU1NcIixcclxuICAgICAgICAgICAgICAgICAgaWNvbjogU2Nob29sLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIm1lbnRvcnNoaXAtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiVGhlIEJhc2ljcyBPZiBXZWIgRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkdldHRpbmcgWW91IENvbWZvcnRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGlja3MgQW5kIFN0b25lc1wiLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJGaWd1cmluZyBPdXQgV2hhdCdzIFVuZGVyIFRoZSBIb29kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJKYXZhU2NyaXB0IEZ1bmRhbWVudGFsc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnVuY3Rpb25zIGFuZCBDbGFzc2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFUzUgYW5kIEVTNiBTeW50YXhcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkFkdmFuY2VkIEphdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgbWVudG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgICAgbGluazogXCJtZW50b3JzaGlwLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkhvdyBKYXZhU2NyaXB0IEVudGVydHdpbmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHZXR0aW5nIFlvdSBPbiBZb3VyIEZlZXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkZ1bmN0aW9uYWwgYW5kIENsYXNzLWJhc2VkIFJlYWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIG1lbnRvcnNoaXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=