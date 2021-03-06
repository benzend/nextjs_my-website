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
    }, theme.breakpoints.up("xl"), {
      padding: "8rem 0",
      width: "100%"
    }),
    mainContainerItem: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up("xl"), {
      width: "100%"
    }),
    secondaryContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: "3.2rem 0",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }, theme.breakpoints.up("xl"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
        lineNumber: 107,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
            lineNumber: 114,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
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
            lineNumber: 148,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
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
            lineNumber: 182,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFpbkNvbnRhaW5lciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsInVwIiwid2lkdGgiLCJtYWluQ29udGFpbmVySXRlbSIsInNlY29uZGFyeUNvbnRhaW5lciIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJzZWNvbmRhcnlDb250YWluZXJJdGVtIiwibWFpblRpdGxlIiwibWFyZ2luVG9wIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImNvbG9yIiwiY29udHJhc3RUZXh0IiwiZm9udFNpemUiLCJzZWNvbmRhcnlUaXRsZSIsImJvcmRlclJhZGl1cyIsInNlcnZpY2VHcmlkIiwibGlzdEl0ZW0iLCJjb250ZW50IiwiSG9tZVNlcnZpY2VzIiwidmFyaWFudHMiLCJ0aXRsZSIsImljb24iLCJGbGFzaE9uIiwibGluayIsImRlc2NzIiwiV2ViIiwiQ29kZSIsIlN0YXlDdXJyZW50UG9ydHJhaXQiLCJTY2hvb2wiLCJtZW50b3JzaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQVFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLFFBREU7QUFFWEMsb0JBQWMsRUFBRSxRQUZMO0FBR1hDLGdCQUFVLEVBQUU7QUFIRCxPQUlWTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENB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UjtBQUlFQyxtQkFBSyxFQUFFLENBQ0wsNEJBREssRUFFTCxvQkFGSyxFQUdMLGtDQUhLLEVBSUwsa0JBSkssQ0FKVDtBQVVFSyx3QkFBVSxFQUFFO0FBVmQsYUFEUSxFQWFSO0FBQ0VULG1CQUFLLEVBQUUsWUFEVDtBQUVFQyxrQkFBSSxFQUFFTyx5REFGUjtBQUdFTCxrQkFBSSxFQUFFLG9CQUhSO0FBSUVDLG1CQUFLLEVBQUUsQ0FDTCxxQkFESyxFQUVMLGtCQUZLLEVBR0wsYUFISyxDQUpUO0FBU0VLLHdCQUFVLEVBQUU7QUFUZCxhQWJRLEVBd0JSO0FBQ0VULG1CQUFLLEVBQUUsT0FEVDtBQUVFQyxrQkFBSSxFQUFFTyx5REFGUjtBQUdFTCxrQkFBSSxFQUFFLG9CQUhSO0FBSUVDLG1CQUFLLEVBQUUsQ0FDTCxxQkFESyxFQUVMLGtCQUZLLEVBR0wsYUFISyxDQUpUO0FBU0VLLHdCQUFVLEVBQUU7QUFUZCxhQXhCUTtBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnSUQsQ0E1SU07O0dBQU1YLFk7VUFXUGpDLFM7OztLQVhPaUMsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NTE0MmI4ODJjMjc3ZGZhYmU1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBtYWtlU3R5bGVzLFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29kZSxcclxuICBGbGFzaE9uLFxyXG4gIFNjaG9vbCxcclxuICBTdGF5Q3VycmVudFBvcnRyYWl0LFxyXG4gIFdlYixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvblByb3BzLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbnRhaW5lciB9IGZyb20gXCIuL1NlcnZpY2VzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7fSxcclxuICBtYWluQ29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiBcIjRyZW0gMFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwieGxcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiOHJlbSAwXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBtYWluQ29udGFpbmVySXRlbToge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwieGxcIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlDb250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiMy4ycmVtIDBcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJ4bFwiKV06IHtcclxuICAgICAgcGFkZGluZzogXCI1cmVtIDBcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBtYXJnaW46IFwiNXJlbSAwXCIsXHJcbiAgICAgIFtcIiYuZmxpcHBlZFwiXToge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LXJldmVyc2VcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlDb250YWluZXJJdGVtOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWFpblRpdGxlOiB7XHJcbiAgICBwYWRkaW5nOiBcIi4zcmVtIDBcIixcclxuICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgM3B4IDNweCAjMDAwN1wiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgYm94U2hhZG93OiBcIjEwcHggMTBweCA1cHggIzAwMDlcIixcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCI1cmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5VGl0bGU6IHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIuMXJlbVwiLFxyXG4gICAgbWFyZ2luOiBcIjJyZW0gMCAzcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgMTBweCAzcHggIzAwMDdcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiNHJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlcnZpY2VHcmlkOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCItIFwiJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIElIb21lU2VydmljZXNQcm9wcyB7XHJcbiAgdmFyaWFudHM6IEFuaW1hdGlvblByb3BzW1widmFyaWFudHNcIl07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lU2VydmljZXMgPSAoeyB2YXJpYW50cyB9OiBJSG9tZVNlcnZpY2VzUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBtYWluVGl0bGUsXHJcbiAgICBzZWNvbmRhcnlUaXRsZSxcclxuICAgIG1haW5Db250YWluZXIsXHJcbiAgICBtYWluQ29udGFpbmVySXRlbSxcclxuICAgIHNlY29uZGFyeUNvbnRhaW5lcixcclxuICAgIHNlY29uZGFyeUNvbnRhaW5lckl0ZW0sXHJcbiAgICByb290LFxyXG4gICAgc2VydmljZUdyaWQsXHJcbiAgICBsaXN0SXRlbSxcclxuICB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT17cm9vdH0+XHJcbiAgICAgIDxCb3ggb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e21haW5UaXRsZX0gdmFyaWFudD1cImgyXCI+XHJcbiAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxyXG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lcn0gY29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXttYWluQ29udGFpbmVySXRlbX0gaXRlbT5cclxuICAgICAgICAgICAgPFNlcnZpY2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgbWFpblRpdGxlPVwiV2Vic2l0ZXNcIlxyXG4gICAgICAgICAgICAgIG1haW5UaXRsZVN0eWxlPXtzZWNvbmRhcnlUaXRsZX1cclxuICAgICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICByb290SXRlbVN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJJdGVtfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgICBzZXJ2aWNlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJOZXh0LmpzXCIsXHJcbiAgICAgICAgICAgICAgICAgIGljb246IEZsYXNoT24sXHJcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwibmV4dC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFeHRyZW1lbHkgRmFzdCBQZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnVsbHkgQ3VzdG9taXphYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMb3cgTWFpbnRlbmFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkVhc2lseSBTY2FsZWFibGVcIixcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldvcmRwcmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiBXZWIsXHJcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwid29yZHByZXNzLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIlF1aWNrIEJ1aWxkaW5nIC8gUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkVhc3kgQ3VzdG9taXphYmlsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUaG91c2FuZHMgb2YgUGx1Z2luc1wiLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXttYWluQ29udGFpbmVySXRlbX0gaXRlbT5cclxuICAgICAgICAgICAgPFNlcnZpY2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgbWFpblRpdGxlPVwiQXBwc1wiXHJcbiAgICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyICsgXCIgZmxpcHBlZFwifVxyXG4gICAgICAgICAgICAgIHJvb3RJdGVtU3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lckl0ZW19XHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICAgIHNlcnZpY2VHcmlkU3R5bGU9e3NlcnZpY2VHcmlkfVxyXG4gICAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0LmpzXCIsXHJcbiAgICAgICAgICAgICAgICAgIGljb246IENvZGUsXHJcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwicmVhY3QtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiTGlnaHRuaW5nIEZhc3QgUGVyZm9ybWFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkZ1bGx5IEN1c3RvbWl6YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTW9zdCBQb3B1bGFyIEZyYW1ld29yayAoTGlicmFyeSlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkVhc2lseSBTY2FsZWFibGVcIixcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0IE5hdGl2ZSAoTW9iaWxlKVwiLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiBTdGF5Q3VycmVudFBvcnRyYWl0LFxyXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcInJlYWN0LW5hdGl2ZS1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTcGVjaWZpY2FsbHkgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZWFjdCBCYXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXttYWluQ29udGFpbmVySXRlbX0gaXRlbT5cclxuICAgICAgICAgICAgPFNlcnZpY2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgbWFpblRpdGxlPVwiTWVudG9yc2hpcFwiXHJcbiAgICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyfVxyXG4gICAgICAgICAgICAgIHJvb3RJdGVtU3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lckl0ZW19XHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICAgIHNlcnZpY2VHcmlkU3R5bGU9e3NlcnZpY2VHcmlkfVxyXG4gICAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhUTUwvQ1NTXCIsXHJcbiAgICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgICAgbGluazogXCJtZW50b3JzaGlwLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkxpZ2h0bmluZyBGYXN0IFBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJGdWxseSBDdXN0b21pemFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk1vc3QgUG9wdWxhciBGcmFtZXdvcmsgKExpYnJhcnkpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIG1lbnRvcnNoaXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgICAgbGluazogXCJtZW50b3JzaGlwLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkVhc3kgUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlJlYWN0IEJhc2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIG1lbnRvcnNoaXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdFwiLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTcGVjaWZpY2FsbHkgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZWFjdCBCYXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9