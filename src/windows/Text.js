import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";
const Text = () => {
    const { windows } = useWindowStore();
    const data = windows?.txtfile?.data;
    if (!data)
        return null;
    const { name, image, subtitle, description } = data || {};
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "txtfile" }), name && _jsx("h2", { children: name })] }), _jsxs("div", { className: "p-5 space-y-5 bg-white rounded-lg shadow-lg max-w-md mx-auto text-center flex flex-col items-center justify-center gap-5", children: [image && (_jsx("img", { src: image, alt: name || "text file image", className: "w-full h-auto rounded " })), subtitle && _jsx("h3", { className: "text-lg font-semibold", children: subtitle }), Array.isArray(description) && description.length > 0 && (_jsx("div", { className: "space-y-3 leading-relaxed text-base text-gray-800", children: description.map((para, idx) => (_jsx("p", { children: para }, idx))) }))] })] }));
};
const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
