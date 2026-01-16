import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import WindowWrapper from "#hoc/WindowWrapper";
import { socials } from "#constants";
import { WindowControls } from "#components";
const Contact = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "contact" }), _jsx("h2", { children: "Contact Me" })] }), _jsxs("div", { className: "p-5 space-y-5 ", children: [_jsx("img", { src: "/images/neo.svg", alt: "contact", className: "w-20 rounded-full " }), _jsx("h3", { children: "Let's Connect" }), _jsx("p", { className: "text-base text-gray-800", children: "Got an idea? Or just wanna talk tech? I'm in." }), _jsx("ul", { children: socials.map(({ id, bg, link, icon, text }) => (_jsx("li", { style: { backgroundColor: bg }, children: _jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", title: text, children: [_jsx("img", { src: icon, alt: text, className: "size-5" }), _jsx("p", { children: text })] }) }, id))) })] })] }));
};
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
