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

/***/ "(app-pages-browser)/./src/app/Login/actions.tsx":
/*!***********************************!*\
  !*** ./src/app/Login/actions.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   login: function() { return /* binding */ login; }\n/* harmony export */ });\nconst login = ()=>{};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvTG9naW4vYWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFFBQVEsS0FFckIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0xvZ2luL2FjdGlvbnMudHN4PzJlMzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvZ2luID0gKCk9PntcclxuICAgIFxyXG59Il0sIm5hbWVzIjpbImxvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Login/actions.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/forms/singinForm.tsx":
/*!*********************************************!*\
  !*** ./src/components/forms/singinForm.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/input */ \"(app-pages-browser)/./node_modules/@nextui-org/input/dist/chunk-IR2E3HZF.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_Login_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/Login/actions */ \"(app-pages-browser)/./src/app/Login/actions.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SigninForm = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    // Handle input changes\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        (0,_app_Login_actions__WEBPACK_IMPORTED_MODULE_2__.login)(formData.email, formData.password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center h-[100vh] w-[100vw]\",\n        style: {\n            backgroundImage: \"url('/images/farmer.jpg')\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-20\",\n            style: {\n                borderRadius: 50,\n                backgroundColor: \"rgba(211, 211, 211, 0.7)\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-6xl mb-10 text-center text-white\",\n                    style: {\n                        letterSpacing: \"3px\"\n                    },\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-40 text-white\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_3__.input_default, {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    value: formData.password,\n                                    onChange: handleInputChange,\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-end mt-5 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.button_default, {\n                                type: \"submit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\junhu\\\\OneDrive\\\\Documents\\\\GitHub\\\\Team-7\\\\frontend\\\\src\\\\components\\\\forms\\\\singinForm.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SigninForm, \"SNirZ4UoQxg+/FwOtW+kp1K1BqU=\");\n_c = SigninForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SigninForm);\nvar _c;\n$RefreshReg$(_c, \"SigninForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL3NpbmdpbkZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQztBQUNRO0FBQ1Y7QUFDUTtBQVFoRCxNQUFNSyxhQUF1Qjs7SUFDM0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFXO1FBQ2pESyxPQUFPO1FBQ1BDLFVBQVM7SUFDWDtJQUVBLHVCQUF1QjtJQUN2QixNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixNQUFNRyxNQUFNO1FBQ3BDUCxZQUFZO1lBQ1YsR0FBR0QsUUFBUTtZQUNYLENBQUNNLEtBQUssRUFBRUM7UUFDVjtJQUNGO0lBRUEsTUFBTUUsZUFBZSxDQUFDSjtRQUNwQkEsTUFBTUssY0FBYztRQUNwQloseURBQUtBLENBQUNFLFNBQVNFLEtBQUssRUFBRUYsU0FBU0csUUFBUTtJQUN6QztJQUVBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO1FBQ2JDLE9BQU87WUFDTEMsaUJBQWdCO1FBQ2xCO2tCQUNBLDRFQUFDSDtZQUFJQyxXQUFVO1lBQU9DLE9BQU87Z0JBQzNCRSxjQUFhO2dCQUNiQyxpQkFBaUI7WUFDbkI7OzhCQUNBLDhEQUFDTDtvQkFBSUMsV0FBVTtvQkFBd0NDLE9BQU87d0JBQzVESSxlQUFjO29CQUNoQjs4QkFBRzs7Ozs7OzhCQUNILDhEQUFDQztvQkFBS0MsVUFBVVY7O3NDQUNkLDhEQUFDRTs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFrQjs7Ozs7OzhDQUNqQyw4REFBQ2xCLDREQUFLQTtvQ0FDSjBCLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hmLE1BQUs7b0NBQ0xDLE9BQU9QLFNBQVNFLEtBQUs7b0NBQ3JCb0IsVUFBVWxCO29DQUNWbUIsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDWjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFrQjs7Ozs7OzhDQUNqQyw4REFBQ2xCLDREQUFLQTtvQ0FDSjBCLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hmLE1BQUs7b0NBQ0xDLE9BQU9QLFNBQVNHLFFBQVE7b0NBQ3hCbUIsVUFBVWxCO29DQUNWbUIsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDWjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ2pCLDZEQUFNQTtnQ0FBQ3lCLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEM7R0E5RE1yQjtLQUFBQTtBQWdFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9zaW5naW5Gb3JtLnRzeD8zMzRiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQG5leHR1aS1vcmcvaW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIGltYWdlIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vLi4vYXBwL0xvZ2luL2FjdGlvbnMnO1xyXG5cclxuLy8gRGVmaW5lIHR5cGVzIGZvciBmb3JtIGZpZWxkc1xyXG5pbnRlcmZhY2UgRm9ybURhdGEge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgU2lnbmluRm9ybTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6JycsXHJcbiAgfSk7XHJcblxyXG4gIC8vIEhhbmRsZSBpbnB1dCBjaGFuZ2VzXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICBsb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bMTAwdmhdIHctWzEwMHZ3XSdcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoJy9pbWFnZXMvZmFybWVyLmpwZycpXCJcclxuICAgICAgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTIwJyBzdHlsZT17e1xyXG4gICAgICAgIGJvcmRlclJhZGl1czo1MCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIxMSwgMjExLCAyMTEsIDAuNyknXHJcbiAgICAgIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC02eGwgbWItMTAgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZScgc3R5bGU9e3tcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCJcclxuICAgICAgfX0+TG9naW48L2Rpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcGItNSc+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgdGV4dC13aGl0ZSc+RW1haWw8L2Rpdj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHBiLTUnPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQwIHRleHQtd2hpdGUnPlBhc3N3b3JkPC9kaXY+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktZW5kIG10LTUgZmxleFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduaW5Gb3JtO1xyXG4iXSwibmFtZXMiOlsiSW5wdXQiLCJCdXR0b24iLCJSZWFjdCIsInVzZVN0YXRlIiwibG9naW4iLCJTaWduaW5Gb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImxldHRlclNwYWNpbmciLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/forms/singinForm.tsx\n"));

/***/ })

});