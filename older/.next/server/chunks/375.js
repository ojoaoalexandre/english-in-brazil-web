"use strict";
exports.id = 375;
exports.ids = [375];
exports.modules = {

/***/ 4539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-colorido.69404d40.png","height":122,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR42mPwdJ2WCsS6nq7Tdbxcp4V6ek538jCeHnijLslv7/xSawagZCEQxwFxH1BBp4/rtDJj95nJd63jgu6ax4czeLpN5wZKZAMVeHi6TWvycpuW4+I6PdjWfUZKoPu0DpACNqACRyCWASqwBlpl5e06LQCIY9xcp3sBAMhEMKd2UBrSAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 4021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "md": () => (/* binding */ LoginProvider),
  "f0": () => (/* binding */ useLogin)
});

// UNUSED EXPORTS: LoginContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./lib/getLogin.ts
const registerStatus = async (email, coupon)=>{
    try {
        console.log({
            email,
            coupon
        });
        const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/hasLogin`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                coupon
            })
        });
        const { hasAluno , message  } = await response.json();
        if (hasAluno) {
            return {
                registered: true,
                message: "Cadastro Encontrado"
            };
        }
        if (message) {
            return {
                registered: false,
                error: message
            };
        }
        return {
            registered: false,
            message: "Por favor, preencha o Cadastro"
        };
    } catch (error) {
        return {
            message: error.message
        };
    }
};
const signUp = async (email, password, name)=>{
    try {
        const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/registro`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                username: email,
                password,
                primeiroNome: name
            })
        });
        const data = await response.json();
        if (data.jwt) {
            return {
                registered: true,
                message: "Parab\xe9ns! Cadastro realizado com sucesso!"
            };
        } else {
            return {
                registered: false,
                message: data.error.message
            };
        }
    } catch (error) {
        return error.message;
    }
};
const signIn = async (email, password)=>{
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return {
            message: error.message
        };
    }
};

;// CONCATENATED MODULE: ./lib/Context/Login.tsx




const FormPropsDefault = {
    email: "",
    password: "",
    repeatPassword: "",
    name: "",
    accepted: false
};
const SignInPropsDefault = {
    user: {},
    message: ""
};
const SignUpPropsDefault = {
    user: {},
    message: ""
};
const LoginContextPropsDefault = {
    form: FormPropsDefault,
    handleRegisterStatus: async ()=>{},
    handleSignIn: async ()=>SignInPropsDefault,
    handleSignUp: async ()=>SignUpPropsDefault,
    handleChange: ()=>{}
};
const LoginContext = /*#__PURE__*/ (0,external_react_.createContext)(LoginContextPropsDefault);
const useLogin = ()=>{
    return (0,external_react_.useContext)(LoginContext);
};
const LoginProvider = ({ children  })=>{
    const { 0: form , 1: setForm  } = (0,external_react_.useState)(FormPropsDefault);
    const router = (0,router_.useRouter)();
    const handleRegisterStatus = async (email, coupon)=>{
        return await registerStatus(email, coupon);
    };
    const handleChange = (event)=>{
        const key = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setForm((old)=>({
                ...old,
                [key]: value
            }));
    };
    const handleSignUp = async (email, password, name)=>{
        return await signUp(email, password, name);
    };
    const handleSignIn = async (email, password)=>{
        return await signIn(email, password);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(LoginContext.Provider, {
        value: {
            form,
            handleRegisterStatus,
            handleSignIn,
            handleSignUp,
            handleChange
        },
        children: children
    });
};


/***/ }),

