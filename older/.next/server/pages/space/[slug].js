"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 8750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SocketContext),
/* harmony export */   "W": () => (/* binding */ socket)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = "https://cadastro.englishinbrazil.com.br" ?? 0;
const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(url);
const SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GetAllMessagesByPostIdService = async (id, token)=>{
    try {
        const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/post/${id}/messages`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const messages = await response.json();
        return messages;
    } catch (error) {
        console.log(error);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetAllMessagesByPostIdService);


/***/ }),

/***/ 9294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GetPostBySlugService = async (slug, token)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/post/${slug}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    const chatroom = await response.json();
    return chatroom;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetPostBySlugService);


/***/ }),

/***/ 4670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ SpaceMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2461);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3753);



const SpaceMessage = ({ id , content , sentAt , reactions , aluno , handleShowSender , responseToMessageId , handleReaction  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "flex gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    title: "avatar",
                    size: "xsmall",
                    path: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .imageURL */ .qR)(aluno?.avatar?.url)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-gray-200 dark:bg-theme-gray-600 rounded-lg px-4 py-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                className: "flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-bold",
                                        children: aluno?.primeiroNome
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs",
                                        children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .convertDate */ .Ny)(sentAt, false)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm",
                                children: content
                            })
                        ]
                    }),
                    reactions && Object.keys(reactions).length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center absolute -right-1 gap-1 rounded-full bottom-2 text-xs bg-gray-300 dark:bg-theme-gray-800 dark:text-white px-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "❤️"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: Object.keys(reactions).length
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                        className: "pl-2 flex gap-4 text-xs",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>responseToMessageId ? handleReaction("like", responseToMessageId, aluno.id, id) : handleReaction("like", id, aluno.id),
                                className: "flex gap-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hover:underline",
                                    children: "Gostei"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: ()=>responseToMessageId ? handleShowSender(responseToMessageId) : handleShowSender(id),
                                    className: "hover:underline",
                                    children: "Responder"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};



/***/ }),

/***/ 3557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8750);
/* harmony import */ var _lib_Post_GetAllMessagesByPostService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6927);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2461);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3753);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6718);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4670);
/* harmony import */ var _Sender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4942);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_3__, _Markdown__WEBPACK_IMPORTED_MODULE_5__, _Sender__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_3__, _Markdown__WEBPACK_IMPORTED_MODULE_5__, _Sender__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const SpacePost = ({ id , title , content , slug , image , Message , reactions , createdAt , me , token , aluno  })=>{
    const { 0: messages , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Message);
    const { 0: showSender , 1: setShowSender  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: countReactionLike , 1: setCountReactionLike  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>reactions ? Object.values(reactions).length : 0);
    const { 0: reactionLikeStatus , 1: setReactionLikeStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>reactions && Object.keys(reactions).includes(me.user.alunoid.toString()));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_3__/* .socket.emit */ .W.emit("join", {
            id
        }, ()=>{
            if (Object.values(reactions)) {
                setCountReactionLike(Object.values(reactions).filter((reaction)=>reaction == "like").length);
            }
        });
        _lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_3__/* .socket.on */ .W.on("get_message", async ()=>{
            const messages = await (0,_lib_Post_GetAllMessagesByPostService__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(id, token);
            setMessage(messages.Message);
            const reactionsLike = messages.reactions ? Object.values(messages.reactions).filter((reaction)=>reaction == "like").length : 0;
            setCountReactionLike(reactionsLike);
            setReactionLikeStatus(()=>reactions && Object.keys(messages.reactions).includes(me.user.alunoid.toString()));
        });
    }, []);
    const handleShowSender = (value)=>{
        showSender == value ? setShowSender(undefined) : setShowSender(value);
    };
    const handleReaction = (type, messageId, fromStudentId, responseId)=>{
        _lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_3__/* .socket.emit */ .W.emit("send_reaction", {
            id,
            studentId: me.user.alunoid,
            type,
            messageId,
            fromStudentId,
            responseId
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "flex flex-col mx-auto w-full max-w-2xl p-4 gap-4 rounded-md bg-white dark:bg-theme-gray-900 dark:text-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        title: "avatar",
                        size: "small",
                        path: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .imageURL */ .qR)(aluno?.avatar?.url)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "font-bold text-sm",
                                children: aluno?.primeiroNome
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs",
                                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .convertDate */ .Ny)(createdAt, false)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "font-bold",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown__WEBPACK_IMPORTED_MODULE_5__/* .Markdown */ .U, {
                        children: content
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center pl-1 pr-2 h-5 bg-gray-300 dark:bg-theme-gray-800 dark:text-white hover:bg-gray-400 rounded-full text-xs",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "❤️"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "ml-1 font-medium",
                                        children: countReactionLike
                                    })
                                ]
                            }),
                            messages.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "text-sm hover:underline",
                                children: [
                                    messages.length,
                                    " coment\xe1rios"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex gap-2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>handleReaction("like"),
                            className: `flex w-full border rounded-sm items-center justify-center gap-2 py-1 dark:border-theme-gray-800`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiLike, {
                                    className: `${reactionLikeStatus ? "text-blue-800 text-lg" : ""}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Gostei"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sender__WEBPACK_IMPORTED_MODULE_7__/* .SpaceSender */ .F, {
                            id: id,
                            fromStudentId: me.user.alunoid
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "flex flex-col gap-2",
                        children: messages.map((message)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message__WEBPACK_IMPORTED_MODULE_6__/* .SpaceMessage */ .w, {
                                        ...message,
                                        handleShowSender: handleShowSender,
                                        handleReaction: handleReaction
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                        className: "flex flex-col pl-6 gap-2 pt-1",
                                        children: message.MessageResponse.map((response)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message__WEBPACK_IMPORTED_MODULE_6__/* .SpaceMessage */ .w, {
                                                ...response,
                                                responseToMessageId: message.id,
                                                handleShowSender: handleShowSender,
                                                handleReaction: handleReaction
                                            }, response.id))
                                    }),
                                    showSender === message.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pl-6 py-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sender__WEBPACK_IMPORTED_MODULE_7__/* .SpaceSender */ .F, {
                                            id: id,
                                            fromStudentId: me.user.alunoid,
                                            responseToMessageId: message.id
                                        })
                                    }) : null
                                ]
                            }, message.id))
                    })
                ]
            })
        ]
    }, id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacePost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ SpaceSender)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9137);
