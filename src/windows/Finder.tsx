import {Search} from "lucide-react";
import useLocationStore from "#store/location";
import clsx from "clsx";

import WindowWrapper from "#hoc/WindowWrapper";
import {WindowControls} from "#components";
import {locations} from "#constants";

const Finder = () => {

    const {activeLocation, setActiveLocation} = useLocationStore()
    return (
        <>
            <div id="window-header">
                <WindowControls target="finder"/>
                <Search className="icon"/>
            </div>
            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3>Favourites</h3>
                        <ul>
                            {Object.values(locations).map((item) => (
                                <li key={item.id} onClick={() =>
                                    setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? "active" : "not-active")}>
                                    <img src={item.icon} alt={item.name} className="w-4"/>
                                    <p className="text-sm font-medium">{item.name}</p>
                                </li>))}
                        </ul>
                    </div>
                    <div>
                        <h3>Work</h3>
                        <ul>
                            {locations.work.children.map((item) => (
                                <li key={item.id} onClick={() =>
                                    setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? "active" : "not-active")}>
                                    <img src={item.icon} alt={item.name} className="w-4"/>
                                    <p className="text-sm font-medium">{item.name}</p>
                                </li>))}
                        </ul>
                    </div>
                </div>


            </div>
        </>
    );
}

const FinderWindow = WindowWrapper(Finder, "finder")
export default FinderWindow
