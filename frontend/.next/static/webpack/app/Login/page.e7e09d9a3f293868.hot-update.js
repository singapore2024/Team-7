"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Login/page",{

/***/ "(app-pages-browser)/./src/components/forms/singinForm.tsx":
/*!*********************************************!*\
  !*** ./src/components/forms/singinForm.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/input */ \"(app-pages-browser)/./node_modules/@nextui-org/input/dist/chunk-IR2E3HZF.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SigninForm = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    // Handle input changes\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-6xl mb-10\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex pb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-40\",\n                                children: \"email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_2__.input_default, {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleInputChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex pb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-40\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_2__.input_default, {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: handleInputChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-end mt-5 flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.button_default, {\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SigninForm, \"SNirZ4UoQxg+/FwOtW+kp1K1BqU=\");\n_c = SigninForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SigninForm);\nvar _c;\n$RefreshReg$(_c, \"SigninForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL3NpbmdpbkZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBDO0FBQ0M7QUFDSDtBQVF4QyxNQUFNSSxhQUF1Qjs7SUFDM0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFXO1FBQ2pESSxPQUFPO1FBQ1BDLFVBQVM7SUFDWDtJQUVBLHVCQUF1QjtJQUN2QixNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixNQUFNRyxNQUFNO1FBQ3BDUCxZQUFZO1lBQ1YsR0FBR0QsUUFBUTtZQUNYLENBQUNNLEtBQUssRUFBRUM7UUFDVjtJQUNGO0lBRUEsTUFBTUUsZUFBZSxDQUFDSjtRQUNwQkEsTUFBTUssY0FBYztJQUN0QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQWlCOzs7Ozs7MEJBQ2hDLDhEQUFDQztnQkFBS0MsVUFBVUw7O2tDQUNkLDhEQUFDRTt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFPOzs7Ozs7MENBQ3RCLDhEQUFDakIsNERBQUtBO2dDQUNKb0IsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSFYsTUFBSztnQ0FDTEMsT0FBT1AsU0FBU0UsS0FBSztnQ0FDckJlLFVBQVViO2dDQUNWYyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNQO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQU87Ozs7OzswQ0FDdEIsOERBQUNqQiw0REFBS0E7Z0NBQ0pvQixNQUFLO2dDQUNMQyxJQUFHO2dDQUNIVixNQUFLO2dDQUNMQyxPQUFPUCxTQUFTRyxRQUFRO2dDQUN4QmMsVUFBVWI7Z0NBQ1ZjLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ1A7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNoQiw2REFBTUE7NEJBQUNtQixNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQztHQW5ETWhCO0tBQUFBO0FBcUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL3NpbmdpbkZvcm0udHN4PzMzNGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAbmV4dHVpLW9yZy9pbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BuZXh0dWktb3JnL3JlYWN0JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gRGVmaW5lIHR5cGVzIGZvciBmb3JtIGZpZWxkc1xyXG5pbnRlcmZhY2UgRm9ybURhdGEge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgU2lnbmluRm9ybTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6JycsXHJcbiAgfSk7XHJcblxyXG4gIC8vIEhhbmRsZSBpbnB1dCBjaGFuZ2VzXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTZ4bCBtYi0xMCc+TG9naW48L2Rpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcGItNSc+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAnPmVtYWlsPC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBwYi01Jz4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00MCc+UGFzc3dvcmQ8L2Rpdj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1lbmQgbXQtNSBmbGV4XCI+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25pbkZvcm07XHJcbiJdLCJuYW1lcyI6WyJJbnB1dCIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJTaWduaW5Gb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/forms/singinForm.tsx\n"));

/***/ })

});