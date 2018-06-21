import { Model, ModelLiteral } from "../commons/Model";
import { Contact, ContactLiteral } from "./Contact";
import { PersonType, PersonTypeLiteral } from "./PersonType";

export class Person extends Model<PersonLiteral> {

    protected _person_type: PersonType;
    protected _contact: Contact;
    protected _is_user: boolean;
    protected _created_at: Date;

    public toLiteral(): PersonLiteral {
        return {
            id: this.id,
            person_type: this._person_type.toLiteral(),
            contact: this._contact.toLiteral(),
            is_user: this._is_user,
            created_at: this._created_at.toString()
        }
    }

    public hydrate( data: PersonLiteral ){

        this._person_type = new PersonType( data.person_type );
        this._contact = new Contact( data.contact );
        this._is_user = data.is_user;
        this._created_at = new Date( data.created_at );

    }

}

export interface PersonLiteral extends ModelLiteral {

    person_type: PersonTypeLiteral;
    contact: ContactLiteral;
    is_user: boolean;
    created_at: string;

}