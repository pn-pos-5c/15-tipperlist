import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TipperDto} from '../../../models/tipperdto';
import {MatchDto} from '../../../models/matchdto';
import {TippDto} from '../../../models/tippdto';

@Injectable()
export class TippsService {
  private rootUrl = 'http://localhost:5000/Tips';

  constructor(private http: HttpClient) {
  }

  getTipperNames(): Observable<TipperDto[]> {
    return this.http.get<TipperDto[]>(`${this.rootUrl}/TipperNames`);
  }

  getMatchResults(): Observable<MatchDto[]> {
    return this.http.get<MatchDto[]>(`${this.rootUrl}/MatchResults`);
  }

  getTip(tipperId: number): Observable<TippDto> {
    return this.http.get<TippDto>(`${this.rootUrl}/Tipps/${tipperId}`);
  }
}
