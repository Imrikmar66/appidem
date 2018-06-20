import { Langs } from '../Lang';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatableJson } from '../services/translate.service';
import { MainJson } from '../../../services/main.translate.service';

@Component({})
export abstract class TranslatableComponent {

    protected langsObs: Observable<Langs>;

    constructor( protected translateService: TranslateService ) {
        this.langsObs = this.translateService.getLangs();
    }

    abstract translateMethod(): Observable<TranslatableJson[]>;

    ngOnInit() {
        this.langsObs.subscribe( () => {
            this.translateMethod()
                .subscribe(
                    ( elements: TranslatableJson[] ) => {
                        this.assignTranslations( elements );
                    }
                );
        } );
    }

    abstract assignTranslations( elements: TranslatableJson[] ): void;

}