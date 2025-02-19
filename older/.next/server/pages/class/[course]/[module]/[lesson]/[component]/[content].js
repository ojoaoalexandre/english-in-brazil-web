"use strict";
(() => {
var exports = {};
exports.id = 523;
exports.ids = [523];
exports.modules = {

/***/ 2444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9045);


const MicRecorder = __webpack_require__(484);
const recorder = new MicRecorder({
    bitRate: 128
});
const ButtonRecordPlayer = ({ id , position , tracks , getTracks , fileName  })=>{
    const recordStart = (position, id)=>{
        recorder.start().then(()=>{
            getTracks({
                [position]: {
                    id,
                    isRecording: true,
                    response: ""
                }
            });
        }).catch((e)=>{
            console.error(e);
        });
    };
    const recordEnd = (position, id)=>{
        recorder.stop().getMp3().then(([buffer, blob])=>{
            const file = new File(buffer, fileName, {
                type: blob.type,
                lastModified: Date.now()
            });
            const blobURL = URL.createObjectURL(file);
            getTracks({
                [position]: {
                    id,
                    isRecording: false,
                    response: blobURL,
                    audioBlob: file,
                    audioBuffer: buffer,
                    fileName
                }
            });
        }).catch((e)=>{
            console.error(e);
        });
    };
    const handleRecord = (event, position, sentenceId)=>{
        event.preventDefault();
        tracks[position]?.isRecording ? recordEnd(position, sentenceId) : recordStart(position, sentenceId);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: (event)=>handleRecord(event, position, id),
        children: tracks[position]?.isRecording ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            name: "pause"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            name: "microphone"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonRecordPlayer);


/***/ }),

/***/ 2282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ WithArrow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const WithArrow = ({ title , text , slug , direction  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    if (direction === "left") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "flex items-center justify-end gap-4",
            "data-slug": slug,
            onClick: ()=>router.push(`/class/${slug}`),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-end",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-xs text-right",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-semibold text-right text-sm md:text-base",
                            children: text
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M9 5l7 7-7 7"
                    })
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "flex items-center justify-start gap-4",
            "data-slug": slug,
            onClick: ()=>router.push(`/class/${slug}`),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15 19l-7-7 7-7"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-start",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-xs text-left",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-semibold text-left text-sm md:text-base",
                            children: text
                        })
                    ]
                })
            ]
        });
    }
};


/***/ }),

