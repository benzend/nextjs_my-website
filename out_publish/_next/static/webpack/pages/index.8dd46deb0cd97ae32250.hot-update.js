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
      padding: "8rem"
    }),
    secondaryContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: "3.2rem 0",
      justifyContent: "center",
      alignItems: "center"
    }, theme.breakpoints.up("lg"), {
      padding: "5rem 0"
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
        lineNumber: 88,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
          lineNumber: 94,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ServicesContainer__WEBPACK_IMPORTED_MODULE_4__["ServicesContainer"], {
          mainTitle: "Apps",
          mainTitleStyle: secondaryTitle,
          rootStyle: secondaryContainer,
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
          lineNumber: 127,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ServicesContainer__WEBPACK_IMPORTED_MODULE_4__["ServicesContainer"], {
          mainTitle: "Mentorship",
          mainTitleStyle: secondaryTitle,
          rootStyle: secondaryContainer,
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
          lineNumber: 160,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, _this);
};

_s(HomeServices, "Sm5oINl9P+2qkv/3f7EaRfOdRlI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFpbkNvbnRhaW5lciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsInVwIiwic2Vjb25kYXJ5Q29udGFpbmVyIiwibWFpblRpdGxlIiwibWFyZ2luVG9wIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImNvbG9yIiwiY29udHJhc3RUZXh0IiwiZm9udFNpemUiLCJzZWNvbmRhcnlUaXRsZSIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInNlcnZpY2VHcmlkIiwibGlzdEl0ZW0iLCJjb250ZW50IiwiSG9tZVNlcnZpY2VzIiwidmFyaWFudHMiLCJ0aXRsZSIsImljb24iLCJGbGFzaE9uIiwibGluayIsImRlc2NzIiwiV2ViIiwiQ29kZSIsIlN0YXlDdXJyZW50UG9ydHJhaXQiLCJTY2hvb2wiLCJtZW50b3JzaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQVFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLFFBREU7QUFFWEMsb0JBQWMsRUFBRSxRQUZMO0FBR1hDLGdCQUFVLEVBQUU7QUFIRCxPQUlWTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSlUsRUFJbUI7QUFDNUJKLGFBQU8sRUFBRTtBQURtQixLQUpuQixDQUYwQjtBQVV2Q0ssc0JBQWtCLEVBQUU7QUFDbEJM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LEVBQUVaLGNBRmxCO0FBR0UsbUJBQVMsRUFBRWIsa0JBSGI7QUFJRSxrQkFBUSxFQUFFb0IsUUFKWjtBQUtFLHVCQUFhLEVBQUVILFFBTGpCO0FBTUUsMEJBQWdCLEVBQUVELFdBTnBCO0FBT0Usa0JBQVEsRUFBRSxDQUNSO0FBQ0VLLGlCQUFLLEVBQUUsVUFEVDtBQUVFQyxnQkFBSSxFQUFFTyx5REFGUjtBQUdFTCxnQkFBSSxFQUFFLG9CQUhSO0FBSUVDLGlCQUFLLEVBQUUsQ0FDTCw0QkFESyxFQUVMLG9CQUZLLEVBR0wsa0NBSEssRUFJTCxrQkFKSyxDQUpUO0FBVUVLLHNCQUFVLEVBQUU7QUFWZCxXQURRLEVBYVI7QUFDRVQsaUJBQUssRUFBRSxZQURUO0FBRUVDLGdCQUFJLEVBQUVPLHlEQUZSO0FBR0VMLGdCQUFJLEVBQUUsb0JBSFI7QUFJRUMsaUJBQUssRUFBRSxDQUNMLHFCQURLLEVBRUwsa0JBRkssRUFHTCxhQUhLLENBSlQ7QUFTRUssc0JBQVUsRUFBRTtBQVRkLFdBYlEsRUF3QlI7QUFDRVQsaUJBQUssRUFBRSxPQURUO0FBRUVDLGdCQUFJLEVBQUVPLHlEQUZSO0FBR0VMLGdCQUFJLEVBQUUsb0JBSFI7QUFJRUMsaUJBQUssRUFBRSxDQUNMLHFCQURLLEVBRUwsa0JBRkssRUFHTCxhQUhLLENBSlQ7QUFTRUssc0JBQVUsRUFBRTtBQVRkLFdBeEJRO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEySEQsQ0FySU07O0dBQU1YLFk7VUFTUDdCLFM7OztLQVRPNkIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZGQ0NmRlYjBjZDk3YWUzMjI1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBtYWtlU3R5bGVzLFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29kZSxcclxuICBGbGFzaE9uLFxyXG4gIFNjaG9vbCxcclxuICBTdGF5Q3VycmVudFBvcnRyYWl0LFxyXG4gIFdlYixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvblByb3BzLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbnRhaW5lciB9IGZyb20gXCIuL1NlcnZpY2VzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7fSxcclxuICBtYWluQ29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiBcIjRyZW0gMFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiOHJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIzLjJyZW0gMFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiNXJlbSAwXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWFpblRpdGxlOiB7XHJcbiAgICBwYWRkaW5nOiBcIi4zcmVtIDBcIixcclxuICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgM3B4IDNweCAjMDAwN1wiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgYm94U2hhZG93OiBcIjEwcHggMTBweCA1cHggIzAwMDlcIixcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCI1cmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5VGl0bGU6IHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIuMXJlbVwiLFxyXG4gICAgbWFyZ2luOiBcIjJyZW0gMCAzcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgMTBweCAzcHggIzAwMDdcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiNHJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlcnZpY2VHcmlkOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCItIFwiJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIElIb21lU2VydmljZXNQcm9wcyB7XHJcbiAgdmFyaWFudHM6IEFuaW1hdGlvblByb3BzW1widmFyaWFudHNcIl07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lU2VydmljZXMgPSAoeyB2YXJpYW50cyB9OiBJSG9tZVNlcnZpY2VzUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBtYWluVGl0bGUsXHJcbiAgICBzZWNvbmRhcnlUaXRsZSxcclxuICAgIG1haW5Db250YWluZXIsXHJcbiAgICBzZWNvbmRhcnlDb250YWluZXIsXHJcbiAgICByb290LFxyXG4gICAgc2VydmljZUdyaWQsXHJcbiAgICBsaXN0SXRlbSxcclxuICB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT17cm9vdH0+XHJcbiAgICAgIDxCb3ggb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e21haW5UaXRsZX0gdmFyaWFudD1cImgyXCI+XHJcbiAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxHcmlkIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lcn0gY29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8U2VydmljZXNDb250YWluZXJcclxuICAgICAgICAgICAgbWFpblRpdGxlPVwiV2Vic2l0ZXNcIlxyXG4gICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyfVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJOZXh0LmpzXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBGbGFzaE9uLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJuZXh0LXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiRXh0cmVtZWx5IEZhc3QgUGVyZm9ybWFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJGdWxseSBDdXN0b21pemFibGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJMb3cgTWFpbnRlbmFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV29yZHByZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBXZWIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIndvcmRwcmVzcy1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlF1aWNrIEJ1aWxkaW5nIC8gUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IEN1c3RvbWl6YWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIlRob3VzYW5kcyBvZiBQbHVnaW5zXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPFNlcnZpY2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgIG1haW5UaXRsZT1cIkFwcHNcIlxyXG4gICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyfVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdC5qc1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogQ29kZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwicmVhY3QtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJMaWdodG5pbmcgRmFzdCBQZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkZ1bGx5IEN1c3RvbWl6YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIk1vc3QgUG9wdWxhciBGcmFtZXdvcmsgKExpYnJhcnkpXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0IE5hdGl2ZSAoTW9iaWxlKVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogU3RheUN1cnJlbnRQb3J0cmFpdCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwicmVhY3QtbmF0aXZlLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiU3BlY2lmaWNhbGx5IE1vYmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc3kgUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJSZWFjdCBCYXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxTZXJ2aWNlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICBtYWluVGl0bGU9XCJNZW50b3JzaGlwXCJcclxuICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSFRNTC9DU1NcIixcclxuICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIkxpZ2h0bmluZyBGYXN0IFBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRnVsbHkgQ3VzdG9taXphYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiTW9zdCBQb3B1bGFyIEZyYW1ld29yayAoTGlicmFyeSlcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWVudG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkphdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==