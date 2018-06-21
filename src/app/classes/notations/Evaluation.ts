import { Model, ModelLiteral } from "../commons/Model";
import { SubjectLiteral, Subject } from "./Subject";

export class Evaluation extends Model<EvaluationLiteral> {

    private _title: string;
    private _subject: Subject;
    private _multiplier: number;

    public toLiteral(): EvaluationLiteral {
        return {
            id: this.id,
            title: this._title,
            subject: this._subject.toLiteral(),
            multiplier: this._multiplier
        };
    }    
    
    public hydrate(data: EvaluationLiteral): void {
        
        this._title = data.title;
        this._subject = new Subject( data.subject );
        this._multiplier = data.multiplier;
        
    }


}

export interface EvaluationLiteral extends ModelLiteral {

    title: string;
    subject: SubjectLiteral;
    multiplier: number;

}