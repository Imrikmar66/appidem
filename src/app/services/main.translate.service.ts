import { Injectable } from "@angular/core";
import { TranslateService, TranslatableJson } from "../libs/translations/services/translate.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MainTranslateService extends TranslateService {

    constructor( protected http: HttpClient) {
        super( http );
    }
    
    getMains(): Observable<MainJson[]> {

        return this.http.get<MainJson[]>("../assets/translations/main.json");

    }

}

export interface MainJson extends TranslatableJson {

    translations: {
        en : string,
        fr : string,
        es : string
    }
}