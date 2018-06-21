export abstract class CrudModel {

    protected _id: number;

    constructor( datas?: CrudModelJson ){
        if( datas ) this.hydrate( datas );
    }

    public abstract toJSON(): CrudModelJson;

    public get id(): number {
        return this._id;
    }

    public set id( id ) {
        this._id = id;
    }

    public isEqual( model: CrudModel ){
        return this.id == model.id;
    }

    public hydrate( datas: CrudModelJson ) {

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

export interface CrudModelJson {

    id: number;

}