import {DefaultStore} from "./DefaultStore";
import {IUser} from "../models/IUser";

class UserStore extends DefaultStore<IUser> {

    constructor() {
        super()
    }

}

export default new UserStore()