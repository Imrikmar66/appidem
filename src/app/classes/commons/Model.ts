export abstract class Model<T extends ModelLiteral> {

    private _id: number;

    get id(): number {
        return this._id;
    }

    set id( value: number ) {
        this._id = value;
    }

    constructor( data?: T ){
        if( data ) {
            this.id = data.id;
            this.hydrate( data );
        } 
    }

    public abstract toLiteral(): T;
    public abstract hydrate( data: T ): void;

    protected arrayModelToLiteralArray<K extends ModelLiteral>( elements: Model<K>[] ): K[]  {

        const literals: K[] = [];
        for( let element of elements ) {
            literals.push( element.toLiteral() );
        }
        return literals;

    }

    public isEqual( model: Model<T> ){
        return this._id == model._id;
    }

    protected autohydrate( data: ModelLiteral ) {
        for( let key in data ){
            this[key] = data[key];
        }
    }

}

export interface ModelLiteral {
    id: number;
}