/***/ 9174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4748);
/* harmony import */ var _public_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7005);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Markdown__WEBPACK_IMPORTED_MODULE_4__]);
_Markdown__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Comment = ({ category , type , message , avatar , date , author , reaction , privacity  })=>{
    const { profile  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_2__/* .useProfile */ .U)();
    const myLoader = ()=>{
        return avatar;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `${category === "response" ? "ml-12" : ""} flex gap-2 dark:text-white`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${category === "question" ? "w-12 shrink-0" : "w-8 shrink-0"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    loader: myLoader ?? _public_avatar_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    src: "me.png",
                    alt: "Avatar",
                    width: 80,
                    height: 80,
                    className: "rounded-full"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col gap-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: `flex flex-col ${type === "pending" ? "text-gray-500" : ""}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                            className: "flex gap-2 items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `font-semibold dark:text-white ${type === "pending" ? "dark:opacity-80" : ""}`,
                                    children: author ?? profile.user.username
                                }),
                                privacity == "Privado" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-gray-500 bg-gray-200 rounded-full text-xs px-2",
                                    children: privacity
                                })
                            ]
                        }),
                        category === "question" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .U, {
                            className: `dark:text-white ${type === "pending" ? "dark:opacity-80" : ""}`,
                            children: message
                        }),
                        category === "response" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .U, {
                                    children: message
                                }),
                                reaction && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-sm text-gray-500",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-xl",
                                            children: reaction.substring(0, 2)
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Comments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5474);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4748);
/* harmony import */ var _public_avatar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7005);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Comment__WEBPACK_IMPORTED_MODULE_7__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Comment__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Comments = ({ token  })=>{
    const { data , activity , loadClass  } = (0,_lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_4__/* .useLesson */ .RN)();
    const { profile  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_5__/* .useProfile */ .U)();
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        message: ""
    });
    const myLoader = ()=>{
        return profile.user.avatar;
    };
    const handleChange = (event)=>{
        const key = event.target.name;
        const value = event.target.value;
        setForm((old)=>({
                ...old,
                [key]: value
            }));
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (form.message.length > 10) {
            const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/registrarDuvida`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    aula_slug: data.lesson,
                    curso_slug: data.course,
                    modulo_slug: data.module,
                    componente: data.__component,
                    componente_id: data.id,
                    duvida: form.message,
                    url: `${"https://app.englishinbrazil.com.br"}/class/${data.course}/${data.module}/${data.lesson}/${data.__component}/${data.id}`
                })
            });
            const message = await response.json();
            setForm({
                message: ""
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].promise(loadClass(data.course, data.module, data.lesson, data.__component, data.id, token), {
                loading: "Adicionando d\xfavida...",
                success: "D\xfavida Enviada",
                error: "N\xe3o foi poss\xedvel adicionar a sua d\xfavida"
            });
        } else {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Favor informar uma pergunta com mais de 10 caracteres!");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "flex flex-col gap-6 mt-4",
        children: [
            activity?.commentPending?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "font-semibold text-2xl text-theme-blue dark:text-white",
                        children: "D\xfavidas N\xe3o Respondidas"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                        className: "flex flex-col gap-4",
                        children: activity?.commentPending.map((comment)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Comment__WEBPACK_IMPORTED_MODULE_7__/* .Comment */ .s, {
                                    category: "question",
                                    type: "pending",
                                    author: profile.user.name,
                                    avatar: comment.avatar,
                                    date: comment.date,
                                    message: comment.question
                                })
                            }, comment.id);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "font-semibold text-2xl text-theme-blue dark:text-white",
                        children: "D\xfavidas"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "flex gap-2",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    loader: myLoader ?? _public_avatar_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                    src: "me.png",
                                    alt: "Avatar",
                                    width: 80,
                                    height: 80,
                                    className: "rounded-full"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-2 w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        placeholder: "Adicionar D\xfavida...",
                                        name: "message",
                                        className: "px-4 py-1 rounded-sm bg-gray-200 dark:bg-theme-gray-600 dark:text-white",
                                        onChange: (event)=>handleChange(event),
                                        value: form.message ?? "",
                                        rows: 3
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            className: "px-4 py-1 bg-white rounded-md dark:bg-theme-gray-800 dark:text-white",
                                            children: "Adicionar"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                className: "flex flex-col gap-2",
                children: activity?.commentResponse?.map((comment)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Comment__WEBPACK_IMPORTED_MODULE_7__/* .Comment */ .s, {
                                category: "question",
                                author: comment.author,
                                avatar: comment.avatar,
                                date: comment.date,
                                message: comment.question,
                                privacity: comment.privacity
                            }),
                            comment.response.map((response)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Comment__WEBPACK_IMPORTED_MODULE_7__/* .Comment */ .s, {
                                        category: "response",
                                        author: response.author,
                                        avatar: response.avatar,
                                        date: response.date,
                                        message: response.message,
                                        reaction: comment.response[0].reacao ?? null
                                    })
                                }, response.id);
                            })
                        ]
                    }, comment.id);
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Markdown__WEBPACK_IMPORTED_MODULE_2__]);
_Markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const LayoutLesson = ({ children , titulo , prefixo , sufixo  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "grid gap-4 z-0 pt-5 text-gray-700 dark:text-gray-200",
        children: [
            prefixo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "flex flex-col leading-none pl-2 mb-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_2__/* .Markdown */ .U, {
                    children: prefixo
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-2",
                children: children
            }),
            sufixo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-1 flex-col",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_2__/* .Markdown */ .U, {
                    className: "leading-normal",
                    children: sufixo
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutLesson);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3784:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Dialog2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_range_step_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3697);
/* harmony import */ var react_range_step_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_range_step_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6367);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use_audio_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5474);
/* harmony import */ var _Layout_Lesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2136);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout_Lesson__WEBPACK_IMPORTED_MODULE_5__]);
_Layout_Lesson__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const svgPlay = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30px",
    height: "30px",
    viewBox: "0 0 60 60",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        fill: "#e94653",
        d: "M100,930a30,30,0,1,1-30,30A30,30,0,0,1,100,930Zm-5.985,38.742a1.207,1.207,0,0,0,.763,1.1,1.465,1.465,0,0,0,1.473-.082l13.14-8.683a1.371,1.371,0,0,0-.009-2.311l-13.176-8.55a1.455,1.455,0,0,0-1.471-.068,1.289,1.289,0,0,0-.755,1.165Z",
        transform: "translate(-70 -930)"
    })
});
const svgPause = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30px",
    height: "30px",
    viewBox: "0 0 275.725 275.725",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        fill: "#e94653",
        d: "M137.862,0C61.726,0,0,61.726,0,137.862c0,76.14,61.726,137.862,137.862,137.862c76.139,0,137.862-61.723,137.862-137.862 C275.725,61.726,214.001,0,137.862,0z M114.26,188.856c0,11.967-7.925,21.655-17.704,21.655c-9.776,0-17.704-9.688-17.704-21.655 V100.65c0-11.957,7.927-21.655,17.704-21.655c9.779,0,17.704,9.698,17.704,21.655V188.856z M196.877,188.856 c0,11.967-7.933,21.655-17.704,21.655c-9.771,0-17.698-9.688-17.698-21.655V100.65c0-11.957,7.928-21.655,17.698-21.655 c9.776,0,17.704,9.698,17.704,21.655V188.856z"
    })
});
const svgTranslate = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#000000",
    viewBox: "0 0 30 30",
    width: "30px",
    height: "30px",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 16 C 3 17.093063 3.9069372 18 5 18 L 7 18 L 12 18 L 12 22 L 8 22 L 8 19 L 7 18 L 6 19 L 6 22 L 8 24 L 12 24 L 12 25 C 12 26.105 12.895 27 14 27 L 25 27 C 26.105 27 27 26.105 27 25 L 27 14 C 27 12.895 26.105 12 25 12 L 18 12 L 18 5 C 18 3.9069372 17.093063 3 16 3 L 5 3 z M 5 5 L 16 5 L 16 12 L 14 12 C 12.895 12 12 12.895 12 14 L 12 16 L 5 16 L 5 5 z M 12 14 L 12 13 C 11.755293 13 11.521351 12.969766 11.291016 12.933594 C 11.314874 12.916254 11.341774 12.902596 11.365234 12.884766 C 12.436415 12.070668 13 10.75101 13 9 L 14 9 L 14 8 L 11 8 L 11 6.5 L 10 6.5 L 10 8 L 7 8 L 7 9 L 12 9 C 12 10.54899 11.563585 11.478941 10.759766 12.089844 C 10.53998 12.25688 10.278088 12.396887 9.9902344 12.517578 C 9.667359 12.357894 9.3640918 12.177141 9.109375 11.962891 C 8.3922951 11.359732 8 10.591752 8 10 L 7 10 C 7 10.997248 7.5736736 11.978924 8.4648438 12.728516 C 8.5238513 12.778149 8.5962189 12.817683 8.6582031 12.865234 C 8.1567671 12.945359 7.6170728 13 7 13 L 7 14 C 8.1153185 14 9.1081165 13.884672 9.9570312 13.605469 C 10.57585 13.850013 11.261979 14 12 14 z M 18.402344 15.976562 L 20.59375 15.976562 L 22.962891 23.023438 L 21.009766 23.023438 L 20.570312 21.474609 L 18.269531 21.474609 L 17.816406 23.023438 L 16.039062 23.023438 L 18.402344 15.976562 z M 19.382812 17.564453 L 18.611328 20.185547 L 20.232422 20.185547 L 19.476562 17.564453 L 19.382812 17.564453 z"
    })
});
const getSegundosHora = (hora)=>{
    const hms = hora.replace(",", ".") // your input string
    ;
    const a = hms.split(":") // split it at the colons
    ;
    const seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds / 60;
};
const Dialog2 = ({ content  })=>{
    const { titulo , prefixo , sufixo , dialogoFrases =[] , audio ={}  } = content;
    const { setCanClose  } = (0,_lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_4__/* .useLesson */ .RN)();
    const { percentComplete , duration , seek  } = (0,react_use_audio_player__WEBPACK_IMPORTED_MODULE_3__.useAudioPosition)({
        highRefreshRate: true
    });
    const { 0: audioPlay , 1: setAudioPlay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: audioPlayGrup , 1: setAudioPlayGrup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: positionGroup , 1: setPositionGroup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: velocidadeAudio , 1: setVelocidadeAudio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: showTraducao , 1: setShowTraducao  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: finish , 1: setFinish  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: timeStart , 1: setTimeStart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("00:00");
    const { 0: timeFinish , 1: setTimeFinish  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("00:00");
    const { togglePlayPause , ready , playing , load , pause , player  } = (0,react_use_audio_player__WEBPACK_IMPORTED_MODULE_3__.useAudioPlayer)({
        autoplay: false,
        format: "mp3"
    });
    setCanClose(true);
    const goToPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((percentage)=>{
        seek(duration * (percentage / 100));
    }, [
        duration,
        seek
    ]);
    const convertTime = (time)=>{
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (positionGroup == -1) {
            return;
        }
        const file = audioPlayGrup[positionGroup];
        if (!file) {
            return;
        }
        setAudioPlay(file);
        setTimeStart(convertTime(duration * percentComplete / 100));
        setTimeFinish(convertTime(duration));
        if (percentComplete >= 99.5) {
            togglePlayPause();
            goToPosition(100);
            setFinish(true);
        }
        load({
            src: `${"https://cadastro.englishinbrazil.com.br"}${file}`,
            autoplay: true
        });
    }, [
        positionGroup,
        audioPlayGrup,
        load,
        setCanClose,
        percentComplete,
        togglePlayPause,
        goToPosition,
        duration
    ]);
    let interlocutorAtual = 1;
    const PlayAudioGroup = (grupoAudio)=>{
        if (grupoAudio[positionGroup] == audioPlay) {
            if (finish) {
                goToPosition(0);
                setFinish(false);
            }
            togglePlayPause();
            return;
        }
        if (grupoAudio[positionGroup] != audioPlayGrup[positionGroup]) {
            setAudioPlayGrup([]);
            setPositionGroup(-1);
        }
        setAudioPlayGrup(grupoAudio);
        setPositionGroup(0);
    };
    const chengeAudioVelocidade = ()=>{
        let valocidadeAtual = velocidadeAudio.toFixed(2);
        if (velocidadeAudio == 1.75) {
            valocidadeAtual = 0.75;
        } else {
            valocidadeAtual = parseFloat(valocidadeAtual) + 0.25;
        }
        setVelocidadeAudio(valocidadeAtual);
        player.rate(valocidadeAtual.toFixed(2));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Lesson__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        titulo: titulo,
        prefixo: prefixo,
        sufixo: sufixo,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1 flex flex-col min-h-screen",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex bg-red-lightest",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-white w-full shadow-lg rounded-lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full p-5",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-white p-5 rounded-full bg-red-light shadow-lg cursor-pointer",
                                                onClick: ()=>PlayAudioGroup([
                                                        audio.url
                                                    ]),
                                                children: audioPlay == audio?.url && playing ? svgPause : svgPlay
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-1 ml-5 justify-between text-sm text-grey-darker",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: timeStart
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_range_step_input__WEBPACK_IMPORTED_MODULE_2__.RangeStepInput, {
                                                        className: "w-full mx-5",
                                                        max: 100,
                                                        value: percentComplete,
                                                        min: 0,
                                                        step: 1,
                                                        onChange: (e)=>goToPosition(e.target.value)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: timeFinish
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-grey-darker flex ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>{
                                                            setShowTraducao(!showTraducao);
                                                        },
                                                        className: `mx-5 ${showTraducao ? "bg-gray-300" : ""}`,
                                                        children: svgTranslate
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        onClick: ()=>chengeAudioVelocidade(),
                                                        type: "button",
                                                        className: "",
                                                        children: [
                                                            velocidadeAudio,
                                                            "x"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "messages",
                            className: "flex flex-col space-y-4 p-3 w-10/12 ",
                            children: dialogoFrases.map((frase, i)=>{
                                if (frase.dialogo_interlocutor.nome != dialogoFrases[i - 1]?.dialogo_interlocutor?.nome) {
                                    interlocutorAtual = interlocutorAtual == 1 ? 0 : 1;
                                }
                                const showIn = getSegundosHora(frase.inicio);
                                const activeShow = showIn <= duration * (percentComplete / 100) ? true : false;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `chat-message transition-all ${activeShow ? "opacity-1 h-auto" : "opacity-0 h-0"}`,
                                    "data-showin": showIn,
                                    onClick: ()=>goToPosition(showIn / duration * 100),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `flex items-end ${interlocutorAtual == 1 ? "justify-end" : ""}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `flex flex-col space-y-2 text-sm max-w-xl mx-2 order-${interlocutorAtual == 0 ? "2" : "1"} items-${interlocutorAtual == 0 ? "start" : "end"}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `px-4 py-2 rounded-lg inline-block rounded-bl-none ${interlocutorAtual == 0 ? "bg-theme-blue dark:bg-theme-gray-900 text-white" : "bg-gray-300 text-gray-600"}  `,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "grid grid-cols-1 divide-y space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: frase.fraseEn
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `py-1 transition-all ${!showTraducao ? "hidden" : ""}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                    children: frase.frasePt
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `${"https://cadastro.englishinbrazil.com.br"}${frase.dialogo_interlocutor.imagem.url}`,
                                                alt: "My profile",
                                                className: "w-6 h-6 rounded-full order-1"
                                            })
                                        ]
                                    })
                                }, `chat_id_${frase.id}`);
                            })
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4454:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9137);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2461);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _Markdown__WEBPACK_IMPORTED_MODULE_5__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _Markdown__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const LessonTypeExerciseFonema = ({ GrupoPergunta , exercisePosition , allActivitiesCompletedStatus , completed  })=>{
    const { register , handleSubmit , formState , setError , getValues , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const { 0: exerciseCompleted , 1: setExerciseCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(allActivitiesCompletedStatus);
    const { 0: words , 1: setWords  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: phonemes , 1: setPhonemes  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setExerciseCompleted(allActivitiesCompletedStatus);
        GrupoPergunta.map((question)=>{
            question.opcoes.map((option)=>{
                const splitedWords = option.respostas.split("\n");
                setWords((old)=>[
                        ...old,
                        ...splitedWords
                    ]);
                setPhonemes((old)=>({
                        ...old,
                        [option.fonema]: splitedWords
                    }));
            });
        });
        setWords((old)=>(0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .shuffle */ .TV)(old));
    }, [
        allActivitiesCompletedStatus,
        GrupoPergunta
    ]);
    const onSubmit = (data)=>{
        try {
            let incorrectResponses = [];
            let correctResponses = [];
            Object.keys(data).map((field)=>{
                const isCorrect = phonemes[data[field]].includes(field);
                if (isCorrect) {
                    correctResponses.push(field);
                } else {
                    incorrectResponses.push(field);
                }
            });
            if (incorrectResponses.length > 0) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error("Whoops, algumas respostas est\xe3o incorretas");
                incorrectResponses.map((field)=>setError(`${field}`, {
                        type: "custom",
                        message: "Resposta Incorreta:"
                    }));
                correctResponses.map((field)=>setError(`${field}`, {
                        type: "custom",
                        message: "Resposta Correta:"
                    }));
                return;
            }
            setExerciseCompleted(true);
            completed(true);
        } catch (error) {
            console.log(error);
        }
    };
    const handleResetExercise = ()=>{
        completed(false);
        reset();
        setExerciseCompleted(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "pt-5 pl-2",
        children: [
            GrupoPergunta?.map((question)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "font-medium text-lg mb-2",
                                    children: [
                                        exercisePosition,
                                        ". ",
                                        question.pergunta
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_5__/* .Markdown */ .U, {
                                    children: question.perguntaComplemento
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                            className: "table-auto my-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                children: words?.map((word)=>{
                                    const correctResponse = [
                                        Object.keys(phonemes).filter((phoneme)=>phonemes[phoneme].includes(word))
                                    ];
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
                                                            className: `
                            dark:border-theme-gray-900
                            ${formState.dirtyFields[word] ? "border-blue-500 dark:border-blue-500" : ""}
                         ${formState.errors[word] && getValues(word) != correctResponse ? "border-theme-red-500 dark:border-theme-red-500" : ""} ${formState.errors[word] && getValues(word) == correctResponse ? "border-green-500" : ""} ${exerciseCompleted ? "border-green-500" : ""} border-2 w-full py-1 rounded-md disabled:bg-gray-200 dark:bg-theme-gray-800 disabled:text-gray-500 bg-gray-300 px-4`,
                                                            disabled: exerciseCompleted,
                                                            children: word
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
                                                            className: "absolute -top-3/4 left-1/3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "grid grid-flow-col place-items-stretch gap-2 p-2 bg-white dark:bg-theme-gray-900 shadow-md rounded-md z-alwaysOnTop",
                                                                children: Object.keys(phonemes).map((phoneme)=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "relative h-8",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    className: "flex w-full h-full items-center justify-center text-xl font-semibold absolute pointer-events-none",
                                                                                    children: phoneme
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    type: "radio",
                                                                                    value: phoneme,
                                                                                    ...register(word, {
                                                                                        required: "Favor selecionar uma op\xe7\xe3o"
                                                                                    }),
                                                                                    className: `appearance-none w-16 h-full border bg-gray-100 dark:bg-theme-gray-800 rounded-sm hover:bg-blue-300 checked:bg-blue-500`
                                                                                })
                                                                            ]
                                                                        })
                                                                    }, phoneme);
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            formState.errors[word] && !exerciseCompleted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm pr-1",
                                                        children: formState.errors[word]?.message
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-lg",
                                                        children: getValues(word)
                                                    })
                                                ]
                                            }),
                                            exerciseCompleted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm",
                                                        children: "Resposta Correta:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-lg",
                                                        children: correctResponse
                                                    })
                                                ]
                                            })
                                        ]
                                    }, word);
                                })
                            })
                        })
                    ]
                }, question.id);
            }),
            !exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                children: "Validar"
            }),
            exerciseCompleted && !allActivitiesCompletedStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleResetExercise,
                className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                children: "Refazer Atividade"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LessonTypeExerciseFonema);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9137);
/* harmony import */ var react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7433);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2461);
/* harmony import */ var _Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2401);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6718);
/* harmony import */ var _Message_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2433);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Markdown__WEBPACK_IMPORTED_MODULE_4__, _Message_Banner__WEBPACK_IMPORTED_MODULE_5__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Markdown__WEBPACK_IMPORTED_MODULE_4__, _Message_Banner__WEBPACK_IMPORTED_MODULE_5__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 







const GapSize = {
    sm: "w-32",
    md: "w-40",
    lg: "w-48",
    xl: "w-96"
};
const getGapInputSize = (response)=>{
    if (response?.length >= 25) {
        return GapSize["xl"];
    }
    if (response?.length > 15) {
        return GapSize["lg"];
    }
    if (response?.length > 10) {
        return GapSize["md"];
    }
    return GapSize["sm"];
};
const LessonTypeExerciseGap = ({ GrupoPergunta , exercisePosition , allActivitiesCompletedStatus , completed , isUniqueValidation =false , updateExercisesFeedback  })=>{
    const { register , formState , handleSubmit , setError , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const { 0: exerciseCompleted , 1: setExerciseCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allActivitiesCompletedStatus);
    const { 0: words , 1: setWords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: allWords , 1: setAllWords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setExerciseCompleted(allActivitiesCompletedStatus);
        GrupoPergunta.map((question)=>{
            const options = question.opcoes.map((option)=>{
                const responses = option.frase.match(/\[\(([^()]*)\)\]/g)?.map((word)=>{
                    return word.toLowerCase().replace("[(", "").replace(")]", "").split("|");
                }) || [];
                if (responses.length > 1) {
                    return responses.map((response, position)=>{
                        return {
                            [`${option.id}${position}`]: response
                        };
                    }).reduce((previous, current)=>{
                        return {
                            ...previous,
                            ...current
                        };
                    });
                }
                return {
                    [`${option.id}`]: responses[0]
                };
            }).map((option)=>{
                return option;
            }).reduce((previous, current)=>{
                return {
                    ...previous,
                    ...current
                };
            });
            setWords((old)=>({
                    ...old,
                    [question.id]: options
                }));
            if (question.apresentarOpcoes) {
                setAllWords((old)=>({
                        ...old,
                        [question.id]: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .shuffle */ .TV)(Object.values(options).filter((option)=>option !== undefined).reduce((previous, current)=>[
                                ...previous,
                                ...current
                            ]))
                    }));
            }
        });
    }, [
        allActivitiesCompletedStatus,
        GrupoPergunta
    ]);
    const onSubmit = (data)=>{
        try {
            let incorrectResponses = [];
            let correctResponses = [];
            Object.keys(data).map((option)=>{
                let question = {};
                Object.values(words).map((word)=>{
                    question = {
                        ...question,
                        ...word
                    };
                });
                const formatter = data[option].toLowerCase().trim().replace(/\s{2,}/g, " ");
                const hasApostrophe = /['"´`’]/g.test(formatter) ? formatter.replace(/['"´`’]/g, "'") : null;
                let isCorrect = false;
                if (question[option]?.filter((word)=>/^\*/gi.test(word)).length > 0) {
                    isCorrect = /^\*/gi.test(data[option].toLowerCase());
                } else {
                    isCorrect = hasApostrophe ? question[option]?.includes(hasApostrophe) : question[option]?.includes(formatter);
                }
                if (isCorrect) {
                    correctResponses.push(option);
                } else {
                    incorrectResponses.push(option);
                }
            });
            console.log(correctResponses);
            if (incorrectResponses.length > 0) {
                incorrectResponses.map((field)=>{
                    setError(`${field}`, {
                        types: {
                            incorrect: "Resposta Incorreta"
                        }
                    });
                });
                correctResponses.map((field)=>{
                    setError(`${field}`, {
                        types: {
                            correct: "Resposta Correta"
                        }
                    });
                });
                if (isUniqueValidation) {
                    updateExercisesFeedback(0, 1);
                    setExerciseCompleted(true);
                    completed(true);
                    return;
                }
                return;
            }
            if (isUniqueValidation) {
                updateExercisesFeedback(1, 0);
            }
            setExerciseCompleted(true);
            completed(true);
        } catch (error) {
            console.log(error);
        }
    };
    const handleResetExercise = ()=>{
        completed(false);
        reset();
        setExerciseCompleted(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "flex flex-col gap-8",
        children: [
            GrupoPergunta.map((question, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "font-medium text-lg mb-2",
                                    children: [
                                        exercisePosition + index,
                                        ". ",
                                        question.pergunta
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .U, {
                                    children: question.perguntaComplemento
                                })
                            ]
                        }),
                        question?.media && question.media?.ext === ".mp3" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            url: question.media.url
                        }),
                        question.media && question.media?.ext !== ".mp3" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-5 justify-center flex",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: "Thumbnail",
                                className: "object-cover max-w-2xl xs:max-w-full",
                                src: `${"https://cadastro.englishinbrazil.com.br"}${question.media?.url}`
                            })
                        }),
                        Object.keys(formState.errors).filter((field)=>formState.errors[field]?.types?.incorrect).length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_5__/* .MessageBanner */ .f, {
                            title: "Resposta Incorreta",
                            message: question.respostaComentada,
                            type: "error"
                        }),
                        exerciseCompleted && Object.keys(formState.errors).length == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_5__/* .MessageBanner */ .f, {
                            title: "Resposta Correta",
                            message: question.respostaComentada,
                            type: "success"
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                question.apresentarOpcoes && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-2",
                                    children: allWords[question.id]?.map((word)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-md mx-1 my-1 inline-block p-2 px-4 leading-none text-center whitespace-nowrap align-baseline bg-gray-800 text-white rounded-full",
                                            children: word
                                        }, word);
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-2",
                                    children: question.opcoes.map((option)=>{
                                        const gaps = option.frase.match(/\[\(([^()]*)\)\]/g)?.map((word)=>{
                                            return word.toLowerCase().replace("[(", "").replace(")]", "");
                                        }) || [];
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col my-2",
                                            children: [
                                                option.prefixo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .U, {
                                                    children: option.prefixo
                                                }) : null,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex-wrap items-center",
                                                    children: option.frase.split(/\[(.*?)\]/gm).map((expression)=>{
                                                        const isGap = expression.slice(0, 1) === "(";
                                                        const index = gaps?.length > 1 ? `${option.id}${gaps.indexOf(expression.replace("(", "").replace(")", "").toLowerCase())}` : `${option.id}`;
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                !isGap && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: expression.indexOf(".mp3") >= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex flex-col pr-2",
                                                                        children: expression.indexOf(".mp3?player=eib") >= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                            url: expression.replace("{", "").replace("}", "")
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                                            src: `${"https://cadastro.englishinbrazil.com.br"}${expression.replace("{", "").replace("}", "")}`,
                                                                            controls: true
                                                                        })
                                                                    }) : expression.indexOf("<br/>") >= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_7__/* .ReactMarkdown */ .D, {
                                                                        components: {
                                                                            p: ({ children  })=>{
                                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: children
                                                                                });
                                                                            },
                                                                            ol: ({ children  })=>{
                                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: children
                                                                                });
                                                                            },
                                                                            li: ({ children  })=>{
                                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: children
                                                                                });
                                                                            }
                                                                        },
                                                                        children: expression
                                                                    })
                                                                }),
                                                                isGap && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        question.preenchimento === "Texto" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "text",
                                                                            disabled: exerciseCompleted,
                                                                            defaultValue: exerciseCompleted ? words[question.id]?.[index]?.join(", ") : "",
                                                                            className: `${formState.errors[index]?.type || formState.errors[index]?.types?.incorrect ? "border-red-500" : ""} shadow ${getGapInputSize(words[question.id]?.[index]?.join(", "))} text-sm appearance-none border rounded py-1 px-2 mx-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
                                                                            ...register(`${index}`, {
                                                                                required: true
                                                                            })
                                                                        }),
                                                                        question.preenchimento === "Lista" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                            ...register(`${index}`, {
                                                                                required: true
                                                                            }),
                                                                            disabled: exerciseCompleted,
                                                                            defaultValue: exerciseCompleted ? words[question.id]?.[index][0] : "",
                                                                            className: `${formState.errors[index]?.type || formState.errors[index]?.types?.incorrect ? "border-red-500" : ""} form-select appearance-none px-3
                                        py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300 rounded transition
                                        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-2`,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "",
                                                                                    children: "Selecione..."
                                                                                }),
                                                                                words[question.id]?.[index].map((option)=>{
                                                                                    const textWithoutStar = option.replace("*", "");
                                                                                    const text = textWithoutStar[0].toUpperCase() + textWithoutStar.substring(1);
                                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                        value: option,
                                                                                        children: text
                                                                                    }, option);
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        });
                                                    })
                                                })
                                            ]
                                        }, option.id);
                                    })
                                })
                            ]
                        })
                    ]
                }, question.id);
            }),
            !exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                    children: "Validar"
                })
            }),
            exerciseCompleted && isUniqueValidation ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "flex font-bold shadow-md bg-gray-300 text-theme-blue-2 px-6 py-2 rounded-md",
                    disabled: true,
                    children: "Validado"
                })
            }) : null,
            exerciseCompleted && !allActivitiesCompletedStatus && !isUniqueValidation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: handleResetExercise,
                    className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                    children: "Refazer Atividade"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LessonTypeExerciseGap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ Markdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7433);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1871);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6809);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9137);
/* harmony import */ var _Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([rehype_raw__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__]);
([rehype_raw__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Markdown = ({ children , optionId , exerciseCompleted , errors  })=>{
    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(children);
    const { register , formState , control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        let newTeste = [];
        const gap = children?.split(/(\[\(.*?\)\])/g).map((sentence)=>{
            const gapSentence = /\[\((.*?)\)\]/g.test(sentence);
            gapSentence ? newTeste.push("1") : null;
            return gapSentence ? `<gap value="${sentence.replace(/\[\(|\)\]/g, "").toLowerCase()}">${optionId}${newTeste.length - 1}</gap>` : sentence;
        });
        const teste = gap.join("");
        console.log(children);
        setText(teste);
    }, [
        children,
        optionId
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__/* .ReactMarkdown */ .D, {
        remarkPlugins: [
            remark_gfm__WEBPACK_IMPORTED_MODULE_2__["default"]
        ],
        rehypePlugins: [
            rehype_raw__WEBPACK_IMPORTED_MODULE_1__["default"]
        ],
        className: "w-full",
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
            a: ({ node , children , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    target: "_blank",
                    className: "decoration-[#e94653]",
                    ...props,
                    children: children
                }),
            p: ({ node , children , ...props })=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    ...props,
                    children: children
                });
            },
            h2: ({ node , className , children , ...props })=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center w-full items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-semibold text-2xl",
                        ...props,
                        children: children
                    })
                });
            },
            img: ({ node , src , ...props })=>// eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `${"https://cadastro.englishinbrazil.com.br"}${src}`,
                    alt: "src"
                }),
            table ({ node , className , children , ...props }) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                    className: "table-fixed w-full border-collapse my-4",
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
                    className: "py-2 border pl-2",
                    children: children[0]?.indexOf(".mp3") >= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        url: children[0]?.replace("{", "").replace("}", "")
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
            br: ({})=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-4"
                });
            },
            gap: ({ children , ...props })=>{
                return exerciseCompleted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "border rounded border-green-500 py-1 px-4 bg-green-200 text-gray-700",
                    children: props.value
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inline-block relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            className: `${errors && (errors[`${children[0]}`] === null || errors[`${children[0]}`] === "wrong") ? "border-red-500" : ""} text-sm w-32 appearance-none border rounded py-1 px-2 text-gray-700 focus:outline-none focus:shadow-outline`,
                            ...register(`${children[0]}`)
                        }, `${children[0]}`),
                        errors && errors[`${children[0]}`] === "wrong" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute -top-5 bg-red-300 text-red-800 text-sm rounded-full px-2 right-0",
                            children: props.value
                        }) : null
                    ]
                });
            }
        },
        children: text
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9137);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2461);
/* harmony import */ var _Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2401);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6718);
/* harmony import */ var _Message_Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2433);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Markdown__WEBPACK_IMPORTED_MODULE_5__, _Message_Banner__WEBPACK_IMPORTED_MODULE_6__, _Markdown__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Markdown__WEBPACK_IMPORTED_MODULE_5__, _Message_Banner__WEBPACK_IMPORTED_MODULE_6__, _Markdown__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 








const LessonTypeExerciseGapMusic = ({ GrupoPergunta , exercisePosition , allActivitiesCompletedStatus , completed  })=>{
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const { 0: exerciseCompleted , 1: setExerciseCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allActivitiesCompletedStatus);
    const { 0: words , 1: setWords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: allWords , 1: setAllWords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setExerciseCompleted(allActivitiesCompletedStatus);
        GrupoPergunta.map((question)=>{
            const options = question.opcoes.map((option)=>{
                const responses = option.frase.match(/\[\(([^()]*)\)\]/g)?.map((word)=>{
                    return word.toLowerCase().replace("[(", "").replace(")]", "").split("|");
                }) || [];
                return responses.map((response, position)=>{
                    return {
                        [`${option.id}${position}`]: response
                    };
                }).reduce((previous, current)=>{
                    return {
                        ...previous,
                        ...current
                    };
                });
            // return {
            //   [`${option.id}`]: responses[0]
            // }
            }).map((option)=>{
                return option;
            }).reduce((previous, current)=>{
                return {
                    ...previous,
                    ...current
                };
            });
            setWords((old)=>({
                    ...old,
                    [question.id]: options
                }));
            if (question.apresentarOpcoes) {
                setAllWords((old)=>({
                        ...old,
                        [question.id]: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .shuffle */ .TV)(Object.values(options).filter((option)=>option !== undefined).reduce((previous, current)=>[
                                ...previous,
                                ...current
                            ]))
                    }));
            }
        });
    }, [
        allActivitiesCompletedStatus,
        GrupoPergunta
    ]);
    const onSubmit = (data)=>{
        try {
            let incorrectResponses = [];
            let correctResponses = [];
            setErrors(null);
            if (Object.values(data).includes("")) {
                Object.keys(data).map((field)=>{
                    if (data[field] == "") {
                        setErrors((old)=>({
                                ...old,
                                [field]: null
                            }));
                    }
                });
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Preencha todos os campos");
                return;
            }
            Object.keys(data).map((option)=>{
                const [question] = Object.values(words);
                const formatter = data[option].toLowerCase().trim().replace(/\s{2,}/g, " ");
                const hasApostrophe = /['"´`]/g.test(formatter) ? formatter.replace(/['"´`]/g, "'") : null;
                let isCorrect = false;
                if (question[option]?.filter((word)=>/^\*/gi.test(word)).length > 0) {
                    isCorrect = /^\*/gi.test(data[option].toLowerCase());
                } else {
                    isCorrect = hasApostrophe ? question[option]?.includes(hasApostrophe) : question[option]?.includes(formatter);
                }
                if (isCorrect) {
                    correctResponses.push(option);
                } else {
                    incorrectResponses.push(option);
                }
            });
            if (incorrectResponses.length > 0) {
                incorrectResponses.map((field)=>{
                    setErrors((old)=>({
                            ...old,
                            [field]: "wrong"
                        }));
                });
                return;
            }
            setExerciseCompleted(true);
            completed(true);
        } catch (error) {
            console.log(error);
        }
    };
    const handleResetExercise = ()=>{
        completed(false);
        methods.reset();
        setExerciseCompleted(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, {
        ...methods,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: methods.handleSubmit(onSubmit),
            className: "flex flex-col gap-8",
            children: [
                GrupoPergunta.map((question, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        className: "font-medium text-lg mb-2",
                                        children: [
                                            exercisePosition + index,
                                            ". ",
                                            question.pergunta
                                        ]
                                    }),
                                    question.perguntaComplemento ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_5__/* .Markdown */ .U, {
                                        children: question.perguntaComplemento
                                    }) : null
                                ]
                            }),
                            question?.media && question.media?.ext === ".mp3" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                url: question.media.url
                            }),
                            question.media && question.media?.ext !== ".mp3" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "my-5 justify-center flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "object-cover max-w-2xl xs:max-w-full",
                                    src: `${"https://cadastro.englishinbrazil.com.br"}${question.media?.url}`,
                                    alt: "Image"
                                })
                            }),
                            errors && Object.values(errors).filter((error)=>error === "wrong").length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_6__/* .MessageBanner */ .f, {
                                title: "Resposta Incorreta",
                                message: question.respostaComentada,
                                type: "error"
                            }) : null,
                            exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_6__/* .MessageBanner */ .f, {
                                title: "Resposta Correta",
                                message: question.respostaComentada,
                                type: "success"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    question.apresentarOpcoes && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "py-2",
                                        children: allWords[question.id]?.map((word)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-md mx-1 my-1 inline-block p-2 px-4 leading-none text-center whitespace-nowrap align-baseline bg-gray-800 text-white rounded-full",
                                                children: word
                                            }, word);
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "py-2",
                                        children: question.opcoes.map((option)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-center leading-loose",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_7__/* .Markdown */ .U, {
                                                        optionId: option.id,
                                                        exerciseCompleted: exerciseCompleted,
                                                        errors: errors,
                                                        children: option.frase
                                                    }, option.id)
                                                })
                                            }, option.id);
                                        })
                                    })
                                ]
                            })
                        ]
                    }, question.id);
                }),
                !exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                        children: "Validar"
                    })
                }),
                exerciseCompleted && !allActivitiesCompletedStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleResetExercise,
                        className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                        children: "Refazer Atividade"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LessonTypeExerciseGapMusic);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9137);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2461);
