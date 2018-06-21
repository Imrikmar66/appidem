import { Model, ModelLiteral } from "../commons/Model";

export class Subject extends Model<SubjectLiteral> {
    
    private _title: string;

    public toLiteral(): SubjectLiteral {
        return {
            id: this.id,
            title: this._title
        };
    }    
    
    public hydrate(data: SubjectLiteral): void {
        this.autohydrate( data );
    }


}

export interface SubjectLiteral extends ModelLiteral {

    title: string;

}