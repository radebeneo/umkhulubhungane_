import {Search} from "lucide-react";
import useLocationStore from "#store/location";
import clsx from "clsx";

import WindowWrapper from "#hoc/WindowWrapper";
import {WindowControls} from "#components";
import {locations} from "#constants";

const Finder = () => {

    const {activeLocation, setActiveLocation} = useLocationStore()

    const openItem = (item) => {
    }

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={() =>
                        setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? "active" : "not-active")}>
                        <img src={item.icon} alt={item.name} className="w-4"/>
                        <p className="text-sm font-medium">{item.name}</p>
                    </li>))}
            </ul>
        </div>
    )

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder"/>
                <Search className="icon"/>
            </div>
            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList("Favourites", Object.values(locations))}
                    {renderList("Work", locations.work.children)}
                </div>
                <ul className="content">
                    {activeLocation.children.map((item) => (
                        <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>


        </>
    );
}

const FinderWindow = WindowWrapper(Finder, "finder")
export default FinderWindow
