import { type WindowConfig } from "#constants";
interface WindowState {
    windows: WindowConfig;
    nextZIndex: number;
    openWindow: (windowKey: string, data?: any) => void;
    closeWindow: (windowKey: string) => void;
    focusWindow: (windowKey: string) => void;
}
declare const useWindowStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<WindowState>, "setState"> & {
    setState(nextStateOrUpdater: WindowState | Partial<WindowState> | ((state: import("immer").WritableDraft<WindowState>) => void), shouldReplace?: false): void;
    setState(nextStateOrUpdater: WindowState | ((state: import("immer").WritableDraft<WindowState>) => void), shouldReplace: true): void;
}>;
export default useWindowStore;
