"use strict";
(() => {
var exports = {};
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 3832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

const handler = async (response, request)=>{
    try {
        console.log("HANDLER");
        const newsletter = await GetUnreadNewsletterService(token);
        console.log(response);
        return response.status(200).json(newsletter);
    } catch (error) {
        return response.status(400).json(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3832));
module.exports = __webpack_exports__;

})();