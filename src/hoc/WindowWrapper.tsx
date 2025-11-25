import useWindowStore from "#store/window";
import {useLayoutEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore()
        const { isOpen, zIndex} = windows[windowKey]
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current
            if(!el || !isOpen) return;
            el.style.display = "block"
        }, [isOpen])

        useLayoutEffect(() => {
            const el = ref.current
            if(!el) return
            el.style.display = isOpen ? "block" : "none"
        }, [isOpen]);


        return (
            <section  id={windowKey} ref={ref} className="absolute" style={{zIndex}}>
                <Component {...props} />
            </section>
        )
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`

    return Wrapped
}
export default WindowWrapper
