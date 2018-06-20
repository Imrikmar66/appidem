import { HttpClient } from '@angular/common/http';
import { Model, ModelJson } from '../class/Model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface SuccessJson {
    success: boolean;
    code?: number;
}

export interface GenericModelJsonList<K> extends SuccessJson {
    models: K[]
}

export interface GenericModelJson<K> extends SuccessJson {
    model: K
}

@Injectable()
export abstract class CrudService<T extends Model, K extends ModelJson> {

    private api_url: string = "http://localhost:8000/api/" + this.getModelDefinition();

    constructor( private http: HttpClient ) { }

    protected abstract getModelDefinition(): string;

    getAll(): Observable<GenericModelJsonList<K>>{

        return this.http.get( this.api_url + "/all" ) as Observable<GenericModelJsonList<K>>;

    }

    get(id: number): Observable<GenericModelJson<K>> {
    
        return this.http.get( this.api_url + "/" + id ) as Observable<GenericModelJson<K>>;

    }

    create(model: T): Observable<GenericModelJson<K>> {

        return this.http.post( this.api_url, model.toJSON() ) as Observable<GenericModelJson<K>>;

    }

    update( model: T ): Observable<SuccessJson>{

        return this.http.put( this.api_url + "/" + model.id, model.toJSON() ) as Observable<SuccessJson>;
    
    }

    delete(id: number): Observable<SuccessJson> {
        
        return this.http.delete( this.api_url + "/" + id ) as Observable<SuccessJson>;

    }

}
