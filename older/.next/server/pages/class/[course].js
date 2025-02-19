"use strict";
(() => {
var exports = {};
exports.id = 258;
exports.ids = [258];
exports.modules = {

/***/ 7039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ GetModulesByCourseSlugService)
/* harmony export */ });
const GetModulesByCourseSlugService = async (slug, token)=>{
    try {
        const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/curso/${slug}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const modules = await response.json();
        return modules;
    } catch (error) {
        console.log(error);
    }
};



/***/ }),

/***/ 1770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ ListModules)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./lib/Context/Profile.tsx
var Profile = __webpack_require__(4748);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Carousel/index.tsx



// Import css files


const SlickArrowLeft = (props)=>{
    const { onClick  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "absolute top-1/2 -left-6 bg-theme-blue text-white rounded-full cursor-pointer -translate-y-1/2",
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiChevronLeft, {
            className: "text-2xl"
        })
    });
};
const SlickArrowRight = (props)=>{
    const { onClick  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "absolute top-1/2 -right-6 bg-theme-blue text-white rounded-full cursor-pointer -translate-y-1/2",
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiChevronRight, {
            className: "text-2xl"
        })
    });
};
const Carousel = ({ children  })=>{
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(SlickArrowRight, {}),
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(SlickArrowLeft, {})
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-3xl 2xl:max-w-7xl mx-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
            ...settings,
            children: children
        })
    });
};


// EXTERNAL MODULE: ./src/components/ProgressCircle/index.tsx
var ProgressCircle = __webpack_require__(6506);
;// CONCATENATED MODULE: ./src/components/List/Modules/index.tsx






