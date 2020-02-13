import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Components } from '../../data/components/components.model';
import { ComponentsService} from '../../data/components/components.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  @ViewChild('description') description: ElementRef;
  @ViewChild('usageType') usageType: ElementRef;

  public components$: Observable<Components[]>;

  // tslint:disable: no-inferrable-types
  form1Active: boolean = true;

  userData = [];
  chosenComponents = [];

  constructor(private ComponentService: ComponentsService) { }

  isClicked() {
    this.form1Active = !this.form1Active;
  }

  addComponent(value: Components) {
    let counter = 0;

    if (this.chosenComponents.length === 0) {
      counter = counter;
    } else {
      for (let i = 0; i < this.chosenComponents.length; i++) {
        if (this.chosenComponents[i].name === value.name) {
          counter++;
          this.chosenComponents.splice(i, 1);
        }
      }
    }

    if (counter === 0) {
      this.chosenComponents.push(
        new Components(null,
          value.name,
          value.src,
          value.fee))
    }
  }

  eraseComponent(value: Components) {
    for (let i = 0; i < this.chosenComponents.length; i++) {
      if (this.chosenComponents[i].name === value.name) {
        this.chosenComponents.splice(i, 1);
      }
    }
  }

  ngOnInit() {
    this.components$ = this.ComponentService.getComponents();
  }

  addForm1Data() {
    if(this.userData.length === 0){
      this.userData.push(this.usageType.nativeElement.value,this.description.nativeElement.value );
    }
    else{
      this.userData[0] = this.usageType.nativeElement.value;
      this.userData[1] = this.description.nativeElement.value;
    }

  }
}
