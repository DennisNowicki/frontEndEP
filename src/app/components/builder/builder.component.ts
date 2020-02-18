import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Components } from '../../data/components/components.model';
import { ComponentsService} from '../../data/components/components.service';
import { Userdata } from '../../data/userdata/userdata.model';
import { UserdataService} from '../../data/userdata/userdata.service';
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
  public userdata$: Observable<Userdata[]>;



  // tslint:disable: no-inferrable-types
  form1Active: boolean = true;
  form2Active: boolean = false;
  summaryActive: boolean = false;
  summarySideActive: boolean = false;
  public isCollapsed = false;

  userApplication = [];
  chosenComponents = [];

  constructor(private ComponentService: ComponentsService, private UserdataService: UserdataService) { }

  isClicked() {
    this.form1Active = !this.form1Active;
    this.form2Active = !this.form2Active;
  }

  isClicked2(){
    this.form2Active = !this.form2Active;
    this.summaryActive = !this.summaryActive;
    this.summarySideActive = !this.summarySideActive;
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
          value.fee,
          value.minHours,
          value.maxHours))
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
    this.userdata$ = this.UserdataService.getUserdata();
  }

  addForm1Data() {
    if(this.userApplication.length === 0){
      this.userApplication.push(this.usageType.nativeElement.value,this.description.nativeElement.value );
    }
    else{
      this.userApplication[0] = this.usageType.nativeElement.value;
      this.userApplication[1] = this.description.nativeElement.value;
    }

  }
}
