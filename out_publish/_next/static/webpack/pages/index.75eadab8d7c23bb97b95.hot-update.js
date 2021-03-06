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
      padding: "8rem 0"
    }),
    secondaryContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: "3.2rem 0",
      justifyContent: "center",
      alignItems: "center"
    }, theme.breakpoints.up("lg"), {
      padding: "5rem 0",
      width: "100%"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFpbkNvbnRhaW5lciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsInVwIiwic2Vjb25kYXJ5Q29udGFpbmVyIiwid2lkdGgiLCJzZWNvbmRhcnlDb250YWluZXJJdGVtIiwibWFpblRpdGxlIiwibWFyZ2luVG9wIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImNvbG9yIiwiY29udHJhc3RUZXh0IiwiZm9udFNpemUiLCJzZWNvbmRhcnlUaXRsZSIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInNlcnZpY2VHcmlkIiwibGlzdEl0ZW0iLCJjb250ZW50IiwiSG9tZVNlcnZpY2VzIiwidmFyaWFudHMiLCJ0aXRsZSIsImljb24iLCJGbGFzaE9uIiwibGluayIsImRlc2NzIiwiV2ViIiwiQ29kZSIsIlN0YXlDdXJyZW50UG9ydHJhaXQiLCJTY2hvb2wiLCJtZW50b3JzaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQVFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLFFBREU7QUFFWEMsb0JBQWMsRUFBRSxRQUZMO0FBR1hDLGdCQUFVLEVBQUU7QUFIRCxPQUlWTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSlUsRUFJbUI7QUFDNUJKLGFBQU8sRUFBRTtBQURtQixLQUpu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O0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEhELENBeklNOztHQUFNWCxZO1VBVVAvQixTOzs7S0FWTytCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzVlYWRhYjhkN2MyM2JiOTdiOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgbWFrZVN0eWxlcyxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIENvZGUsXHJcbiAgRmxhc2hPbixcclxuICBTY2hvb2wsXHJcbiAgU3RheUN1cnJlbnRQb3J0cmFpdCxcclxuICBXZWIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25Qcm9wcywgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgU2VydmljZXNDb250YWluZXIgfSBmcm9tIFwiLi9TZXJ2aWNlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbiAgbWFpbkNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCI0cmVtIDBcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiBcIjhyZW0gMFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIzLjJyZW0gMFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiNXJlbSAwXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlDb250YWluZXJJdGVtOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWFpblRpdGxlOiB7XHJcbiAgICBwYWRkaW5nOiBcIi4zcmVtIDBcIixcclxuICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgM3B4IDNweCAjMDAwN1wiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgYm94U2hhZG93OiBcIjEwcHggMTBweCA1cHggIzAwMDlcIixcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCI1cmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5VGl0bGU6IHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIuMXJlbVwiLFxyXG4gICAgbWFyZ2luOiBcIjJyZW0gMCAzcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgMTBweCAzcHggIzAwMDdcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiNHJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlcnZpY2VHcmlkOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCItIFwiJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIElIb21lU2VydmljZXNQcm9wcyB7XHJcbiAgdmFyaWFudHM6IEFuaW1hdGlvblByb3BzW1widmFyaWFudHNcIl07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lU2VydmljZXMgPSAoeyB2YXJpYW50cyB9OiBJSG9tZVNlcnZpY2VzUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBtYWluVGl0bGUsXHJcbiAgICBzZWNvbmRhcnlUaXRsZSxcclxuICAgIG1haW5Db250YWluZXIsXHJcbiAgICBzZWNvbmRhcnlDb250YWluZXIsXHJcbiAgICBzZWNvbmRhcnlDb250YWluZXJJdGVtLFxyXG4gICAgcm9vdCxcclxuICAgIHNlcnZpY2VHcmlkLFxyXG4gICAgbGlzdEl0ZW0sXHJcbiAgfSA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9e3Jvb3R9PlxyXG4gICAgICA8Qm94IG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXttYWluVGl0bGV9IHZhcmlhbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgU2VydmljZXNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8R3JpZCBjbGFzc05hbWU9e21haW5Db250YWluZXJ9IGNvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPFNlcnZpY2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgIG1haW5UaXRsZT1cIldlYnNpdGVzXCJcclxuICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcm9vdEl0ZW1TdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVySXRlbX1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTmV4dC5qc1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogRmxhc2hPbixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibmV4dC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIkV4dHJlbWVseSBGYXN0IFBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRnVsbHkgQ3VzdG9taXphYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiTG93IE1haW50ZW5hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldvcmRwcmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogV2ViLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJ3b3JkcHJlc3MtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJRdWljayBCdWlsZGluZyAvIFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzeSBDdXN0b21pemFiaWxpdHlcIixcclxuICAgICAgICAgICAgICAgICAgXCJUaG91c2FuZHMgb2YgUGx1Z2luc1wiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxTZXJ2aWNlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICBtYWluVGl0bGU9XCJBcHBzXCJcclxuICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcm9vdEl0ZW1TdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVySXRlbX1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3QuanNcIixcclxuICAgICAgICAgICAgICAgIGljb246IENvZGUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcInJlYWN0LXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiTGlnaHRuaW5nIEZhc3QgUGVyZm9ybWFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJGdWxseSBDdXN0b21pemFibGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJNb3N0IFBvcHVsYXIgRnJhbWV3b3JrIChMaWJyYXJ5KVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc2lseSBTY2FsZWFibGVcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdCBOYXRpdmUgKE1vYmlsZSlcIixcclxuICAgICAgICAgICAgICAgIGljb246IFN0YXlDdXJyZW50UG9ydHJhaXQsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcInJlYWN0LW5hdGl2ZS1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8U2VydmljZXNDb250YWluZXJcclxuICAgICAgICAgICAgbWFpblRpdGxlPVwiTWVudG9yc2hpcFwiXHJcbiAgICAgICAgICAgIG1haW5UaXRsZVN0eWxlPXtzZWNvbmRhcnlUaXRsZX1cclxuICAgICAgICAgICAgcm9vdFN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJ9XHJcbiAgICAgICAgICAgIHJvb3RJdGVtU3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lckl0ZW19XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgICAgbGlzdEl0ZW1TdHlsZT17bGlzdEl0ZW19XHJcbiAgICAgICAgICAgIHNlcnZpY2VHcmlkU3R5bGU9e3NlcnZpY2VHcmlkfVxyXG4gICAgICAgICAgICBzZXJ2aWNlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhUTUwvQ1NTXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIm1lbnRvcnNoaXAtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJMaWdodG5pbmcgRmFzdCBQZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkZ1bGx5IEN1c3RvbWl6YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIk1vc3QgUG9wdWxhciBGcmFtZXdvcmsgKExpYnJhcnkpXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1lbnRvcnNoaXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIm1lbnRvcnNoaXAtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJTcGVjaWZpY2FsbHkgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzeSBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIlJlYWN0IEJhc2VkXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWVudG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0XCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIm1lbnRvcnNoaXAtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJTcGVjaWZpY2FsbHkgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzeSBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIlJlYWN0IEJhc2VkXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWVudG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=