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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/input */ \"(app-pages-browser)/./node_modules/@nextui-org/input/dist/chunk-IR2E3HZF.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SignupForm = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        number: \"\",\n        certification: \"\"\n    });\n    // Handle input changes\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n        console.log(name);\n        console.log(value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"HELLO\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center h-[100vh] w-[100vw]\",\n        style: {\n            backgroundImage: \"url('/images/farmer2.jpg')\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-6xl mb-10 text-white\",\n                    style: {\n                        letterSpacing: \"3px\"\n                    },\n                    children: \"Registration\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"First Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_2__.input_default, {\n                                    type: \"text\",\n                                    id: \"firstName\",\n                                    name: \"firstName\",\n                                    value: formData.firstName,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Last Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_2__.input_default, {\n                                    type: \"text\",\n                                    id: \"lastName\",\n                                    name: \"lastName\",\n                                    value: formData.lastName,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_2__.input_default, {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Number:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_2__.input_default, {\n                                    // type=\"number\"\n                                    errorMessage: \"Please enter a valid phone number\",\n                                    id: \"number\",\n                                    name: \"number\",\n                                    value: formData.number,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Certification:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_2__.input_default, {\n                                    type: \"file\",\n                                    id: \"certification\",\n                                    name: \"certification\",\n                                    value: formData.certification,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-end mt-5 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.button_default, {\n                                type: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singupForm.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignupForm, \"rRuynPil43MVYXwlWzm2INMAY3A=\");\n_c = SignupForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupForm);\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL3Npbmd1cEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBDO0FBQ0M7QUFDSDtBQVl4QyxNQUFNSSxhQUF1Qjs7SUFDM0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFXO1FBQ2pESSxXQUFXO1FBQ1hDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGVBQWM7SUFDaEI7SUFFQSx1QkFBdUI7SUFDdkIsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsTUFBTUcsTUFBTTtRQUNwQ1YsWUFBWTtZQUNWLEdBQUdELFFBQVE7WUFDWCxDQUFDUyxLQUFLLEVBQUVDO1FBQ1Y7UUFDQUUsUUFBUUMsR0FBRyxDQUFDSjtRQUNaRyxRQUFRQyxHQUFHLENBQUNIO0lBQ2Q7SUFFQSxNQUFNSSxlQUFlLENBQUNOO1FBQ3BCQSxNQUFNTyxjQUFjO1FBQ3BCSCxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO1FBQ2JDLE9BQU87WUFDTEMsaUJBQWdCO1FBQ2xCO2tCQUNBLDRFQUFDSDtZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7b0JBQ2JDLE9BQU87d0JBQ0xFLGVBQWM7b0JBQ2hCOzhCQUFHOzs7Ozs7OEJBQ0wsOERBQUNDO29CQUFLQyxVQUFVUjs7c0NBQ2QsOERBQUNFOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQWtCOzs7Ozs7OENBQ2pDLDhEQUFDdEIsNERBQUtBO29DQUNKNEIsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSGYsTUFBSztvQ0FDTEMsT0FBT1YsU0FBU0UsU0FBUztvQ0FDekJ1QixVQUFVbEI7b0NBQ1ZtQixRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNWOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQWtCOzs7Ozs7OENBQ2pDLDhEQUFDdEIsNERBQUtBO29DQUNKNEIsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSGYsTUFBSztvQ0FDTEMsT0FBT1YsU0FBU0csUUFBUTtvQ0FDeEJzQixVQUFVbEI7b0NBQ1ZtQixRQUFROzs7Ozs7Ozs7Ozs7c0NBR1YsOERBQUNWOzRCQUFJQyxXQUFVOzs4Q0FFZiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQWtCOzs7Ozs7OENBQ2pDLDhEQUFDdEIsNERBQUtBO29DQUNKNEIsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSGYsTUFBSztvQ0FDTEMsT0FBT1YsU0FBU0ksS0FBSztvQ0FDckJxQixVQUFVbEI7b0NBQ1ZtQixRQUFROzs7Ozs7Ozs7Ozs7c0NBR1YsOERBQUNWOzRCQUFJQyxXQUFVOzs4Q0FFZiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQWtCOzs7Ozs7OENBQ2pDLDhEQUFDdEIsNERBQUtBO29DQUNKLGdCQUFnQjtvQ0FDaEJnQyxjQUFhO29DQUNiSCxJQUFHO29DQUNIZixNQUFLO29DQUNMQyxPQUFPVixTQUFTSyxNQUFNO29DQUN0Qm9CLFVBQVVsQjtvQ0FDVm1CLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHViw4REFBQ1Y7NEJBQUlDLFdBQVU7OzhDQUVmLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBa0I7Ozs7Ozs4Q0FDakMsOERBQUN0Qiw0REFBS0E7b0NBQ0o0QixNQUFLO29DQUNMQyxJQUFHO29DQUNIZixNQUFLO29DQUNMQyxPQUFPVixTQUFTTSxhQUFhO29DQUM3Qm1CLFVBQVVsQjtvQ0FDVm1CLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHWiw4REFBQ1Y7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNyQiw2REFBTUE7Z0NBQUMyQixNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhDO0dBdEdNeEI7S0FBQUE7QUF3R04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvc2luZ3VwRm9ybS50c3g/NDRhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BuZXh0dWktb3JnL2lucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBEZWZpbmUgdHlwZXMgZm9yIGZvcm0gZmllbGRzXHJcbmludGVyZmFjZSBGb3JtRGF0YSB7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIC8vIG5lZWQgdG8gY2hhbmdlIHRoaXNcclxuICBjZXJ0aWZpY2F0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFNpZ251cEZvcm06IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHtcclxuICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICBsYXN0TmFtZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBudW1iZXI6ICcnLFxyXG4gICAgY2VydGlmaWNhdGlvbjonJ1xyXG4gIH0pO1xyXG5cclxuICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlc1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgY29uc29sZS5sb2coXCJIRUxMT1wiKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bMTAwdmhdIHctWzEwMHZ3XScgXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOlwidXJsKCcvaW1hZ2VzL2Zhcm1lcjIuanBnJylcIlxyXG4gICAgICB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC02eGwgbWItMTAgdGV4dC13aGl0ZSdcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbGV0dGVyU3BhY2luZzpcIjNweFwiXHJcbiAgICAgICAgfX0+UmVnaXN0cmF0aW9uPC9kaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHBiLTUnPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQwIHRleHQtd2hpdGUnPkZpcnN0IE5hbWU6PC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHBiLTUnPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQwIHRleHQtd2hpdGUnPkxhc3QgTmFtZTo8L2Rpdj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubGFzdE5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBwYi01Jz4gXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgdGV4dC13aGl0ZSc+RW1haWw6PC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHBiLTUnPiBcclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00MCB0ZXh0LXdoaXRlJz5OdW1iZXI6PC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgLy8gdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIlBsZWFzZSBlbnRlciBhIHZhbGlkIHBob25lIG51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgbmFtZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5udW1iZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBwYi01Jz4gXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgdGV4dC13aGl0ZSc+Q2VydGlmaWNhdGlvbjo8L2Rpdj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiY2VydGlmaWNhdGlvblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJjZXJ0aWZpY2F0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNlcnRpZmljYXRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWVuZCBtdC01IGZsZXhcIj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07XHJcbiJdLCJuYW1lcyI6WyJJbnB1dCIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJTaWdudXBGb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJudW1iZXIiLCJjZXJ0aWZpY2F0aW9uIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwibGV0dGVyU3BhY2luZyIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJlcnJvck1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/forms/singupForm.tsx\n"));

/***/ })

});