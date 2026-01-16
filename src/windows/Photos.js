import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Mail, Search } from "lucide-react";
import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
const Photos = () => {
    const { openWindow } = useWindowStore();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "photos" }), _jsxs("div", { className: "w-full flex justify-end items-center gap-3 text-gray-500", children: [_jsx(Mail, { className: "icon" }), _jsx(Search, { className: "icon" })] })] }), _jsxs("div", { className: "w-full flex", children: [_jsxs("div", { className: "sidebar", children: [_jsx("h2", { children: "Photos" }), _jsx("ul", { children: photosLinks.map(({ id, icon, title }) => (_jsxs("li", { children: [_jsx("img", { src: icon, alt: title }), _jsx("p", { children: title })] }, id))) })] }), _jsx("div", { className: "gallery", children: _jsx("ul", { children: gallery.map(({ id, img }) => (_jsx("li", { onClick: () => openWindow("imgfile", { id, name: "Gallery image", icon: "/images/image.png", kind: "file", fileType: "img", imageUrl: img }), children: _jsx("img", { src: img, alt: `Gallery image ${id}` }) }, id))) }) })] })] }));
};
const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
