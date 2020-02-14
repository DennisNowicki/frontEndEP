import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdata } from '../../../data/userdata/userdata.model';
import { UserdataService} from '../../../data/userdata/userdata.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public userdata$: Observable<Userdata[]>;

  constructor(private UserdataService: UserdataService) { }

  ngOnInit() {
    this.userdata$ = this.UserdataService.getUserdata();
  }

}
