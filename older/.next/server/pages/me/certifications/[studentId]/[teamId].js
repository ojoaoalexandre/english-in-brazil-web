"use strict";
(() => {
var exports = {};
exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 8650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _teamId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@react-pdf/renderer"
var renderer_ = __webpack_require__(3260);
// EXTERNAL MODULE: external "qrcode"
var external_qrcode_ = __webpack_require__(1121);
var external_qrcode_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_);
// EXTERNAL MODULE: ./src/components/CertificatePDF/index.tsx
var CertificatePDF = __webpack_require__(9133);
;// CONCATENATED MODULE: ./src/services/CourseCertification/GetCertificationByStudentService.ts
const GetCertificationByStudentService = async (studentId, teamId)=>{
    try {
        const response = await fetch(`${process.env.HOST_API}/api/turmas/certificate/${studentId}/${teamId}`, {
            method: "GET"
        });
        const certificate = await response.json();
        return certificate;
    } catch (error) {
        return error;
    }
};


;// CONCATENATED MODULE: ./src/pages/me/certifications/[studentId]/[teamId].tsx





const CertificationByTeam = ({ templatePath , studentName , urlQRCode  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "flex h-screen",
        children: /*#__PURE__*/ jsx_runtime_.jsx(renderer_.PDFViewer, {
            width: "100%",
            showToolbar: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(CertificatePDF/* CertificatePDF */.d, {
                templatePath: templatePath,
                studentName: studentName,
                urlQRCode: urlQRCode
            })
        })
    });
};
/* harmony default export */ const _teamId_ = (CertificationByTeam);
const getServerSideProps = async ({ req , res , params  })=>{
    const { studentId , teamId  } = params;
    const urlQRCode = await external_qrcode_default().toDataURL(`${"https://app.englishinbrazil.com.br"}/me/certifications/${studentId}/${teamId}`);
    const { templatePath , studentName  } = await GetCertificationByStudentService(studentId, teamId);
    if (!templatePath || !studentName) {
        return {
            props: {}
        };
    }
    return {
        props: {
            urlQRCode,
            templatePath,
            studentName
        }
    };
};


/***/ }),

/***/ 3260:
/***/ ((module) => {

module.exports = require("@react-pdf/renderer");

/***/ }),

/***/ 1121:
/***/ ((module) => {

module.exports = require("qrcode");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [133], () => (__webpack_exec__(8650)));
module.exports = __webpack_exports__;

})();