import { ModelLiteral, Model } from "../commons/Model";
import { CallSession, CallSessionLiteral } from "./CallSession";
import { Student, StudentLiteral } from "../core/Student";
import { AbsenceReason, AbsenceReasonLiteral } from "./AbsenceReason";

export class Absence extends Model<AbsenceLiteral> {

    private _call_session: CallSession;
    private _student: Student;
    private _reason: AbsenceReason;
    private _reason_info: string;
    private _is_late: boolean;
    private _arrived_at: Date;

    public toLiteral(): AbsenceLiteral {
        return {
            id: this.id,
            call_session: this._call_session.toLiteral(),
            student: this._student.toLiteral(),
            reason: this._reason.toLiteral(),
            reason_info: this._reason_info,
            is_late: this._is_late,
            arrived_at: this._arrived_at.toString()
        };
    }    
    
    public hydrate(data: AbsenceLiteral): void {
        
        this._call_session = new CallSession( data.call_session );
        this._student = new Student( data.student );
        this._reason = new AbsenceReason( data.reason );
        this._reason_info = data.reason_info;
        this._is_late = data.is_late;
        this._arrived_at = new Date( data.arrived_at );

    }

}

interface AbsenceLiteral extends ModelLiteral {

    call_session: CallSessionLiteral;
    student: StudentLiteral;
    reason: AbsenceReasonLiteral;
    reason_info: string;
    is_late: boolean;
    arrived_at: string;

}