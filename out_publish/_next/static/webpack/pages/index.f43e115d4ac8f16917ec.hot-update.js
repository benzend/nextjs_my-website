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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _ServicesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServicesContainer */ "./components/home-components/ServicesContainer.tsx");


var _jsxFileName = "C:\\Users\\12086\\OneDrive\\Desktop\\next_portfolio\\portfolio\\components\\home-components\\HomeServices.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {},
    mainContainer: {
      padding: "1rem 0",
      justifyContent: "center",
      alignItems: "center"
    },
    secondaryContainer: {
      padding: "1.3rem 0"
    },
    mainTitle: {
      padding: ".3rem 0",
      marginTop: "1rem",
      textShadow: "0 3px 3px #0007",
      textAlign: "center",
      boxShadow: "0px 0px 10px #0009",
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    secondaryTitle: {
      textAlign: "center",
      borderRadius: ".1rem",
      margin: "2rem 0 3rem",
      textShadow: "0 10px 3px #0007",
      color: theme.palette.secondary.contrastText
    },
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    id: "services",
    className: root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      overflow: "hidden",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        className: mainTitle,
        variant: "h2",
        children: "Services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      className: mainContainer,
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ServicesContainer__WEBPACK_IMPORTED_MODULE_3__["ServicesContainer"], {
          mainTitle: "Websites",
          mainTitleStyle: secondaryTitle,
          rootStyle: secondaryContainer,
          variants: variants,
          listItemStyle: listItem,
          serviceGridStyle: serviceGrid,
          services: [{
            title: "Next.js",
            icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FlashOn"],
            link: "next-pricing",
            descs: ["Extremely Fast Performance", "Fully Customizable", "Low Maintenance", "Easily Scaleable"]
          }, {
            title: "Wordpress",
            icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Web"],
            link: "wordpress-pricing",
            descs: ["Quick Building / Prototyping", "Easy Customizability", "Thousands of Plugins"]
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ServicesContainer__WEBPACK_IMPORTED_MODULE_3__["ServicesContainer"], {
          mainTitle: "Apps",
          mainTitleStyle: secondaryTitle,
          rootStyle: secondaryContainer,
          variants: variants,
          listItemStyle: listItem,
          serviceGridStyle: serviceGrid,
          services: [{
            title: "React.js",
            icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Code"],
            link: "react-pricing",
            descs: ["Lightning Fast Performance", "Fully Customizable", "Most Popular Framework (Library)", "Easily Scaleable"]
          }, {
            title: "React Native (Mobile)",
            icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["StayCurrentPortrait"],
            link: "react-native-pricing",
            descs: ["Specifically Mobile", "Easy Prototyping", "React Based"]
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ServicesContainer__WEBPACK_IMPORTED_MODULE_3__["ServicesContainer"], {
          mainTitle: "Mentorship",
          mainTitleStyle: secondaryTitle,
          rootStyle: secondaryContainer,
          variants: variants,
          listItemStyle: listItem,
          serviceGridStyle: serviceGrid,
          services: [{
            title: "HTML/CSS",
            icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["School"],
            link: "mentorship-pricing",
            descs: ["Lightning Fast Performance", "Fully Customizable", "Most Popular Framework (Library)", "Easily Scaleable"],
            mentorship: true
          }, {
            title: "JavaScript",
            icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["School"],
            link: "mentorship-pricing",
            descs: ["Specifically Mobile", "Easy Prototyping", "React Based"],
            mentorship: true
          }, {
            title: "React",
            icon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["School"],
            link: "mentorship-pricing",
            descs: ["Specifically Mobile", "Easy Prototyping", "React Based"],
            mentorship: true
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFpbkNvbnRhaW5lciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJzZWNvbmRhcnlDb250YWluZXIiLCJtYWluVGl0bGUiLCJtYXJnaW5Ub3AiLCJ0ZXh0U2hhZG93IiwidGV4dEFsaWduIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiY29sb3IiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnlUaXRsZSIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInNlcnZpY2VHcmlkIiwibGlzdEl0ZW0iLCJjb250ZW50IiwiSG9tZVNlcnZpY2VzIiwidmFyaWFudHMiLCJ0aXRsZSIsImljb24iLCJGbGFzaE9uIiwibGluayIsImRlc2NzIiwiV2ViIiwiQ29kZSIsIlN0YXlDdXJyZW50UG9ydHJhaXQiLCJTY2hvb2wiLCJtZW50b3JzaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFRQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxpQkFBYSxFQUFFO0FBQ2JDLGFBQU8sRUFBRSxRQURJO0FBRWJDLG9CQUFjLEVBQUUsUUFGSDtBQUdiQyxnQkFBVSxFQUFFO0FBSEMsS0FGd0I7QUFPdkNDLHNCQUFrQixFQUFFO0FBQ2xCSCxhQUFPLEVBQUU7QUFEUyxLQVBtQjtBQVV2Q0ksYUFBUyxFQUFFO0FBQ1RKLGFBQU8sRUFBRSxTQURBO0FBRVRLLGVBQVMsRUFBRSxNQUZGO0FBR1RDLGdCQUFVLEVBQUUsaUJBSEg7QUFJVEMsZUFBUyxFQUFF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LEVBQUU7QUFUZCxXQWJRLEVBd0JSO0FBQ0VULGlCQUFLLEVBQUUsT0FEVDtBQUVFQyxnQkFBSSxFQUFFTyx5REFGUjtBQUdFTCxnQkFBSSxFQUFFLG9CQUhSO0FBSUVDLGlCQUFLLEVBQUUsQ0FDTCxxQkFESyxFQUVMLGtCQUZLLEVBR0wsYUFISyxDQUpUO0FBU0VLLHNCQUFVLEVBQUU7QUFUZCxXQXhCUTtBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkhELENBcklNOztHQUFNWCxZO1VBU1AxQixTOzs7S0FUTzBCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQzZTExNWQ0YWM4ZjE2OTE3ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgbWFrZVN0eWxlcyxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIENvZGUsXHJcbiAgRmxhc2hPbixcclxuICBTY2hvb2wsXHJcbiAgU3RheUN1cnJlbnRQb3J0cmFpdCxcclxuICBXZWIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25Qcm9wcywgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgU2VydmljZXNDb250YWluZXIgfSBmcm9tIFwiLi9TZXJ2aWNlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge30sXHJcbiAgbWFpbkNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIxcmVtIDBcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIHNlY29uZGFyeUNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIxLjNyZW0gMFwiLFxyXG4gIH0sXHJcbiAgbWFpblRpdGxlOiB7XHJcbiAgICBwYWRkaW5nOiBcIi4zcmVtIDBcIixcclxuICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgM3B4IDNweCAjMDAwN1wiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgYm94U2hhZG93OiBcIjBweCAwcHggMTBweCAjMDAwOVwiLFxyXG5cclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5VGl0bGU6IHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIuMXJlbVwiLFxyXG4gICAgbWFyZ2luOiBcIjJyZW0gMCAzcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgMTBweCAzcHggIzAwMDdcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgfSxcclxuICBzZXJ2aWNlR3JpZDoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIFwiJjo6YmVmb3JlXCI6IHtcclxuICAgICAgY29udGVudDogJ1wiLSBcIicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBJSG9tZVNlcnZpY2VzUHJvcHMge1xyXG4gIHZhcmlhbnRzOiBBbmltYXRpb25Qcm9wc1tcInZhcmlhbnRzXCJdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVNlcnZpY2VzID0gKHsgdmFyaWFudHMgfTogSUhvbWVTZXJ2aWNlc1Byb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbWFpblRpdGxlLFxyXG4gICAgc2Vjb25kYXJ5VGl0bGUsXHJcbiAgICBtYWluQ29udGFpbmVyLFxyXG4gICAgc2Vjb25kYXJ5Q29udGFpbmVyLFxyXG4gICAgcm9vdCxcclxuICAgIHNlcnZpY2VHcmlkLFxyXG4gICAgbGlzdEl0ZW0sXHJcbiAgfSA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9e3Jvb3R9PlxyXG4gICAgICA8Qm94IG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXttYWluVGl0bGV9IHZhcmlhbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgU2VydmljZXNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8R3JpZCBjbGFzc05hbWU9e21haW5Db250YWluZXJ9IGNvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPFNlcnZpY2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgIG1haW5UaXRsZT1cIldlYnNpdGVzXCJcclxuICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTmV4dC5qc1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogRmxhc2hPbixcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibmV4dC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIkV4dHJlbWVseSBGYXN0IFBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRnVsbHkgQ3VzdG9taXphYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiTG93IE1haW50ZW5hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldvcmRwcmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogV2ViLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJ3b3JkcHJlc3MtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJRdWljayBCdWlsZGluZyAvIFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzeSBDdXN0b21pemFiaWxpdHlcIixcclxuICAgICAgICAgICAgICAgICAgXCJUaG91c2FuZHMgb2YgUGx1Z2luc1wiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxTZXJ2aWNlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICBtYWluVGl0bGU9XCJBcHBzXCJcclxuICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3QuanNcIixcclxuICAgICAgICAgICAgICAgIGljb246IENvZGUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcInJlYWN0LXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiTGlnaHRuaW5nIEZhc3QgUGVyZm9ybWFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJGdWxseSBDdXN0b21pemFibGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJNb3N0IFBvcHVsYXIgRnJhbWV3b3JrIChMaWJyYXJ5KVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc2lseSBTY2FsZWFibGVcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdCBOYXRpdmUgKE1vYmlsZSlcIixcclxuICAgICAgICAgICAgICAgIGljb246IFN0YXlDdXJyZW50UG9ydHJhaXQsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcInJlYWN0LW5hdGl2ZS1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8U2VydmljZXNDb250YWluZXJcclxuICAgICAgICAgICAgbWFpblRpdGxlPVwiTWVudG9yc2hpcFwiXHJcbiAgICAgICAgICAgIG1haW5UaXRsZVN0eWxlPXtzZWNvbmRhcnlUaXRsZX1cclxuICAgICAgICAgICAgcm9vdFN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJ9XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgICAgbGlzdEl0ZW1TdHlsZT17bGlzdEl0ZW19XHJcbiAgICAgICAgICAgIHNlcnZpY2VHcmlkU3R5bGU9e3NlcnZpY2VHcmlkfVxyXG4gICAgICAgICAgICBzZXJ2aWNlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhUTUwvQ1NTXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIm1lbnRvcnNoaXAtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJMaWdodG5pbmcgRmFzdCBQZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkZ1bGx5IEN1c3RvbWl6YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIk1vc3QgUG9wdWxhciBGcmFtZXdvcmsgKExpYnJhcnkpXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1lbnRvcnNoaXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIm1lbnRvcnNoaXAtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJTcGVjaWZpY2FsbHkgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzeSBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIlJlYWN0IEJhc2VkXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWVudG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0XCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBTY2hvb2wsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIm1lbnRvcnNoaXAtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJTcGVjaWZpY2FsbHkgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzeSBQcm90b3R5cGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBcIlJlYWN0IEJhc2VkXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWVudG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=