"use strict";
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 6506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ProgressCircleSizeWrapper = {
    medium: {
        radius: 25,
        coord: 30,
        stroke: 10,
        size: "w-16 h-16"
    },
    small: {
        radius: 20,
        coord: 22,
        stroke: 3,
        size: "w-12 h-12"
    }
};
const setColor = (progress)=>{
    if (progress < 33) {
        return "text-red-600";
    }
    if (progress < 66) {
        return "text-yellow-600";
    }
    if (progress < 100) {
        return "text-blue-600";
    }
    return "text-green-600";
};
const ProgressCircle = ({ progress , size ="medium"  })=>{
    const circumference = ProgressCircleSizeWrapper[size].radius * 2 * Math.PI;
    /** progress < 33: red */ /** progress < 66: yellow */ /** progress < 100: blue */ /** progress == 100: green */ const color = setColor(progress);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-center overflow-hidden -m-6 bg-white rounded-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                className: `${ProgressCircleSizeWrapper[size].size} transform translate-x-0.5 translate-y-0.5`,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        className: "text-gray-300",
                        strokeWidth: ProgressCircleSizeWrapper[size].stroke,
                        stroke: "currentColor",
                        fill: "transparent",
                        r: ProgressCircleSizeWrapper[size].radius,
                        cx: ProgressCircleSizeWrapper[size].coord,
                        cy: ProgressCircleSizeWrapper[size].coord
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        className: color,
                        strokeWidth: ProgressCircleSizeWrapper[size].stroke,
                        strokeDasharray: circumference,
                        strokeDashoffset: circumference - progress / 100 * circumference,
                        strokeLinecap: "round",
                        stroke: "currentColor",
                        fill: "transparent",
                        r: ProgressCircleSizeWrapper[size].radius,
                        cx: ProgressCircleSizeWrapper[size].coord,
                        cy: ProgressCircleSizeWrapper[size].coord
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `absolute text-xs ${color}`,
                children: `${progress.toFixed(0)}%`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressCircle);


/***/ })

};
;