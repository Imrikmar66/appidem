import { Langs, Language, LanguageJson } from "../Lang";
import { Translation } from "../Translation";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Translatable } from "../Translatable";

@Injectable()
export class TranslateService {

    private _langs: Langs;
    public langsObs: Observable<Langs>; 

    get langs(): Langs {
        return this._langs;
    }

    constructor( protected http: HttpClient ){}

    activeLang(): Language {
        return this._langs.active();
    }

    translate( lang?: Language ): void {
        lang = lang ? lang : this.activeLang();

        this._langs.active().active = false;
        this._langs.get(lang.label).active = true;
    }

    getLangs(): Observable<Langs> {
        
        return new Observable( ( observer ) => {
            if( !this._langs ) {
                let obs_langs: Observable<LanguageJson[]> = this.http.get<LanguageJson[]>("../assets/translations/langs.json");
                obs_langs.subscribe( 
                    ( langs ) => { 
                        this.parseLangs( langs );
                        observer.next( this._langs );
                    }
                );
            }
            else {
                observer.next( this._langs );
            }
        });

    }

    private parseLangs( langs_json: LanguageJson[] ): void {

        let languages: Language[] = [];
        for( let lang of langs_json ){
            let language: Language = new Language( lang.label, lang.abrev, lang.default );
            languages.push( language );
        }

        this._langs = new Langs( languages );

    }

    public convertTotranslatable( translatable_json: TranslatableJson ): Translatable {
        let translations: Translation[] = [];
        for( let language of this.langs.languages ){
            let translation: Translation = new Translation( language, translatable_json.translations[language.abrev] );
            translations.push( translation );
        }

        return new Translatable(
            translations,
            this
        );
    }

}

export interface TranslatableJson {
    label: string,
    translations: { [key:string]: string }
}