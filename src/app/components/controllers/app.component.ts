import { Component } from '@angular/core';
import { Translatable } from '../../libs/translations/Translatable';
import { TranslatableIdemComponent } from './translatable.idem.component';

@Component({
    selector: 'app-root',
    templateUrl: '../views/app.component.html',
    styleUrls: ['../styles/app.component.css']
})
export class AppComponent extends TranslatableIdemComponent {

    public title: Translatable;

}
