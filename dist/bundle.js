'use strict';

var React = require('react');

function Hamburger() {
    return (React.createElement("svg", { viewBox: "0 0 100 80", width: "40", height: "40" },
        React.createElement("rect", { width: "100", height: "20" }),
        React.createElement("rect", { y: "30", width: "100", height: "20" }),
        React.createElement("rect", { y: "60", width: "100", height: "20" })));
}
function Navbar(_a) {
    var _b = _a.items, items = _b === void 0 ? [{ "name": "Home", "href": "/" }] : _b, logo = _a.logo;
    var _c = React.useState('hidden'), menuState = _c[0], setMenuState = _c[1];
    function toggleMenu() {
        setMenuState(function (ms) {
            return ms == 'hidden' ? 'block' : 'hidden';
        });
    }
    return (React.createElement("header", { className: "flex flex-row justify-start p-5 bg-red-100 items-center shadow-md" },
        React.createElement("div", { className: "flex items-center grow" }, logo &&
            React.createElement("a", null,
                React.createElement("img", { src: logo, alt: "logo", className: "h-10 sm:h-14 w-10 sm:w-14" }))),
        React.createElement("div", { className: "grow-[2] flex justify-end relative" },
            React.createElement("input", { type: "text", placeholder: 'search', className: 'rounded-md border-2 border-black' }),
            React.createElement("span", { className: 'absolute right-2 top-1' },
                React.createElement("svg", { className: "w-[20px] h-[20px] text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20" },
                    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" })))),
        React.createElement("nav", { className: "".concat(menuState, " absolute p-5 sm:p-5 top-0 left-0 sm:static sm:block w-full h-full sm:h-auto sm:w-auto bg-gray-300 sm:bg-transparent") },
            React.createElement("div", { className: "flex justify-end" },
                React.createElement("svg", { className: "sm:hidden block", width: "40", height: "40", stroke: "black", strokeWidth: 2, onClick: toggleMenu },
                    React.createElement("line", { x1: "5", y1: "5", x2: "30", y2: "30" }),
                    React.createElement("line", { x1: "30", y1: "5", x2: "5", y2: "30" }))),
            React.createElement("ul", { className: "flex flex-col sm:flex-row gap-y-2 sm:gap-x-20 align-middle text-center sm:visible" },
                items && items.map(function (i) { return React.createElement("li", { className: "", key: i.name },
                    React.createElement("a", { href: i.href, className: 'hover:text-blue-200' }, i.name)); }),
                !items && React.createElement("li", { className: "" },
                    React.createElement("a", { href: "/" }, "Home")))),
        React.createElement("div", { className: "fill-black align-middle sm:hidden grow flex justify-end p-2", onClick: toggleMenu },
            React.createElement(Hamburger, null))));
}

exports.Navbar = Navbar;
