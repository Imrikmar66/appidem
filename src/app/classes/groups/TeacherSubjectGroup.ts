import { ModelLiteral, Model } from "../commons/Model";
import { Subject, SubjectLiteral } from "../notations/Subject";
import { Teacher, TeacherLiteral } from "../core/Teacher";
import { Evaluation, EvaluationLiteral } from "../notations/Evaluation";

export class TeacherSubjectGroup extends Model<TeacherSubjectGroupLiteral> {
    
    private _evaluation: Evaluation;
    private _teacher: Teacher;
    private _subject: Subject;

    public toLiteral(): TeacherSubjectGroupLiteral {
        return {
            id: this.id,
            evaluation: this._evaluation.toLiteral(),
            teacher: this._teacher.toLiteral(),
            subject: this._subject.toLiteral()
        };
    }    
    
    public hydrate(data: TeacherSubjectGroupLiteral): void {
        
        this._evaluation = new Evaluation( data.evaluation );
        this._teacher = new Teacher( data.teacher );
        this._subject = new Subject( data.subject );

    }

}

interface TeacherSubjectGroupLiteral extends ModelLiteral {

    evaluation: EvaluationLiteral;
    teacher: TeacherLiteral;
    subject: SubjectLiteral;

}