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
  public chosenComponents$: Observable<Components[]>;
  public componentsDetail$: Observable<any[]>;

  isClickedVar: boolean;

  orignalUserSettings: UserSettings  = {
    usageType: null,
    description: null,
    database: null
  };

  userSettings: UserSettings = { ...this.orignalUserSettings};

  constructor(private ComponentService: ComponentsService) { }

  isClicked() {
    this.isClickedVar = true;
  }

  addComponent(value) {
    this.addComponentDetail(value);
  }

  addComponentDetail(details) {
    const compJSON = new Components(null,
      details.name,
      details.src,
      details.fee,
      details.minHours,
      details.maxHours
    );
    this.ComponentService.addComponentJSON(compJSON).subscribe();
  }
  ngOnInit() {
    this.components$ = this.ComponentService.getComponents();
    this.chosenComponents$ = this.ComponentService.getChosenComponents();
  }

  

}
