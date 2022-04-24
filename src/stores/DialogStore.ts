import { makeObservable, observable, action } from "mobx";
import IDialog from "../models/IDialog";

class DialogStore {
    open: boolean = false;
    options: IDialog = {
        content: null,
        size: "xs",
        title: ""
    }

    constructor() {
        makeObservable(this, {
            open: observable,
            setOpen: action,
            setInfos: action,
            clear: action,
            openFromOutside: action,
            closeFromOutside: action
        });
    }

    clear = () => {
        this.options = {
            content: null,
            title: "",
            size: "xs"
        }
    }

    openFromOutside(options: IDialog) {
        this.options = options;
        this.open = true;
    }

    closeFromOutside() {
        this.options = {
            content: null,
            title: "",
            size: "xs"
        }
        this.open = false;
    }

    setOpen = (state: boolean): void => {
        this.open = state;
    }

    setInfos = (options: IDialog) => {
        this.options = options;
    }
}

export default new DialogStore;