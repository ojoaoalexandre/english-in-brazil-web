"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 1034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_Session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7840);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_Session__WEBPACK_IMPORTED_MODULE_0__]);
_services_Session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const User = async (req, res)=>{
    if (req.session.user) {
        res.json({
            ...req.session.user,
            isLoggedIn: true
        });
    } else {
        res.json({
            isLoggedIn: false,
            username: "",
            name: "",
            token: ""
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_services_Session__WEBPACK_IMPORTED_MODULE_0__/* .withSessionRoute */ .j)(User));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7840:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ withSessionRoute)
/* harmony export */ });
/* unused harmony export withSessionSsr */
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD || "process.env.SECRET_COOKIE_PASSWORD",
    cookieName: "next-session",
    cookieOptions: {
        secure: false
    }
};
function withSessionRoute(handler) {
    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(handler, sessionOptions);
}
function withSessionSsr(handler) {
    return withIronSessionSsr(handler, sessionOptions);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534], () => (__webpack_exec__(1034)));
module.exports = __webpack_exports__;

})();