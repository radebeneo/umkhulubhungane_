import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Tooltip } from "react-tooltip";
import { dockApps } from "#constants";
import useWindowStore from "#store/window";
const Dock = () => {
    const { openWindow, closeWindow, windows } = useWindowStore();
    const dockRef = useRef(null);
    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock)
            return;
        const icons = dock.querySelectorAll(".dock-icon");
        const animateIcons = (mouseX) => {
            const { left } = dock.getBoundingClientRect();
            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2) / 1000);
                gsap.to(icon, { scale: 1 + 0.25 * intensity, y: -15 * intensity, duration: 0.2, ease: "power1.out" });
            });
        };
        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        };
        const resetIcons = () => icons.forEach((icon) => gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" }));
        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", resetIcons);
        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", resetIcons);
        };
    }, []);
    const toggleApp = (app) => {
        if (!app.canOpen)
            return;
        const window = windows[app.id];
        if (!window) {
            console.error(`Window not found for app: ${app.id} `);
            return;
        }
        if (window.isOpen) {
            closeWindow(app.id);
        }
        else {
            openWindow(app.id);
        }
        console.log(windows);
    };
    return (_jsx("section", { id: "dock", children: _jsxs("div", { ref: dockRef, className: "dock-container", children: [dockApps.map(({ id, name, icon, canOpen }) => _jsx("div", { className: "relative flex justify-center", children: _jsx("button", { type: "button", className: "dock-icon", "aria-label": name, "data-tooltip-id": "dock-tooltip", "data-tooltip-content": name, "data-tooltip-delay-show": 150, disabled: !canOpen, onClick: () => toggleApp({ id, canOpen }), children: _jsx("img", { src: `/images/${icon}`, alt: name, loading: "lazy", className: canOpen ? "" : "opacity-60" }) }) }, id)), _jsx(Tooltip, { id: "dock-tooltip", place: "top", className: "tooltip" })] }) }));
};
export default Dock;
