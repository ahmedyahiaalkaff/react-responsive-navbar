import React, { useState } from 'react';

function Hamburger(_a) {
    var onClick = _a.onClick;
    return (React.createElement("svg", { viewBox: "0 0 100 80", width: "40", height: "40", onClick: onClick },
        React.createElement("rect", { width: "100", height: "20" }),
        React.createElement("rect", { y: "30", width: "100", height: "20" }),
        React.createElement("rect", { y: "60", width: "100", height: "20" })));
}
function Divvv() {
    return (React.createElement("div", null, "Hello Divvv"));
}
function Navbar(_a) {
    var _b = _a.items, items = _b === void 0 ? [{ "name": "Home", "href": "/" }] : _b, logo = _a.logo, otherElement = _a.otherElement, containerClassName = _a.containerClassName, logoContainerClassName = _a.logoContainerClassName, logoImgClassName = _a.logoImgClassName, navClassName = _a.navClassName, hamburgerClassName = _a.hamburgerClassName, renderItem = _a.renderItem;
    var _c = useState('hidden'), menuState = _c[0], setMenuState = _c[1];
    function toggleMenu() {
        setMenuState(function (ms) {
            return ms == 'hidden' ? 'block' : 'hidden';
        });
    }
    var menuItems = null;
    if (items) {
        if (renderItem && typeof renderItem === 'function') {
            menuItems = items.map(function (item) {
                return (React.createElement("li", { key: item.name }, renderItem(item)));
            });
        }
        else {
            menuItems = items.map(function (item) { return React.createElement("li", { className: "", key: item.name },
                React.createElement("a", { href: item.href, className: 'hover:text-blue-200' }, item.name)); });
        }
    }
    return (React.createElement("header", { className: "flex flex-row justify-start items-center p-5 ".concat(containerClassName ? containerClassName : '') },
        React.createElement("div", { className: "flex items-center grow ".concat(logoContainerClassName ? logoContainerClassName : '') }, logo &&
            React.createElement("a", null,
                React.createElement("img", { src: logo, alt: "logo", className: "h-10 sm:h-14 w-10 sm:w-14 ".concat(logoImgClassName ? logoImgClassName : '') }))),
        otherElement && React.createElement("div", null, otherElement),
        React.createElement("nav", { className: "".concat(menuState, " fixed p-5 sm:p-5 top-0 left-0 z-10 sm:static sm:block w-full h-full sm:h-auto sm:w-auto bg-gray-300 sm:bg-transparent ").concat(navClassName ? navClassName : '') },
            React.createElement("div", { className: "flex justify-end" },
                React.createElement("svg", { className: "sm:hidden block", width: "40", height: "40", stroke: "black", strokeWidth: 2, onClick: toggleMenu },
                    React.createElement("line", { x1: "5", y1: "5", x2: "30", y2: "30" }),
                    React.createElement("line", { x1: "30", y1: "5", x2: "5", y2: "30" }))),
            React.createElement("ul", { className: "flex flex-col sm:flex-row gap-y-2 sm:gap-x-20 align-middle text-center sm:visible" }, menuItems)),
        React.createElement("div", { className: "fill-black align-middle sm:hidden grow flex justify-end p-2 ".concat(hamburgerClassName ? hamburgerClassName : '') },
            React.createElement(Hamburger, { onClick: toggleMenu }))));
}

export { Divvv, Navbar };
