import { Model, ModelLiteral } from "../commons/Model";
import { SchoolLiteral, School } from "../core/School";

export class Group extends Model<GroupLiteral> {

    private _school: School;
    private _parent?: Group;
    private _title: string;
    private _is_main: boolean;

    public toLiteral(): GroupLiteral {

        const literal: GroupLiteral = {
            id: this.id,
            school: this._school.toLiteral(),
            title: this._title,
            is_main: this._is_main
        };

        if( this._parent instanceof Group ) {
            literal.parent = this._parent.toLiteral();
        }

        return literal;

    }

    public hydrate( data: GroupLiteral ){
        
        this._school = new School( data.school );
        this._title = data.title;
        this._is_main = data.is_main;

        if( data.parent ) {
            this._parent = new Group( data.parent );
        }

    }

}

interface GroupLiteral extends ModelLiteral {
    
    school: SchoolLiteral;
    parent?: GroupLiteral;
    title: string;
    is_main: boolean;

}