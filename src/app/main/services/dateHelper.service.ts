import { Injectable } from '@angular/core';
import * as DateGenerator from 'random-date-generator';
import * as randomBirthday from 'random-birthday';
@Injectable({
  providedIn: 'root'
})
export class DateHelperService {

  constructor() { }
  randomBirthday(): Date {
    return randomBirthday();
  }
}
