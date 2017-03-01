import { Injectable }              from '@angular/core';
import { Headers, RequestOptions,Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';  //toPromise()必须的模块
import { Hero } from './hero';
@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web API
  constructor (private http: Http) {}
    
    getHeroes (): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
    }
    addHero (name: string): Promise<Hero> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.heroesUrl, { name }, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }
    delHero (name: string): Promise<Hero> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.heroesUrl, { name }, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }
    private extractData(res: Response) {        
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}