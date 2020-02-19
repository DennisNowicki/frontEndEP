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
  @ViewChild('pagesCount') pagesCount: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('message') message: ElementRef;

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

  changeType(){
    this.summaryActive = !this.summaryActive;
    this.summarySideActive = !this.summarySideActive;
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
          value.fee,
          value.minHours,
          value.maxHours,
          value.needed))
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
      this.userApplication.push(this.usageType.nativeElement.value,this.description.nativeElement.value,this.pagesCount.nativeElement.value );
    }
    else{
      this.userApplication[0] = this.usageType.nativeElement.value;
      this.userApplication[1] = this.description.nativeElement.value;
      this.userApplication[2] = this.pagesCount.nativeElement.value;
    }

  }

  

  addUserdata(){

    let admin = false;
    let calendar = false;
    let cart = false;
    let cb = false;
    let db = false;
    let geo = false;
    let ml = false;
    let login = false;
    let media = false;
    let notif = false;
    let pay = false;
    let stats = false;
    let tech = false;
    let file = false;
    let user = false;

    for (let i = 0; i < this.chosenComponents.length; i++) {
      if (this.chosenComponents[i].name === "Admin panel") {
        admin = true;
      }
      if (this.chosenComponents[i].name === "Calendar") {
        calendar = true;
      }
      if (this.chosenComponents[i].name === "Shopping cart") {
        cart = true;
      }
      if (this.chosenComponents[i].name === "Chatbox") {
        cb = true;
      }
      if (this.chosenComponents[i].name === "Database") {
        db = true;
      }
      if (this.chosenComponents[i].name === "Geolocation") {
        geo = true;
      }
      if (this.chosenComponents[i].name === "Multilanguage") {
        ml = true;
      }
      if (this.chosenComponents[i].name === "Login system") {
        login = true;
      }
      if (this.chosenComponents[i].name === "Media support") {
        media = true;
      }
      if (this.chosenComponents[i].name === "Notifications") {
        notif = true;
      }
      if (this.chosenComponents[i].name === "Payment service") {
        pay = true;
      }
      if (this.chosenComponents[i].name === "Statistics") {
        stats = true;
      }
      if (this.chosenComponents[i].name === "Tech support") {
        tech = true;
      }
      if (this.chosenComponents[i].name === "File upload") {
        file = true;
      }
      if (this.chosenComponents[i].name === "User experience") {
        user = true;
      }
    }

    const newUserdata = new Userdata(
        null,
        this.userApplication[0],
        this.userApplication[1],
        this.userApplication[2],
        [{pageName: "home"}, {pageName: "contact"}, {pageName: "about"}],
        [
          {"id": 1,
          "name": "Admin panel",
          "src": "../../assets/icons/admin_panel.png",
          "fee": 10.00,
          "minHours": 1,
          "maxHours": 10,
          needed: admin
          },
          {
          "id": 2,
          "name": "Calendar",
          "src": "../../assets/icons/calender_ico.png",
          "fee": 20.00,
          "minHours": 2,
          "maxHours": 20,
          "needed": calendar
          },
          {
            "id": 3,
            "name": "Shopping cart",
            "src": "../../assets/icons/cart_ico.png",
            "fee": 30.00,
            "minHours": 3,
            "maxHours": 30,
            "needed": cart
          },
          {
            "id": 4,
            "name": "Chatbox",
            "src": "../../assets/icons/chatbox_ico.png",
            "fee": 40.00,
            "minHours": 4,
            "maxHours": 40,
            "needed": cb
          },
          {
            "id": 5,
            "name": "Database",
            "src": "../../assets/icons/database_ico.png",
            "fee": 50.00,
            "minHours": 5,
            "maxHours": 50,
            "needed": db
          },
          {
            "id": 6,
            "name": "Geolocation",
            "src": "../../assets/icons/geolocation_ico.png",
            "fee": 60.00,
            "minHours": 6,
            "maxHours": 60,
            "needed": geo
          },
          {
            "id": 7,
            "name": "Multilanguage",
            "src": "../../assets/icons/language_support_ico.png",
            "fee": 70.00,
            "minHours": 7,
            "maxHours": 70,
            "needed": ml
          },
          {
            "id": 8,
            "name": "Login system",
            "src": "../../assets/icons/login_system_ico.png",
            "fee": 80.00,
            "minHours": 8,
            "maxHours": 80,
            "needed": login
          },
          {
            "id": 9,
            "name": "Media support",
            "src": "../../assets/icons/multimedia_intergration_ico.png",
            "fee": 90.00,
            "minHours": 9,
            "maxHours": 90,
            "needed": media
          },
          {
            "id": 10,
            "name": "Notifications",
            "src": "../../assets/icons/notification_ico.png",
            "fee": 100.00,
            "minHours": 10,
            "maxHours": 100,
            "needed": notif
          },
          {
            "id": 11,
            "name": "Payment service",
            "src": "../../assets/icons/payment_service_ico.png",
            "fee": 110.00,
            "minHours": 11,
            "maxHours": 110,
            "needed": pay
          },
          {
            "id": 12,
            "name": "Statistics",
            "src": "../../assets/icons/statistics_ico.png",
            "fee": 120.00,
            "minHours": 12,
            "maxHours": 120,
            "needed": stats
          },
          {
            "id": 13,
            "name": "Tech support",
            "src": "../../assets/icons/techsupport_ico.png",
            "fee": 130.00,
            "minHours": 13,
            "maxHours": 130,
            "needed": tech
          },
          {
            "id": 14,
            "name": "File upload",
            "src": "../../assets/icons/upload_capabilities_ico.png",
            "fee": 140.00,
            "minHours": 14,
            "maxHours": 140,
            "needed": file
          },
          {
            "id": 15,
            "name": "User experience",
            "src": "../../assets/icons/user_experience_ico.png",
            "fee": 150.00,
            "minHours": 15,
            "maxHours": 150,
            "needed": user
          }
        ],
        this.name.nativeElement.value,
        this.email.nativeElement.value,
        this.message.nativeElement.value,
        false,
      );
    this.UserdataService.addUserdataJSON(newUserdata).subscribe();
  }

}
