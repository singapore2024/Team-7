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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/input */ \"(app-pages-browser)/./node_modules/@nextui-org/input/dist/chunk-IR2E3HZF.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/switch/dist/chunk-VMWQTXAV.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SignupForm = ()=>{\n    _s();\n    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Producer\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        number: \"\",\n        certification: \"\"\n    });\n    // Handle input changes\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n        console.log(name);\n        console.log(value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"HELLO\");\n    };\n    const switchhandler = ()=>{\n        if (role == \"Producer\") {\n            setRole(\"Consumer\");\n        } else {\n            setRole(\"Producer\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center h-[100vh] w-[100vw]\",\n        style: {\n            backgroundImage: \"url('/images/farmer2.jpg')\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col text-center p-10 w-[449px]\",\n            style: {\n                borderRadius: 50,\n                backgroundColor: \"rgba(211, 211, 211, 0.7)\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-6xl mb-10 text-white\",\n                    style: {\n                        letterSpacing: \"3px\"\n                    },\n                    children: \"Registration\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pb-5 flex justify-end text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.switch_default, {\n                        className: \"text-white\",\n                        onValueChange: switchhandler,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white\",\n                            children: role\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"First Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"text\",\n                                    id: \"firstName\",\n                                    name: \"firstName\",\n                                    value: formData.firstName,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Last Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"text\",\n                                    id: \"lastName\",\n                                    name: \"lastName\",\n                                    value: formData.lastName,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Phone Number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    // type=\"number\"\n                                    errorMessage: \"Please enter a valid phone number\",\n                                    id: \"number\",\n                                    name: \"number\",\n                                    value: formData.number,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined),\n                        role === \"Consumer\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Certification:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"file\",\n                                    id: \"certification\",\n                                    name: \"certification\",\n                                    value: formData.certification,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-end mt-5 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.button_default, {\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignupForm, \"Y7mdfqCdGvaGquptU7TaY/a5b/U=\");\n_c = SignupForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupForm);\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL3Npbmd1cEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQztBQUNTO0FBQ1g7QUFZeEMsTUFBTUssYUFBdUI7O0lBQzNCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBUztJQUV6QyxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVc7UUFDakRNLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsZUFBYztJQUNoQjtJQUVBLHVCQUF1QjtJQUN2QixNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFFekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixNQUFNRyxNQUFNO1FBQ3BDVixZQUFZO1lBQ1YsR0FBR0QsUUFBUTtZQUNYLENBQUNTLEtBQUssRUFBRUM7UUFDVjtRQUNBRSxRQUFRQyxHQUFHLENBQUNKO1FBQ1pHLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZDtJQUVBLE1BQU1JLGVBQWUsQ0FBQ047UUFDcEJBLE1BQU1PLGNBQWM7UUFDcEJILFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBQ0EsTUFBTUcsZ0JBQWdCO1FBQ3BCLElBQUdsQixRQUFNLFlBQVc7WUFDbEJDLFFBQVE7UUFDVixPQUFLO1lBQ0hBLFFBQVE7UUFDVjtJQUNGO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFVO1FBQ2JDLE9BQU87WUFDTEMsaUJBQWdCO1FBQ2xCO2tCQUNBLDRFQUFDSDtZQUFJQyxXQUFVO1lBQ2JDLE9BQU87Z0JBQ0xFLGNBQWE7Z0JBQ2JDLGlCQUFpQjtZQUNuQjs7OEJBQ0YsOERBQUNMO29CQUFJQyxXQUFVO29CQUNiQyxPQUFPO3dCQUNMSSxlQUFjO29CQUNoQjs4QkFBRzs7Ozs7OzhCQUNILDhEQUFDTjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ3hCLDZEQUFNQTt3QkFBQ3dCLFdBQVU7d0JBQWFNLGVBQWVSO2tDQUM1Qyw0RUFBQ0M7NEJBQUlDLFdBQVU7c0NBQ1pwQjs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJVCw4REFBQzJCO29CQUFLQyxVQUFVWjs7c0NBQ2QsOERBQUNHOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQWtCOzs7Ozs7OENBQ2pDLDhEQUFDMUIsNERBQUtBO29DQUNKbUMsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSG5CLE1BQUs7b0NBQ0xDLE9BQU9WLFNBQVNFLFNBQVM7b0NBQ3pCMkIsVUFBVXRCO29DQUNWdUIsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDYjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFrQjs7Ozs7OzhDQUNqQyw4REFBQzFCLDREQUFLQTtvQ0FDSm1DLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0huQixNQUFLO29DQUNMQyxPQUFPVixTQUFTRyxRQUFRO29DQUN4QjBCLFVBQVV0QjtvQ0FDVnVCLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHViw4REFBQ2I7NEJBQUlDLFdBQVU7OzhDQUVmLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBa0I7Ozs7Ozs4Q0FDakMsOERBQUMxQiw0REFBS0E7b0NBQ0ptQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIbkIsTUFBSztvQ0FDTEMsT0FBT1YsU0FBU0ksS0FBSztvQ0FDckJ5QixVQUFVdEI7b0NBQ1Z1QixRQUFROzs7Ozs7Ozs7Ozs7c0NBR1YsOERBQUNiOzRCQUFJQyxXQUFVOzs4Q0FFZiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQWtCOzs7Ozs7OENBQ2pDLDhEQUFDMUIsNERBQUtBO29DQUNKLGdCQUFnQjtvQ0FDaEJ1QyxjQUFhO29DQUNiSCxJQUFHO29DQUNIbkIsTUFBSztvQ0FDTEMsT0FBT1YsU0FBU0ssTUFBTTtvQ0FDdEJ3QixVQUFVdEI7b0NBQ1Z1QixRQUFROzs7Ozs7Ozs7Ozs7d0JBR1hoQyxTQUFPLDRCQUNSLDhEQUFDbUI7NEJBQUlDLFdBQVU7OzhDQUNmLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBa0I7Ozs7Ozs4Q0FDakMsOERBQUMxQiw0REFBS0E7b0NBQ0ptQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIbkIsTUFBSztvQ0FDTEMsT0FBT1YsU0FBU00sYUFBYTtvQ0FDN0J1QixVQUFVdEI7b0NBQ1Z1QixRQUFROzs7Ozs7Ozs7Ozs7c0NBSVYsOERBQUNiOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDekIsNkRBQU1BO2dDQUFDa0MsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQztHQTVITTlCO0tBQUFBO0FBOEhOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL3Npbmd1cEZvcm0udHN4PzQ0YWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAbmV4dHVpLW9yZy9pbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgU3dpdGNoIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBEZWZpbmUgdHlwZXMgZm9yIGZvcm0gZmllbGRzXHJcbmludGVyZmFjZSBGb3JtRGF0YSB7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIFxyXG4gIC8vIG5lZWQgdG8gY2hhbmdlIHRoaXNcclxuICBjZXJ0aWZpY2F0aW9uOiBzdHJpbmc7XHJcbn1cclxuY29uc3QgU2lnbnVwRm9ybTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlByb2R1Y2VyXCIpXHJcblxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHtcclxuICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICBsYXN0TmFtZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBudW1iZXI6ICcnLFxyXG4gICAgY2VydGlmaWNhdGlvbjonJ1xyXG4gIH0pO1xyXG5cclxuICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlc1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICBjb25zb2xlLmxvZyhcIkhFTExPXCIpXHJcbiAgfTtcclxuICBjb25zdCBzd2l0Y2hoYW5kbGVyID0gKCk9PntcclxuICAgIGlmKHJvbGU9PVwiUHJvZHVjZXJcIil7XHJcbiAgICAgIHNldFJvbGUoXCJDb25zdW1lclwiKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBzZXRSb2xlKFwiUHJvZHVjZXJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtWzEwMHZoXSB3LVsxMDB2d10nIFxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpcInVybCgnL2ltYWdlcy9mYXJtZXIyLmpwZycpXCJcclxuICAgICAgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIHAtMTAgdy1bNDQ5cHhdJ1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6NTAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIxMSwgMjExLCAyMTEsIDAuNyknXHJcbiAgICAgICAgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTZ4bCBtYi0xMCB0ZXh0LXdoaXRlJ1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCJcclxuICAgICAgICB9fT5SZWdpc3RyYXRpb248L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGItNSBmbGV4IGp1c3RpZnktZW5kIHRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgPFN3aXRjaCBjbGFzc05hbWU9J3RleHQtd2hpdGUnIG9uVmFsdWVDaGFuZ2U9e3N3aXRjaGhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgICAge3JvbGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHBiLTUnPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQwIHRleHQtd2hpdGUnPkZpcnN0IE5hbWU6PC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHBiLTUnPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQwIHRleHQtd2hpdGUnPkxhc3QgTmFtZTo8L2Rpdj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubGFzdE5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBwYi01Jz4gXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgdGV4dC13aGl0ZSc+RW1haWw6PC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHBiLTUnPiBcclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00MCB0ZXh0LXdoaXRlJz5QaG9uZSBOdW1iZXI6PC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgLy8gdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIlBsZWFzZSBlbnRlciBhIHZhbGlkIHBob25lIG51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgbmFtZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5udW1iZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3JvbGU9PT1cIkNvbnN1bWVyXCIgJiYgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcGItNSc+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQwIHRleHQtd2hpdGUnPkNlcnRpZmljYXRpb246PC9kaXY+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBpZD1cImNlcnRpZmljYXRpb25cIlxyXG4gICAgICAgICAgbmFtZT1cImNlcnRpZmljYXRpb25cIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNlcnRpZmljYXRpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktZW5kIG10LTUgZmxleFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTtcclxuIl0sIm5hbWVzIjpbIklucHV0IiwiQnV0dG9uIiwiU3dpdGNoIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNpZ251cEZvcm0iLCJyb2xlIiwic2V0Um9sZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwibnVtYmVyIiwiY2VydGlmaWNhdGlvbiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzd2l0Y2hoYW5kbGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwib25WYWx1ZUNoYW5nZSIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJlcnJvck1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/forms/singupForm.tsx\n"));

/***/ })

});