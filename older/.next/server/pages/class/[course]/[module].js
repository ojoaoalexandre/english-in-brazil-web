"use strict";
(() => {
var exports = {};
exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 3301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ allCourses)
/* harmony export */ });
const allCourses = async (token)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/cursos`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    const courses = await response.json();
    return courses;
};


/***/ }),

/***/ 4928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4748);
/* harmony import */ var _lib_getCourse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3301);
/* harmony import */ var _lib_getLive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5258);
/* harmony import */ var _lib_getNew__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3559);
/* harmony import */ var _lib_getProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6516);
/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6988);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2279);
/* harmony import */ var _components_Breadcrump__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3898);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1875);
/* harmony import */ var _components_Layout_Panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6940);
/* harmony import */ var _components_ProgressCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6506);
/* harmony import */ var _components_Section_Certifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2632);
/* harmony import */ var _services_Module_GetAllAulasBySlugServide__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9310);
/* harmony import */ var _services_Session__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(637);
/* harmony import */ var _utils_getImage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Aside__WEBPACK_IMPORTED_MODULE_8__, _services_Session__WEBPACK_IMPORTED_MODULE_15__]);
([_components_Aside__WEBPACK_IMPORTED_MODULE_8__, _services_Session__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const color = {
    learningToLearn: "bg-blue-500",
    realEnglish: "bg-theme-blue-dark",
    default: "bg-theme-blue"
};
const PageModule = ({ user , courses , me , footer , live , news , modulo , certificate  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { config , profile  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_6__/* .useProfile */ .U)();
    const { 0: isFiltered , 1: setIsFiltered  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const { course , module  } = router.query;
    const [hotmart] = courses.filter((data)=>data.Slug == course);
    const { 0: lessons , 1: setLessons  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        config(me);
        const group = {};
        if (modulo.attributes.template === "perLine") {
            modulo.attributes.Aulas.map((lesson)=>{
                if (lesson.aula.categoria == null) {
                    return group[Object.keys(group).length] = [
                        lesson
                    ];
                }
                return group[Object.keys(group).length - 1].push(lesson);
            });
        } else {
            group = {
                1: []
            };
            modulo.attributes.Aulas.map((lesson)=>{
                return group["1"].push(lesson);
            });
        }
        setLessons(group);
    }, [
        me
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setIsFiltered(false);
    }, [
        router
    ]);
    const handleFilterGallery = ()=>{
        setIsFiltered(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Panel__WEBPACK_IMPORTED_MODULE_12__/* .LayoutPanel */ .s, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "flex flex-col-reverse lg:flex-row grow",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col w-full gap-8 p-4 md:p-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrump__WEBPACK_IMPORTED_MODULE_10__/* .Breadcrump */ .B, {
                            path: [
                                {
                                    title: "M\xf3dulos",
                                    url: `/class/${course}`
                                },
                                {
                                    title: "Aulas",
                                    url: `/class/${course}/${module}`
                                }
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            children: [
                                modulo.attributes.template === "perLine" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-2 pb-4 dark:text-white",
                                    children: [
                                        lessons ? Object.keys(lessons).map((key, position)=>{
                                            return position % 5 == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: `/class/${course}/${module}#${key}`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "px-4 bg-white dark:bg-theme-gray-900 rounded-full py-1",
                                                    children: [
                                                        Number(key) + 1,
                                                        " - ",
                                                        Number(key) + 5
                                                    ]
                                                })
                                            }, key) : null;
                                        }) : null,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            onClick: ()=>handleFilterGallery(),
                                            className: "px-4 bg-white dark:bg-theme-gray-900 rounded-full py-1 cursor-pointer",
                                            children: "Materiais Complementares"
                                        })
                                    ]
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-col gap-8",
                                    children: lessons ? Object.keys(lessons).map((key)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            id: key,
                                            className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 2xl:gap-4",
                                            children: lessons[key].filter((lesson)=>{
                                                const activitiesComplementary = [
                                                    "learningToLearn",
                                                    "pronunciationDrop"
                                                ];
                                                if (isFiltered) {
                                                    return activitiesComplementary.includes(lesson.aula.categoria);
                                                }
                                                return !activitiesComplementary.includes(lesson.aula.categoria);
                                            }).map((lesson, index)=>{
                                                const newIndex = modulo.attributes.Aulas.filter((lesson)=>{
                                                    const activitiesComplementary = [
                                                        "learningToLearn",
                                                        "pronunciationDrop"
                                                    ];
                                                    return !activitiesComplementary.includes(lesson.aula.categoria);
                                                }).map((lesson)=>lesson.id).indexOf(lesson.id);
                                                const applyChallenge = lesson.aula.tipo === "Secreto" ? modulo.attributes.Aulas.slice(0, modulo.attributes.Aulas.map((lesson)=>lesson.id).indexOf(lesson.id)).reduce((acc, lesson)=>{
                                                    return acc + Number(lesson.aula.progress);
                                                }, 0) / newIndex >= 99.99 : false;
                                                return lesson.aula.tipo !== "Secreto" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `flex relative items-end p-4 text-theme-gray-600 dark:bg-theme-gray-900 rounded-md min-h-[10rem] sm:min-h-[8rem] xl:min-h-[9rem] 2xl:h-44 cursor-pointer hover:scale-105`,
                                                    onClick: ()=>lesson.aula.ativo ? router.push(`${router.asPath}/${lesson.aula.slug}/${lesson.aula.conteudo[0].__component}/${lesson.aula.conteudo[0].id}`) : "",
                                                    children: [
                                                        !lesson.aula.ativo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "z-menu absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineLockClosed, {
                                                                className: "w-10 h-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-menu"
                                                            })
                                                        }) : null,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            src: `${lesson.aula.categoria == null || lesson.aula.categoria == "review" || lesson.aula.thumbnail?.url ? lesson.aula.thumbnail?.url ? (0,_utils_getImage__WEBPACK_IMPORTED_MODULE_16__/* .imageURL */ .q)(lesson.aula.thumbnail?.url) : "/aula/default.jpg" : `/aula/${lesson.aula.categoria}.png`}`,
                                                            layout: "fill",
                                                            className: "object-cover object-left rounded-md",
                                                            alt: lesson.aula.titulo
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute right-7 2xl:right-10 top-7 2xl:top-10",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProgressCircle__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                progress: Number(lesson.aula.progress),
                                                                size: "small"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-col justify-between absolute left-0 bottom-0",
                                                            children: lesson.aula.thumbnail === null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "font-semibold leading-tight text-sm p-4",
                                                                children: lesson.aula.titulo
                                                            }) : null
                                                        })
                                                    ]
                                                }, lesson.id) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `flex relative items-end p-4 text-theme-gray-600 dark:bg-theme-gray-900 rounded-md min-h-[10rem] sm:min-h-[8rem] xl:min-h-[9rem] 2xl:h-44 cursor-pointer hover:scale-105`,
                                                    onClick: ()=>applyChallenge ? router.push(`${router.asPath}/${lesson.aula.slug}/${lesson.aula.conteudo[0].__component}/${lesson.aula.conteudo[0].id}`) : "",
                                                    children: [
                                                        !lesson.aula.ativo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "z-menu absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineLockClosed, {
                                                                className: "w-10 h-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-menu"
                                                            })
                                                        }) : null,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            src: `${lesson.aula.categoria == null || lesson.aula.categoria == "review" || lesson.aula.thumbnail?.url ? lesson.aula.thumbnail?.url ? (0,_utils_getImage__WEBPACK_IMPORTED_MODULE_16__/* .imageURL */ .q)(lesson.aula.thumbnail?.url) : "/aula/default.jpg" : `/aula/${lesson.aula.categoria}.png`}`,
                                                            layout: "fill",
                                                            className: `object-cover object-left rounded-md ${!applyChallenge ? "grayscale" : ""}`,
                                                            alt: lesson.aula.titulo
                                                        }),
                                                        applyChallenge ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute right-7 2xl:right-10 top-7 2xl:top-10",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProgressCircle__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                progress: Number(lesson.aula.progress),
                                                                size: "small"
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute left-1/2 -translate-x-1/2 bottom-7 font-semibold text-white px-4 bg-black rounded-full",
                                                            children: "Desafio"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-col justify-between absolute left-0 bottom-0",
                                                            children: lesson.aula.thumbnail === null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "font-semibold leading-tight text-sm p-4",
                                                                children: lesson.aula.titulo
                                                            }) : null
                                                        })
                                                    ]
                                                }, lesson.id);
                                            })
                                        }, key);
                                    }) : null
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-6 lg:hidden bg-white py-6 px-4 rounded-md dark:bg-theme-gray-900",
                            children: [
                                news.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                            children: news.map((signal)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col gap-2 p-4 rounded-lg text-white bg-theme-blue",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "font-semibold text-lg",
                                                            children: signal.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: signal.description
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: `${signal.link ?? "#"}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "text-theme-red-500",
                                                                children: "Saiba Mais"
                                                            })
                                                        })
                                                    ]
                                                }, signal.id))
                                        })
                                    ]
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_9__/* .Banner */ .j, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Section_Certifications__WEBPACK_IMPORTED_MODULE_14__/* .SectionCertifications */ .q, {
                                    certifications: certificate
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__/* .Footer */ .$, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Aside__WEBPACK_IMPORTED_MODULE_8__/* .Aside */ .x, {
                    live: live,
                    news: news,
                    certificate: certificate
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageModule);
const getServerSideProps = (0,_services_Session__WEBPACK_IMPORTED_MODULE_15__/* .withSessionSsr */ .f)(async function({ req , res , query  }) {
    const user = req.session.user;
    const { course , module  } = query;
    if (user === undefined) {
        res.setHeader("location", "/login");
        res.statusCode = 302;
        res.end();
        return {
            props: {
                user: {},
                courses: {},
                me: {},
                live: null,
                news: {},
                modules: {},
                certificate: {}
            }
        };
    }
    return {
        props: {
            user,
            courses: await (0,_lib_getCourse__WEBPACK_IMPORTED_MODULE_17__/* .allCourses */ .i)(user.token),
            me: await (0,_lib_getProfile__WEBPACK_IMPORTED_MODULE_7__/* .profile */ .N)(user.token),
            live: await (0,_lib_getLive__WEBPACK_IMPORTED_MODULE_18__/* .lastLive */ .p)(user.token, user.username),
            news: await (0,_lib_getNew__WEBPACK_IMPORTED_MODULE_19__/* .getNews */ .d)(user.token),
            modulo: await (0,_services_Module_GetAllAulasBySlugServide__WEBPACK_IMPORTED_MODULE_20__/* .GetAllAulasByModuloSlugService */ .R)(`${module}`, user.token)
        }
    };
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ GetAllAulasByModuloSlugService)
/* harmony export */ });
const GetAllAulasByModuloSlugService = async (slug, token)=>{
    try {
        const response = await fetch(`${process.env.HOST_API}/api/modulo/auth/${slug}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const aulas = await response.json();
        return aulas.data;
    } catch (error) {
        return error;
    }
};



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

/***/ 1111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,675,952,664,531,756,118,133,988,673,506], () => (__webpack_exec__(4928)));
module.exports = __webpack_exports__;

})();