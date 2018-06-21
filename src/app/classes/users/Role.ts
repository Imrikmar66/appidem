import { Model, ModelLiteral } from "../commons/Model";

export class Role extends Model<RoleLiteral> {

    private _title: string;

    public toLiteral(): RoleLiteral {
        return;
    }

    public hydrate( data: RoleLiteral ){
        this.autohydrate( data );
    }

}

export interface RoleLiteral extends ModelLiteral {

    title: string

}