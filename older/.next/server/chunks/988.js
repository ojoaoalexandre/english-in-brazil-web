"use strict";
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 6988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Aside)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4748);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2279);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5869);
/* harmony import */ var _Live__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1551);
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8845);
/* harmony import */ var _Ranking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9997);
/* harmony import */ var _Section_Certifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2632);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Newsletter__WEBPACK_IMPORTED_MODULE_6__]);
_Newsletter__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const newMocked = {
    id: 1,
    title: "Hot news just in!",
    description: "Secret Class",
    link: "",
    content: `Se você estava achando que precisava revisar os módulos iniciais, ou estava querendo de um empurrãozinho para assistir às aulas dos módulos mais avançados, chegou a hora!!
Temos uma super novidade no Curso English in Brazil!

Agora, a partir do Módulo 2, o curso tem aulas especiais e temáticas dos mais variados assuntos, ministradas 100% em inglês pelos Teachers do Team EiB!

Nossos teachers elaboraram estas aulas com muito carinho para dar aquele incentivo nos estudos e trazer o inglês cada vez mais para o nosso dia-a-dia!! E prometemos que os os Teachers Fábio, Isabel, Jaque, Laura e Rodrigo capricharam muito!
Mas atenção! Essas aulas são secretas e estarão inicialmente bloqueadas, ao final de cada módulo. Para conseguir desbloquear cada uma, você precisa finalizar todas as aulas do módulo em que ela se encontra, já que elas respeitam o nível de cada módulo e vão avançando em nível de dificuldade, como um desafio-bônus para incentivar seus estudos! Tem aula sobre música, sobre cabeleireiro, na academia… a cada módulo, uma surpresa!

E se você já terminou as aulas, que tal voltar aos módulos anteriores para revisar e, de quebra, se desafiar e aprender coisas novas?
Gostou da novidade? Aproveite as aulas novas e deixe seu feedback nos comentários!

Estamos com vocês!! Bons estudos!!`,
    thumb: {
        url: "/secret_class.jpg",
        local: true
    }
};
const newMocked2 = {
    id: 2,
    title: "Queremos ouvir voc\xea!",
    description: "Pesquisa de Satisfa\xe7\xe3o",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfO8BgoAyu91KXxO5ceT1So3cjHKh8GaRHpPxU9ZnK4w7wXvA/viewform?usp=sf_link ",
    content: `Estamos sempre buscando maneiras de melhorar o nosso curso English in Brazil, feito com muito carinho e dedicação para você. Por isso, queremos ouvir a pessoa mais importante: você - o aluno English in Brazil.

Pedimos a gentileza de responder este questionário sobre o funcionamento e oferecimento das aulas ao vivo do Conversation Club. Não são muitas perguntas, você consegue responder rapidinho 😉

Sua opinião é muito importante para nós! Thank you very much!

Carina`,
    thumb: {
        url: "/pesquisa.png",
        local: true
    }
};
const Aside = ({ live , news , certificate , course  })=>{
    const { profile  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_2__/* .useProfile */ .U)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full bg-white dark:bg-theme-gray-900 border border-gray-200 dark:border-gray-900 pb-4 lg:max-w-sm shrink-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col grow gap-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_4__/* .Header */ .h, {}),
                course === "english-in-brazil-trial" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden lg:flex flex-col px-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "https://eibrazil.com/trialwapla",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "h-36 shadow-xl rounded-md",
                            target: "_blank",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex min-h-full min-w-full relative z-base",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    src: "/banner_whatsapp.jpg",
                                    alt: "",
                                    className: "rounded-lg object-cover object-top",
                                    layout: "fill",
                                    quality: 100
                                })
                            })
                        })
                    })
                }) : null,
                course === "curso-eib" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden lg:flex flex-col gap-2 px-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Newsletter__WEBPACK_IMPORTED_MODULE_6__/* .Newsletter */ .m, {
                                ...newMocked
                            }, newMocked.id)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden lg:flex flex-col gap-2 px-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Newsletter__WEBPACK_IMPORTED_MODULE_6__/* .Newsletter */ .m, {
                                ...newMocked2
                            }, newMocked2.id)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden lg:flex flex-col gap-2 px-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "https://open.spotify.com/playlist/2JIqQZl9NOP8wx8w8bdHkV?si=OOXhwgKOQMm5zKoSjx-P9w&pi=u-mPieW963SS2c",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "h-36 shadow-xl rounded-md",
                                    target: "_blank",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex min-h-full min-w-full relative z-base",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            src: "/spotify.jpg",
                                            alt: "",
                                            className: "rounded-lg object-cover object-top",
                                            layout: "fill",
                                            quality: 100
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }) : null,
                news && news.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "hidden lg:flex flex-col px-4 gap-4 text-gray-800 dark:text-gray-200",
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
                            children: news.length > 0 ? news.map((signal)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Newsletter__WEBPACK_IMPORTED_MODULE_6__/* .Newsletter */ .m, {
                                    ...signal
                                }, signal.id)) : null
                        })
                    ]
                }),
                live && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "hidden lg:flex flex-col px-4 gap-4 text-gray-800 dark:text-gray-200 z-base",
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
                            className: "flex flex-col z-base",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Live__WEBPACK_IMPORTED_MODULE_5__/* .Live */ .v, {
                                title: live.title,
                                link: live.link,
                                thumbnail: live.thumbnail
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Ranking__WEBPACK_IMPORTED_MODULE_7__/* .Ranking */ .S, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden lg:flex flex-col",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Section_Certifications__WEBPACK_IMPORTED_MODULE_8__/* .SectionCertifications */ .q, {
                        certifications: certificate
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden lg:flex flex-col",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Banner__WEBPACK_IMPORTED_MODULE_3__/* .Banner */ .j, {})
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Banner = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "flex flex-col px-4 items-center"
    });
};


