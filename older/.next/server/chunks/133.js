"use strict";
exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 9133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ CertificatePDF)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3260);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__);


const CertificatePDF = ({ templatePath , studentName , urlQRCode  })=>{
    const url = templatePath.split("/");
    const publishedDate = new Date().toLocaleDateString();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Document, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Page, {
            size: "A4",
            orientation: "landscape",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    src: `/certificates/${url[url.length - 1]}`,
                    style: {
                        position: "absolute",
                        top: "0",
                        width: "100%",
                        height: "99%"
                    },
                    alt: "Certificate"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    style: {
                        top: "252",
                        left: "200",
                        fontSize: "24"
                    },
                    children: studentName
                }),
                url[url.length - 1] === "Certificado_2024_eib_7716d03a8b.png" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    style: {
                        top: "486",
                        left: "517",
                        fontSize: "14"
                    },
                    children: "28 de Agosto de 2024"
                }) : null,
                url[url.length - 1] === "Certificado_2024_sos_ea00eaf4c5.png" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    style: {
                        top: "486",
                        left: "517",
                        fontSize: "14"
                    },
                    children: "28 de Agosto de 2024"
                }) : null,
                url[url.length - 1] === "Certificado_2024_pnm_838cc5bfe0.png" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    style: {
                        top: "480",
                        left: "618",
                        fontSize: "11"
                    },
                    children: "28 de Agosto de 2024"
                }) : null,
                url[url.length - 1] === "Certificado_2024_pnm_838cc5bfe0.png" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    style: {
                        top: "468",
                        left: "430",
                        fontSize: "11"
                    },
                    children: "28 de Agosto de 2024"
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    src: urlQRCode,
                    style: {
                        width: "115",
                        height: "115",
                        left: "67",
                        top: "378"
                    }
                })
            ]
        })
    });
};



/***/ })

};
;