"use strict";
(() => {
var exports = {};
exports.id = 887;
exports.ids = [887];
exports.modules = {

/***/ 9920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4748);
/* harmony import */ var _lib_getCourse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3301);
/* harmony import */ var _lib_getLive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5258);
/* harmony import */ var _lib_getNew__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3559);
/* harmony import */ var _lib_getProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6516);
/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6988);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2279);
/* harmony import */ var _components_Breadcrump__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3898);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1875);
/* harmony import */ var _components_Layout_Panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6940);
/* harmony import */ var _components_Lesson_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7858);
/* harmony import */ var _components_List_Courses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5923);
/* harmony import */ var _components_Live__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1551);
/* harmony import */ var _components_Section_Certifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2632);
/* harmony import */ var _services_Session__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(637);
/* harmony import */ var _services_Student_GetCertificateByStudentService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4362);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Aside__WEBPACK_IMPORTED_MODULE_5__, _services_Session__WEBPACK_IMPORTED_MODULE_14__]);
([_components_Aside__WEBPACK_IMPORTED_MODULE_5__, _services_Session__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const Class = ({ me , live , courses , news , certificate  })=>{
    const { config , profile  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_3__/* .useProfile */ .U)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        config(me);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Panel__WEBPACK_IMPORTED_MODULE_9__/* .LayoutPanel */ .s, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "flex flex-col-reverse lg:flex-row w-full",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col w-full gap-8 p-4 md:p-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrump__WEBPACK_IMPORTED_MODULE_7__/* .Breadcrump */ .B, {
                            path: []
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_List_Courses__WEBPACK_IMPORTED_MODULE_11__/* .Courses */ .c, {
                            courses: courses.filter((course)=>course.liberado == true),
                            onlyReleased: true
                        }),
                        me.user.lesson && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Lesson_Banner__WEBPACK_IMPORTED_MODULE_10__/* .LessonBanner */ .p, {
                            slug: `${me.user.lesson.curso_slug}/${me.user.lesson.modulo_slug}/${me.user.lesson.aula_slug}/${me.user.lesson.componente}/${me.user.lesson.componente_id}`,
                            course: me.user.lesson.curso_nome,
                            lesson: me.user.lesson.aula_titulo,
                            thumb: me.user.lesson.capa
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-6 lg:hidden bg-white py-6 px-4 rounded-mds",
                            children: [
                                news && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col px-4 gap-4 text-gray-800 dark:text-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            className: "flex justify-between font-bold text-xl",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "News"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M19 9l-7 7-7-7"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-col gap-2",
                                            children: news.length > 0 ? news.map((signal)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col gap-2 p-4 rounded-lg text-white bg-theme-blue",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "font-semibold text-lg",
                                                            children: signal.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: signal.description
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: `${signal.link ?? "#"}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "text-theme-red-500",
                                                                children: "Saiba Mais"
                                                            })
                                                        })
                                                    ]
                                                }, signal.id)) : null
                                        })
                                    ]
                                }),
                                live && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col px-4 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            className: "flex justify-between font-bold text-xl",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Live"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M19 9l-7 7-7-7"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-col",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Live__WEBPACK_IMPORTED_MODULE_12__/* .Live */ .v, {
                                                title: live.title,
                                                link: live.link,
                                                thumbnail: live.thumbnail
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Section_Certifications__WEBPACK_IMPORTED_MODULE_13__/* .SectionCertifications */ .q, {
                                    certifications: certificate
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_6__/* .Banner */ .j, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__/* .Footer */ .$, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Aside__WEBPACK_IMPORTED_MODULE_5__/* .Aside */ .x, {
                    live: live,
                    news: news,
                    certificate: certificate
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Class);
const getServerSideProps = (0,_services_Session__WEBPACK_IMPORTED_MODULE_14__/* .withSessionSsr */ .f)(async function({ req , res  }) {
    const user = req.session.user;
    if (user === undefined) {
        res.setHeader("location", "/login");
        res.statusCode = 302;
        res.end();
        return {
            props: {
                user: {},
                me: {},
                live: {}
            }
        };
    }
    return {
        props: {
            user,
            me: await (0,_lib_getProfile__WEBPACK_IMPORTED_MODULE_4__/* .profile */ .N)(user.token),
            live: await (0,_lib_getLive__WEBPACK_IMPORTED_MODULE_15__/* .lastLive */ .p)(user.token, user.username),
            courses: await (0,_lib_getCourse__WEBPACK_IMPORTED_MODULE_16__/* .allCourses */ .i)(user.token),
            news: await (0,_lib_getNew__WEBPACK_IMPORTED_MODULE_17__/* .getNews */ .d)(user.token),
            certificate: await (0,_services_Student_GetCertificateByStudentService__WEBPACK_IMPORTED_MODULE_18__/* .GetCertificateByStudentService */ .B)(user.token)
        }
    };
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3260:
/***/ ((module) => {

module.exports = require("@react-pdf/renderer");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1121:
/***/ ((module) => {

module.exports = require("qrcode");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 8924:
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ 6367:
/***/ ((module) => {

module.exports = require("react-use-audio-player");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2140:
/***/ ((module) => {

module.exports = require("usehooks-ts");

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 1871:
/***/ ((module) => {

module.exports = import("rehype-raw");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,675,952,664,531,756,118,133,988,673,873,82], () => (__webpack_exec__(9920)));
module.exports = __webpack_exports__;

})();