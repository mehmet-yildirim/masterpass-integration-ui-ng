import {Injectable} from "@angular/core";
import {Headers, Http, Response, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GenerateKeyService {

  private url = 'http://localhost:8080/token';

  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

  constructor(private http: Http) {}

  getKey() {

    let searchParams = new URLSearchParams();
    searchParams.append('msisdn','5551234567');
    searchParams.append('userid','masterpass_user');

    console.log('getting API key...');
    return this.http.post(this.url, searchParams.toString(),
      {headers: this.headers}).map((res: Response) => res.text())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error occurred!', error);
    return Promise.reject(error.message || error);
  }

}
