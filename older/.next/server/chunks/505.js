"use strict";
exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 9030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GetLastLiveService = async (token, username)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/lives/last`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            username: username
        })
    });
    const live = await response.json();
    if (live.id !== undefined) {
        const publishedAt = new Date(live.publishedAt).toLocaleDateString("pt-br", {
            hour: "numeric",
            minute: "numeric"
        });
        return {
            id: live.id,
            title: live.title,
            link: live.link,
            thumbnail: live.thumbnail,
            publishedAt
        };
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetLastLiveService);


/***/ }),

/***/ 4338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GetAllNewsService = async (token)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/news/active`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    const news = await response.json();
    return news;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetAllNewsService);


/***/ })

};
;