import { Language } from "./Lang";

export class Translation {

    private _lang: Language;
    private _text: string;

    get lang(): Language {
        return this._lang;
    }

    get text(): string {
        return this._text;
    }

    set text( text: string ) {
        this._text = text;
    }

    constructor( lang: Language, text: string ){
        this._lang = lang;
        this._text = text;
    }

}