/* harmony import */ var _Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2401);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6718);
/* harmony import */ var _Message_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2433);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Markdown__WEBPACK_IMPORTED_MODULE_4__, _Message_Banner__WEBPACK_IMPORTED_MODULE_5__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Markdown__WEBPACK_IMPORTED_MODULE_4__, _Message_Banner__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const LessonTypeExerciseGapRelation = ({ id , __component , prefixo , GrupoPergunta , exercisePosition , allActivitiesCompletedStatus , completed , updateExercisePosition  })=>{
    const { register , formState , handleSubmit , setError , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const { 0: exerciseCompleted , 1: setExerciseCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allActivitiesCompletedStatus);
    const { 0: words , 1: setWords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setExerciseCompleted(allActivitiesCompletedStatus);
        GrupoPergunta.map((question)=>{
            const options = question.opcoes.map((option)=>{
                return {
                    id: option.id,
                    responses: option.fraseLacuna.split(/\[(.*?)\]/gm).filter((response)=>response !== "").map((word)=>word.replace("(", "").replace(")", ""))
                };
            });
            setWords((old)=>({
                    ...old,
                    [question.id]: options
                }));
        });
    }, [
        allActivitiesCompletedStatus,
        GrupoPergunta
    ]);
    const onSubmit = (data)=>{
        try {
            let incorrectResponses = [];
            let correctResponses = [];
            Object.keys(data).map((option)=>{
                const [question] = Object.values(words);
                const [filter] = question.filter((response)=>response.id == option);
                const isCorrect = filter.responses[0] === data[option].toLowerCase();
                if (isCorrect) {
                    correctResponses.push(option);
                } else {
                    incorrectResponses.push(option);
                }
            });
            if (incorrectResponses.length > 0) {
                incorrectResponses.map((field)=>{
                    setError(`${field}`, {
                        types: {
                            incorrect: "Resposta Incorreta"
                        }
                    });
                });
                correctResponses.map((field)=>{
                    setError(`${field}`, {
                        types: {
                            correct: "Resposta Correta"
                        }
                    });
                });
                return;
            }
            setExerciseCompleted(true);
            completed(true);
        } catch (error) {
            console.log(error);
        }
    };
    const handleResetExercise = ()=>{
        completed(false);
        reset();
        setExerciseCompleted(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "flex flex-col gap-8",
        children: [
            GrupoPergunta.map((question, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "font-medium text-lg mb-2",
                                    children: [
                                        exercisePosition + index,
                                        ". ",
                                        question.pergunta
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .U, {
                                    children: question.perguntaComplemento
                                })
                            ]
                        }),
                        question?.media && question.media?.ext === ".mp3" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            url: question.media.url
                        }),
                        question.media && question.media?.ext !== ".mp3" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-5 justify-center flex",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "object-cover max-w-2xl xs:max-w-full",
                                src: `${"https://cadastro.englishinbrazil.com.br"}${question.media?.url}`
                            })
                        }),
                        Object.keys(formState.errors).filter((field)=>formState.errors[field]?.types?.incorrect).length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_5__/* .MessageBanner */ .f, {
                            title: "Resposta Incorreta",
                            message: question.respostaComentada,
                            type: "error"
                        }),
                        exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_5__/* .MessageBanner */ .f, {
                            title: "Resposta Correta",
                            message: question.respostaComentada,
                            type: "success"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "py-2",
                            children: question.opcoes.map((option, position)=>{
                                const listFrase = option.fraseLacuna.split(/\[(.*?)\]/gm).filter((response)=>response !== "");
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "my-2 flex-1",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-sm",
                                                children: [
                                                    (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .getLetter */ .QG)(position),
                                                    ") ",
                                                    option.fraseOpcao
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-1 items-center gap-2 my-2",
                                            children: listFrase.map((expression)=>{
                                                const isGap = expression.slice(0, 1) === "(";
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        !isGap && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "text-sm",
                                                            children: [
                                                                expression.indexOf(".mp3") !== -1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        expression.indexOf(".mp3?player=eib") !== -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                            url: expression
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .U, {
                                                                            children: expression
                                                                        })
                                                                    ]
                                                                }),
                                                                expression.indexOf("<br/>") !== -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                expression
                                                            ]
                                                        }),
                                                        isGap && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                question.preenchimento === "Texto" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    disabled: exerciseCompleted,
                                                                    className: `${formState.errors[option.id]?.type || formState.errors[option.id]?.types?.incorrect ? "border-red-500" : ""} shadow text-sm appearance-none border rounded py-1 px-2 mx-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
                                                                    ...register(`${option.id}`, {
                                                                        required: true
                                                                    })
                                                                }),
                                                                question.preenchimento === "Lista" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                    disabled: exerciseCompleted,
                                                                    ...register(`${option.id}`, {
                                                                        required: true
                                                                    }),
                                                                    className: `${formState.errors[option.id]?.type || formState.errors[option.id]?.types?.incorrect ? "border-red-500" : ""} form-select appearance-none px-3
                              py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300 rounded transition
                              ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "",
                                                                            children: "..."
                                                                        }),
                                                                        (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .getLettersRange */ .gn)(0, words[question.id]?.length).map((option)=>{
                                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: option,
                                                                                selected: allActivitiesCompletedStatus && option == expression.replace("(", "").replace(")", "").toUpperCase(),
                                                                                children: option
                                                                            }, option);
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, expression);
                                            })
                                        })
                                    ]
                                }, option.id);
                            })
                        })
                    ]
                }, question.id);
            }),
            !exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                    children: "Validar"
                })
            }),
            exerciseCompleted && !allActivitiesCompletedStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: handleResetExercise,
                    className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                    children: "Refazer Atividade"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LessonTypeExerciseGapRelation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7871:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9137);
