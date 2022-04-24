import {action, computed, makeObservable, observable} from "mobx";

class FileStore {

    public file: {
        [name: string]: File | null
    } | null = null;

    constructor() {
        makeObservable(this, {
            file: observable,
            setFile: action,
            clearFile: action,
            getFile: action,
            getFiles: computed,
        })
    }

    setFile (name: string, file: File | null) {
        this.file = {
            ...this.file,
            [name]: file
        };
    }

    getFile (name: string) : File | null {
        return this.file ? this.file[name] : null;
    }

    get getFiles () {
        return this.file;
    }

    clearFile() {
        this.file = null;
    }

}

export default new FileStore();