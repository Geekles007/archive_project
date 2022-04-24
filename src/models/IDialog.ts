interface IDialog {
    content: JSX.Element | null;
    size?: "xs" | "sm" | "lg";
    title: string | JSX.Element;
}

export default IDialog;