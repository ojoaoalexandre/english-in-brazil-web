"use strict";
exports.id = 118;
exports.ids = [118];
exports.modules = {

/***/ 7005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/avatar.2c79519a.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42mMAgbiMVk234IqDjv5lv0AYyD4EEgNLJuW0a3qFVb2raJj2/8zFa/9AGMQGiYHkGGLSWg5aeBT937Bt/8+P3779//jtK5gNEgPJMUSlNP2y9Cz+v+fgyX+v3n/4//rDh/97Dp38ZwlUEJXS/IshMrnpl71v6f/la3f8A0m+fPf+//ylG/85BZT/jwDKgRQcBDrqv3tI5c/HL17+v37n/j8pk6yfvpHV/8OTGg8yqFjlaOZXTHgLNPb/8zdv/z95+er/ll2H/+eW9b3VdciD+OTlu3ca7z5/PghU8OvF27e/QGygaWBJAAWxnCsOcOsnAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 3753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const AvatarWrapper = {
    size: {
        xsmall: "8",
        small: "10",
        medium: "14",
        big: "20"
    }
};
const Avatar = ({ title ="Avatar" , path ="/avatar.png" , size ="medium"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `flex w-${AvatarWrapper.size[size]} shrink-0 items-center rounded-full bg-theme-blue dark:bg-theme-red-500`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: path ?? "/avatar.png",
            alt: title,
            width: 80,
            height: 80,
            className: "rounded-full object-contain"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);


/***/ }),

