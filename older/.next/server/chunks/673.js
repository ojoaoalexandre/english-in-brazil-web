"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 5258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ allLives),
/* harmony export */   "p": () => (/* binding */ lastLive)
/* harmony export */ });
const lastLive = async (token, username)=>{
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
const allLives = async (token, username)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/lives`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            username: username
        })
    });
    const data = await response.json();
    if (data.length > 0) {
        return data.map((live)=>{
            const publishedAt = new Date(live.publishedAt).toLocaleDateString("pt-br", {
                hour: "numeric",
                minute: "numeric"
            });
            return {
                id: live.id,
                title: live.title,
                link: live.link,
                thumbnail: live.thumbnail,
                publishedAt,
                tags: live.tags.map((item)=>{
                    return {
                        id: item.id,
                        tag: item.tag,
                        color: item.color
                    };
                })
            };
        });
    }
    return null;
};


/***/ }),

/***/ 3559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ getNews)
/* harmony export */ });
const getNews = async (token)=>{
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


/***/ })

};
;