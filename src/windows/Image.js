import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";
const ImageFile = () => {
    const { windows } = useWindowStore();
    const data = windows?.imgfile?.data;
    if (!data)
        return null;
    const { name, imageUrl } = data || {};
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "imgfile" }), name && _jsx("h2", { children: name })] }), _jsx("div", { className: "p-5 bg-white rounded-lg shadow-lg max-w-2xl mx-auto text-center", children: imageUrl && (_jsx("img", { src: imageUrl, alt: name || "image file", className: "w-full h-auto max-h-[70vh] object-contain rounded ", onError: (e) => {
                        const el = e.currentTarget;
                        el.style.display = "none";
                    } })) })] }));
};
const ImageWindow = WindowWrapper(ImageFile, "imgfile");
export default ImageWindow;