/***/ 3898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ Breadcrump)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Breadcrump = ({ path  })=>{
    const { length  } = path;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full gap-2 items-center p-4 dark:border-gray-700 text-gray-500 rounded-md bg-white dark:bg-theme-gray-900",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6 text-theme-blue-2 dark:text-gray-200",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5 text-theme-blue-2 dark:text-gray-200",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 3,
                    d: "M9 5l7 7-7 7"
                })
            }),
            path && path.map((item, key)=>{
                // remove caracteres
                let text = item.title?.replace(/[-]/g, " ");
                // capitalize caracteres
                text = text?.replace(/\w\S*/g, (text)=>text.replace(/^\w/, (text)=>text.toUpperCase()));
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `${item.url}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `text-theme-red-500 ${key === length - 1 ? "font-bold" : "font-semibold"} `,
                                children: text
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5 text-theme-blue-2 dark:text-gray-200",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    d: "M9 5l7 7-7 7"
                                })
                            })
                        ]
                    })
                }, key);
            })
        ]
    });
};


/***/ }),

/***/ 2401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6367);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_audio_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9045);




const ButtonAudioPlayer = ({ url  })=>{
    const { 0: track , 1: setTrack  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { togglePlayPause , playing , load  } = (0,react_use_audio_player__WEBPACK_IMPORTED_MODULE_2__.useAudioPlayer)({
        autoplay: false,
        format: "mp3"
    });
    const handleLoadTrack = ()=>{
        track ? setTrack("") : setTrack(url);
        togglePlayPause();
        load({
            src: `${"https://cadastro.englishinbrazil.com.br"}${url}`,
            autoplay: true,
            onend: ()=>setTrack("")
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        onClick: handleLoadTrack,
        children: playing && track == url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            name: "pause"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            name: "play"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonAudioPlayer);


/***/ }),

/***/ 5869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4748);
/* harmony import */ var _lib_Context_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4418);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3753);





const Header = ()=>{
    const { profile , toggleMenuAside  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_2__/* .useProfile */ .U)();
    const { isDarkMode , toggle  } = (0,_lib_Context_Theme__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .F)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "flex grow max-h-20 m-2 rounded-md justify-between p-2 gap-2 dark:bg-theme-gray-900",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "flex items-center gap-2 grow rounded-md p-2 bg-gray-100 dark:bg-theme-gray-600",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: toggleMenuAside,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    title: profile.user.username,
                                    path: profile.user.avatar
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/setting",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "absolute bottom-0 -right-1 rounded-full bg-gray-100 dark:bg-theme-gray-600 p-0.5",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-4 w-4 text-gray-400",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col leading-none items-end text-gray-600 dark:text-gray-200",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-semibold text-sm text-right",
                                children: profile.user.name
                            }),
                             false && /*#__PURE__*/ 0
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-4 items-center justify-center px-2 rounded-md bg-gray-100 dark:bg-theme-gray-600",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: toggle,
                        children: isDarkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-7 w-7 text-gray-800 dark:text-gray-200",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-7 w-7 text-gray-800",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/notifications",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-7 w-7 text-gray-800 dark:text-gray-200",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        })
                                    }),
                                    Object.keys(profile.user.notifications).length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "flex absolute -top-1 -right-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "relative flex rounded-full h-4 w-4 bg-red-500 items-center text-xs text-white justify-center",
                                                children: Object.keys(profile.user.notifications).length
                                            })
                                        ]
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const iconSummary = {
    microphone: {
        viewBox: "0 0 20 20",
        svg: `<path
    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
    clipRule="evenodd"
  />`
    },
    play: {
        viewBox: "0 0 60 60",
        svg: `<path
    fill="#e94653"
    d="M100,930a30,30,0,1,1-30,30A30,30,0,0,1,100,930Zm-5.985,38.742a1.207,1.207,0,0,0,.763,1.1,1.465,1.465,0,0,0,1.473-.082l13.14-8.683a1.371,1.371,0,0,0-.009-2.311l-13.176-8.55a1.455,1.455,0,0,0-1.471-.068,1.289,1.289,0,0,0-.755,1.165Z"
    transform="translate(-70 -930)"/>`
    },
    pause: {
        viewBox: "0 0 275.725 275.725",
        svg: `<path
    fill="#e94653"
    d="M137.862,0C61.726,0,0,61.726,0,137.862c0,76.14,61.726,137.862,137.862,137.862c76.139,0,137.862-61.723,137.862-137.862    C275.725,61.726,214.001,0,137.862,0z M114.26,188.856c0,11.967-7.925,21.655-17.704,21.655c-9.776,0-17.704-9.688-17.704-21.655    V100.65c0-11.957,7.927-21.655,17.704-21.655c9.779,0,17.704,9.698,17.704,21.655V188.856z M196.877,188.856    c0,11.967-7.933,21.655-17.704,21.655c-9.771,0-17.698-9.688-17.698-21.655V100.65c0-11.957,7.928-21.655,17.698-21.655    c9.776,0,17.704,9.698,17.704,21.655V188.856z"
  />`
    }
};
const Icon = ({ name , color , size  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#fffff",
        viewBox: iconSummary[name].viewBox,
        width: "30px",
        height: "30px",
        dangerouslySetInnerHTML: {
            __html: iconSummary[name].svg
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 6940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ LayoutPanel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./lib/Context/Profile.tsx
var Profile = __webpack_require__(4748);
// EXTERNAL MODULE: ./lib/Context/Theme.tsx
var Theme = __webpack_require__(4418);
;// CONCATENATED MODULE: ./public/insignia-1.png
/* harmony default export */ const insignia_1 = ({"src":"/_next/static/media/insignia-1.0f7414cb.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArUlEQVR42oWP3Q2CQBCE55aNwR9CSPBNrcAnu7ASbclGLMUeiKIiRsLt3q1QAZNMMg9fMjOYkgu38xamJVEM2neUUBRnKoiSmWnF5PQyYMcoPXgGQLWzKDVMNjC9sv+1aF8NmvtDi3XOWT7TJIlmwQMWwEwKguBZv5EugOVyhcQBiB5uBIgERTnH/rDjdEEw6dnUO2cKG8xD92kIZZpR8J8v8TgSQcwkQ9Rq8uYfRIphXZ5PIckAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.41e5218a.png","height":107,"width":100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA4klEQVR42mOAgVD/qRphwVP1owOmKID4OfETGcESXp7TguVUZ3kzMCyWYhCeY+bnMS0eLOEfNM3KhGFm0NGLOeZXLqfF/r/FoMvAsEA/zH+qEwOD53y/h0bRbg9Toqb9/y/KWZ3XF89gPN882GNqJAOD7X/W5+6h8a8sghoZGBgYrpmkhN7xSLBjcF4vxsDgvoxjm3OF0Gu3wOkv3ENWvnXzn3jOOVOIwX0pJ8M210pmBtfVfOtdq4Weu4S6n3LNFWNw28k537WJlQEEZrs2szK4zucDc1xXcK90rWdhYGBgAAAXKkX+HvvE7wAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/logoDark.png
/* harmony default export */ const logoDark = ({"src":"/_next/static/media/logoDark.fc5076fc.png","height":155,"width":165,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAd0lEQVR42h2JvQnCYAAFX76IiqCIRNB0qSWFps4AgiAINlrYqX0mcA4XSJkFcy8/XHV3coS85kRB4mDJIvOXnJSrL4zhTd7L3VvOZHLpgh8vUj4ceco7ZjROLFfsOYiojX2j5u+KORNZrJhS8mDBkiAGNsTDcEAdAxlKOjBfWFkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/Menu/Mobile/index.tsx




const Mobile = ()=>{
    const { profile  } = (0,Profile/* useProfile */.U)();
    const router = (0,router_.useRouter)();
    const logout = async ()=>{
        await fetch(`/api/logout`, {
            method: "GET"
        });
        router.push("/login");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "md:hidden z-menu fixed top-auto bottom-0 p-2 w-full sm:w-3/4 sm:left-1/2 transition-all duration-500 sm:-translate-x-1/2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "flex justify-evenly py-2 bg-theme-blue rounded-md text-white shadow-lg px-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "flex-grow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex flex-col hover:bg-theme-blue-dark rounded-md p-2 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-8 w-8 flex-grow",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1,
                                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xs font-thin tracking-wider",
                                    children: "In\xedcio"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "flex-grow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/lives",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex flex-col hover:bg-theme-blue-dark rounded-md p-2 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-8 w-8",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                                        clipRule: "evenodd"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xs font-thin tracking-wider",
                                    children: "Lives"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "flex-grow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/space",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex flex-col hover:bg-theme-blue-dark rounded-md p-2 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-8 w-8",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1,
                                        d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xs font-thin tracking-wider",
                                    children: "Space"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Menu/index.tsx









const Menu = ()=>{
    const router = (0,router_.useRouter)();
    const { profile  } = (0,Profile/* useProfile */.U)();
    const { isDarkMode  } = (0,Theme/* useTheme */.F)();
    const isActive = (pathname)=>{
        const path = router.pathname.indexOf("/", 1);
        return (path > 0 ? router.pathname.substring(0, path) : router.pathname) === pathname;
    };
    const logout = async ()=>{
        await fetch(`/api/logout`, {
            method: "GET"
        });
        router.push("/login");
    };
    const homeButton = /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: `flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200 ${isActive("/") ? "bg-theme-red-500 text-white" : "text-gray-500"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8 ",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs tracking-wider",
                        children: "In\xedcio"
                    })
                ]
            })
        })
    });
    const classButton = /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: router.asPath.split("/").filter(Boolean).length > 0 ? `/${router.asPath.split("/").filter(Boolean).slice(0, router.asPath.split("/").filter(Boolean).length < 4 ? -1 : 3).join("/")}` : "/class",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: `flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200 ${isActive("/class") ? "bg-theme-red-500 text-white" : "text-gray-500"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs tracking-wider",
                        children: "Aulas"
                    })
                ]
            })
        })
    });
    const spaceButton = /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/space",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: `flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200  ${isActive("/space") ? "bg-theme-red-500 text-white" : "text-gray-500"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs tracking-wider",
                        children: "Space"
                    })
                ]
            })
        })
    });
    const liveButton = /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/lives",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: `flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200  ${isActive("/lives") ? "bg-theme-red-500 text-white" : "text-gray-500"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs tracking-wider",
                        children: "Lives"
                    })
                ]
            })
        })
    });
    const logoffButton = /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: logout,
            className: "w-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: `flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200 ${isActive("/logoff") ? "bg-menu-active" : "text-gray-500"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs tracking-wider",
                        children: "Sair"
                    })
                ]
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `flex`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                className: "hidden md:flex flex-col px-2 justify-between border-r-2 border-gray-200 dark:border-gray-800 dark:bg-theme-gray-900",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sticky top-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex py-10 w-16",
                                children: [
                                    !isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logo,
                                        alt: "English in Brazil"
                                    }),
                                    isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logoDark,
                                        alt: "English in Brazil"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col gap-3 py-4",
                                children: [
                                    homeButton,
                                    liveButton,
                                    spaceButton
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex flex-col sticky bottom-0 gap-3 py-4",
                        children: logoffButton
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Mobile, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Layout/Panel/index.tsx










const LayoutPanel = ({ children , token  })=>{
    const { showPopUp , togglePopUp , showMenuAside , toggleMenuAside  } = (0,Profile/* useProfile */.U)();
    const router = (0,router_.useRouter)();
    const { isDarkMode  } = (0,Theme/* useTheme */.F)();
    const logout = async ()=>{
        await fetch(`/api/logout`, {
            method: "GET"
        });
        router.push("/login");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex min-h-screen",
        children: [
            showPopUp && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex fixed w-full h-full bg-opacity-30 dark:bg-opacity-80 bg-black z-50 items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "flex flex-col relative items-center bg-white dark:bg-theme-gray-600 dark:text-white max-w-sm p-6 rounded-md",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: togglePopUp,
                            className: "absolute right-4 top-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6 text-theme-red-500",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "font-bold text-lg",
                            children: "Aluno SOS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: insignia_1,
                                alt: "Aluno SOS"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "flex flex-col text-center",
                            children: "Parab\xe9ns por ter tomado a decis\xe3o de embarcar com a gente nessa jornada. Agora voc\xea \xe9 um aluno SOS Viagens."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
            showMenuAside && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: toggleMenuAside,
                className: "flex fixed w-full h-full bg-opacity-30 dark:bg-opacity-80 bg-black z-overlay md:justify-end",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "flex flex-col gap-4 relative bg-white dark:bg-theme-gray-600 dark:text-white max-w-xs p-4 pr-6 z-modal",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-center pb-2",
                            children: [
                                !isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logo,
                                    alt: "English in Brazil"
                                }),
                                isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logoDark,
                                    alt: "English in Brazil"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/setting",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex items-center gap-2 w-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-8 w-8",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xl",
                                        children: "Configura\xe7\xf5es"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: logout,
                            className: "flex items-center gap-2 w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-8 w-8",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                                        clipRule: "evenodd"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl",
                                    children: "Sair"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "flex flex-col grow bg-gray-100 dark:bg-theme-gray-600",
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "flex grow items-start lg:items-stretch",
                    children: children
                })
            })
        ]
    });
};


