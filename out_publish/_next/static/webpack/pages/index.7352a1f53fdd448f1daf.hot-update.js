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
        lineNumber: 94,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
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
          lineNumber: 100,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
          lineNumber: 134,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
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
          lineNumber: 168,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFpbkNvbnRhaW5lciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsInVwIiwic2Vjb25kYXJ5Q29udGFpbmVyIiwic2Vjb25kYXJ5Q29udGFpbmVySXRlbSIsIndpZHRoIiwibWFpblRpdGxlIiwibWFyZ2luVG9wIiwidGV4dFNoYWRvdyIsInRleHRBbGlnbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImNvbG9yIiwiY29udHJhc3RUZXh0IiwiZm9udFNpemUiLCJzZWNvbmRhcnlUaXRsZSIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInNlcnZpY2VHcmlkIiwibGlzdEl0ZW0iLCJjb250ZW50IiwiSG9tZVNlcnZpY2VzIiwidmFyaWFudHMiLCJ0aXRsZSIsImljb24iLCJGbGFzaE9uIiwibGluayIsImRlc2NzIiwiV2ViIiwiQ29kZSIsIlN0YXlDdXJyZW50UG9ydHJhaXQiLCJTY2hvb2wiLCJtZW50b3JzaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQVFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLFFBREU7QUFFWEMsb0JBQWMsRUFBRSxRQUZMO0FBR1hDLGdCQUFVLEVBQUU7QUFIRCxPQUlWTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSlUsRUFJbUI7QUFDNUJKLGFBQU8sRUFBRTtBQURtQixLQUpuQixDQUYwQjtBQVV2Q0ssc0JBQWtCLEVBQUU7QUFDbEJMLGFBQU8sRUFBRSxVQURPO0FBRWhCQyxvQkFBYyxFQUFFLFFBRkE7QUFHaEJDLGdCQUFVLEVBQUU7QUFISSxPQUlmTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSmUsRUFJYztBQUM1QkosYUFBTyxFQUFFO0FBRG1CLEtBSmQsQ0FWcUI7QUFrQnZDTSwwQkFBc0IsRUFBRSw4RkFDckJULEtBQUssQ0FBQ00sV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FEbUIsRUFDVTtBQUM1QkcsV0FBSyxFQUFFO0FBRHFCLEtBRFYsQ0FsQmlCO0FBdUJ2Q0MsYUFBUyxFQUFFO0FBQ1RSLGFBQU8sRUFBRSxTQURGO0FBRVBTLGVBQVMsRUFBRSxNQUZKO0FBR1BDLGdCQUFVLEVBQUUsaUJBSEw7QUFJUEMsZUFBUyxFQUFFLFFBSko7QUFLUEMsZUFBUyxFQUFFLHFCQUxKO0FBT1BDLGdCQUFVLEVBQUVoQixLQUFLLENBQUNpQixPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLElBUDdCO0FBUVBDLFdBQUssRUFBRXBCLEtBQUssQ0FBQ2lCLE9BQU4sQ0FBY0MsU0FBZCxDQUF3Qkc7QUFSeEIsT0FTTnJCLEtBQUssQ0FBQ00sV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FUTSxFQVN1QjtBQUM1QmUsY0FBUSxFQUFFO0FBRGtCLEtBVHZCLENBdkI4QjtBQW9DdkNDLGtCQUFjLEVBQUU7QUFDZFQsZUFBUyxFQUFFLFFBREM7QUFFWlUsa0JBQVksRUFBRSxPQUZGO0FBR1pDLFlBQU0sRUFBRSxhQUhJO0FBSVpaLGdCQUFVLEVBQUUsa0JBSkE7QUFLWk8sV0FBSyxFQUFFcEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjQyxTQUFkLENBQXdCRztBQUxuQixPQU1YckIsS0FBSyxDQUFDTSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQU5XLEVBTWtCO0FBQzVCZSxjQUFRLEVBQUU7QUFEa0IsS0FObEIsQ0FwQ3lCO0FBOEN2Q0ksZUFBVyxFQUFFO0FBQ1h0QixvQkFBYyxFQUFFLFFBREw7QUFFWEMsZ0JBQVUsRUFBRTtBQUZELEtBOUMwQjtBQWtEdkNzQixZQUFRLEVBQUU7QUFDUixtQkFBYTtBQUNYQyxlQUFPLEVBQUU7QUFERTtBQURMO0FBbEQ2QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQTZETyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFzQztBQUFBOztBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7O0FBQUEsbUJBVTVEaEMsU0FBUyxFQVZtRDtBQUFBLE1BRTlEYSxTQUY4RCxjQUU5REEsU0FGOEQ7QUFBQSxNQUc5RFksY0FIOEQsY0FHOURBLGNBSDhEO0FBQUEsTUFJOURyQixhQUo4RCxjQUk5REEsYUFKOEQ7QUFBQSxNQUs5RE0sa0JBTDhELGNBSzlEQSxrQkFMOEQ7QUFBQSxNQU05REMsc0JBTjhELGNBTTlEQSxzQkFOOEQ7QUFBQSxNQU85RFIsSUFQOEQsY0FPOURBLElBUDhEO0FBQUEsTUFROUR5QixXQVI4RCxjQVE5REEsV0FSOEQ7QUFBQSxNQVM5REMsUUFUOEQsY0FTOURBLFFBVDhEOztBQVdoRSxzQkFDRSxxRUFBQyxxREFBRDtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBRTFCLElBQTlCO0FBQUEsNEJBQ0UscUVBQUMscURBQUQ7QUFBSyxjQUFRLEVBQUMsUUFBZDtBQUFBLDZCQUNFLHFFQUFDLDREQUFEO0FBQVksaUJBQVMsRUFBRVUsU0FBdkI7QUFBa0MsZUFBTyxFQUFDLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsc0RBQUQ7QUFBTSxlQUFTLEVBQUVULGFBQWpCO0FBQWdDLGVBQVMsTUFBekM7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFBLCtCQUNFLHFFQUFDLG9FQUFEO0FBQ0UsbUJBQVMsRUFBQyxVQURaO0FBRUUsd0JBQWMsRUFBRXFCLGNBRmxCO0FBR0UsbUJBQVMsRUFBRWYsa0JBSGI7QUFJRSx1QkFBYSxFQUFFQyxzQkFKakI7QUFLRSxrQkFBUSxFQUFFcUIsUUFMWjtBQU1FLHVCQUFhLEVBQUVILFFBTmpCO0FBT0UsMEJBQWdCLEVBQUVELFdBUHBCO0FBUUUsa0JBQVEsRUFBRSxDQUNSO0FBQ0VLLGlCQUFLLEVBQUUsU0FEVDtBQUVFQyxnQkFBSSxFQUFFQywwREFGUjtBQUdFQyxnQkFBSSxFQUFFLGNBSFI7QUFJRUMsaUJBQUssRUFBRSxDQUNMLDRCQURLLEVBRUwsb0JBRkssRUFHTCxpQkFISyxFQUlMLGtCQUpLO0FBSlQsV0FEUSxFQVlSO0FBQ0VKLGlCQUFLLEVBQUUsV0FEVDtBQUVFQyxnQkFBSSxFQUFFSSxzREFGUjtBQUdFRixnQkFBSSxFQUFFLG1CQUhSO0FBSUVDLGlCQUFLLEVBQUUsQ0FDTCw4QkFESyxFQUVMLHNCQUZLLEVBR0wsc0JBSEs7QUFKVCxXQVpRO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQW1DRSxxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFBLCtCQUNFLHFFQUFDLG9FQUFEO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsd0JBQWMsRUFBRVosY0FGbEI7QUFHRSxtQkFBUyxFQUFFZixrQkFIYjtBQUlFLHVCQUFhLEVBQUVDLHNCQUpqQjtBQUtFLGtCQUFRLEVBQUVxQixRQUxaO0FBTUUsdUJBQWEsRUFBRUgsUUFOakI7QUFPRSwwQkFBZ0IsRUFBRUQsV0FQcEI7QUFRRSxrQkFBUSxFQUFFLENBQ1I7QUFDRUssaUJBQUssRUFBRSxVQURUO0FBRUVDLGdCQUFJLEVBQUVLLHVEQUZSO0FBR0VILGdCQUFJLEVBQUUsZUFIUjtBQUlFQyxpQkFBSyxFQUFFLENBQ0wsNEJBREssRUFFTCxvQkFGSyxFQUdMLGtDQUhLLEVBSUwsa0JBSks7QUFKVCxXQURRLEVBWVI7QUFDRUosaUJBQUssRUFBRSx1QkFEVDtBQUVFQyxnQkFBSSxFQUFFTSxzRUFGUjtBQUdFSixnQkFBSSxFQUFFLHNCQUhSO0FBSUVDLGlCQUFLLEVBQUUsQ0FDTCxxQkFESyxFQUVMLGtCQUZLLEVBR0wsYUFISztBQUpULFdBWlE7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DRixlQXFFRSxxRUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFBLCtCQUNFLHFFQUFDLG9FQUFEO0FBQ0UsbUJBQVMsRUFBQyxZQURaO0FBRUUsd0JBQWMsRUFBRVosY0FGbEI7QUFHRSxtQkFBUyxFQUFFZixrQkFIYjtBQUlFLHVCQUFhLEVBQUVDLHNCQUpqQjtBQUtFLGtCQUFRLEVBQUVxQixRQUxaO0FBTUUsdUJBQWEsRUFBRUgsUUFOakI7QUFPRSwwQkFBZ0IsRUFBRUQsV0FQcEI7QUFRRSxrQkFBUSxFQUFFLENBQ1I7QUFDRUssaUJBQUssRUFBRSxVQURUO0FBRUVDLGdCQUFJLEVBQUVPLHlEQUZSO0FBR0VMLGdCQUFJLEVBQUUsb0JBSFI7QUFJRUMsaUJBQUssRUFBRSxDQUNMLDRCQURLLEVBRUwsb0JBRkssRUFHTCxrQ0FISyxFQUlMLGtCQUpLLENBSlQ7QUFVRUssc0JBQVUsRUFBRTtBQVZkLFdBRFEsRUFhUjtBQUNFVCxpQkFBSyxFQUFFLFlBRFQ7QUFFRUMsZ0JBQUksRUFBRU8seURBRlI7QUFHRUwsZ0JBQUksRUFBRSxvQkFIUjtBQUlFQyxpQkFBSyxFQUFFLENBQ0wscUJBREssRUFFTCxrQkFGSyxFQUdMLGFBSEssQ0FKVDtBQVNFSyxzQkFBVSxFQUFFO0FBVGQsV0FiUSxFQXdCUjtBQUNFVCxpQkFBSyxFQUFFLE9BRFQ7QUFFRUMsZ0JBQUksRUFBRU8seURBRlI7QUFHRUwsZ0JBQUksRUFBRSxvQkFIUjtBQUlFQyxpQkFBSyxFQUFFLENBQ0wscUJBREssRUFFTCxrQkFGSyxFQUdMLGFBSEssQ0FKVDtBQVNFSyxzQkFBVSxFQUFFO0FBVGQsV0F4QlE7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThIRCxDQXpJTTs7R0FBTVgsWTtVQVVQL0IsUzs7O0tBVk8rQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjczNTJhMWY1M2ZkZDQ0OGYxZGFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBDb2RlLFxyXG4gIEZsYXNoT24sXHJcbiAgU2Nob29sLFxyXG4gIFN0YXlDdXJyZW50UG9ydHJhaXQsXHJcbiAgV2ViLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uUHJvcHMsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VzQ29udGFpbmVyIH0gZnJvbSBcIi4vU2VydmljZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG4gIG1haW5Db250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiNHJlbSAwXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgcGFkZGluZzogXCI4cmVtIDBcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlDb250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiMy4ycmVtIDBcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICBwYWRkaW5nOiBcIjVyZW0gMFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNvbnRhaW5lckl0ZW06IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBtYWluVGl0bGU6IHtcclxuICAgIHBhZGRpbmc6IFwiLjNyZW0gMFwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcclxuICAgIHRleHRTaGFkb3c6IFwiMCAzcHggM3B4ICMwMDA3XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMTBweCAxMHB4IDVweCAjMDAwOVwiLFxyXG5cclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjVyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlUaXRsZToge1xyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIi4xcmVtXCIsXHJcbiAgICBtYXJnaW46IFwiMnJlbSAwIDNyZW1cIixcclxuICAgIHRleHRTaGFkb3c6IFwiMCAxMHB4IDNweCAjMDAwN1wiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCI0cmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmljZUdyaWQ6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBcIiY6OmJlZm9yZVwiOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIi0gXCInLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgSUhvbWVTZXJ2aWNlc1Byb3BzIHtcclxuICB2YXJpYW50czogQW5pbWF0aW9uUHJvcHNbXCJ2YXJpYW50c1wiXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVTZXJ2aWNlcyA9ICh7IHZhcmlhbnRzIH06IElIb21lU2VydmljZXNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG1haW5UaXRsZSxcclxuICAgIHNlY29uZGFyeVRpdGxlLFxyXG4gICAgbWFpbkNvbnRhaW5lcixcclxuICAgIHNlY29uZGFyeUNvbnRhaW5lcixcclxuICAgIHNlY29uZGFyeUNvbnRhaW5lckl0ZW0sXHJcbiAgICByb290LFxyXG4gICAgc2VydmljZUdyaWQsXHJcbiAgICBsaXN0SXRlbSxcclxuICB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT17cm9vdH0+XHJcbiAgICAgIDxCb3ggb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e21haW5UaXRsZX0gdmFyaWFudD1cImgyXCI+XHJcbiAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxHcmlkIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lcn0gY29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8U2VydmljZXNDb250YWluZXJcclxuICAgICAgICAgICAgbWFpblRpdGxlPVwiV2Vic2l0ZXNcIlxyXG4gICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyfVxyXG4gICAgICAgICAgICByb290SXRlbVN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJJdGVtfVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJOZXh0LmpzXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBGbGFzaE9uLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJuZXh0LXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiRXh0cmVtZWx5IEZhc3QgUGVyZm9ybWFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJGdWxseSBDdXN0b21pemFibGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJMb3cgTWFpbnRlbmFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV29yZHByZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBXZWIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIndvcmRwcmVzcy1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlF1aWNrIEJ1aWxkaW5nIC8gUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IEN1c3RvbWl6YWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIlRob3VzYW5kcyBvZiBQbHVnaW5zXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPFNlcnZpY2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgIG1haW5UaXRsZT1cIkFwcHNcIlxyXG4gICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyfVxyXG4gICAgICAgICAgICByb290SXRlbVN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJJdGVtfVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdC5qc1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogQ29kZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwicmVhY3QtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJMaWdodG5pbmcgRmFzdCBQZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkZ1bGx5IEN1c3RvbWl6YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIk1vc3QgUG9wdWxhciBGcmFtZXdvcmsgKExpYnJhcnkpXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0IE5hdGl2ZSAoTW9iaWxlKVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogU3RheUN1cnJlbnRQb3J0cmFpdCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwicmVhY3QtbmF0aXZlLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiU3BlY2lmaWNhbGx5IE1vYmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc3kgUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJSZWFjdCBCYXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxTZXJ2aWNlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICBtYWluVGl0bGU9XCJNZW50b3JzaGlwXCJcclxuICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcm9vdEl0ZW1TdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVySXRlbX1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSFRNTC9DU1NcIixcclxuICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIkxpZ2h0bmluZyBGYXN0IFBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRnVsbHkgQ3VzdG9taXphYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiTW9zdCBQb3B1bGFyIEZyYW1ld29yayAoTGlicmFyeSlcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWVudG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkphdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==