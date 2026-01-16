declare const WindowWrapper: (Component: React.ComponentType<any>, windowKey: string) => {
    (props: any): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default WindowWrapper;