/* harmony import */ var _lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8750);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3753);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_2__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const SpaceSender = ({ id , fromStudentId , responseToMessageId  })=>{
    const { register , handleSubmit , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    const onSubmit = (data)=>{
        const { message  } = data;
        _lib_Context_SocketContext__WEBPACK_IMPORTED_MODULE_2__/* .socket.emit */ .W.emit("send_message", {
            id,
            fromStudentId,
            message,
            responseToMessageId
        });
        reset();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    title: "avatar",
                    size: "xsmall"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "flex flex-col grow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        placeholder: "Adicione o seu coment\xe1rio",
                        ...register("message", {
                            required: true
                        }),
                        className: "bg-gray-200 dark:bg-theme-gray-600 grow rounded-lg px-2 py-1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex py-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "text-sm px-2 rounded-sm border dark:border-theme-gray-800",
                            children: "Enviar"
                        })
                    })
                ]
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Context_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4748);
/* harmony import */ var _lib_Live_GetLastLiveService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9030);
/* harmony import */ var _lib_New_GetAllNewsService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4338);
/* harmony import */ var _lib_Post_GetPostBySlugService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9294);
/* harmony import */ var _lib_getProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6516);
/* harmony import */ var _components_Aside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6988);
/* harmony import */ var _components_Breadcrump__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3898);
/* harmony import */ var _components_Layout_Panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6940);
/* harmony import */ var _components_Space_Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3557);
/* harmony import */ var _services_Session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(637);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Aside__WEBPACK_IMPORTED_MODULE_4__, _components_Space_Post__WEBPACK_IMPORTED_MODULE_7__, _services_Session__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Aside__WEBPACK_IMPORTED_MODULE_4__, _components_Space_Post__WEBPACK_IMPORTED_MODULE_7__, _services_Session__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Space = ({ token , me , live , news , post  })=>{
    const { config  } = (0,_lib_Context_Profile__WEBPACK_IMPORTED_MODULE_2__/* .useProfile */ .U)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        config(me);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Panel__WEBPACK_IMPORTED_MODULE_6__/* .LayoutPanel */ .s, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "flex flex-col-reverse lg:flex-row w-full",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col w-full gap-8 p-4 md:p-8 mb-20 md:mb-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrump__WEBPACK_IMPORTED_MODULE_5__/* .Breadcrump */ .B, {
                            path: [
                                {
                                    title: "Space",
                                    url: "/space"
                                }
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 gap-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Space_Post__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                ...post,
                                me: me,
                                token: token
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Aside__WEBPACK_IMPORTED_MODULE_4__/* .Aside */ .x, {
                    live: live,
                    news: news
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Space);
const getServerSideProps = (0,_services_Session__WEBPACK_IMPORTED_MODULE_8__/* .withSessionSsr */ .f)(async function({ req , res , query  }) {
    const user = req.session.user;
    const { slug  } = query;
    if (user === undefined) {
        res.setHeader("location", "/login");
        res.statusCode = 302;
        res.end();
        return {
            props: {
                me: {},
                live: {},
                news: {},
                chatroom: {}
            }
        };
    }
    return {
        props: {
            token: user.token,
            me: await (0,_lib_getProfile__WEBPACK_IMPORTED_MODULE_3__/* .profile */ .N)(user.token),
            live: await (0,_lib_Live_GetLastLiveService__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(user.token, user.username),
            news: await (0,_lib_New_GetAllNewsService__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(user.token),
            post: await (0,_lib_Post_GetPostBySlugService__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(`${slug}`, user.token)
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

/***/ 9137:
/***/ ((module) => {

module.exports = import("react-hook-form");;

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

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,675,952,664,531,756,118,133,988,505], () => (__webpack_exec__(1289)));
module.exports = __webpack_exports__;

})();