import { Translation } from "./Translation";
import { TranslateService } from "./services/translate.service";

export class Translatable {

    private translations: Translation[];
    private service: TranslateService;

    constructor( translations: Translation[] = [], service: TranslateService ){
        this.service = service;
        this.translations = translations;
    }

    addTranslation( translation: Translation ){

        for( let the_translation of this.translations ){
            if( the_translation.lang == translation.lang ){
                the_translation.text = translation.text;
                return;
            }
        }

        this.translations.push( translation );

    }

    translate(): string {

        for( let the_translation of this.translations ){
            if( the_translation.lang.label == this.service.activeLang().label ){
               return the_translation.text;
            }
        }
        
        console.log("Translation not found !");
        return "";
    }

    toString(): string {
        return this.translate();
    }

}