/***/ }),

/***/ 1551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ Live)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Live = ({ title , description , link , thumbnail , published , tags =[]  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `${link}` ?? 0,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "h-36 shadow-xl",
            target: "_blank",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex min-h-full min-w-full relative z-base",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: `${"https://cadastro.englishinbrazil.com.br"}${thumbnail}`,
                        alt: description,
                        className: "rounded-lg object-contain object-top",
                        layout: "fill",
                        quality: 100
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bg-gradient-to-t from-black w-full h-full rounded-lg hover:opacity-50"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute bottom-2 left-2 text-white px-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs",
                                children: published
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-semibold max-w-md",
                                children: title
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 8845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ Newsletter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6718);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Markdown__WEBPACK_IMPORTED_MODULE_3__]);
_Markdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Newsletter = ({ title , description , content , link , thumb  })=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            thumb?.url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative h-32 w-full cursor-pointer",
                onClick: ()=>setShow(!show),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: `${thumb.local ? "" : "https://cadastro.englishinbrazil.com.br"}${thumb?.url}`,
                    layout: "fill",
                    className: "object-cover rounded-md",
                    alt: "Thumbnail"
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-2 p-4 rounded-lg text-white bg-theme-blue cursor-pointer",
                onClick: ()=>setShow(!show),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "font-semibold text-lg",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: description
                    })
                ]
            }),
            show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-theme-gray-900 bg-opacity-30 z-modal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white max-w-2xl rounded-md text-black",
                    children: [
                        thumb?.url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative h-40 w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: `${thumb.local ? "" : "https://cadastro.englishinbrazil.com.br"}${thumb?.url}`,
                                layout: "fill",
                                className: "object-cover rounded-tl-md rounded-tr-md",
                                alt: "Thumbnail"
                            })
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "font-bold",
                                    children: title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_3__/* .Markdown */ .U, {
                                    children: content
                                }),
                                link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: link,
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        className: "text-theme-red-500 font-semibold",
                                        children: "Acesse o link aqui"
                                    })
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "px-4 py-2 rounded-md bg-gray-300",
                                        onClick: ()=>setShow(!show),
                                        children: "Fechar"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }) : null
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Ranking)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7005);




const ranking = [
    {
        id: 1,
        name: "Alexandre Bekor",
        xp: "1490"
    },
    {
        id: 2,
        name: "Alexandre Bekor",
        xp: "1490"
    },
    {
        id: 3,
        name: "Alexandre Bekor",
        xp: "1490"
    },
    {
        id: 4,
        name: "Alexandre Bekor",
        xp: "1490"
    },
    {
        id: 5,
        name: "Alexandre Bekor",
        xp: "1490"
    }
];
const Ranking = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children:  false && /*#__PURE__*/ 0
    });
};


/***/ }),

/***/ 2632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* binding */ SectionCertifications)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: ./src/utils/getImage.ts
var getImage = __webpack_require__(2810);
// EXTERNAL MODULE: external "@react-pdf/renderer"
var renderer_ = __webpack_require__(3260);
// EXTERNAL MODULE: external "qrcode"
var external_qrcode_ = __webpack_require__(1121);
var external_qrcode_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./src/components/CertificatePDF/index.tsx
var CertificatePDF = __webpack_require__(9133);
;// CONCATENATED MODULE: ./src/components/CertificateGenerator/index.tsx





const CertificateGenerator = ({ templatePath , studentId , studentName , teamId  })=>{
    const urlQRCode = external_qrcode_default().toDataURL(`${"https://app.englishinbrazil.com.br"}/me/certifications/${studentId}/${teamId}`);
    return /*#__PURE__*/ jsx_runtime_.jsx(renderer_.PDFDownloadLink, {
        document: /*#__PURE__*/ jsx_runtime_.jsx(CertificatePDF/* CertificatePDF */.d, {
            templatePath: templatePath,
            studentName: studentName,
            urlQRCode: urlQRCode
        }),
        children: ({ loading  })=>{
            return loading ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Loading..."
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-2 px-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFileEarmarkPdf, {
                        className: "w-4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Download"
                    })
                ]
            });
        }
    });
};


;// CONCATENATED MODULE: ./src/components/Section/Certifications/index.tsx





const SectionCertifications = ({ certifications  })=>{
    return certifications && certifications.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "flex flex-col px-4 gap-4 text-gray-800 dark:text-gray-200 py-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "flex justify-between font-bold text-xl",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Meus Certificados"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiChevronDown, {
                        className: "w-6 h-6"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "flex flex-col gap-4",
                children: certifications?.map((certificate)=>{
                    return certificate.completed > 75 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "flex rounded-md items-center bg-gray-100 dark:bg-theme-gray-600 gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-20 h-16",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: (0,getImage/* imageURL */.q)(certificate.templateCertificate),
                                    layout: "fill"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "font-semibold pl-2",
                                        children: certificate.course_name
                                    }),
                                    certificate?.templateCertificate ? /*#__PURE__*/ jsx_runtime_.jsx(CertificateGenerator, {
                                        templatePath: certificate.templateCertificate,
                                        studentId: certificate.studentId.toString(),
                                        studentName: certificate.studentName,
                                        teamId: certificate.teamId.toString()
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xs pl-2",
                                        children: "Seu progresso est\xe1 abaixo de 75%"
                                    })
                                ]
                            })
                        ]
                    }, certificate.course_id) : null;
                })
            })
        ]
    }) : null;
};



/***/ }),

/***/ 2810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ imageURL)
/* harmony export */ });
const imageURL = (path)=>{
    return path ? `${"https://cadastro.englishinbrazil.com.br"}${path}` : null;
};



/***/ })

};
;