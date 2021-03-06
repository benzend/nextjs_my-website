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
        lineNumber: 102,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
          lineNumber: 108,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        className: mainContainerItem,
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
          lineNumber: 142,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
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
          lineNumber: 176,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvSG9tZVNlcnZpY2VzLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFpbkNvbnRhaW5lciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsInVwIiwid2lkdGgiLCJtYWluQ29udGFpbmVySXRlbSIsInNlY29uZGFyeUNvbnRhaW5lciIsInNlY29uZGFyeUNvbnRhaW5lckl0ZW0iLCJtYWluVGl0bGUiLCJtYXJnaW5Ub3AiLCJ0ZXh0U2hhZG93IiwidGV4dEFsaWduIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiY29sb3IiLCJjb250cmFzdFRleHQiLCJmb250U2l6ZSIsInNlY29uZGFyeVRpdGxlIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwic2VydmljZUdyaWQiLCJsaXN0SXRlbSIsImNvbnRlbnQiLCJIb21lU2VydmljZXMiLCJ2YXJpYW50cyIsInRpdGxlIiwiaWNvbiIsIkZsYXNoT24iLCJsaW5rIiwiZGVzY3MiLCJXZWIiLCJDb2RlIiwiU3RheUN1cnJlbnRQb3J0cmFpdCIsIlNjaG9vbCIsIm1lbnRvcnNoaXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBUUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsaUJBQWEsRUFBRTtBQUNiQyxhQUFPLEVBQUUsUUFERTtBQUVYQyxvQkFBYyxFQUFFLFFBRkw7QUFHWEMsZ0JBQVUsRUFBRTtBQUhELE9BSVZMLEtBQUssQ0FBQ00sV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FKVSxFQUltQjtBQUM1Qkos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QUksRUFBRSxvQkFIUjtBQUlFQyxpQkFBSyxFQUFFLENBQ0wscUJBREssRUFFTCxrQkFGSyxFQUdMLGFBSEssQ0FKVDtBQVNFSyxzQkFBVSxFQUFFO0FBVGQsV0FiUSxFQXdCUjtBQUNFVCxpQkFBSyxFQUFFLE9BRFQ7QUFFRUMsZ0JBQUksRUFBRU8seURBRlI7QUFHRUwsZ0JBQUksRUFBRSxvQkFIUjtBQUlFQyxpQkFBSyxFQUFFLENBQ0wscUJBREssRUFFTCxrQkFGSyxFQUdMLGFBSEssQ0FKVDtBQVNFSyxzQkFBVSxFQUFFO0FBVGQsV0F4QlE7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThIRCxDQTFJTTs7R0FBTVgsWTtVQVdQaEMsUzs7O0tBWE9nQyxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA1YzU3N2U2YzI0ZGE0MjNhMmYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBDb2RlLFxyXG4gIEZsYXNoT24sXHJcbiAgU2Nob29sLFxyXG4gIFN0YXlDdXJyZW50UG9ydHJhaXQsXHJcbiAgV2ViLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uUHJvcHMsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VzQ29udGFpbmVyIH0gZnJvbSBcIi4vU2VydmljZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHt9LFxyXG4gIG1haW5Db250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiNHJlbSAwXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgcGFkZGluZzogXCI4cmVtIDBcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1haW5Db250YWluZXJJdGVtOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIzLjJyZW0gMFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibGdcIildOiB7XHJcbiAgICAgIHBhZGRpbmc6IFwiNXJlbSAwXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlDb250YWluZXJJdGVtOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWFpblRpdGxlOiB7XHJcbiAgICBwYWRkaW5nOiBcIi4zcmVtIDBcIixcclxuICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgM3B4IDNweCAjMDAwN1wiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgYm94U2hhZG93OiBcIjEwcHggMTBweCA1cHggIzAwMDlcIixcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICBmb250U2l6ZTogXCI1cmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5VGl0bGU6IHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIuMXJlbVwiLFxyXG4gICAgbWFyZ2luOiBcIjJyZW0gMCAzcmVtXCIsXHJcbiAgICB0ZXh0U2hhZG93OiBcIjAgMTBweCAzcHggIzAwMDdcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgZm9udFNpemU6IFwiNHJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlcnZpY2VHcmlkOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCItIFwiJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIElIb21lU2VydmljZXNQcm9wcyB7XHJcbiAgdmFyaWFudHM6IEFuaW1hdGlvblByb3BzW1widmFyaWFudHNcIl07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lU2VydmljZXMgPSAoeyB2YXJpYW50cyB9OiBJSG9tZVNlcnZpY2VzUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBtYWluVGl0bGUsXHJcbiAgICBzZWNvbmRhcnlUaXRsZSxcclxuICAgIG1haW5Db250YWluZXIsXHJcbiAgICBtYWluQ29udGFpbmVySXRlbSxcclxuICAgIHNlY29uZGFyeUNvbnRhaW5lcixcclxuICAgIHNlY29uZGFyeUNvbnRhaW5lckl0ZW0sXHJcbiAgICByb290LFxyXG4gICAgc2VydmljZUdyaWQsXHJcbiAgICBsaXN0SXRlbSxcclxuICB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT17cm9vdH0+XHJcbiAgICAgIDxCb3ggb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e21haW5UaXRsZX0gdmFyaWFudD1cImgyXCI+XHJcbiAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxHcmlkIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lcn0gY29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lckl0ZW19IGl0ZW0+XHJcbiAgICAgICAgICA8U2VydmljZXNDb250YWluZXJcclxuICAgICAgICAgICAgbWFpblRpdGxlPVwiV2Vic2l0ZXNcIlxyXG4gICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyfVxyXG4gICAgICAgICAgICByb290SXRlbVN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJJdGVtfVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJOZXh0LmpzXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBGbGFzaE9uLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCJuZXh0LXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiRXh0cmVtZWx5IEZhc3QgUGVyZm9ybWFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJGdWxseSBDdXN0b21pemFibGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJMb3cgTWFpbnRlbmFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV29yZHByZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBXZWIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIndvcmRwcmVzcy1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlF1aWNrIEJ1aWxkaW5nIC8gUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IEN1c3RvbWl6YWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIlRob3VzYW5kcyBvZiBQbHVnaW5zXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBjbGFzc05hbWU9e21haW5Db250YWluZXJJdGVtfSBpdGVtPlxyXG4gICAgICAgICAgPFNlcnZpY2VzQ29udGFpbmVyXHJcbiAgICAgICAgICAgIG1haW5UaXRsZT1cIkFwcHNcIlxyXG4gICAgICAgICAgICBtYWluVGl0bGVTdHlsZT17c2Vjb25kYXJ5VGl0bGV9XHJcbiAgICAgICAgICAgIHJvb3RTdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVyfVxyXG4gICAgICAgICAgICByb290SXRlbVN0eWxlPXtzZWNvbmRhcnlDb250YWluZXJJdGVtfVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgIGxpc3RJdGVtU3R5bGU9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICBzZXJ2aWNlR3JpZFN0eWxlPXtzZXJ2aWNlR3JpZH1cclxuICAgICAgICAgICAgc2VydmljZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFjdC5qc1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogQ29kZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwicmVhY3QtcHJpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3M6IFtcclxuICAgICAgICAgICAgICAgICAgXCJMaWdodG5pbmcgRmFzdCBQZXJmb3JtYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkZ1bGx5IEN1c3RvbWl6YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIk1vc3QgUG9wdWxhciBGcmFtZXdvcmsgKExpYnJhcnkpXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRWFzaWx5IFNjYWxlYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0IE5hdGl2ZSAoTW9iaWxlKVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogU3RheUN1cnJlbnRQb3J0cmFpdCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwicmVhY3QtbmF0aXZlLXByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NzOiBbXHJcbiAgICAgICAgICAgICAgICAgIFwiU3BlY2lmaWNhbGx5IE1vYmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkVhc3kgUHJvdG90eXBpbmdcIixcclxuICAgICAgICAgICAgICAgICAgXCJSZWFjdCBCYXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXttYWluQ29udGFpbmVySXRlbX0gaXRlbT5cclxuICAgICAgICAgIDxTZXJ2aWNlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICBtYWluVGl0bGU9XCJNZW50b3JzaGlwXCJcclxuICAgICAgICAgICAgbWFpblRpdGxlU3R5bGU9e3NlY29uZGFyeVRpdGxlfVxyXG4gICAgICAgICAgICByb290U3R5bGU9e3NlY29uZGFyeUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcm9vdEl0ZW1TdHlsZT17c2Vjb25kYXJ5Q29udGFpbmVySXRlbX1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICBsaXN0SXRlbVN0eWxlPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgc2VydmljZUdyaWRTdHlsZT17c2VydmljZUdyaWR9XHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSFRNTC9DU1NcIixcclxuICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIkxpZ2h0bmluZyBGYXN0IFBlcmZvcm1hbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiRnVsbHkgQ3VzdG9taXphYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiTW9zdCBQb3B1bGFyIEZyYW1ld29yayAoTGlicmFyeSlcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXNpbHkgU2NhbGVhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWVudG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkphdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgICAgICAgICAgICAgIGljb246IFNjaG9vbCxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwibWVudG9yc2hpcC1wcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjczogW1xyXG4gICAgICAgICAgICAgICAgICBcIlNwZWNpZmljYWxseSBNb2JpbGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJFYXN5IFByb3RvdHlwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiUmVhY3QgQmFzZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtZW50b3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==