/***/ }),

/***/ 6718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ Markdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1871);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6809);
/* harmony import */ var _Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__, rehype_raw__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_2__, rehype_raw__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Markdown = (props)=>{
    const conteudoDivisao = props.children?.split(/\[{(.*?)\}]/gm) || [];
    const { 0: audioPlay , 1: setAudioPlay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: playing , 1: setPlaying  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: audio , 1: setAudio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Audio(""));
    const toggle = ()=>setPlaying(!playing);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!audioPlay || audioPlay == "") {
            return false;
        }
        setAudio(new Audio(audioPlay));
        setPlaying(true);
    }, [
        audioPlay
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!audio) {
            return false;
        }
        playing ? audio.play() : audio.pause();
    }, [
        playing
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        audio.addEventListener("ended", ()=>setPlaying(false));
        return ()=>{
            audio.removeEventListener("ended", ()=>setPlaying(false));
        };
    }, []);
    const Player = ({ item , i  })=>{
        if (item.indexOf("mp3") != -1) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-5 justify-center w-full flex ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    src: `${"https://cadastro.englishinbrazil.com.br"}${item.replace("{", "").replace("}", "")}`,
                    style: {
                        width: "100%"
                    },
                    controls: true
                })
            }, i);
        }
        if (item.indexOf("pandavideo")) {
            const link = item.replace("{", "").replace("}", "");
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    src: link,
                    className: "border-none top-0 left-0 w-full max-w-lg h-48 md:h-72 lg:max-w-2xl lg:h-96",
                    allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture",
                    allowFullScreen: true
                })
            });
        }
        const link1 = item.replace("{", "").replace("}", "");
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "my-5 justify-center w-full flex ",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player__WEBPACK_IMPORTED_MODULE_3___default()), {
                url: link1,
                controls: true,
                width: window.innerWidth <= 768 ? "100%" : undefined
            })
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: conteudoDivisao.map((item, i)=>{
            const isConteuroExtra = item.slice(0, 1) == "{" ? true : false;
            return !isConteuroExtra ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-2 w-full flex ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    ...props,
                    remarkPlugins: [
                        remark_gfm__WEBPACK_IMPORTED_MODULE_5__["default"]
                    ],
                    rehypePlugins: [
                        rehype_raw__WEBPACK_IMPORTED_MODULE_4__["default"]
                    ],
                    className: "text-justify leading-normal w-full",
                    components: {
                        u: ({ node , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                style: {
                                    textDecoration: "underline"
                                },
                                ...props
                            }),
                        ol: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                className: "pl-5",
                                children: children
                            }),
                        li: ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "list-decimal",
                                children: children
                            }),
                        a: ({ node , children , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                target: "_blank",
                                style: {
                                    textDecoration: "underline",
                                    color: "#e94653"
                                },
                                ...props,
                                children: [
                                    " ",
                                    children
                                ]
                            }),
                        p: ({ node , children , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                style: {
                                    lineHeight: "normal"
                                },
                                className: "py-1",
                                ...props,
                                children: [
                                    " ",
                                    children
                                ]
                            }),
                        h2 ({ node , className , children , ...props }) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center w-full items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "font-semibold text-2xl",
                                    ...props,
                                    children: children
                                })
                            });
                        },
                        img: ({ node , src , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${"https://cadastro.englishinbrazil.com.br"}${src}`,
                                ...props
                            }),
                        table ({ node , className , children , ...props }) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                className: "table-fixed w-full border-collapse my-4 dark:text-black",
                                ...props,
                                children: children
                            });
                        },
                        th ({ children  }) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "border pl-2 py-2 bg-gray-200 first",
                                children: children
                            });
                        },
                        td ({ children  }) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "px-4 py-2 border",
                                children: /\w+\.mp3\b/g.test(children?.toString()) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    url: children.toString().replace("{", "").replace("}", "")
                                }) : children
                            });
                        },
                        tr ({ children  }) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                className: "bg-white hover:bg-gray-50",
                                children: children
                            });
                        },
                        thead ({ children  }) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                className: "first:w-14",
                                children: children
                            });
                        },
                        border ({ children  }) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border-2 p-2 rounded-md border-theme-red-500",
                                children: children
                            });
                        }
                    },
                    children: item
                })
            }, i) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Player, {
                item: item,
                i: i
            }, i);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ withSessionSsr)
/* harmony export */ });
/* unused harmony export withSessionRoute */
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9531);
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
    return withIronSessionApiRoute(handler, sessionOptions);
}
function withSessionSsr(handler) {
    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionSsr */ .c)(handler, sessionOptions);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;