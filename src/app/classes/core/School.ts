import { Model, ModelLiteral } from "../commons/Model";
import { Contact, ContactLiteral } from "./Contact";

export class School extends Model<SchoolLiteral> {

    private _title: string;
    private _contact: Contact;
    private logo_filename: string;
    private mark_scale: number;
    private culture: string;

    public toLiteral(): SchoolLiteral {
        return {
            id: this.id,
            title: this._title,
            contact: this._contact.toLiteral(),
            logo_filename: this.logo_filename,
            mark_scale: this.mark_scale,
            culture: this.culture
        };
    }

    public hydrate( data: SchoolLiteral ){
        
        this._title = data.title;
        this._contact = new Contact( data.contact );
        this.logo_filename = data.logo_filename;
        this.mark_scale = data.mark_scale;
        this.culture = data.culture;

    }

}

export interface SchoolLiteral extends ModelLiteral {

    title: string;
    contact: ContactLiteral;
    logo_filename: string;
    mark_scale: number;
    culture: string;

}