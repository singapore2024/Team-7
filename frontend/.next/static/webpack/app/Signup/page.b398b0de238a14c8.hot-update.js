"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Signup/page",{

/***/ "(app-pages-browser)/./src/components/forms/singupForm.tsx":
/*!*********************************************!*\
  !*** ./src/components/forms/singupForm.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/input */ \"(app-pages-browser)/./node_modules/@nextui-org/input/dist/chunk-IR2E3HZF.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/switch/dist/chunk-VMWQTXAV.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SignupForm = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        number: \"\",\n        certification: \"\"\n    });\n    // Handle input changes\n    const handleInputChange = (event)=>{\n        _s1();\n        const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Buyer\");\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n        console.log(name);\n        console.log(value);\n    };\n    _s1(handleInputChange, \"w7/pqsC2ExqIkIkNcDYfCIlRR7E=\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"HELLO\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center h-[100vh] w-[100vw]\",\n        style: {\n            backgroundImage: \"url('/images/farmer2.jpg')\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col text-center p-10\",\n            style: {\n                borderRadius: 50,\n                backgroundColor: \"rgba(211, 211, 211, 0.7)\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-6xl mb-10 text-white\",\n                    style: {\n                        letterSpacing: \"3px\"\n                    },\n                    children: \"Registration\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.switch_default, {\n                    children: \"Seller\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"First Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"text\",\n                                    id: \"firstName\",\n                                    name: \"firstName\",\n                                    value: formData.firstName,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Last Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"text\",\n                                    id: \"lastName\",\n                                    name: \"lastName\",\n                                    value: formData.lastName,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    // type=\"number\"\n                                    errorMessage: \"Please enter a valid phone number\",\n                                    id: \"number\",\n                                    name: \"number\",\n                                    value: formData.number,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Certification:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"file\",\n                                    id: \"certification\",\n                                    name: \"certification\",\n                                    value: formData.certification,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-end mt-5 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.button_default, {\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignupForm, \"rRuynPil43MVYXwlWzm2INMAY3A=\");\n_c = SignupForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupForm);\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL3Npbmd1cEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQztBQUNTO0FBQ1g7QUFheEMsTUFBTUssYUFBdUI7OztJQUMzQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQVc7UUFDakRJLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsZUFBYztJQUNoQjtJQUVBLHVCQUF1QjtJQUN2QixNQUFNQyxvQkFBb0IsQ0FBQ0M7O1FBQ3pCLE1BQU8sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUNsQyxNQUFNLEVBQUVhLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdKLE1BQU1LLE1BQU07UUFDcENaLFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ1csS0FBSyxFQUFFQztRQUNWO1FBQ0FFLFFBQVFDLEdBQUcsQ0FBQ0o7UUFDWkcsUUFBUUMsR0FBRyxDQUFDSDtJQUNkO1FBVE1MO0lBV04sTUFBTVMsZUFBZSxDQUFDUjtRQUNwQkEsTUFBTVMsY0FBYztRQUNwQkgsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtRQUNiQyxPQUFPO1lBQ0xDLGlCQUFnQjtRQUNsQjtrQkFDQSw0RUFBQ0g7WUFBSUMsV0FBVTtZQUNiQyxPQUFPO2dCQUNMRSxjQUFhO2dCQUNiQyxpQkFBaUI7WUFDbkI7OzhCQUNGLDhEQUFDTDtvQkFBSUMsV0FBVTtvQkFDYkMsT0FBTzt3QkFDTEksZUFBYztvQkFDaEI7OEJBQUc7Ozs7Ozs4QkFDSCw4REFBQzVCLDZEQUFNQTs4QkFBQzs7Ozs7OzhCQUdWLDhEQUFDNkI7b0JBQUtDLFVBQVVWOztzQ0FDZCw4REFBQ0U7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBa0I7Ozs7Ozs4Q0FDakMsOERBQUN6Qiw0REFBS0E7b0NBQ0ppQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIakIsTUFBSztvQ0FDTEMsT0FBT1osU0FBU0UsU0FBUztvQ0FDekIyQixVQUFVdEI7b0NBQ1Z1QixRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNaOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQWtCOzs7Ozs7OENBQ2pDLDhEQUFDekIsNERBQUtBO29DQUNKaUMsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSGpCLE1BQUs7b0NBQ0xDLE9BQU9aLFNBQVNHLFFBQVE7b0NBQ3hCMEIsVUFBVXRCO29DQUNWdUIsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdWLDhEQUFDWjs0QkFBSUMsV0FBVTs7OENBRWYsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFrQjs7Ozs7OzhDQUNqQyw4REFBQ3pCLDREQUFLQTtvQ0FDSmlDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hqQixNQUFLO29DQUNMQyxPQUFPWixTQUFTSSxLQUFLO29DQUNyQnlCLFVBQVV0QjtvQ0FDVnVCLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHViw4REFBQ1o7NEJBQUlDLFdBQVU7OzhDQUVmLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBa0I7Ozs7Ozs4Q0FDakMsOERBQUN6Qiw0REFBS0E7b0NBQ0osZ0JBQWdCO29DQUNoQnFDLGNBQWE7b0NBQ2JILElBQUc7b0NBQ0hqQixNQUFLO29DQUNMQyxPQUFPWixTQUFTSyxNQUFNO29DQUN0QndCLFVBQVV0QjtvQ0FDVnVCLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHViw4REFBQ1o7NEJBQUlDLFdBQVU7OzhDQUVmLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBa0I7Ozs7Ozs4Q0FDakMsOERBQUN6Qiw0REFBS0E7b0NBQ0ppQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIakIsTUFBSztvQ0FDTEMsT0FBT1osU0FBU00sYUFBYTtvQ0FDN0J1QixVQUFVdEI7b0NBQ1Z1QixRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNaOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDeEIsNkRBQU1BO2dDQUFDZ0MsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQztHQTlHTTVCO0tBQUFBO0FBZ0hOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL3Npbmd1cEZvcm0udHN4PzQ0YWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAbmV4dHVpLW9yZy9pbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgU3dpdGNoIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBEZWZpbmUgdHlwZXMgZm9yIGZvcm0gZmllbGRzXHJcbmludGVyZmFjZSBGb3JtRGF0YSB7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIFxyXG4gIC8vIG5lZWQgdG8gY2hhbmdlIHRoaXNcclxuICBjZXJ0aWZpY2F0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFNpZ251cEZvcm06IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHtcclxuICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICBsYXN0TmFtZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBudW1iZXI6ICcnLFxyXG4gICAgY2VydGlmaWNhdGlvbjonJ1xyXG4gIH0pO1xyXG5cclxuICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlc1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgIFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKFwiQnV5ZXJcIilcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgIGNvbnNvbGUubG9nKFwiSEVMTE9cIilcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtWzEwMHZoXSB3LVsxMDB2d10nIFxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpcInVybCgnL2ltYWdlcy9mYXJtZXIyLmpwZycpXCJcclxuICAgICAgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIHAtMTAnXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czo1MCxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjExLCAyMTEsIDIxMSwgMC43KSdcclxuICAgICAgICB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNnhsIG1iLTEwIHRleHQtd2hpdGUnXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGxldHRlclNwYWNpbmc6XCIzcHhcIlxyXG4gICAgICAgIH19PlJlZ2lzdHJhdGlvbjwvZGl2PlxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICBTZWxsZXJcclxuICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcGItNSc+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgdGV4dC13aGl0ZSc+Rmlyc3QgTmFtZTo8L2Rpdj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcGItNSc+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgdGV4dC13aGl0ZSc+TGFzdCBOYW1lOjwvZGl2PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5sYXN0TmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHBiLTUnPiBcclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00MCB0ZXh0LXdoaXRlJz5FbWFpbDo8L2Rpdj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcGItNSc+IFxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQwIHRleHQtd2hpdGUnPk51bWJlcjo8L2Rpdj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAvLyB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm51bWJlcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHBiLTUnPiBcclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00MCB0ZXh0LXdoaXRlJz5DZXJ0aWZpY2F0aW9uOjwvZGl2PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgaWQ9XCJjZXJ0aWZpY2F0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImNlcnRpZmljYXRpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY2VydGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktZW5kIG10LTUgZmxleFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTtcclxuIl0sIm5hbWVzIjpbIklucHV0IiwiQnV0dG9uIiwiU3dpdGNoIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNpZ251cEZvcm0iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsIm51bWJlciIsImNlcnRpZmljYXRpb24iLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50Iiwicm9sZSIsInNldFJvbGUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImxldHRlclNwYWNpbmciLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiZXJyb3JNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/forms/singupForm.tsx\n"));

/***/ })

});