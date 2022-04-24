import {action, computed, makeObservable, observable} from "mobx";

interface Basic {
    id?: string;
}

export class DefaultStore<V extends Basic> {
    public list: Map<string, V> = new Map<string, V>();
    public isOpened: boolean = false;
    public selected: string = "";
    public refresher: string = "";

    constructor() {
        makeObservable(this, {
            list: observable,
            isOpened: observable,
            setList: action,
            setIsOpened: action,
            values: computed,
            selected: observable,
            setSelected: action,
            getSelected: computed,
            setAllList: action,
            refresher: observable,
            setRefresher: action,
            getById: action
        })
    }

    public setRefresher(refresh: string) {
        this.refresher = refresh;
    }

    public setSelected(selected: string) {
        this.selected = selected;
    }

    public setIsOpened(isOpened: boolean) {
        this.isOpened = isOpened;
    }

    public setList(id: string, item: V) {
        this.list.set(id, item);
    }

    public setListFromArray(items: Array<V>) {
        items.forEach((item: V) => {
            this.list.set(item.id ?? "", item);
        })
    }

    public setAllList(list: Map<string, V>) {
        this.list = list;
    }

    public get values () {
        return this.list.values() ?? [];
    }

    public get getValues () {
        return Array.from(this.list.values() ?? []);
    }

    public get getSelected() {
        return this.list.get(this.selected);
    }

    public clear() {
        this.list.clear();
    }

    public getById(id: string) {
        let list = Array.from(this.list.values() ?? []);
        return list.filter(item => item?.id === id);
    }
}

export default new DefaultStore();