/* harmony import */ var react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7433);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2461);
/* harmony import */ var _Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2401);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6718);
/* harmony import */ var _Message_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2433);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Markdown__WEBPACK_IMPORTED_MODULE_4__, _Message_Banner__WEBPACK_IMPORTED_MODULE_5__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Markdown__WEBPACK_IMPORTED_MODULE_4__, _Message_Banner__WEBPACK_IMPORTED_MODULE_5__, react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const LessonTypeExerciseMultipleChoice = ({ id , __component , prefixo , GrupoPergunta , exercisePosition , allActivitiesCompletedStatus , completed , updateExercisePosition , isUniqueValidation =false , updateExercisesFeedback  })=>{
    const { register , formState , handleSubmit , setError , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const { 0: exerciseCompleted , 1: setExerciseCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allActivitiesCompletedStatus);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setExerciseCompleted(allActivitiesCompletedStatus);
    }, [
        allActivitiesCompletedStatus
    ]);
    const onSubmit = (data)=>{
        try {
            let incorrectResponses = [];
            let correctResponses = [];
            Object.keys(data).map((choice)=>{
                const isCorrect = data[choice] == "true";
                if (isCorrect) {
                    correctResponses.push(choice);
                } else {
                    incorrectResponses.push(choice);
                }
            });
            if (incorrectResponses.length > 0) {
                incorrectResponses.map((field)=>setError(`${field}`, {
                        types: {
                            incorrect: "Resposta Incorreta:"
                        }
                    }));
                correctResponses.map((field)=>setError(`${field}`, {
                        types: {
                            correct: "Resposta Correta:"
                        }
                    }));
                if (isUniqueValidation) {
                    updateExercisesFeedback(correctResponses.length, incorrectResponses.length);
                    setExerciseCompleted(true);
                    completed(true);
                    return;
                }
                return;
            }
            if (isUniqueValidation) {
                updateExercisesFeedback(correctResponses.length, 0);
            }
            setExerciseCompleted(true);
            completed(true);
        } catch (error) {
            console.log(error);
        }
    };
    const handleResetExercise = ()=>{
        completed(false);
        reset();
        setExerciseCompleted(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "flex flex-col gap-8",
        children: [
            GrupoPergunta.map((question, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "flex gap-2 font-medium text-lg mb-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "pt-2",
                                            children: [
                                                exercisePosition + index,
                                                "."
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: question.pergunta?.split(/\\n/).map((pergunta, index)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .U, {
                                                    children: pergunta
                                                }, index);
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .U, {
                                    children: question.perguntaComplemento
                                })
                            ]
                        }),
                        question.media && (question.media?.ext == ".mp3" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            url: question.media.url
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-5 justify-center flex ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "object-cover max-w-2xl xs:max-w-full",
                                src: `${"https://cadastro.englishinbrazil.com.br"}${question.media.url}`
                            })
                        })),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                formState.errors[question.id]?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_5__/* .MessageBanner */ .f, {
                                    message: `${formState.errors[question.id]?.message}`,
                                    type: "error"
                                }),
                                formState.errors[question.id]?.types?.incorrect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_5__/* .MessageBanner */ .f, {
                                    title: "Resposta Incorreta",
                                    message: question.respostaComentada,
                                    type: "error"
                                }),
                                (formState.errors[question.id]?.types?.correct || exerciseCompleted && !isUniqueValidation) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_5__/* .MessageBanner */ .f, {
                                    title: "Resposta Correta",
                                    message: question.respostaComentada,
                                    type: "success"
                                }),
                                question.opcoes.map((option, position)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                id: option.id.toString(),
                                                type: "radio",
                                                value: option.correta.toString(),
                                                ...register(question.id.toString(), {
                                                    required: "\xc9 necess\xe1rio responder todas as quest\xf5es",
                                                    disabled: exerciseCompleted
                                                }),
                                                className: `appearance-none w-6 h-6 rounded-full checked:bg-theme-red-500 ${exerciseCompleted && option.correta ? "bg-theme-red-500" : ""} bg-white border border-grey`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_6__/* .ReactMarkdown */ .D, {
                                                children: `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .getLetter */ .QG)(position)}) ${option.opcao}`
                                            })
                                        ]
                                    }, option.id);
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .U, {
                            children: question.sufixo
                        })
                    ]
                }, question.id);
            }),
            !exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                    children: "Validar"
                })
            }),
            exerciseCompleted && isUniqueValidation ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "flex font-bold shadow-md bg-gray-300 text-theme-blue-2 px-6 py-2 rounded-md",
                    disabled: true,
                    children: "Validado"
                })
            }) : null,
            exerciseCompleted && !allActivitiesCompletedStatus && !isUniqueValidation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: handleResetExercise,
                    className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                    children: "Refazer Atividade"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LessonTypeExerciseMultipleChoice);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9137);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4748);
