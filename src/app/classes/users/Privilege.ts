import { Model, ModelLiteral } from "../commons/Model";

export class Privilege extends Model<PrivilegeLiteral> {

    private _title: string;

    public toLiteral(): PrivilegeLiteral {
        return;
    }

    public hydrate( data: PrivilegeLiteral ){
        this.autohydrate( data );
    }

}

export interface PrivilegeLiteral extends ModelLiteral {

    title: string

}