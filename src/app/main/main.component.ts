import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedUser: User | null = null;
  constructor() { }

  ngOnInit() {
  }

}
