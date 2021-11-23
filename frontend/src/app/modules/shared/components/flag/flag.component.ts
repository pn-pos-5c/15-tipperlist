import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {
  @Input() countryName = '';
  flagsMapped: any = {
    Ita: 'it',
    Wal: 'wales',
    Den: 'dk',
    Bel: 'be',
    Eng: 'england',
    Srb: 'rs',
    Aut: 'at',
    Ned: 'nl',
    Pol: 'pl',
    Esp: 'es',
    Hun: 'hu',
    Fra: 'fr',
    Fin: 'fi',
    Tur: 'tr',
    Ukr: 'ua',
    Swe: 'se',
    Cro: 'hr',
    Por: 'pt',
    Sui: 'ch',
    Geo: 'ge',
    Rus: 'ru',
    Cze: 'cz',
    Irl: 'ie',
    Ger: 'de'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
