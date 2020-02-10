import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Components } from '../../data/components/components.model';
import { ComponentsService} from '../../data/components/components.service';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  public components$: Observable<Components[]>;
  public chosenComponents$: Observable<Components[]>;
  public componentsDetail$: Observable<any[]>;
  isClickedVar: boolean;

  chosenComponents = [];

  constructor(private ComponentService: ComponentsService) { }

  isClicked() {
    this.isClickedVar = true;
  }

  addComponent(value) {
    let counter = 0;

    if(this.chosenComponents.length === 0) {
      counter = counter;
    }
    else {
      for(let i = 0; i < this.chosenComponents.length; i++) {
        if(this.chosenComponents[i].name === value.name) {
          counter++;
          this.chosenComponents.splice(i,1);
        }
        else {
          counter = counter;
        }
      }
    }
    if (counter === 0){
      this.chosenComponents.push(
        new Components(null,
          value.name,
          value.src,
          value.fee,
          value.minHours,
          value.maxHours
        )
      )
    }
  }

  eraseComponent(value){

    for(let i = 0; i < this.chosenComponents.length; i++) {
      if(this.chosenComponents[i].name === value.name) {
        this.chosenComponents.splice(i,1);
      }
    }
  }

  ngOnInit() {
    this.components$ = this.ComponentService.getComponents();
    this.chosenComponents$ = this.ComponentService.getChosenComponents();
  }
}
