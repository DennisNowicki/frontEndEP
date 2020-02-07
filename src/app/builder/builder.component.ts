import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Components } from '../data/components/components.model';
import { ComponentsService} from '../data/components/components.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  public components$: Observable<Components[]>;

  orignalUserSettings: UserSettings  = {
    usageType: null,
    description: null,
    database: null
  };

  userSettings: UserSettings = { ...this.orignalUserSettings};

  constructor(private ComponentService: ComponentsService) { }

  ngOnInit() {
    this.components$ = this.ComponentService.getComponents();
  }

  isClicked(value: string) {
    alert('clicked');
  }

}
