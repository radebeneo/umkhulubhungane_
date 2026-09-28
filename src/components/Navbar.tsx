import dayjs from "dayjs";
import {navIcons, navLinks} from "#constants";
import useWindowStore from "#store/window";
import useThemeStore from "#store/theme";

const Navbar = () => {

    const {openWindow} = useWindowStore()
    const {toggleDarkMode} = useThemeStore()


    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">umkhulubhungane</p>
                <ul>
                    {navLinks.map(({id, name, type}) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img
                                src={img}
                                className={img.endsWith("mode.svg") ? "icon-hover cursor-pointer" : "icon-hover"}
                                alt={`icon-${id}`}
                                onClick={img.endsWith("mode.svg") ? toggleDarkMode : undefined}
                            />
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format("ddd D MMM HH:mm ")}</time>
            </div>
        </nav>
    )
}
export default Navbar
