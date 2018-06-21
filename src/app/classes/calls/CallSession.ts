import { ModelLiteral, Model } from "../commons/Model";
import { Subject, SubjectLiteral } from "../notations/Subject";
import { Teacher, TeacherLiteral } from "../core/Teacher";
;

export class CallSession extends Model<CallSessionLiteral> {

    private _subject: Subject;
    private _start_at: Date;
    private _end_at: Date;
    private _teacher: Teacher;

    public toLiteral(): CallSessionLiteral {
        return {
            id: this.id,
            subject: this._subject.toLiteral(),
            start_at: this._start_at.toString(),
            end_at: this._end_at.toString(),
            teacher: this._teacher.toLiteral()
        };
    }    
    
    public hydrate(data: CallSessionLiteral): void {
        
        this._subject = new Subject( data.subject );
        this._start_at = new Date( data.start_at );
        this._end_at = new Date( data.end_at );
        this._teacher = new Teacher( data.teacher );

    }

}

export interface CallSessionLiteral extends ModelLiteral {

    subject: SubjectLiteral;
    start_at: string;
    end_at: string;
    teacher: TeacherLiteral;

}