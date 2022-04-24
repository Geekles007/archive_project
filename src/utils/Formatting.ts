
export const getIds = (rows: any): string[] => {
    return rows.map((row: any) => {
        return row.id;
    })
}

export class Padder {
    len: number = 4;
    pad: string = "0";

    pads = '';

    constructor(len?: number, pad?: string) {
        if (len === undefined) {
            this.len = 4;
        } else if (pad === undefined) {
            this.pad = '0';
        }
        while (this.pads.length < this.len) {
            this.pads += pad;
        }
    }

    padder(what: number) {
        var s = what.toString();
        return this.pads.substring(0, this.pads.length - s.length) + s;
    };
}

export const convertToMap = (list: any) => {
    let mapper: Map<string, any> = new Map<string, any>();
    list.forEach((item: any) => {
        mapper.set(item.id!!, item);
    });
    return mapper;
}

export const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/^\+237/, "");
}

export const getParams = (url: string, pos: number) => {
    return (url ?? "")?.split("/")[pos] ?? "";
}