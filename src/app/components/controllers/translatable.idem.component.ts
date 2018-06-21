import { Component } from "@angular/core";
import { TranslatableComponent } from "../../libs/translations/components/translatable.abstract.component";
import { Translatable } from "../../libs/translations/Translatable";
import { MainTranslateService, MainJson } from "../../services/main.translate.service";
import { Observable } from "rxjs";

@Component({})
export class TranslatableIdemComponent extends TranslatableComponent<MainJson> {

    constructor( protected translateService: MainTranslateService ) {
        super( translateService );
    }

    protected translateMethod(): Observable<MainJson[]> {
        return this.translateService.getMains();
    }

    protected assignTranslations( translated_items: MainJson[] ): void {
        
        for( let main_json of translated_items ){
            const translatable: Translatable = this.translateService.convertTotranslatable( main_json );
            this[main_json.label] = translatable;
        }

    }

}   