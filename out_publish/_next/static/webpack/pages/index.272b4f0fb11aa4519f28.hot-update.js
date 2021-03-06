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
      padding: "8rem",
      alignItems: "space-between"
    }),
    secondaryContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: "3.2rem 0",
      justifyContent: "center",
      alignItems: "center"
    }, theme.breakpoints.up("lg"), {
      padding: "5rem 0"
    }),
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
      secondaryContainer = _useStyles.secondaryContainer,
      secondaryContainerItem = _useStyles.secondaryContainerItem,
      root = _useStyles.root,
      serviceGrid = _useStyles.serviceGrid,
      listItem = _useStyles.listItem;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
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
        lineNumber: 95,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      className: mainContainer,
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
          lineNumber: 101,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ServicesContainer__WEBPACK_IMPORTED_MODULE_4__["ServicesContainer"], {
          mainTitle: "Apps",
          mainTitleStyle: secondaryTitle,
          rootStyle: secondaryContainer,
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
          lineNumber: 135,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
          lineNumber: 169,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, _this);
};

_s(HomeServices, "4fisPvpGU40mkjypCF5pXCrBsJQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFpbkNvbnRhaW5lciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsInVwIiwic2Vjb25kYXJ5Q29udGFpbmVyIiwic2Vjb25kYXJ5Q29udGFpbmVySXRlbSIsIndpZHRoIiwibWFpblRpdGxlIiwibWFyZ2luVG9wIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImNvbG9yIiwiY29udHJhc3RUZXh0IiwiZm9udFNpemUiLCJzZWNvbmRhcnlUaXRsZSIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInNlcnZpY2VHcmlkIiwibGlzdEl0ZW0iLCJjb250ZW50IiwiSG9tZVNlcnZpY2VzIiwidmFyaWFudHMiLCJ0aXRsZSIsImljb24iLCJGbGFzaE9uIiwibGluayIsImRlc2NzIiwiV2ViIiwiQ29kZSIsIlN0YXlDdXJyZW50UG9ydHJhaXQiLCJTY2hvb2wiLCJtZW50b3JzaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQVFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLFFBREU7QUFFWEMsb0JBQWMsRUFBRSxRQUZMO0FBR1hDLGdCQUFVLEVBQUU7QUFIRCxPQUlWTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSlUsRUFJbUI7QUFDNUJKLGFBQU8sRUFBRSxNQURtQjtBQUU1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QTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThIRCxDQXpJTTs7R0FBTVgsWTtVQVVQL0IsUzs7O0tBVk8rQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI3MmI0ZjBmYjExYWE0NTE5ZjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBDb2RlLFxyXG4gIEZsYXNoT24sXHJcbiAgU2Nob29sLFxyXG4gIFN0YXlDdXJyZW50UG9ydHJhaXQsXHJcbiAgV2ViLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uUHJvcHMsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VzQ29udGFpbmVyIH0gZnJvbSBcIi4vU2VydmljZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG4gIG1haW5Db250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiNHJlbSAwXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgcGFkZGluZzogXCI4cmVtXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIzLjJyZW0gMFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiNXJlbSAwXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5Q29udGFpbmVySXRlbToge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1haW5UaXRsZToge1xyXG4gICAgcGFkZGluZzogXCIuM3JlbSAwXCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4gICAgdGV4dFNoYWRvdzogXCIwIDNweCAzcHggIzAwMDdcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGJveFNoYWRvdzogXCIxMHB4IDEwcHggNXB4ICMwMDA5XCIsXHJcblxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiNXJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeVRpdGxlOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiLjFyZW1cIixcclxuICAgIG1hcmdpbjogXCIycmVtIDAgM3JlbVwiLFxyXG4gICAgdGV4dFNoYWRvdzogXCIwIDEwcHggM3B4ICMwMDA3XCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjRyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2aWNlR3JpZDoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIFwiJjo6YmVmb3JlXCI6IHtcclxuICAgICAgY29udGVudDogJ1wiLSBcIicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBJSG9tZVNlcnZpY2VzUHJvcHMge1xyXG4gIHZhcmlhbnRzOiBBbmltYXRpb25Qcm9wc1tcInZhcmlhbnRzXCJdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVNlcnZpY2VzID0gKHsgdmFyaWFudHMgfTogSUhvbWVTZXJ2aWNlc1Byb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbWFpblRpdGxlLFxyXG4gICAgc2Vjb25kYXJ5VGl0bGUsXHJcbiAgICBtYWluQ29udGFpbmVyLFxyXG4gICAgc2Vjb25kYXJ5Q29udGFpbmVyLFxyXG4gICAgc2Vjb25kYXJ5Q29udGFpbmVySXRlbSxcclxuICAgIHJvb3QsXHJcbiAgICBzZXJ2aWNlR3JpZCxcclxuICAgIGxpc3RJdGVtLFxyXG4gIH0gPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPXtyb290fT5cclxuICAgICAgPEJveCBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17bWFpblRpdGxlfSB2YXJpYW50PVwiaDJcIj5cclxuICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEdyaWQgY2xhc3NOYW1lPXttYWluQ29udGFpbmVyfSBjb250YWluZXI+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxTZXJ2aWNlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICBtYWluVGl0bGU9XCJXZWJzaXRlc1wiXHJcbiAgICAgICAgICAgIG1haW5UaXRsZVN0eWxlPXtzZWNvbmRhcnlUaXRsZX1cclxuICAgICAgICAgICAgcm9vdFN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJ9XHJcbiAgICAgICAgICAgIHJvb3RJdGVtU3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lckl0ZW19XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgICAgbGlzdEl0ZW1TdHlsZT17bGlzdEl0ZW19XHJcbiAgICAgICAgICAgIHNlcnZpY2VHcmlkU3R5bGU9e3NlcnZpY2VHcmlkfVxyXG4gICAgICAgICAgICBzZXJ2aWNlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5leHQuanNcIixcclxuICAgICAgICAgICAgICAgIGljb246IEZsYXNoT24sXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIm5leHQtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJFeHRyZW1lbHkgRmFzdCBQZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkZ1bGx5IEN1c3RvbWl6YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkxvdyBNYWludGVuYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc2lseSBTY2FsZWFibGVcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXb3JkcHJlc3NcIixcclxuICAgICAgICAgICAgICAgIGljb246IFdlYixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwid29yZHByZXNzLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiUXVpY2sgQnVpbGRpbmcgLyBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc3kgQ3VzdG9taXphYmlsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiVGhvdXNhbmRzIG9mIFBsdWdpbnNcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8U2VydmljZXNDb250YWluZXJcclxuICAgICAgICAgICAgbWFpblRpdGxlPVwiQXBwc1wiXHJcbiAgICAgICAgICAgIG1haW5UaXRsZVN0eWxlPXtzZWNvbmRhcnlUaXRsZX1cclxuICAgICAgICAgICAgcm9vdFN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJ9XHJcbiAgICAgICAgICAgIHJvb3RJdGVtU3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lckl0ZW19XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgICAgbGlzdEl0ZW1TdHlsZT17bGlzdEl0ZW19XHJcbiAgICAgICAgICAgIHNlcnZpY2VHcmlkU3R5bGU9e3NlcnZpY2VHcmlkfVxyXG4gICAgICAgICAgICBzZXJ2aWNlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0LmpzXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBDb2RlLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJyZWFjdC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIkxpZ2h0bmluZyBGYXN0IFBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRnVsbHkgQ3VzdG9taXphYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiTW9zdCBQb3B1bGFyIEZyYW1ld29yayAoTGlicmFyeSlcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3QgTmF0aXZlIChNb2JpbGUpXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBTdGF5Q3VycmVudFBvcnRyYWl0LFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJyZWFjdC1uYXRpdmUtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJTcGVjaWZpY2FsbHkgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzeSBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIlJlYWN0IEJhc2VkXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPFNlcnZpY2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgIG1haW5UaXRsZT1cIk1lbnRvcnNoaXBcIlxyXG4gICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyfVxyXG4gICAgICAgICAgICByb290SXRlbVN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJJdGVtfVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIVE1ML0NTU1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogU2Nob29sLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJtZW50b3JzaGlwLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiTGlnaHRuaW5nIEZhc3QgUGVyZm9ybWFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJGdWxseSBDdXN0b21pemFibGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJNb3N0IFBvcHVsYXIgRnJhbWV3b3JrIChMaWJyYXJ5KVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc2lseSBTY2FsZWFibGVcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogU2Nob29sLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJtZW50b3JzaGlwLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiU3BlY2lmaWNhbGx5IE1vYmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc3kgUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJSZWFjdCBCYXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1lbnRvcnNoaXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdFwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogU2Nob29sLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJtZW50b3JzaGlwLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiU3BlY2lmaWNhbGx5IE1vYmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc3kgUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJSZWFjdCBCYXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1lbnRvcnNoaXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9