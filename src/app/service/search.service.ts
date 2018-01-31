import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    private coinname = 'bitcoin';
    public name: string;
    constructor(private _http: Http) {
        console.log('Github Service Init...');
    }
    getTop100() {
        return this._http.get('https://api.coinmarketcap.com/v1/ticker/?convert=USD')
            .map(res => res.json());
    }
    getDetails() {
        return this._http.get('https://api.coinmarketcap.com/v1/ticker/' + this.coinname + '/?convert=EUR')
            .map(res => res.json());
    }
    updateCoiname(coinname: string) {
        this.coinname = coinname;
    }
}