import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { Tooltip} from "react-tooltip";
import {dockApps} from "#constants";
import useWindowStore from "#store/window";


const Dock = () => {
    const { openWindow, closeWindow, windows } = useWindowStore()

    const dockRef = useRef<HTMLDivElement>(null);

    useGSAP(() =>{
        const dock = dockRef.current;
        if(!dock) return;

        const icons = dock.querySelectorAll(".dock-icon")

        const animateIcons = (mouseX: number) => {
            const {left} = dock.getBoundingClientRect();

            icons.forEach((icon) => {
                const {left: iconLeft, width} = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2) / 1000);

                gsap.to(icon, {scale: 1 + 0.25 * intensity, y: -15 * intensity, duration: 0.2, ease: "power1.out"});
            })
        }

        const handleMouseMove = (e: MouseEvent) => {
            const {left} = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        }

        const resetIcons = () => icons.forEach((icon) => gsap.to(icon, {scale: 1, y: 0, duration: 0.3, ease: "power1.out"}));


        dock.addEventListener("mousemove", handleMouseMove)
        dock.addEventListener("mouseleave", resetIcons)

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove)
            dock.removeEventListener("mouseleave", resetIcons)
        }
    }, [])


    const toggleApp = (app: { id: string; canOpen: boolean }) => {
        if (!app.canOpen) return;

        const window = windows[app.id];

        if(!window) {
            console.error(`Window not found for app: ${app.id} `);
            return;
        }

        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }

        console.log(windows)

    }

    return (
        <section id="dock">
           <svg className="dock-filter" aria-hidden="true" focusable="false">
               <defs>
                   <filter id="dock-liquid-glass-filter" x="-20%" y="-40%" width="140%" height="180%" colorInterpolationFilters="sRGB">
                       <feTurbulence type="fractalNoise" baseFrequency="0.01 0.08" numOctaves={2} seed={7} result="glassNoise" />
                       <feGaussianBlur in="glassNoise" stdDeviation="1.4" result="softNoise" />
                       <feDisplacementMap in="SourceGraphic" in2="softNoise" scale={18} xChannelSelector="R" yChannelSelector="G" />
                   </filter>
               </defs>
           </svg>
           <div ref={dockRef} className="dock-container">
               {dockApps.map(({id, name, icon, canOpen}) =>
               <div key={id} className="relative flex justify-center">
                   <button type="button" className="dock-icon" aria-label={name} data-tooltip-id="dock-tooltip" data-tooltip-content={name} data-tooltip-delay-show={150} disabled={!canOpen} onClick={() => toggleApp({id, canOpen})}>
                        <img src={`/images/${icon}`} alt={name} loading="lazy" className={canOpen ? "" : "opacity-60"}/>
                   </button>
               </div>
               )}
               <Tooltip id="dock-tooltip" place="top" className="tooltip" />
           </div>
        </section>
    )
}
export default Dock;
