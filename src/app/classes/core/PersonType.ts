import { Model, ModelLiteral } from "../commons/Model";

export class PersonType extends Model<PersonTypeLiteral> {

    private _title: string;

    public toLiteral(): PersonTypeLiteral {
        return;
    }

    public hydrate( data: PersonTypeLiteral ){
        this.autohydrate( data );
    }

}

export interface PersonTypeLiteral extends ModelLiteral {

    title: string

}