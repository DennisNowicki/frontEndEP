import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { componentsArray } from './builder';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  components = componentsArray;

  orignalUserSettings: UserSettings  = {
    usageType: null,
    description: null,
    database: null
  };

  userSettings: UserSettings = { ...this.orignalUserSettings};

  constructor() { }

  ngOnInit() {
  }

  isClicked(value: string) {
    alert('clicked');
  }

}
