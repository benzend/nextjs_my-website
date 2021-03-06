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
      alignItems: "center"
    }, theme.breakpoints.up("lg"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: "5rem 0",
      width: "100%",
      margin: "5rem 0"
    }, "&.flipped", {
      flexDirection: "row-reverse"
    })),
    secondaryContainerItem: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up("sm"), {
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
        lineNumber: 106,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
            lineNumber: 113,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
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
            lineNumber: 147,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
              descs: ["Lightning Fast Performance", "Fully Customizable", "Most Popular Framework (Library)", "Easily Scaleable"],
              mentorship: true
            }, {
              title: "JavaScript",
              icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["School"],
              link: "mentorship-pricing",
              descs: ["Specifically Mobile", "Easy Prototyping", "React Based"],
              mentorship: true
            }, {
              title: "React",
              icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["School"],
              link: "mentorship-pricing",
              descs: ["Specifically Mobile", "Easy Prototyping", "React Based"],
              mentorship: true
            }]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFpbkNvbnRhaW5lciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsInVwIiwid2lkdGgiLCJtYWluQ29udGFpbmVySXRlbSIsInNlY29uZGFyeUNvbnRhaW5lciIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJzZWNvbmRhcnlDb250YWluZXJJdGVtIiwibWFpblRpdGxlIiwibWFyZ2luVG9wIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImNvbG9yIiwiY29udHJhc3RUZXh0IiwiZm9udFNpemUiLCJzZWNvbmRhcnlUaXRsZSIsImJvcmRlclJhZGl1cyIsInNlcnZpY2VHcmlkIiwibGlzdEl0ZW0iLCJjb250ZW50IiwiSG9tZVNlcnZpY2VzIiwidmFyaWFudHMiLCJ0aXRsZSIsImljb24iLCJGbGFzaE9uIiwibGluayIsImRlc2NzIiwiV2ViIiwiQ29kZSIsIlN0YXlDdXJyZW50UG9ydHJhaXQiLCJTY2hvb2wiLCJtZW50b3JzaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQVFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLFFBREU7QUFFWEMsb0JBQWMsRUFBRSxRQUZMO0FBR1hDLGdCQUFVLEVBQUU7QUFIRCxPQUlWTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENB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TCw0QkFESyxFQUVMLG9CQUZLLEVBR0wsa0NBSEssRUFJTCxrQkFKSyxDQUpUO0FBVUVLLHdCQUFVLEVBQUU7QUFWZCxhQURRLEVBYVI7QUFDRVQsbUJBQUssRUFBRSxZQURUO0FBRUVDLGtCQUFJLEVBQUVPLHlEQUZSO0FBR0VMLGtCQUFJLEVBQUUsb0JBSFI7QUFJRUMsbUJBQUssRUFBRSxDQUNMLHFCQURLLEVBRUwsa0JBRkssRUFHTCxhQUhLLENBSlQ7QUFTRUssd0JBQVUsRUFBRTtBQVRkLGFBYlEsRUF3QlI7QUFDRVQsbUJBQUssRUFBRSxPQURUO0FBRUVDLGtCQUFJLEVBQUVPLHlEQUZSO0FBR0VMLGtCQUFJLEVBQUUsb0JBSFI7QUFJRUMsbUJBQUssRUFBRSxDQUNMLHFCQURLLEVBRUwsa0JBRkssRUFHTCxhQUhLLENBSlQ7QUFTRUssd0JBQVUsRUFBRTtBQVRkLGFBeEJRO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdJRCxDQTVJTTs7R0FBTVgsWTtVQVdQakMsUzs7O0tBWE9pQyxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRjYWM0ZDMxZGFjMDRkNmVkZDhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBDb2RlLFxyXG4gIEZsYXNoT24sXHJcbiAgU2Nob29sLFxyXG4gIFN0YXlDdXJyZW50UG9ydHJhaXQsXHJcbiAgV2ViLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uUHJvcHMsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VzQ29udGFpbmVyIH0gZnJvbSBcIi4vU2VydmljZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG4gIG1haW5Db250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiNHJlbSAwXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgcGFkZGluZzogXCI4cmVtIDBcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1haW5Db250YWluZXJJdGVtOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIzLjJyZW0gMFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiNXJlbSAwXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgbWFyZ2luOiBcIjVyZW0gMFwiLFxyXG4gICAgICBbXCImLmZsaXBwZWRcIl06IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1yZXZlcnNlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5Q29udGFpbmVySXRlbToge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1haW5UaXRsZToge1xyXG4gICAgcGFkZGluZzogXCIuM3JlbSAwXCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4gICAgdGV4dFNoYWRvdzogXCIwIDNweCAzcHggIzAwMDdcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGJveFNoYWRvdzogXCIxMHB4IDEwcHggNXB4ICMwMDA5XCIsXHJcblxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiNXJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeVRpdGxlOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiLjFyZW1cIixcclxuICAgIG1hcmdpbjogXCIycmVtIDAgM3JlbVwiLFxyXG4gICAgdGV4dFNoYWRvdzogXCIwIDEwcHggM3B4ICMwMDA3XCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjRyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2aWNlR3JpZDoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIFwiJjo6YmVmb3JlXCI6IHtcclxuICAgICAgY29udGVudDogJ1wiLSBcIicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBJSG9tZVNlcnZpY2VzUHJvcHMge1xyXG4gIHZhcmlhbnRzOiBBbmltYXRpb25Qcm9wc1tcInZhcmlhbnRzXCJdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVNlcnZpY2VzID0gKHsgdmFyaWFudHMgfTogSUhvbWVTZXJ2aWNlc1Byb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbWFpblRpdGxlLFxyXG4gICAgc2Vjb25kYXJ5VGl0bGUsXHJcbiAgICBtYWluQ29udGFpbmVyLFxyXG4gICAgbWFpbkNvbnRhaW5lckl0ZW0sXHJcbiAgICBzZWNvbmRhcnlDb250YWluZXIsXHJcbiAgICBzZWNvbmRhcnlDb250YWluZXJJdGVtLFxyXG4gICAgcm9vdCxcclxuICAgIHNlcnZpY2VHcmlkLFxyXG4gICAgbGlzdEl0ZW0sXHJcbiAgfSA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9e3Jvb3R9PlxyXG4gICAgICA8Qm94IG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXttYWluVGl0bGV9IHZhcmlhbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgU2VydmljZXNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cclxuICAgICAgICA8R3JpZCBjbGFzc05hbWU9e21haW5Db250YWluZXJ9IGNvbnRhaW5lcj5cclxuICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lckl0ZW19IGl0ZW0+XHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgIG1haW5UaXRsZT1cIldlYnNpdGVzXCJcclxuICAgICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgICAgcm9vdFN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgcm9vdEl0ZW1TdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVySXRlbX1cclxuICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1TdHlsZT17bGlzdEl0ZW19XHJcbiAgICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTmV4dC5qc1wiLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiBGbGFzaE9uLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIm5leHQtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiRXh0cmVtZWx5IEZhc3QgUGVyZm9ybWFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkZ1bGx5IEN1c3RvbWl6YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTG93IE1haW50ZW5hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJXb3JkcHJlc3NcIixcclxuICAgICAgICAgICAgICAgICAgaWNvbjogV2ViLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIndvcmRwcmVzcy1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJRdWljayBCdWlsZGluZyAvIFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFYXN5IEN1c3RvbWl6YWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGhvdXNhbmRzIG9mIFBsdWdpbnNcIixcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lckl0ZW19IGl0ZW0+XHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgIG1haW5UaXRsZT1cIkFwcHNcIlxyXG4gICAgICAgICAgICAgIG1haW5UaXRsZVN0eWxlPXtzZWNvbmRhcnlUaXRsZX1cclxuICAgICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lciArIFwiIGZsaXBwZWRcIn1cclxuICAgICAgICAgICAgICByb290SXRlbVN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJJdGVtfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgICBzZXJ2aWNlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdC5qc1wiLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiBDb2RlLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcInJlYWN0LXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkxpZ2h0bmluZyBGYXN0IFBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJGdWxseSBDdXN0b21pemFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk1vc3QgUG9wdWxhciBGcmFtZXdvcmsgKExpYnJhcnkpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdCBOYXRpdmUgKE1vYmlsZSlcIixcclxuICAgICAgICAgICAgICAgICAgaWNvbjogU3RheUN1cnJlbnRQb3J0cmFpdCxcclxuICAgICAgICAgICAgICAgICAgbGluazogXCJyZWFjdC1uYXRpdmUtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU3BlY2lmaWNhbGx5IE1vYmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRWFzeSBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lckl0ZW19IGl0ZW0+XHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgIG1haW5UaXRsZT1cIk1lbnRvcnNoaXBcIlxyXG4gICAgICAgICAgICAgIG1haW5UaXRsZVN0eWxlPXtzZWNvbmRhcnlUaXRsZX1cclxuICAgICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICByb290SXRlbVN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJJdGVtfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgICBzZXJ2aWNlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJIVE1ML0NTU1wiLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaWdodG5pbmcgRmFzdCBQZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnVsbHkgQ3VzdG9taXphYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNb3N0IFBvcHVsYXIgRnJhbWV3b3JrIChMaWJyYXJ5KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTcGVjaWZpY2FsbHkgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZWFjdCBCYXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgICAgICAgICAgICAgICAgaWNvbjogU2Nob29sLFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIm1lbnRvcnNoaXAtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU3BlY2lmaWNhbGx5IE1vYmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRWFzeSBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgbWVudG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==