import { Langs } from '../Lang';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatableJson } from '../services/translate.service';

@Component({})
export abstract class TranslatableComponent<T extends TranslatableJson> implements OnInit {

    protected langsObs: Observable<Langs>;

    constructor( protected translateService: TranslateService ) {
        this.langsObs = this.translateService.getLangs();
    }

    protected abstract translateMethod(): Observable<T[]>;
    protected abstract assignTranslations( translated_items: T[] ): void;

    ngOnInit() {
        this.langsObs.subscribe( () => {
            this.translateMethod()
                .subscribe(
                    ( elements: T[] ) => {
                        this.assignTranslations( elements );
                    }
                );
        } );
    }

}