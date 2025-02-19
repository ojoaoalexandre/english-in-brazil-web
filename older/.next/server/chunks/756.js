"use strict";
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 4748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useProfile),
/* harmony export */   "a": () => (/* binding */ ProfileProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1875);
/* harmony import */ var _getProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6516);




const ProfilePropsDefault = {
    user: _getProfile__WEBPACK_IMPORTED_MODULE_3__/* .UserPropsDefault */ .$,
    footer: _src_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* .FooterPropsDefault */ .u,
    products: []
};
const ProfileContextPropsDefault = {
    profile: ProfilePropsDefault,
    config: ()=>{},
    showPopUp: false,
    showMenuAside: false
};
const ProfileContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(ProfileContextPropsDefault);
const useProfile = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileContext);
};
const ProfileProvider = ({ children  })=>{
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ProfilePropsDefault);
    const { 0: showPopUp , 1: setShowPopUp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showMenuAside , 1: setShowMenuAside  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const config = (profile)=>{
        setProfile({
            ...profile
        });
    };
    const togglePopUp = ()=>{
        setShowPopUp(!showPopUp);
    };
    const toggleMenuAside = ()=>{
        setShowMenuAside(!showMenuAside);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileContext.Provider, {
        value: {
            profile,
            config,
            togglePopUp,
            showPopUp,
            toggleMenuAside,
            showMenuAside
        },
        children: children
    });
};


/***/ }),

/***/ 4418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2140);
/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(usehooks_ts__WEBPACK_IMPORTED_MODULE_2__);



const ThemeContextPropsDefault = {
    isDarkMode: false,
    fontSize: "1rem",
    toggle: ()=>{},
    enable: ()=>{},
    disable: ()=>{}
};
const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(ThemeContextPropsDefault);
const useTheme = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
};
const ThemeProvider = ({ children  })=>{
    const { isDarkMode , toggle , enable , disable  } = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_2__.useDarkMode)();
    const [fontSize, setFontSize] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_2__.useLocalStorage)("fontsize", "1rem");
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            isDarkMode,
            fontSize,
            toggle,
            enable,
            disable
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${isDarkMode ? "dark" : ""}`,
            children: children
        })
    });
};


/***/ }),

/***/ 6516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ UserPropsDefault),
/* harmony export */   "N": () => (/* binding */ profile)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2461);

const UserPropsDefault = {
    alunoid: 0,
    username: "",
    name: "",
    insignias: [],
    points: 0,
    avatar: "/avatar.png",
    avatarId: 0,
    progress: [],
    lastLessons: [],
    notifications: {}
};
const getFooter = async (token)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/rodape?populate=logo,links`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    const { data  } = await response.json();
    const footer = {
        links: data.attributes.links,
        logo: data.attributes.logo
    };
    return footer;
};
const getUser = async (token)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/me?includes=[conquistas,ultimaConclusao,progresso]`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    const user = {
        alunoid: data.aluno.id,
        username: data.username,
        name: data.aluno.primeiroNome,
        insignias: data.aluno.Conquistas,
        lesson: data.ultimaAulaConcluida,
        points: data.aluno.pontuacaoAtual,
        avatarId: data.aluno.avatar?.id ?? null,
        avatar: data.aluno.avatar?.url ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .imageURL */ .qR)(data.aluno.avatar?.url) : "/avatar.png",
        progress: data?.progresso ?? null,
        lastLessons: data.lastLessons,
        notifications: data.notifications
    };
    return user;
};
const getHotmart = async (token, email)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/hotmart/getByEmail`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            email
        })
    });
    const products = await response.json();
    return products;
};
const profile = async (token)=>{
    const user = await getUser(token);
    const products = await getHotmart(token, user.username);
    const footer = await getFooter(token);
    return {
        user,
        products,
        footer
    };
};


/***/ }),

/***/ 2461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ny": () => (/* binding */ convertDate),
/* harmony export */   "QG": () => (/* binding */ getLetter),
/* harmony export */   "TV": () => (/* binding */ shuffle),
/* harmony export */   "gn": () => (/* binding */ getLettersRange),
/* harmony export */   "qR": () => (/* binding */ imageURL)
/* harmony export */ });
const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];
const imageURL = (path)=>{
    return path ? `${"https://cadastro.englishinbrazil.com.br"}${path}` : null;
};
const shuffle = (array)=>{
    let list = [
        ...array
    ];
    for(let i = list.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    return list;
};
const getLetter = (position)=>{
    return letters[position];
};
const getLettersRange = (startIn, endIn)=>{
    return letters.slice(startIn, endIn);
};
const convertDate = (date, basic = true)=>{
    const convertedDate = new Date(date).toLocaleDateString("pt-br", {
        hour: "numeric",
        minute: "numeric"
    });
    if (basic) {
        return convertedDate.split(" ")[0].replace(/,/g, "");
    }
    return convertedDate;
};


/***/ }),

/***/ 1875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer),
/* harmony export */   "u": () => (/* binding */ FooterPropsDefault)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4748);




const FooterPropsDefault = {
    links: [
        {
            id: 0,
            url: "erro",
            titulo: "Erro"
        }
    ],
    logo: ""
};
const Footer = ()=>{
    const { profile  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_3__/* .useProfile */ .U)();
    const { links  } = profile.footer;
    const part = links ? Math.round(links?.length / 2) : 0;
    const links_1 = links?.slice(0, part);
    const links_2 = links?.slice(part, links.length);
    const thumbnail = ()=>{
        return `${"https://cadastro.englishinbrazil.com.br"}${profile.footer.logo?.data.attributes.url}`;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "flex flex-col bg-gray-200 dark:bg-theme-gray-900 py-1 rounded-md",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "flex flex-col gap-4 md:flex-row justify-between p-4 md:mx-12",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center",
                    children: profile.footer.logo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        loader: thumbnail,
                        src: "thumbnail.png",
                        alt: "Live 02/01",
                        className: "rounded-lg object-cover",
                        width: 120,
                        height: 120,
                        quality: 100
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex flex-col px-4",
                    children: profile.footer.links && profile.footer.links.map((link, i)=>{
                        if (i % 2 === 0) {
                            return null;
                        } else {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "font-medium text-gray-600 dark:text-gray-200",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: link.url,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: link.titulo
                                    })
                                })
                            }, link.id);
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex flex-col px-4",
                    children: profile.footer.links && profile.footer.links.map((link, i)=>{
                        if (i % 2 !== 0) {
                            return null;
                        } else {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "font-medium text-gray-600 dark:text-gray-200",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: link.url,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: link.titulo
                                    })
                                })
                            }, link.id);
                        }
                    })
                })
            ]
        })
    });
};


/***/ })

};
;