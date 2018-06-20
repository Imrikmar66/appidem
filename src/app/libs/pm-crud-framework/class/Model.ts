export abstract class Model {

    protected _id: number;

    constructor( datas?: ModelJson ){
        if( datas ) this.hydrate( datas );
    }

    public abstract toJSON(): ModelJson;

    public get id(): number {
        return this._id;
    }

    public set id( id ) {
        this._id = id;
    }

    public isEqual( model: Model ){
        return this.id == model.id;
    }

    public hydrate( datas: ModelJson ) {

        for( let key in datas ){

            let method = "set" + key.charAt(0).toUpperCase() + key.slice(1)
            
            if( typeof this[method] === "function" ){
                this[method](datas[key]);
            }
            else {
                this[key] = datas[key];
            }

        }

    }

}

export interface ModelJson {

    id: number;

}