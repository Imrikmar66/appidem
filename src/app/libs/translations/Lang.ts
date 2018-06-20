export class Language {

    public label: string;
    public abrev: string;
    public active: boolean;

    constructor( label: string, abrev: string, active: boolean = false ){
        this.label = label;
        this.abrev = abrev;
        this.active = active;
    }

}

export declare interface LanguageJson {
    label: string,
    abrev: string,
    default?: true
}

export class Langs {

    private _languages: Language[] = [];

    get languages(): Language[] {
        return this._languages;
    }

    constructor( languages: Language[] ){
        this._languages = languages;
    }

    get( lang: string ): Language {
        for( let language of this._languages ){
            if( language.abrev == lang || language.label == lang ) {
                return language;
            }
        }

        console.log("Language not found");
        return null;
    }

    active(): Language {
        for( let language of this._languages ){
            if( language.active ) {
                return language;
            }
        }

        console.log("No active language");
        return null;
    }

}

let languages: Language[] = [
    new Language( "English", "en" ),
    new Language( "Français", "fr" ),
    new Language( "Espanol", "es" )
];

export const langs: Langs = new Langs( languages ); 