import { Model, ModelJson } from "../../libs/pm-crud-framework/class/Model";

export class User extends Model {

    private _email: string;
    private _password: string;

    get email(): string {
        return this._email;
    }

    set email( email ) {
        this._email = email;
    }

    get password(): string {
        return this._password;
    }

    set password( password ) {
        this._password = password;
    }

    public toJSON(): UserJson {
        return {
            id: this.id,
            email: this._email,
            password: this._password
        }
    }

}

export interface UserJson extends ModelJson {

    email: string;
    password: string;

}