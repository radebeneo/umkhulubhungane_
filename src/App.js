import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Navbar, Welcome, Dock, Home } from "#components";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "#windows";
gsap.registerPlugin(Draggable);
const App = () => {
    return (_jsxs("main", { children: [_jsx(Navbar, {}), _jsx(Welcome, {}), _jsx(Dock, {}), _jsx(Terminal, {}), _jsx(Safari, {}), _jsx(Resume, {}), _jsx(Finder, {}), _jsx(Text, {}), _jsx(Image, {}), _jsx(Contact, {}), _jsx(Photos, {}), _jsx(Home, {})] }));
};
export default App;
