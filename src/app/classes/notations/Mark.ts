import { Model, ModelLiteral } from "../commons/Model";
import { EvaluationLiteral, Evaluation } from "./Evaluation";
import { PeriodLiteral, Period } from "./Period";
import { StudentLiteral, Student } from "../core/Student";

export class Mark extends Model<MarkLiteral> {

    private _evaluation: Evaluation;
    private _period: Period;
    private _student: Student;
    private _mark: number;

    public toLiteral(): MarkLiteral {
        return {
            id: this.id,
            period: this._period.toLiteral(),
            evaluation: this._evaluation.toLiteral(),
            student: this._student.toLiteral(),
            mark: this._mark
        };
    }
      
    public hydrate(data: MarkLiteral): void {
        
        this._period = new Period( data.period );
        this._evaluation = new Evaluation( data.evaluation );
        this._student = new Student( data.student );
        this._mark = data.mark;

    }


}

interface MarkLiteral extends ModelLiteral {

    evaluation: EvaluationLiteral;
    period: PeriodLiteral;
    student: StudentLiteral;
    mark: number;

}