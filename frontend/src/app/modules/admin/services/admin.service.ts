import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatchDto} from '../../../models/matchdto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  updateMatchResult(match: MatchDto): Observable<MatchDto> {
    return this.http.put<MatchDto>(`http://localhost:5000/TipsAdmin/UpdateMatchResult/${match.id}`, match);
  }
}
