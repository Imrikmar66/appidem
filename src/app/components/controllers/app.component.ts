import { Component } from '@angular/core';
import { Translatable } from '../../libs/translations/Translatable';
import { MainJson, MainTranslateService } from '../../services/main.translate.service';
import { Translation } from '../../libs/translations/Translation';
import { TranslatableComponent } from '../../libs/translations/components/translatable.abstract.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: '../views/app.component.html',
  styleUrls: ['../styles/app.component.css']
})
export class AppComponent extends TranslatableComponent {

    public title: Translatable;

    constructor( protected translateService: MainTranslateService ) {
        super( translateService );
    }

    translateMethod(): Observable<MainJson[]> {
        return this.translateService.getMains();
    }

    assignTranslations( mains: MainJson[] ): void {

        for( let main of mains ){

            let translations: Translation[] = [];
            for( let language of this.translateService.langs.languages ){
                let translation: Translation = new Translation( language, main.translations[language.abrev] );
                translations.push( translation );
            }

            this.title = new Translatable( translations, this.translateService );
        }

    }

}
