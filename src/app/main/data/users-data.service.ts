import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { v4 as uuidv4 } from 'uuid';
import * as randomFirstName from 'random-firstName';
import * as randomLastName from 'random-lastName';

import { DateHelperService } from '../services/dateHelper.service';
import { NumberHelperService } from '../services/numberHelper.service';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  public users: User[] = [];
  public availableDomainEmails: string[] = ['gmail.com', 'outlook.com', 'yahoo.com'];
  // public availableLastName: string[] = ['Richad', 'Forester', 'Frossard', 'Gauthier', 'Laflamme', 'Reason', 'Voland', 'Abreo', 'Dupont', 'Edouard', 'Aubert', 'Fontaine', 'Remy', 'Sauveterre', 'Vautour', 'Jourdain', 'Faucher'];
  constructor(private dateHelper: DateHelperService, private numberHelper: NumberHelperService) { }

  generateRandomUsers() {
    for (let i = 0; i < 9; i++) {
      const gender = this.numberHelper.randomIntFromInterval(1, 2) == 1 ? 'male' : 'female';
      const firstname = randomFirstName({ gender });
      const lastname = randomLastName();
      const email = `${firstname}.${lastname}@${this.availableDomainEmails[Math.floor(Math.random() * this.availableDomainEmails.length)]}`
      this.users.push({
        id: uuidv4(),
        userBasicInfos: {
          gender,
          // birthday:
          firstname,
          lastname,
        },
        userBirthInfos: {
          birthdate: this.dateHelper.randomBirthday(),
        },
        userContactInfos: {
          address: 'address',
          city: 'city',
          country: 'country',
          email,
          phone: 'phone',
          zipcode: 'zipcode',
        }
      });
    }
  }
  removeUsers() {
    this.users = [];
  }
  resetUsers() {
    this.removeUsers();
    this.generateRandomUsers();
  }
  addRandomUsers() {
    this.generateRandomUsers();
  }
}
