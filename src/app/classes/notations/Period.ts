import { Model, ModelLiteral } from "../commons/Model";

export class Period extends Model<PeriodLiteral> {

    private _title: string;
    private _start_at: Date;
    private _end_at: Date;
    private _for_gradebook: boolean;

    public toLiteral(): PeriodLiteral {
        
        return {
            id: this.id,
            title: this._title,
            start_at: this._start_at.toString(),
            end_at: this._end_at.toString(),
            for_gradebook: this._for_gradebook
        };

    }    
    
    public hydrate(data: PeriodLiteral): void {
        
        this._title = data.title;
        this._start_at = new Date( data.start_at );
        this._end_at = new Date( data.end_at );
        this._for_gradebook = data.for_gradebook;

    }


}

export interface PeriodLiteral extends ModelLiteral {

    title: string;
    start_at: string;
    end_at: string;
    for_gradebook: boolean;

}