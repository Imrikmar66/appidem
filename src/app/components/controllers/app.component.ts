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
export class AppComponent {

    public title: string = "Test";

}
