import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {locations} from "#constants";

interface LocationState {
    activeLocation: any;
    setActiveLocation: (location: any) => void;
    resetActiveLocation: () => void;
}

const DEFAULT_LOCATION = locations.work

const useLocationStore =create<LocationState>()(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) => set((state) => {
        state.activeLocation = location
        if (location === undefined) return
        state.activeLocation = location
    }),

    resetActiveLocation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION
    })
})))

export default useLocationStore