/* harmony import */ var _Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2401);
/* harmony import */ var _Button_RecordPlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2444);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6718);
/* harmony import */ var _Message_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2433);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Markdown__WEBPACK_IMPORTED_MODULE_7__, _Message_Banner__WEBPACK_IMPORTED_MODULE_8__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Markdown__WEBPACK_IMPORTED_MODULE_7__, _Message_Banner__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const LessonTypeExercisePronunciation = ({ GrupoPergunta , token , exercisePosition , allActivitiesCompletedStatus , completed  })=>{
    const { handleSubmit , formState , register , setError  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const { profile  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_4__/* .useProfile */ .U)();
    const { 0: exerciseCompleted , 1: setExerciseCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allActivitiesCompletedStatus);
    const { 0: tracks , 1: setTracks  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const getTracks = (tracks)=>{
        setTracks((old)=>({
                ...old,
                ...tracks
            }));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setExerciseCompleted(allActivitiesCompletedStatus);
    }, [
        allActivitiesCompletedStatus
    ]);
    const handleUpload = async (formData)=>{
        const upload = fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/audioPronuncia`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        });
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].promise(upload, {
            loading: "Estamos salvando o seus audios....",
            success: "\xc1udios Enviados com Sucesso",
            error: "Whoops, tivemos algum erro no envio"
        });
    };
    const onSubmit = ()=>{
        try {
            const totalResponses = GrupoPergunta.reduce((previousSentence, currentSentence)=>previousSentence + currentSentence.opcoes.length, 0);
            if (Object.keys(tracks).length < totalResponses) {
                setError("empty", {
                    types: {
                        required: "Por favor grave todos os \xe1udios"
                    }
                });
                return;
            }
            const formData = new FormData();
            formData.append("type", "audio");
            formData.append("audio-filename", "arquivo");
            Object.keys(tracks).map((track)=>{
                formData.append("files", tracks[track].audioBlob, tracks[track]?.fileName);
            });
            handleUpload(formData);
            setExerciseCompleted(true);
            completed(true);
        } catch (error) {
            console.log(error);
        }
    };
    const handleResetExercise = ()=>{
        completed(false);
        setExerciseCompleted(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [
            GrupoPergunta.map((question)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pt-5 pl-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "font-medium text-lg mb-2",
                                    children: [
                                        exercisePosition,
                                        ". ",
                                        question.pergunta
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_7__/* .Markdown */ .U, {
                                    children: question.perguntaComplemento
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "hidden",
                            ...register(`empty`)
                        }),
                        formState.errors["empty"]?.types?.required && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_8__/* .MessageBanner */ .f, {
                            message: `${formState.errors["empty"]?.types?.required}`,
                            type: "error"
                        }),
                        exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message_Banner__WEBPACK_IMPORTED_MODULE_8__/* .MessageBanner */ .f, {
                            message: "Parab\xe9ns, todos os \xe1udios foram gravados!",
                            type: "success"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "py-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                className: "border-collapse table-auto w-full text-sm",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    className: "font-medium p-4 pt-0 pb-3 text-slate-400 text-left",
                                                    children: "Frase"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        className: "bg-white border-t",
                                        children: question.opcoes.map((sentence, position)=>{
                                            const fileName = `audio_pronuncia_${profile.user.alunoid.toString().padStart(5, "0")}_${sentence.id}_${position}.mp3`;
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    sentence.prefixo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                        className: "w-full",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            colSpan: 3,
                                                            className: "p-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_7__/* .Markdown */ .U, {
                                                                children: sentence.prefixo
                                                            })
                                                        })
                                                    }) : null,
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border-b w-[70px] border-slate-100 p-4 text-slate-500",
                                                                children: sentence.media?.url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_AudioPlayer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                    url: sentence.media?.url
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "-"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                className: "border-b border-slate-100 p-4 text-slate-500",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_7__/* .Markdown */ .U, {
                                                                        children: sentence.frase
                                                                    }),
                                                                    allActivitiesCompletedStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                                        src: `${"https://cadastro.englishinbrazil.com.br"}/uploads/audio_pronuncia/${fileName}?${new Date().getTime()}`,
                                                                        controls: true
                                                                    }),
                                                                    !allActivitiesCompletedStatus && tracks[position]?.response && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                                        src: tracks[position].response,
                                                                        controls: true
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "border-b w-[70px] border-slate-100 p-4 text-slate-500",
                                                                children: !exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_RecordPlayer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    id: sentence.id,
                                                                    position: position,
                                                                    tracks: tracks,
                                                                    fileName: fileName,
                                                                    getTracks: getTracks
                                                                })
                                                            })
                                                        ]
                                                    }, sentence.id)
                                                ]
                                            });
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }, question.id);
            }),
            !exerciseCompleted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                children: "Validar"
            }),
            exerciseCompleted && !allActivitiesCompletedStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleResetExercise,
                className: "flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md",
                children: "Refazer Atividade"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LessonTypeExercisePronunciation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Markdown__WEBPACK_IMPORTED_MODULE_2__]);
_Markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const LessonTypeExerciseSimple = ({ id , __component , prefixo , GrupoPergunta , exercisePosition , allActivitiesCompletedStatus , completed  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        completed(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: GrupoPergunta.map((question)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        children: [
                            question.titulo,
                            " -- ",
                            question.tipo,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_2__/* .Markdown */ .U, {
                        children: question.subTitulo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_2__/* .Markdown */ .U, {
                        children: question.conteudo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        children: question.comentarioResposta
                    })
                ]
            }, question.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LessonTypeExerciseSimple);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Exercise)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1701);
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player_youtube__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5474);
/* harmony import */ var _Layout_Lesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2136);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6718);
/* harmony import */ var _Fonema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4454);
/* harmony import */ var _Gap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5705);
/* harmony import */ var _GapMusic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2028);
/* harmony import */ var _GapRelation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9842);
/* harmony import */ var _MultipleChoice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7871);
/* harmony import */ var _Pronunciation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4799);
/* harmony import */ var _Simple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout_Lesson__WEBPACK_IMPORTED_MODULE_5__, _Markdown__WEBPACK_IMPORTED_MODULE_6__, _Fonema__WEBPACK_IMPORTED_MODULE_7__, _Gap__WEBPACK_IMPORTED_MODULE_8__, _GapMusic__WEBPACK_IMPORTED_MODULE_9__, _GapRelation__WEBPACK_IMPORTED_MODULE_10__, _MultipleChoice__WEBPACK_IMPORTED_MODULE_11__, _Pronunciation__WEBPACK_IMPORTED_MODULE_12__, _Simple__WEBPACK_IMPORTED_MODULE_13__]);
([_Layout_Lesson__WEBPACK_IMPORTED_MODULE_5__, _Markdown__WEBPACK_IMPORTED_MODULE_6__, _Fonema__WEBPACK_IMPORTED_MODULE_7__, _Gap__WEBPACK_IMPORTED_MODULE_8__, _GapMusic__WEBPACK_IMPORTED_MODULE_9__, _GapRelation__WEBPACK_IMPORTED_MODULE_10__, _MultipleChoice__WEBPACK_IMPORTED_MODULE_11__, _Pronunciation__WEBPACK_IMPORTED_MODULE_12__, _Simple__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Exercise = ({ content , token  })=>{
    const myRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: fixVideo , 1: setFixVideo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: exercisesCompleted , 1: setExercisesCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: exercisePosition , 1: setExercisePosition  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: exercisesFeedBack , 1: setExercisesFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        correct: 0,
        wrong: 0
    });
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { setCanClose , atividadeConcluida  } = (0,_lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_4__/* .useLesson */ .RN)();
    const { titulo , prefixo , sufixo , aula_exercicio ={}  } = content;
    const { conteudos =[]  } = aula_exercicio;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const updateExercisePosition = ()=>{
        setExercisePosition(()=>exercisePosition + 1);
        return exercisePosition;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (exercisesCompleted >= conteudos.length) {
            setCanClose(true);
        }
        if (exercisesCompleted < conteudos.length) {
            setCanClose(false);
        }
        conteudos.map((exercise, index)=>{
            setExercisePosition((old)=>({
                    ...old,
                    [index]: exercise.GrupoPergunta.length
                }));
        });
    }, [
        setCanClose,
        exercisesCompleted,
        conteudos.length
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleSubmit = async ()=>{
            const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/eventoConclusao`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    aula_slug: router.query.lesson,
                    curso_slug: router.query.course,
                    modulo_slug: router.query.module,
                    componente: router.query.component,
                    componente_id: router.query.content,
                    points: exercisesFeedBack.correct / (exercisesFeedBack.correct + exercisesFeedBack.wrong) * 100
                })
            });
            const data = await response.json();
            return data;
        };
        if (conteudos.length > 0 && exercisesCompleted == conteudos.length && aula_exercicio?.isUniqueValidation) {
            handleSubmit();
            setShow(true);
        }
    }, [
        exercisesCompleted
    ]);
    const exerciseCompleted = (status)=>{
        const update = status ? exercisesCompleted + 1 : exercisesCompleted - 1;
        setExercisesCompleted(update);
        if (atividadeConcluida) {
            setCanClose(false);
        }
    };
    const updateExercisesFeedback = (correct, wrong)=>{
        setExercisesFeedback((exercise)=>{
            return {
                correct: exercise.correct + correct,
                wrong: exercise.wrong + wrong
            };
        });
    };
    const handleScroll = ()=>{
        const position = window.scrollY;
        if (myRef.current) {
            if (parseInt(myRef.current.offsetTop) <= parseInt(position)) {
                setFixVideo(true);
            } else {
                setFixVideo(false);
            }
        }
    };
    const handleCloseModule = async ()=>{
        await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/evento/checkModule/21`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        router.push(`/class/curso-eib/modulo-20`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Lesson__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        titulo: titulo,
        prefixo: prefixo,
        sufixo: sufixo,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_6__/* .Markdown */ .U, {
                children: aula_exercicio?.subTitulo
            }),
            show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-overlay",
                children: exercisesFeedBack.correct / (exercisesFeedBack.correct + exercisesFeedBack.wrong) * 100 > 70 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-4 w-full max-w-lg bg-white p-8 rounded-md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-2xl font-bold",
                            children: "Congrats! \uD83C\uDF89"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Voc\xea acertou mais de 70% do teste e j\xe1 pode seguir para o M\xf3dulo 2. Caso tenha errado alguma quest\xe3o, sugerimos que revise as aulas indicadas antes de prosseguir."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Escolha abaixo como deseja iniciar seu curso:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm font-bold pt-2",
                                    children: "Obs: Escolha com calma, essa decis\xe3o n\xe3o pode ser alterada posteriormente."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-around gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "px-3 py-2 bg-theme-red-500 rounded-md text-white",
                                    onClick: ()=>router.push(`/class/curso-eib/modulo-19`),
                                    children: "Come\xe7ar pelo M\xf3dulo 01"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "px-3 py-2 bg-theme-blue text-white rounded-md",
                                    onClick: ()=>handleCloseModule(),
                                    children: "Seguir para o M\xf3dulo 02"
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-4 w-full max-w-md bg-white p-8 rounded-md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Voc\xea acertou menos de 70% do teste, por isso, recomendamos que voc\xea fa\xe7a o M\xf3dulo 1 para ter um melhor aproveitamento do curso e seguir com mais confian\xe7a. Bora come\xe7ar com o p\xe9 direito?"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-end gap-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "px-4 py-2 bg-theme-blue text-white rounded-md",
                                onClick: ()=>router.push(`/class/curso-eib/modulo-19`),
                                children: "Vamos l\xe1"
                            })
                        })
                    ]
                })
            }) : null,
            aula_exercicio?.isUniqueValidation ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sticky flex gap-2 bg-white px-4 py-2 top-2 md:top-16 text-lg dark:text-black rounded-md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Voc\xea acertou",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "font-bold text-green-700",
                            children: exercisesFeedBack.correct
                        }),
                        " ",
                        "de",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "font-bold",
                            children: exercisesFeedBack.correct + exercisesFeedBack.wrong
                        }),
                        " ",
                        "quest\xf5es"
                    ]
                })
            }) : null,
            conteudos.map((exercise, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "pb-8",
                    children: [
                        exercise.linkVideo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `flex items-center justify-center transition-all pb-8 ${fixVideo ? "fix" : "nFix"}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player_youtube__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "videoPlayer",
                                url: exercise?.linkVideo,
                                controls: true
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            ref: index == 0 ? myRef : null,
                            children: [
                                exercise.prefixo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "my-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_6__/* .Markdown */ .U, {
                                        children: exercise.prefixo
                                    })
                                }),
                                exercise.__component == "aula.exercicio-fonema" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Fonema__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    ...exercise,
                                    exercisePosition: Object.values(exercisePosition).slice(0, index).reduce((current, previous)=>current + previous, 1),
                                    allActivitiesCompletedStatus: atividadeConcluida,
                                    completed: exerciseCompleted
                                }) : null,
                                exercise.__component == "aula.exercicio-multipla-escolha" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MultipleChoice__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    ...exercise,
                                    exercisePosition: Object.values(exercisePosition).slice(0, index).reduce((current, previous)=>current + previous, 1),
                                    updateExercisePosition: updateExercisePosition,
                                    allActivitiesCompletedStatus: atividadeConcluida,
                                    completed: exerciseCompleted,
                                    isUniqueValidation: aula_exercicio?.isUniqueValidation,
                                    updateExercisesFeedback: updateExercisesFeedback
                                }) : null,
                                exercise.__component == "aula.exercicio-pronuncia" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pronunciation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    ...exercise,
                                    token: token,
                                    exercisePosition: Object.values(exercisePosition).slice(0, index).reduce((current, previous)=>current + previous, 1),
                                    allActivitiesCompletedStatus: atividadeConcluida,
                                    completed: exerciseCompleted
                                }) : null,
                                exercise.__component == "aula.exercicio-lacunas" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Gap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    ...exercise,
                                    exercisePosition: Object.values(exercisePosition).slice(0, index).reduce((current, previous)=>current + previous, 1),
                                    allActivitiesCompletedStatus: atividadeConcluida,
                                    completed: exerciseCompleted,
                                    isUniqueValidation: aula_exercicio?.isUniqueValidation,
                                    updateExercisesFeedback: updateExercisesFeedback
                                }) : null,
                                exercise.__component == "aula.exercicio-lacunas-musica" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GapMusic__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    ...exercise,
                                    exercisePosition: Object.values(exercisePosition).slice(0, index).reduce((current, previous)=>current + previous, 1),
                                    allActivitiesCompletedStatus: atividadeConcluida,
                                    completed: exerciseCompleted
                                }) : null,
                                exercise.__component == "aula.exercicio-lacunas-relacao" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GapRelation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    ...exercise,
                                    exercisePosition: Object.values(exercisePosition).slice(0, index).reduce((current, previous)=>current + previous, 1),
                                    allActivitiesCompletedStatus: atividadeConcluida,
                                    completed: exerciseCompleted
                                }) : null,
                                exercise.__component == "aula.exercicio" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Simple__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    ...exercise,
                                    completed: exerciseCompleted
                                }) : null
                            ]
                        })
                    ]
                }, exercise.id);
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5474);




