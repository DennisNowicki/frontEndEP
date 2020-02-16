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

  constructor(private UserdataService: UserdataService, private ComponentService: ComponentsService) { }

  ngOnInit() {
    this.userdata$ = this.UserdataService.getUserdata();
    this.components$ = this.ComponentService.getComponents();
  }

}