const ListModules = ({ modules , product  })=>{
    const { profile  } = (0,Profile/* useProfile */.U)();
    const router = (0,router_.useRouter)();
    const getProfileProduct = profile.products?.filter((data)=>data.product == product.hotmartCode);
    const getOrderDate = getProfileProduct?.length > 0 && getProfileProduct[0].data ? getProfileProduct[0].data.data.purchase.order_date : "";
    const handleNavigation = (slug)=>{
        router.push(`${router.asPath}/${slug}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col md:flex-row justify-between gap-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "flex flex-col leading-none pl-2 mb-1 text-gray-800 dark:text-gray-200",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "font-semibold text-2xl",
                            children: "M\xf3dulos"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Acompanhe aqui o seu progresso"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sm:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Carousel, {
                    children: modules.map((module, position)=>{
                        const progress = module.qtdeAulasConcluidas / module.qtdeAulas * 100;
                        const unlockIn = (date, interval)=>{
                            const order = new Date(date);
                            order.setDate(order.getDate() + interval);
                            return order.getTime();
                        };
                        return unlockIn(getOrderDate, module.diasLiberacao - 1) >= new Date().getTime() ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative group px-2 py-4 hover:scale-105 opacity-70 hover:transition hover:duration-300 hover:ease-in-out hover:opacity-100",
                            children: [
                                module.capa?.url ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: `${"https://cadastro.englishinbrazil.com.br"}${module.capa.url}`,
                                    alt: "Thumbnail",
                                    width: 600,
                                    height: 800,
                                    className: "rounded-md"
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col grow items-center justify-end absolute top-0 bottom-8 left-0 right-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "flex flex-col items-center gap-2 pb-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-10 w-10 text-white",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-white",
                                                        children: `Liberação em ${new Date(unlockIn(getOrderDate, module.diasLiberacao - 1)).toLocaleDateString("pt-BR")}`
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "group-hover:hidden flex items-center justify-center bg-white rounded-full h-12 w-12 font-bold",
                                            children: position
                                        })
                                    ]
                                })
                            ]
                        }, module.id) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative group cursor-pointer px-2 py-4 hover:scale-105 opacity-70 hover:transition hover:duration-300 hover:ease-in-out hover:opacity-100",
                            onClick: ()=>router.push(`${router.asPath}/${module.Slug}`),
                            children: [
                                module.capa?.url ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: `${"https://cadastro.englishinbrazil.com.br"}${module.capa.url}`,
                                    alt: "Thumbnail",
                                    width: 600,
                                    height: 800,
                                    className: "rounded-md"
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col grow items-center justify-end absolute top-0 bottom-8 left-0 right-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "invisible group-hover:visible",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ProgressCircle/* default */.Z, {
                                                progress: progress
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "group-hover:hidden flex items-center justify-center bg-white rounded-full h-12 w-12 font-bold",
                                            children: position
                                        })
                                    ]
                                })
                            ]
                        }, module.id);
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                children: modules.map((module, position)=>{
                    const progress = module.qtdeAulasConcluidas / module.qtdeAulas * 100;
                    const unlockIn = (date, interval)=>{
                        const order = new Date(date);
                        order.setDate(order.getDate() + interval);
                        return order.getTime();
                    };
                    return unlockIn(getOrderDate, module.diasLiberacao - 1) >= new Date().getTime() ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative group px-2 py-4 hover:scale-105 opacity-70 hover:transition hover:duration-300 hover:ease-in-out hover:opacity-100",
                        children: [
                            module.capa?.url ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: `${"https://cadastro.englishinbrazil.com.br"}${module.capa.url}`,
                                alt: "Thumbnail",
                                width: 600,
                                height: 800,
                                className: "rounded-md"
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col grow items-center justify-end absolute top-0 bottom-8 left-0 right-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "flex flex-col items-center gap-2 pb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-10 w-10 text-white",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-white",
                                                    children: `Liberação em ${new Date(unlockIn(getOrderDate, module.diasLiberacao - 1)).toLocaleDateString("pt-BR")}`
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "group-hover:hidden flex items-center justify-center bg-white rounded-full h-12 w-12 font-bold",
                                        children: position
                                    })
                                ]
                            })
                        ]
                    }, module.id) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative group cursor-pointer px-2 py-4 hover:scale-105 opacity-70 hover:transition hover:duration-300 hover:ease-in-out hover:opacity-100",
                        onClick: ()=>router.push(`${router.asPath}/${module.Slug}`),
                        children: [
                            module.capa?.url ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: `${"https://cadastro.englishinbrazil.com.br"}${module.capa.url}`,
                                alt: "Thumbnail",
                                width: 600,
                                height: 800,
                                className: "rounded-md"
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col grow items-center justify-end absolute top-0 bottom-8 left-0 right-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "invisible group-hover:visible",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProgressCircle/* default */.Z, {
                                            progress: progress
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "group-hover:hidden flex items-center justify-center bg-white rounded-full h-12 w-12 font-bold",
                                        children: position
                                    })
                                ]
                            })
                        ]
                    }, module.id);
                })
            })
        ]
    });
};


/***/ }),

/***/ 4574:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4748);
/* harmony import */ var _lib_Module_GetModulesByCourseSlugService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7039);
/* harmony import */ var _lib_getCourse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3301);
/* harmony import */ var _lib_getLive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5258);
/* harmony import */ var _lib_getNew__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3559);
/* harmony import */ var _lib_getProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6516);
/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6988);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2279);
/* harmony import */ var _components_Breadcrump__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3898);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1875);
/* harmony import */ var _components_Layout_Panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6940);
/* harmony import */ var _components_Lesson_Banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7858);
/* harmony import */ var _components_List_Modules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1770);
/* harmony import */ var _components_Section_Certifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2632);
/* harmony import */ var _services_Session__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(637);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Aside__WEBPACK_IMPORTED_MODULE_6__, _services_Session__WEBPACK_IMPORTED_MODULE_14__]);
([_components_Aside__WEBPACK_IMPORTED_MODULE_6__, _services_Session__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const PageClass = ({ user , courses , me , footer , live , news , modules , certificate  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { config , profile  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_4__/* .useProfile */ .U)();
    const { course  } = router.query;
    const [hotmart] = courses.filter((data)=>data.Slug == course);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        config(me);
    }, [
        me
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Panel__WEBPACK_IMPORTED_MODULE_10__/* .LayoutPanel */ .s, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "flex flex-col-reverse lg:flex-row grow",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col w-full gap-8 p-4 md:p-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrump__WEBPACK_IMPORTED_MODULE_8__/* .Breadcrump */ .B, {
                            path: [
                                {
                                    title: "M\xf3dulos",
                                    url: `/class/${course}`
                                }
                            ]
                        }),
                        me.user.lastLessons.filter((lesson)=>lesson.curso_slug == course).map((lesson)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Lesson_Banner__WEBPACK_IMPORTED_MODULE_11__/* .LessonBanner */ .p, {
                                    slug: `${lesson.curso_slug}/${lesson.modulo_slug}/${lesson.aula_slug}/${lesson.componente}/${lesson.componente_id}`,
                                    course: lesson.curso_nome,
                                    lesson: lesson.aula_titulo,
                                    thumb: lesson.capa
                                })
                            });
                        }),
                        modules.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_List_Modules__WEBPACK_IMPORTED_MODULE_12__/* .ListModules */ .A, {
                            modules: modules,
                            product: hotmart
                        }) : null,
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
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_7__/* .Banner */ .j, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Section_Certifications__WEBPACK_IMPORTED_MODULE_13__/* .SectionCertifications */ .q, {
                                    certifications: certificate
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__/* .Footer */ .$, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Aside__WEBPACK_IMPORTED_MODULE_6__/* .Aside */ .x, {
                    live: live,
                    news: news,
                    certificate: certificate,
                    course: course
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageClass);
const getServerSideProps = (0,_services_Session__WEBPACK_IMPORTED_MODULE_14__/* .withSessionSsr */ .f)(async function({ req , res , query  }) {
    const user = req.session.user;
    const { course  } = query;
    if (user === undefined) {
        res.setHeader("location", "/login");
        res.statusCode = 302;
        res.end();
        return {
            props: {
                user: {},
                courses: {},
                me: {},
                modules: []
            }
        };
    }
    return {
        props: {
            user,
            courses: await (0,_lib_getCourse__WEBPACK_IMPORTED_MODULE_15__/* .allCourses */ .i)(user.token),
            me: await (0,_lib_getProfile__WEBPACK_IMPORTED_MODULE_5__/* .profile */ .N)(user.token),
            live: await (0,_lib_getLive__WEBPACK_IMPORTED_MODULE_16__/* .lastLive */ .p)(user.token, user.username),
            news: await (0,_lib_getNew__WEBPACK_IMPORTED_MODULE_17__/* .getNews */ .d)(user.token),
            modules: await (0,_lib_Module_GetModulesByCourseSlugService__WEBPACK_IMPORTED_MODULE_18__/* .GetModulesByCourseSlugService */ .a)(`${course}`, user.token)
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,675,952,664,531,756,118,133,988,673,873,506], () => (__webpack_exec__(4574)));
module.exports = __webpack_exports__;

})();