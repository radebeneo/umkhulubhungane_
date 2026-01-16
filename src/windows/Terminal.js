import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Check, Flag } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { techStack } from "#constants";
import { WindowControls } from "#components";
const Terminal = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "terminal" }), _jsx("h2", { children: "Tech Stack" })] }), _jsxs("div", { className: "techstack", children: [_jsxs("p", { children: [_jsx("span", { className: "font-bold", children: "@umkhulubhungane ~ % " }), "show tech stack"] }), _jsxs("div", { className: "label", children: [_jsx("p", { className: "w-32", children: "Category" }), _jsx("p", { children: "Technologies" })] }), _jsx("ul", { className: "content", children: techStack.map(({ category, items }) => (_jsxs("li", { className: "flex items=center", children: [_jsx(Check, { className: "check", size: 20 }), _jsx("h3", { children: category }), _jsx("ul", { children: items.map((item, i) => (_jsxs("li", { children: [item, i < items.length - 1 ? "," : ""] }, i))) })] }, category))) }), _jsxs("div", { className: "footnote", children: [_jsxs("p", { children: [_jsx(Check, { className: "check", size: 20 }), "6 of 6 stacks loaded successfully (100%)"] }), _jsxs("p", { className: "text-black", children: [_jsx(Flag, { size: 15, fill: "black" }), "Render time: 0.006s"] })] })] })] }));
};
const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
