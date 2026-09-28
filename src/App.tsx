
import { useEffect } from "react";
import gsap from "gsap";
import { Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock, Home} from "#components";
import {Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos} from "#windows";
import useThemeStore from "#store/theme";

gsap.registerPlugin(Draggable);

const App = () => {
    const { isDarkMode } = useThemeStore();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>

            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Image/>
            <Contact/>
            <Photos/>

            <Home/>
        </main>
    );
}
export default App
