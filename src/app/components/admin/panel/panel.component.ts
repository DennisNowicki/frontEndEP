import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdata } from '../../../data/userdata/userdata.model';
import { UserdataService} from '../../../data/userdata/userdata.service';
import { Components } from '../../../data/components/components.model';
import { ComponentsService} from '../../../data/components/components.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public userdata$: Observable<Userdata[]>;
  public components$: Observable<Components[]>;

  messages: boolean = true;
  statistics: boolean = true;
  requests: boolean = false;
  components: boolean = true;

  constructor(private UserdataService: UserdataService, private ComponentService: ComponentsService) { }

  addUserdata(){
    
  }

  changeUserdata(value){
    alert("change the data of request #" + value);
  }

  deleteUserdata(value) {
    this.UserdataService.deleteUserdata(value).subscribe();
  }

  check(value){
    alert("Delete the data of request #" + value);
  }

  showMessages(){
    this.requests = true;
    this.statistics = true;
    this.components = true;
    this.messages = false;
  }

  showRequests(){
    this.requests = false;
    this.statistics = true;
    this.components = true;
    this.messages = true;
  }

  showStatistics(){
    this.requests = true;
    this.statistics = false;
    this.components = true;
    this.messages = true;
  }

  showComponents(){
    this.requests = true;
    this.statistics = true;
    this.components = false;
    this.messages = true;
  }

  ngOnInit() {
    this.userdata$ = this.UserdataService.getUserdata();
    this.components$ = this.ComponentService.getComponents();
  }

}
