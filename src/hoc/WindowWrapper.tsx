import useWindowStore from "#store/window";
import {useRef} from "react";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore()
        const { isOpen, zIndex} = windows[windowKey]
        const ref = useRef(null);

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