const File = ({ content  })=>{
    const { titulo , prefixo , sufixo , arquivo  } = content;
    const { setCanClose  } = (0,_lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_3__/* .useLesson */ .RN)();
    setCanClose(true);
    const formatNamePDF = (value)=>{
        return value.replace(/.pdf/g, "");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "flex flex-col gap-2 py-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: prefixo
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col gap-2",
                children: arquivo && arquivo.map((file)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `${"https://cadastro.englishinbrazil.com.br"}${file.url}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            target: "_blank",
                            className: "bg-theme-blue text-white rounded-md px-4 py-2 flex gap-4 items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "bg-theme-blue-dark rounded-full p-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsFileEarmarkPdf, {
                                        className: "text-2xl"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: formatNamePDF(file.caption)
                                })
                            ]
                        })
                    }, file.id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: sufixo
            })
        ]
    });
};


/***/ }),

/***/ 7710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Other)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5474);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Markdown__WEBPACK_IMPORTED_MODULE_2__]);
_Markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Other = ({ content  })=>{
    const { setCanClose  } = (0,_lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_1__/* .useLesson */ .RN)();
    setCanClose(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-5 dark:text-white",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_2__/* .Markdown */ .U, {
            children: content.conteudoTexto
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y6": () => (/* binding */ svgMicrophone),
/* harmony export */   "tN": () => (/* binding */ svgPause),
/* harmony export */   "w5": () => (/* binding */ svgPlay)
/* harmony export */ });
/* unused harmony export svgTranslate */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const svgPlay = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "30px",
    height: "30px",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
        clipRule: "evenodd"
    })
});
const svgPause = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30px",
    height: "30px",
    viewBox: "0 0 275.725 275.725",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        fill: "#e94653",
        d: "M137.862,0C61.726,0,0,61.726,0,137.862c0,76.14,61.726,137.862,137.862,137.862c76.139,0,137.862-61.723,137.862-137.862 C275.725,61.726,214.001,0,137.862,0z M114.26,188.856c0,11.967-7.925,21.655-17.704,21.655c-9.776,0-17.704-9.688-17.704-21.655 V100.65c0-11.957,7.927-21.655,17.704-21.655c9.779,0,17.704,9.698,17.704,21.655V188.856z M196.877,188.856 c0,11.967-7.933,21.655-17.704,21.655c-9.771,0-17.698-9.688-17.698-21.655V100.65c0-11.957,7.928-21.655,17.698-21.655 c9.776,0,17.704,9.698,17.704,21.655V188.856z"
    })
});
const svgTranslate = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#000000",
    viewBox: "0 0 30 30",
    width: "30px",
    height: "30px",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 16 C 3 17.093063 3.9069372 18 5 18 L 7 18 L 12 18 L 12 22 L 8 22 L 8 19 L 7 18 L 6 19 L 6 22 L 8 24 L 12 24 L 12 25 C 12 26.105 12.895 27 14 27 L 25 27 C 26.105 27 27 26.105 27 25 L 27 14 C 27 12.895 26.105 12 25 12 L 18 12 L 18 5 C 18 3.9069372 17.093063 3 16 3 L 5 3 z M 5 5 L 16 5 L 16 12 L 14 12 C 12.895 12 12 12.895 12 14 L 12 16 L 5 16 L 5 5 z M 12 14 L 12 13 C 11.755293 13 11.521351 12.969766 11.291016 12.933594 C 11.314874 12.916254 11.341774 12.902596 11.365234 12.884766 C 12.436415 12.070668 13 10.75101 13 9 L 14 9 L 14 8 L 11 8 L 11 6.5 L 10 6.5 L 10 8 L 7 8 L 7 9 L 12 9 C 12 10.54899 11.563585 11.478941 10.759766 12.089844 C 10.53998 12.25688 10.278088 12.396887 9.9902344 12.517578 C 9.667359 12.357894 9.3640918 12.177141 9.109375 11.962891 C 8.3922951 11.359732 8 10.591752 8 10 L 7 10 C 7 10.997248 7.5736736 11.978924 8.4648438 12.728516 C 8.5238513 12.778149 8.5962189 12.817683 8.6582031 12.865234 C 8.1567671 12.945359 7.6170728 13 7 13 L 7 14 C 8.1153185 14 9.1081165 13.884672 9.9570312 13.605469 C 10.57585 13.850013 11.261979 14 12 14 z M 18.402344 15.976562 L 20.59375 15.976562 L 22.962891 23.023438 L 21.009766 23.023438 L 20.570312 21.474609 L 18.269531 21.474609 L 17.816406 23.023438 L 16.039062 23.023438 L 18.402344 15.976562 z M 19.382812 17.564453 L 18.611328 20.185547 L 20.232422 20.185547 L 19.476562 17.564453 L 19.382812 17.564453 z"
    })
});
const svgMicrophone = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fffff",
    viewBox: "0 0 20 20",
    width: "30px",
    height: "30px",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
        clipRule: "evenodd"
    })
});


/***/ }),

/***/ 6130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ SpeakUp2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mic_recorder_to_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(484);
/* harmony import */ var mic_recorder_to_mp3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mic_recorder_to_mp3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6367);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use_audio_player__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5474);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4748);
/* harmony import */ var _Layout_Lesson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2136);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6718);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7545);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Layout_Lesson__WEBPACK_IMPORTED_MODULE_7__, _Markdown__WEBPACK_IMPORTED_MODULE_8__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _Layout_Lesson__WEBPACK_IMPORTED_MODULE_7__, _Markdown__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const recorder = new (mic_recorder_to_mp3__WEBPACK_IMPORTED_MODULE_1___default())({
    bitRate: 128
});
const getSegundosHora = (hora)=>{
    const hms = hora.replace(",", ".") // your input string
    ;
    const a = hms.split(":") // split it at the colons
    ;
    const seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds / 60;
};
const SpeakUp2 = ({ dadoConteudo , token  })=>{
    const { titulo , prefixo , sufixo , conteudo =[]  } = dadoConteudo;
    const { 0: audioPlay , 1: setAudioPlay  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: audioPlayGrup , 1: setAudioPlayGrup  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: positionGrupo , 1: setPositionGrupo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-1);
    const { percentComplete , duration , seek  } = (0,react_use_audio_player__WEBPACK_IMPORTED_MODULE_4__.useAudioPosition)({
        highRefreshRate: true
    });
    const { 0: velocidadeAudio , 1: setVelocidadeAudio  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: showTraducao , 1: setShowTraducao  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: isRecording , 1: setIsRecording  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: audioProduzido , 1: setAudioProduzido  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { setCanClose , atividadeConcluida  } = (0,_lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_5__/* .useLesson */ .RN)();
    const { profile  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_6__/* .useProfile */ .U)();
    const { 0: listAudioGravados , 1: setListAudioGravados  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        ...conteudo.map((item, i)=>{
            return {
                i: i,
                audioPergunta: item.audio?.url,
                isRecording: false,
                audioResposta: ""
            };
        })
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setListAudioGravados([
            ...conteudo.map((item, i)=>{
                return {
                    i: i,
                    audioPergunta: item.audio?.url,
                    isRecording: false,
                    audioResposta: ""
                };
            })
        ]);
    }, [
        conteudo
    ]);
    const { togglePlayPause , ready , playing , load , pause , player  } = (0,react_use_audio_player__WEBPACK_IMPORTED_MODULE_4__.useAudioPlayer)({
        autoplay: false,
        format: "mp3",
        onend: ()=>{
            setAudioPlay("");
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (positionGrupo == -1) {
            return;
        }
        const file = audioPlayGrup[positionGrupo];
        if (!file) {
            return;
        }
        setAudioPlay(file);
        load({
            src: `${"https://cadastro.englishinbrazil.com.br"}${file}`,
            autoplay: true,
            onend: ()=>{
                const nextPosicao = positionGrupo + 1;
            }
        });
    }, [
        positionGrupo,
        audioPlayGrup
    ]);
    const PlayAudioGroup = (grupoAudio)=>{
        if (grupoAudio[positionGrupo] == audioPlay) {
            togglePlayPause();
            return false;
        }
        if (grupoAudio[positionGrupo] != audioPlayGrup[positionGrupo]) {
            setAudioPlayGrup([]);
            setPositionGrupo(-1);
        }
        setAudioPlayGrup(grupoAudio);
        setPositionGrupo(0);
    };
    const audioGravar = (idAudio)=>{
        let audios = [];
        audios = listAudioGravados;
        if (audios.length == 0) {
            audios.length = conteudo.length;
        }
        audios[idAudio] = {
            ...audios[idAudio],
            isRecording: true,
            audioResposta: ""
        };
        console.log(audios);
        recorder.start().then(()=>{
            setListAudioGravados([
                ...audios
            ]);
            setIsRecording(true);
        }).catch((e)=>{
            console.error(e);
        });
    };
    const audioStop = (idAudio)=>{
        recorder.stop().getMp3().then(([buffer, blob])=>{
            let audios = listAudioGravados;
            const file = new File(buffer, `audio_${idAudio}.mp3`, {
                type: blob.type,
                lastModified: Date.now()
            });
            const blobURL = URL.createObjectURL(file);
            audios[idAudio] = {
                ...audios[idAudio],
                isRecording: false,
                audioResposta: blobURL,
                audioBlob: file,
                audioBuffer: buffer
            };
            setListAudioGravados([
                ...audios
            ]);
            setIsRecording(false);
        }).catch((e)=>{
            console.error(e);
        });
    };
    const uploadAudio = async ()=>{
        var formData = new FormData();
        var boundary = String(Math.random()).slice(2);
        formData.append("type", "audio");
        formData.append("audio-filename", "arquivo");
        formData.append("aula_slug", dadoConteudo.lesson);
        formData.append("curso_slug", dadoConteudo.course);
        formData.append("modulo_slug", dadoConteudo.module);
        formData.append("componente", dadoConteudo.__component);
        formData.append("componente_id", dadoConteudo.id);
        if (listAudioGravados.filter((item)=>!item.audioBlob).length > 0) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Antes de produzir o di\xe1logo, \xe9 necess\xe1rio gravar todas as respostas abaixo.");
            return false;
        }
        console.log("Lista:", listAudioGravados);
        listAudioGravados.filter((item)=>item ? true : false).map((file, i)=>{
            formData.append(`audioPergunta_${i}`, file.audioPergunta);
            formData.append(`files`, file.audioBlob, `audio_${i}.mp3`);
        });
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].loading("Estamos criando o Di\xe1logo....", {
            id: "criando_dialogo"
        });
        const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/speakup`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        });
        const retornoAudio = await response.json();
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].dismiss("criando_dialogo");
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].loading("Finalizando....", {
            id: "finalizando"
        });
        setTimeout(()=>{
            setAudioProduzido(retornoAudio.file + "?" + new Date().getTime());
            setCanClose(true);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].dismiss("finalizando");
        }, 3000);
    };
    let interlocutorAtual = 0;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Lesson__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        titulo: titulo,
        prefixo: prefixo,
        sufixo: sufixo,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1 flex flex-col min-h-screen",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex sm:items-center justify-between py-3 border-b-2 border-gray-200",
                        children: [
                            !atividadeConcluida && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative flex flex-1 items-center space-x-4 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "px-4 py-2 bg-blue-300 rounded-md",
                                    onClick: ()=>uploadAudio(),
                                    children: "Produzir Di\xe1logo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-1 items-center space-x-2",
                                children: (audioProduzido != "" || atividadeConcluida) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-col w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                        className: "w-full",
                                        src: `${"https://cadastro.englishinbrazil.com.br"}${!atividadeConcluida ? audioProduzido : `/uploads/aula_speakUp2/aluno_${profile.user.alunoid.toString().padStart(5, "0")}_${dadoConteudo.__component}_${dadoConteudo.id}.mp3?${new Date().getTime()}`}`,
                                        controls: true
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "messages",
                        className: "flex flex-col space-y-4 p-3 ",
                        children: conteudo.map((frase, i)=>{
                            interlocutorAtual = i % 2;
                            const { audio  } = frase;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `chat-message transition-all`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `flex flex-col-reverse gap-2 md:gap-1 md:flex-row justify-end md:items-end items-start md:justify-start`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `flex flex-col space-y-2 text-xs max-w-lg mx-2 order-2 items-start`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `px-4 py-2 rounded-lg inline-block rounded-bl-none bg-theme-blue text-white  `,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-row items-start",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "flex flex-col divide-y space-y-2 mr-3",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        onClick: ()=>PlayAudioGroup([
                                                                                audio?.url
                                                                            ]),
                                                                        children: audioPlay == audio?.url && playing ? _icon__WEBPACK_IMPORTED_MODULE_9__/* .svgPause */ .tN : _icon__WEBPACK_IMPORTED_MODULE_9__/* .svgPlay */ .w5
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex flex-col divide-y space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_8__/* .Markdown */ .U, {
                                                                            children: frase.frasePergunta.replace("\\n", "<br>")
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: `py-1 transition-all ${!showTraducao ? "hidden" : ""}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                children: frase.frasePerguntaPt
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: `https://cadastro.englishinbrazil.com.br/uploads/ebook01_e_2_dialogo1_CARINA_a05b80d631.png`,
                                                    alt: "My profile",
                                                    className: "w-6 h-6 rounded-full order-1"
                                                })
                                            ]
                                        })
                                    }, `chat_id_${frase.id}`),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `chat-message transition-all`,
                                        "data-fraseId": `chat_id_resposta_${frase.id}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `flex flex-col gap-2 md:gap-1 md:flex-row items-end justify-end`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `flex flex-col space-y-2 text-xs max-w-lg  mx-2 order-1 items-end`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `px-2 md:px-4 py-2 rounded-lg rounded-br-none bg-gray-300 text-gray-600  `,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-row items-start",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex flex-col space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: frase.fraseResposta
                                                                        })
                                                                    }),
                                                                    !atividadeConcluida && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex flex-row",
                                                                        children: [
                                                                            isRecording && !listAudioGravados[i]?.isRecording ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                onClick: ()=>listAudioGravados[i]?.isRecording ? audioStop(i) : audioGravar(i),
                                                                                children: listAudioGravados[i]?.isRecording ? _icon__WEBPACK_IMPORTED_MODULE_9__/* .svgPause */ .tN : _icon__WEBPACK_IMPORTED_MODULE_9__/* .svgMicrophone */ .Y6
                                                                            }),
                                                                            listAudioGravados[i]?.audioResposta != "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                                                src: listAudioGravados[i]?.audioResposta,
                                                                                controls: "controls"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `py-1 transition-all  divide-y  ${!showTraducao ? "hidden" : ""}`,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                            children: frase.fraseRespostaPt
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: `https://app.englishinbrazil.com.br/avatar.png`,
                                                    alt: "My profile",
                                                    className: "w-6 h-6 rounded-full order-1"
                                                })
                                            ]
                                        })
                                    }, `chat_id_resposta_${frase.id}`)
                                ]
                            });
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5474);
/* harmony import */ var _Layout_Lesson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2136);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout_Lesson__WEBPACK_IMPORTED_MODULE_3__]);
_Layout_Lesson__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Video = ({ content  })=>{
    const { titulo , prefixo , sufixo , link , tipo  } = content;
    const { setCanClose  } = (0,_lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_2__/* .useLesson */ .RN)();
    setCanClose(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Lesson__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        titulo: titulo,
        prefixo: prefixo,
        sufixo: sufixo,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-center",
            children: [
                tipo == "Panda" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    src: link,
                    className: "border-none top-0 left-0 w-full max-w-lg h-48 md:h-72 lg:max-w-2xl lg:h-96",
                    allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture",
                    allowFullScreen: true,
                    fetchPriority: "high"
                }),
                tipo == "Wistia" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player__WEBPACK_IMPORTED_MODULE_1___default()), {
                    url: link,
                    controls: true,
                    width: window.innerWidth <= 768 ? "100%" : undefined
                }),
                tipo == "Hotmart" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    src: link,
                    className: "border-none top-0 left-0 w-full max-w-lg h-48 md:h-72 lg:max-w-2xl lg:h-96",
                    allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture",
                    allowFullScreen: true,
                    fetchPriority: "high"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Vocabulary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6367);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_audio_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5474);