/***/ 8184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ FormSignIn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _lib_Context_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FormSignIn = ()=>{
    const { form , handleSignIn , handleChange  } = (0,_lib_Context_Login__WEBPACK_IMPORTED_MODULE_3__/* .useLogin */ .f0)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (!form.password) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Favor informar a senha");
            return;
        }
        const signIn = handleSignIn(form.email, form.password);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].promise(signIn, {
            loading: "Verificando seu registro...",
            success: (data)=>data.message,
            error: (data)=>data.message
        });
        const data = await signIn;
        if (data.registered) {
            router.push("/");
        }
    };
    const forgetPassword = async ()=>{
        const forget = fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/auth/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: form.email
            })
        });
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].promise(forget, {
            loading: "Enviando Email",
            success: `Nova senha enviada para o email ${form.email}`,
            error: "Erro no Servidor"
        }, {
            success: {
                duration: 5000
            }
        });
        setTimeout(()=>{
            router.reload();
        }, 3000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex rounded-lg gap-2 items-center p-2 border-gray-300 border-2 bg-gray-200 text-theme-blue-2 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8 text-theme-blue-2",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        name: "email",
                        placeholder: "Insira seu email",
                        value: form.email,
                        className: "w-full bg-transparent focus:outline-none",
                        disabled: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex rounded-lg gap-2 items-center p-2 border-gray-300 border-2 bg-gray-200 text-theme-blue-2 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8 text-theme-blue-2",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            d: "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "password",
                        name: "password",
                        placeholder: "Insira sua senha",
                        value: form.password,
                        onChange: (event)=>handleChange(event),
                        className: "w-full bg-transparent focus:outline-none"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>forgetPassword(),
                    className: "text-sm text-theme-blue font-semibold cursor-pointer",
                    children: "Esqueci minha senha"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "py-2 rounded-md bg-theme-blue-dark text-white",
                children: "Entrar"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ FormSignUp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _lib_Context_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FormSignUp = ()=>{
    const { form , handleSignUp , handleSignIn , handleChange  } = (0,_lib_Context_Login__WEBPACK_IMPORTED_MODULE_3__/* .useLogin */ .f0)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (!form.accepted) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Para ter acesso voc\xea deve aceitar os termos de uso");
            return;
        }
        if (!form.name || form.name.length < 3) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Favor informar seu nome com mais de 3 caracteres");
        }
        if (form.password && form.password?.length < 6) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Sua senha deve ter no m\xednimo 6 caracteres");
            return;
        }
        if (!form.password || !form.repeatPassword) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Favor preencher os dois campos de senha");
            return;
        }
        if (form.password !== form.repeatPassword) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("As senhas devem ser iguais");
            return;
        }
        const signUp = handleSignUp(form.email, form.password, form.name);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].promise(signUp, {
            loading: "Validando cadastro...",
            success: (data)=>data.message,
            error: (data)=>data
        });
        const data = await signUp;
        if (data.registered) {
            const signIn = handleSignIn(form.email, form.password);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].promise(signIn, {
                loading: "Verificando seu registro...",
                success: (data)=>data.message,
                error: (data)=>data.message
            });
            const data1 = await signIn;
            if (data1.registered) {
                router.push("/");
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex rounded-lg gap-2 items-center p-2 border-gray-300 border-2 bg-gray-200 text-theme-blue-2 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8 text-theme-blue-2",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Insira seu nome",
                        value: form.name,
                        onChange: (event)=>handleChange(event),
                        className: "w-full bg-transparent focus:outline-none"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex rounded-lg gap-2 items-center p-2 border-gray-300 border-2 bg-gray-200 text-theme-blue-2 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8 text-theme-blue-2",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        name: "email",
                        placeholder: "Insira seu email",
                        value: form.email,
                        onChange: (event)=>handleChange(event),
                        className: "w-full bg-transparent focus:outline-none",
                        disabled: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex rounded-lg gap-2 items-center p-2 border-gray-300 border-2 bg-gray-200 text-theme-blue-2 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8 text-theme-blue-2",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            d: "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "password",
                        name: "password",
                        placeholder: "Insira sua senha",
                        value: form.password,
                        onChange: (event)=>handleChange(event),
                        className: "w-full bg-transparent focus:outline-none"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex rounded-lg gap-2 items-center p-2 border-gray-300 border-2 bg-gray-200 text-theme-blue-2 focus:outline-none focus:border-theme-blue-2 focus:ring-1 focus:ring-theme-blue-2 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8 text-theme-blue-2",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            d: "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "password",
                        name: "repeatPassword",
                        placeholder: "Insira sua senha novamente",
                        value: form.repeatPassword,
                        onChange: (event)=>handleChange(event),
                        className: "w-full bg-transparent focus:outline-none"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "py-2 rounded-md bg-theme-blue-dark text-white",
                children: "Registrar"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ FormTerms)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var _lib_Context_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);
react_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FormTerms = ()=>{
    const { form , handleChange  } = (0,_lib_Context_Login__WEBPACK_IMPORTED_MODULE_3__/* .useLogin */ .f0)();
    const { 0: terms , 1: setTerms  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: "",
            title: "",
            content: ""
        }
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getTerms = async ()=>{
            console.log("https://cadastro.englishinbrazil.com.br");
            const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/findTermo`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: form.email
                })
            });
            const terms = await response.json();
            setTerms(terms);
        };
        getTerms();
    }, [
        form.email
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "flex flex-col max-w-sm p-2 border rounded-md gap-2 justify-between max-h-96 md:max-h-[36rem]",
        children: [
            terms.map((term)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-lg font-semibold text-theme-blue-2",
                            children: term.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col grow-0 overflow-y-auto leading-relaxed",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                children: term.content
                            })
                        })
                    ]
                });
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-2 items-center font-semibold text-theme-blue-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "checkbox",
                        name: "accepted",
                        checked: form.accepted,
                        onChange: (event)=>handleChange(event)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "Aceito todos os termos de uso"
                    })
                ]
            })
        ]
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