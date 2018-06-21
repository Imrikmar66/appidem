import { Model, ModelLiteral } from "../commons/Model";

export class AbsenceReason extends Model<AbsenceReasonLiteral> {

    private _title: string;

    public toLiteral(): AbsenceReasonLiteral {
        return {
            id: this.id,
            title: this._title
        };
    }    
    
    public hydrate(data: AbsenceReasonLiteral): void {
        this.autohydrate( data );
    }

}

export interface AbsenceReasonLiteral extends ModelLiteral {
    title: string;
}