/* harmony import */ var _Layout_Lesson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2136);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout_Lesson__WEBPACK_IMPORTED_MODULE_4__]);
_Layout_Lesson__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const svgPlay = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30px",
    height: "30px",
    viewBox: "0 0 60 60",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        fill: "#e94653",
        d: "M100,930a30,30,0,1,1-30,30A30,30,0,0,1,100,930Zm-5.985,38.742a1.207,1.207,0,0,0,.763,1.1,1.465,1.465,0,0,0,1.473-.082l13.14-8.683a1.371,1.371,0,0,0-.009-2.311l-13.176-8.55a1.455,1.455,0,0,0-1.471-.068,1.289,1.289,0,0,0-.755,1.165Z",
        transform: "translate(-70 -930)"
    })
});
const svgPause = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30px",
    height: "30px",
    viewBox: "0 0 275.725 275.725",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        fill: "#e94653",
        d: "M137.862,0C61.726,0,0,61.726,0,137.862c0,76.14,61.726,137.862,137.862,137.862c76.139,0,137.862-61.723,137.862-137.862 C275.725,61.726,214.001,0,137.862,0z M114.26,188.856c0,11.967-7.925,21.655-17.704,21.655c-9.776,0-17.704-9.688-17.704-21.655 V100.65c0-11.957,7.927-21.655,17.704-21.655c9.779,0,17.704,9.698,17.704,21.655V188.856z M196.877,188.856 c0,11.967-7.933,21.655-17.704,21.655c-9.771,0-17.698-9.688-17.698-21.655V100.65c0-11.957,7.928-21.655,17.698-21.655 c9.776,0,17.704,9.698,17.704,21.655V188.856z"
    })
});
const Vocabulary = ({ content ={}  })=>{
    const { titulo , prefixo , sufixo , tabelas =[]  } = content;
    const { setCanClose  } = (0,_lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_3__/* .useLesson */ .RN)();
    setCanClose(true);
    const { 0: audioPlay , 1: setAudioPlay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: audioPlayGrup , 1: setAudioPlayGrup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: positionGrupo , 1: setPositionGrupo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const { togglePlayPause , ready , playing , load , pause  } = (0,react_use_audio_player__WEBPACK_IMPORTED_MODULE_2__.useAudioPlayer)({
        autoplay: false,
        format: "mp3",
        onend: ()=>{
            setAudioPlay("");
        }
    });
    const PlayAudio = (grupoAudio)=>{
        setAudioPlayGrup(grupoAudio);
        setPositionGrupo(0);
        setAudioPlay(grupoAudio[0]);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (positionGrupo == -1) {
            return false;
        }
        const file = audioPlayGrup[positionGrupo];
        if (!file) {
            return false;
        }
        setAudioPlay(file);
        load({
            src: `${"https://cadastro.englishinbrazil.com.br"}${file}`,
            autoplay: true,
            onend: ()=>{
                const nextPosicao = positionGrupo + 1;
                if (nextPosicao < audioPlayGrup.length) {
                    setPositionGrupo(nextPosicao);
                } else {
                    setAudioPlayGrup([]);
                    setPositionGrupo(-1);
                }
            }
        });
    }, [
        positionGrupo,
        audioPlayGrup
    ]);
    const PlayAudioGroup = (grupoAudio)=>{
        if (grupoAudio[positionGrupo] == audioPlay) {
            togglePlayPause();
            return false;
        }
        if (grupoAudio[positionGrupo] != audioPlayGrup[positionGrupo]) {
            setAudioPlayGrup([]);
            setPositionGrupo(-1);
        }
        setAudioPlayGrup(grupoAudio);
        setPositionGrupo(0);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Lesson__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        titulo: titulo,
        prefixo: prefixo,
        sufixo: sufixo,
        children: tabelas.map((item)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    item.titulo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "my-4 font-bold",
                        children: item.titulo
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pl-4",
                                        children: item.TabelaConteudo[0].audio && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>PlayAudioGroup(item.TabelaConteudo.map((audioGrupo)=>audioGrupo.audio.url)),
                                            children: audioPlay == item.TabelaConteudo[0].audio?.url && playing ? svgPause : svgPlay
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-semibold text-base py-1",
                                        children: "Reproduzir Todos os \xc1udios"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                className: "border-collapse table-auto w-full text-sm",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    className: "font-medium p-4 pt-0 pb-3 text-slate-400 text-left",
                                                    children: "EN"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    className: "font-medium p-4 pt-0 pb-3 text-slate-400 text-left",
                                                    children: "PT"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        className: "bg-white border-t",
                                        children: item.TabelaConteudo.map((conteudo, i)=>{
                                            const isActive = audioPlay == conteudo.audio?.url && playing;
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: `transition-all ${isActive || !playing ? "" : "opacity-50"}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "border-b border-slate-100 p-4 text-slate-500",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>PlayAudioGroup([
                                                                    conteudo.audio?.url
                                                                ]),
                                                            children: isActive ? svgPause : svgPlay
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "border-b border-slate-100 p-4 text-slate-500",
                                                        children: conteudo.conteudoEn.split("\\n").map((content)=>{
                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: content
                                                            }, content);
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "border-b border-slate-100 p-4 text-slate-500",
                                                        children: conteudo.conteudoPt.split("\\n").map((content)=>{
                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: content
                                                            }, content);
                                                        })
                                                    })
                                                ]
                                            }, `${item.id}_${i}`);
                                        })
                                    })
                                ]
                            })
                        ]
                    }, item.id)
                ]
            }, item.id);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ MessageBanner)
/* harmony export */ });
/* unused harmony export MessageBannerType */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Markdown__WEBPACK_IMPORTED_MODULE_1__]);
_Markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const MessageBannerType = {
    error: "border-l-red-700 text-red-700 bg-red-200",
    success: "border-l-green-700 text-green-700 bg-green-200"
};
const MessageBanner = ({ title , message , type ="error"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex flex-col border-l-4 px-4 py-2 my-2 gap-2 ${MessageBannerType[type]}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "font-bold",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_1__/* .Markdown */ .U, {
                children: message
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6459:
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
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6281);
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6367);
/* harmony import */ var react_use_audio_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_audio_player__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5474);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4748);
/* harmony import */ var _lib_getProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6516);
/* harmony import */ var _components_Breadcrump__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3898);
/* harmony import */ var _components_Button_WithArrow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2282);
/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4347);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1875);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5869);
/* harmony import */ var _components_Layout_Panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6940);
/* harmony import */ var _components_Lesson_Type_Dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3784);
/* harmony import */ var _components_Lesson_Type_Exercise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9150);
/* harmony import */ var _components_Lesson_Type_File__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8588);
/* harmony import */ var _components_Lesson_Type_Other__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7710);
/* harmony import */ var _components_Lesson_Type_SpeakUp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6130);
/* harmony import */ var _components_Lesson_Type_Video__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5328);
/* harmony import */ var _components_Lesson_Type_Vocabulary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9788);
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6718);
/* harmony import */ var _services_Module_GetAllAulasBySlugServide__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9310);
/* harmony import */ var _services_Session__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(637);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Comments__WEBPACK_IMPORTED_MODULE_11__, _components_Lesson_Type_Dialog__WEBPACK_IMPORTED_MODULE_15__, _components_Lesson_Type_Exercise__WEBPACK_IMPORTED_MODULE_16__, _components_Lesson_Type_Other__WEBPACK_IMPORTED_MODULE_18__, _components_Lesson_Type_SpeakUp__WEBPACK_IMPORTED_MODULE_19__, _components_Lesson_Type_Video__WEBPACK_IMPORTED_MODULE_20__, _components_Lesson_Type_Vocabulary__WEBPACK_IMPORTED_MODULE_21__, _components_Markdown__WEBPACK_IMPORTED_MODULE_22__, _services_Session__WEBPACK_IMPORTED_MODULE_23__]);
([_components_Comments__WEBPACK_IMPORTED_MODULE_11__, _components_Lesson_Type_Dialog__WEBPACK_IMPORTED_MODULE_15__, _components_Lesson_Type_Exercise__WEBPACK_IMPORTED_MODULE_16__, _components_Lesson_Type_Other__WEBPACK_IMPORTED_MODULE_18__, _components_Lesson_Type_SpeakUp__WEBPACK_IMPORTED_MODULE_19__, _components_Lesson_Type_Video__WEBPACK_IMPORTED_MODULE_20__, _components_Lesson_Type_Vocabulary__WEBPACK_IMPORTED_MODULE_21__, _components_Markdown__WEBPACK_IMPORTED_MODULE_22__, _services_Session__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























const Content = ({ user , me , footer , modulo  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { course , module , lesson , component , content  } = router.query;
    const { config  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_7__/* .useProfile */ .U)();
    const { menu , activity , activityNext , activityPrevious , activityCurrent , activityConfetti , data , loadClass , handleCheckLesson , canClose , setCanClose , isSubmitting  } = (0,_lib_Context_Lesson__WEBPACK_IMPORTED_MODULE_6__/* .useLesson */ .RN)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        config(me);
        loadClass(course, module, lesson, component, content, user.token);
    }, [
        course,
        module,
        lesson,
        component,
        content
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Panel__WEBPACK_IMPORTED_MODULE_14__/* .LayoutPanel */ .s, {
        children: [
            activityConfetti && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_confetti__WEBPACK_IMPORTED_MODULE_4___default()), {
                tweenDuration: 3000,
                width: window.innerWidth - 20,
                recycle: false
            }),
            data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "flex flex-col-reverse lg:flex-row w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col w-full gap-8 p-4 md:p-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrump__WEBPACK_IMPORTED_MODULE_9__/* .Breadcrump */ .B, {
                                path: [
                                    {
                                        title: "M\xf3dulos",
                                        url: `/class/${course}`
                                    },
                                    {
                                        title: "Aulas",
                                        url: `/class/${course}/${module}`
                                    },
                                    {
                                        title: `${lesson}`,
                                        url: `/class/${course}/${module}/${lesson}/${component}/${content}`
                                    }
                                ]
                            }),
                            activityPrevious || activityNext ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `
            flex bg-theme-blue dark:bg-theme-gray-900 text-white rounded-md p-2 md:relative sticky top-2 z-50
            ${activityPrevious ? "justify-between" : "justify-end"}
            `,
                                children: [
                                    activityPrevious && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_WithArrow__WEBPACK_IMPORTED_MODULE_10__/* .WithArrow */ .f, {
                                        title: "Anterior",
                                        text: `${activityPrevious?.titulo}`,
                                        slug: `${course}/${module}/${lesson}/${activityPrevious?.__component}/${activityPrevious?.id}`,
                                        direction: "right"
                                    }),
                                    activityNext && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_WithArrow__WEBPACK_IMPORTED_MODULE_10__/* .WithArrow */ .f, {
                                        title: "Pr\xf3ximo",
                                        text: `${activityNext?.titulo}`,
                                        slug: `${course}/${module}/${lesson}/${activityNext?.__component}/${activityNext?.id}`,
                                        direction: "left"
                                    })
                                ]
                            }) : null,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                className: "flex flex-col gap-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                    className: "flex flex-col-reverse md:flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                            className: "flex flex-col md:flex-row justify-between items-center md:sticky md:top-2 bg-gray-200 dark:bg-theme-gray-900 py-2 rounded-md z-40 px-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "font-semibold text-lg md:text-2xl text-theme-blue dark:text-gray-200",
                                                    children: data.titulo
                                                }),
                                                data.pontos > 0 && !isSubmitting && !data.aula_exercicio?.isUniqueValidation && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: `font-bold shadow-md ${data.atividadeConcluida ? "bg-theme-green-500 text-gray-800" : "bg-white text-theme-blue-2"} px-6 py-2 rounded-md`,
                                                            onClick: ()=>handleCheckLesson(course, module, lesson, component, content, user.token),
                                                            children: data.atividadeConcluida ? "Aula Conclu\xedda" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-6 w-6 text-theme-green-500",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: 2,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            d: "M5 13l4 4L19 7"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Marcar como Conclu\xedda"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        canClose && !data.atividadeConcluida && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "flex absolute -top-1 -right-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-blue-dark dark:bg-red-400 opacity-75"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "relative flex rounded-full h-4 w-4 bg-theme-blue dark:bg-theme-red-500 items-center text-xs text-white justify-center"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_use_audio_player__WEBPACK_IMPORTED_MODULE_5__.AudioPlayerProvider, {
                                            children: [
                                                component == "aula.video-1-0" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Lesson_Type_Video__WEBPACK_IMPORTED_MODULE_20__/* .Video */ .n, {
                                                    content: data
                                                }, component),
                                                component == "aula.vocabulario-1-0" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Lesson_Type_Vocabulary__WEBPACK_IMPORTED_MODULE_21__/* .Vocabulary */ .x, {
                                                    content: data
                                                }, component),
                                                component === "aula.dialogo-2-0" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Lesson_Type_Dialog__WEBPACK_IMPORTED_MODULE_15__/* .Dialog2 */ .g, {
                                                    content: data
                                                }, component),
                                                component === "aula.speak-up2-0" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Lesson_Type_SpeakUp__WEBPACK_IMPORTED_MODULE_19__/* .SpeakUp2 */ .L, {
                                                    dadoConteudo: data,
                                                    token: user.token
                                                }, component),
                                                component === "aula.arquivo-1-0" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Lesson_Type_File__WEBPACK_IMPORTED_MODULE_17__/* .File */ .$, {
                                                    content: data
                                                }, component),
                                                component === "aula.conteudo-livre" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Lesson_Type_Other__WEBPACK_IMPORTED_MODULE_18__/* .Other */ .P, {
                                                    content: data
                                                }, component),
                                                component === "aula.exercicio-em-aula" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Lesson_Type_Exercise__WEBPACK_IMPORTED_MODULE_16__/* .Exercise */ .c, {
                                                    content: data,
                                                    token: user.token
                                                }, component)
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col-reverse",
                                children: [
                                    activity?.enabledComments ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Comments__WEBPACK_IMPORTED_MODULE_11__/* .Comments */ .H, {
                                        token: user.token
                                    }) : null,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "lg:hidden flex flex-col px-4 gap-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-theme-gray-900 py-4 rounded-md font-medium",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                                className: "flex gap-2 text-theme-red-500",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "font-bold md:text-lg",
                                                        children: activity?.titulo
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_22__/* .Markdown */ .U, {
                                                children: activity?.descricao
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    menu?.map((section, i)=>{
                                                        if (section.group) {
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex flex-col gap-2 p-1 border rounded-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                        onClick: ()=>setOpen(!open),
                                                                        className: "flex justify-between font-bold bg-gray-100 dark:bg-theme-gray-600 px-4 gap-2 items-center rounded-md py-1 hover:bg-theme-blue-dark hover:text-white cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: `flex items-center justify-center text-2xl ${section.item.filter((item)=>item.atividadeConcluida).length < section.item.length ? "opacity-0" : ""}`,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            className: "h-6 w-6 text-theme-green-500",
                                                                                            fill: "none",
                                                                                            viewBox: "0 0 24 24",
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: 2,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                d: "M5 13l4 4L19 7"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: "INFOBOX"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                        className: "text-sm",
                                                                                        children: [
                                                                                            section.item.filter((item)=>item.atividadeConcluida).length,
                                                                                            "/",
                                                                                            section.item.length
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                strokeWidth: 1.5,
                                                                                stroke: "currentColor",
                                                                                className: "w-6 h-6",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "m4.5 15.75 7.5-7.5 7.5 7.5"
                                                                                })
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                strokeWidth: 1.5,
                                                                                stroke: "currentColor",
                                                                                className: "w-6 h-6",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: section.item.map((item, index)=>{
                                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: `/class/${course}/${module}/${lesson}/${item?.__component}/${item?.id}`,
                                                                                "aria-current": "true",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    className: `flex px-4 gap-2 items-center rounded-md py-1 hover:bg-theme-blue-dark hover:text-white cursor-pointer ${router.asPath === `/class/${course}/${module}/${lesson}/${item?.__component}/${item?.id}` ? "bg-theme-red-500 text-white" : "bg-gray-100 dark:bg-theme-gray-600"}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: `flex items-center justify-center text-2xl ${!item.atividadeConcluida ? "opacity-0" : ""}`,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "h-6 w-6 text-theme-green-500",
                                                                                                fill: "none",
                                                                                                viewBox: "0 0 24 24",
                                                                                                stroke: "currentColor",
                                                                                                strokeWidth: 2,
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                    strokeLinecap: "round",
                                                                                                    strokeLinejoin: "round",
                                                                                                    d: "M5 13l4 4L19 7"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: item?.titulo
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }, index);
                                                                        })
                                                                    }) : null
                                                                ]
                                                            }, i);
                                                        }
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: `/class/${course}/${module}/${lesson}/${section.item?.__component}/${section.item?.id}`,
                                                                "aria-current": "true",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    className: `flex px-4 gap-2 items-center rounded-md py-1 hover:bg-theme-blue-dark hover:text-white cursor-pointer ${router.asPath === `/class/${course}/${module}/${lesson}/${section.item?.__component}/${section.item?.id}` ? "bg-theme-red-500 text-white" : "bg-gray-100 dark:bg-theme-gray-600"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: `flex items-center justify-center text-2xl ${!section.item.atividadeConcluida ? "opacity-0" : ""}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "h-6 w-6 text-theme-green-500",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: 2,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "M5 13l4 4L19 7"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: section.item?.titulo
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }, `${section.item?.__component}_${section.item?.id}`);
                                                    }),
                                                    activity?.nextLesson && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "flex py-2 mt-2 rounded-md font-bold text-center bg-gray-100 dark:bg-theme-gray-800",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: `/class/${course}/${activity.nextLesson.moduleSlug}/${activity.nextLesson.lessonSlug}/${activity.nextLesson.contentType}/${activity.nextLesson.contentId}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "grow",
                                                                children: "Pr\xf3xima Aula"
                                                            })
                                                        })
                                                    }),
                                                    !activity?.nextLesson && activity?.nextModule && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "flex py-2 mt-2 rounded-md font-bold text-center bg-gray-100 dark:bg-theme-gray-800",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: `/class/${course}/${activity.nextModule.moduleSlug}/${activity.nextModule.lessonSlug}/${activity.nextModule.contentType}/${activity.nextModule.contentId}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "grow",
                                                                children: "Pr\xf3ximo M\xf3dulo"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_12__/* .Footer */ .$, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full lg:max-w-sm shrink-0 bg-white dark:bg-theme-gray-900 border border-gray-200 dark:border-gray-900 pb-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col grow gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_13__/* .Header */ .h, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                    className: "hidden lg:flex flex-col px-4 gap-4 text-gray-800 dark:text-gray-200 font-medium sticky top-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                            className: "flex gap-2 text-theme-red-500",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-6 w-6",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "font-bold md:text-lg",
                                                    children: activity?.titulo
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_22__/* .Markdown */ .U, {
                                            children: activity?.descricao
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                menu?.map((section, i)=>{
                                                    if (section.group) {
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col gap-2 p-1 border rounded-md",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                    onClick: ()=>setOpen(!open),
                                                                    className: "flex justify-between font-bold bg-gray-100 dark:bg-theme-gray-600 px-4 gap-2 items-center rounded-md py-1 hover:bg-theme-blue-dark hover:text-white cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: `flex items-center justify-center text-2xl ${section.item.filter((item)=>item.atividadeConcluida).length < section.item.length ? "opacity-0" : ""}`,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        className: "h-6 w-6 text-theme-green-500",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        stroke: "currentColor",
                                                                                        strokeWidth: 2,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                            strokeLinecap: "round",
                                                                                            strokeLinejoin: "round",
                                                                                            d: "M5 13l4 4L19 7"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "INFOBOX"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    className: "text-sm",
                                                                                    children: [
                                                                                        section.item.filter((item)=>item.atividadeConcluida).length,
                                                                                        "/",
                                                                                        section.item.length
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            strokeWidth: 1.5,
                                                                            stroke: "currentColor",
                                                                            className: "w-6 h-6",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                d: "m4.5 15.75 7.5-7.5 7.5 7.5"
                                                                            })
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            strokeWidth: 1.5,
                                                                            stroke: "currentColor",
                                                                            className: "w-6 h-6",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: section.item.map((item, index)=>{
                                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: `/class/${course}/${module}/${lesson}/${item?.__component}/${item?.id}`,
                                                                            "aria-current": "true",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                className: `flex px-4 gap-2 items-center rounded-md py-1 hover:bg-theme-blue-dark hover:text-white cursor-pointer ${router.asPath === `/class/${course}/${module}/${lesson}/${item?.__component}/${item?.id}` ? "bg-theme-red-500 text-white" : "bg-gray-100 dark:bg-theme-gray-600"}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: `flex items-center justify-center text-2xl ${!item.atividadeConcluida ? "opacity-0" : ""}`,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            className: "h-6 w-6 text-theme-green-500",
                                                                                            fill: "none",
                                                                                            viewBox: "0 0 24 24",
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: 2,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                d: "M5 13l4 4L19 7"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: item?.titulo
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }, index);
                                                                    })
                                                                }) : null
                                                            ]
                                                        }, i);
                                                    }
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: `/class/${course}/${module}/${lesson}/${section.item?.__component}/${section.item?.id}`,
                                                            "aria-current": "true",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                className: `flex px-4 gap-2 items-center rounded-md py-1 hover:bg-theme-blue-dark hover:text-white cursor-pointer ${router.asPath === `/class/${course}/${module}/${lesson}/${section.item?.__component}/${section.item?.id}` ? "bg-theme-red-500 text-white" : "bg-gray-100 dark:bg-theme-gray-600"}`,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: `flex items-center justify-center text-2xl ${!section.item.atividadeConcluida ? "opacity-0" : ""}`,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            className: "h-6 w-6 text-theme-green-500",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: 2,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                d: "M5 13l4 4L19 7"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: section.item?.titulo
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }, `${section.item?.__component}_${section.item?.id}`);
                                                }),
                                                activity?.nextLesson && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "flex py-2 mt-2 rounded-md font-bold text-center bg-gray-100 dark:bg-theme-gray-800",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: `/class/${course}/${activity.nextLesson.moduleSlug}/${activity.nextLesson.lessonSlug}/${activity.nextLesson.contentType}/${activity.nextLesson.contentId}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "grow",
                                                            children: "Pr\xf3xima Aula"
                                                        })
                                                    })
                                                }),
                                                !activity?.nextLesson && activity?.nextModule && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "flex py-2 mt-2 rounded-md font-bold text-center bg-gray-100 dark:bg-theme-gray-800",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: `/class/${course}/${activity.nextModule.moduleSlug}/${activity.nextModule.lessonSlug}/${activity.nextModule.contentType}/${activity.nextModule.contentId}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "grow",
                                                            children: "Pr\xf3ximo M\xf3dulo"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);
const getServerSideProps = (0,_services_Session__WEBPACK_IMPORTED_MODULE_23__/* .withSessionSsr */ .f)(async function({ req , res , query  }) {
    const user = req.session.user;
    const { module  } = query;
    if (user === undefined) {
        res.setHeader("location", "/login");
        res.statusCode = 302;
        res.end();
        return {
            props: {
                user: {
                    token: ""
                },
                me: {}
            }
        };
    }
    return {
        props: {
            user,
            me: await (0,_lib_getProfile__WEBPACK_IMPORTED_MODULE_8__/* .profile */ .N)(user.token),
            modulo: await (0,_services_Module_GetAllAulasBySlugServide__WEBPACK_IMPORTED_MODULE_24__/* .GetAllAulasByModuloSlugService */ .R)(`${module}`, user.token)
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

/***/ 484:
/***/ ((module) => {

module.exports = require("mic-recorder-to-mp3");

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

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6281:
/***/ ((module) => {

module.exports = require("react-confetti");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 8924:
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ 1701:
/***/ ((module) => {

module.exports = require("react-player/youtube");

/***/ }),

/***/ 3697:
/***/ ((module) => {

module.exports = require("react-range-step-input");

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

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 4955:
/***/ ((module) => {

module.exports = import("comma-separated-tokens");;

/***/ }),

/***/ 9492:
/***/ ((module) => {

module.exports = import("hast-util-whitespace");;

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 6861:
/***/ ((module) => {

module.exports = import("property-information");;

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

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

/***/ }),

/***/ 6688:
/***/ ((module) => {

module.exports = import("remark-parse");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ 1152:
/***/ ((module) => {

module.exports = import("space-separated-tokens");;

/***/ }),

/***/ 7785:
/***/ ((module) => {

module.exports = import("style-to-object");;

/***/ }),

/***/ 4390:
/***/ ((module) => {

module.exports = import("unified");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

module.exports = import("unist-util-visit");;

/***/ }),

/***/ 6107:
/***/ ((module) => {

module.exports = import("vfile");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,675,952,664,531,433,756,118,474], () => (__webpack_exec__(6459)));
module.exports = __webpack_exports__;

})();