import { Model, ModelLiteral } from "../commons/Model";

export class Contact extends Model<ContactLiteral> {

    private _email: string;
    private _address_1: string;
    private _address_2: string;
    private _zip_code: number;
    private _city: string;
    private _phone: number;
    private _cell_phone: number;

    public toLiteral(): ContactLiteral {
        return;
    }

    public hydrate( data: ContactLiteral ){
        this.autohydrate( data );
    }

}

export interface ContactLiteral extends ModelLiteral {
    
    email: string;
    address_1: string;
    address_2: string;
    zip_code: number;
    city: string;
    phone: number;
    cell_phone: number;

}