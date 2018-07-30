import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
//import {PagesService} from '../../pages.service';
//import * as FileSaver from 'file-saver';
import {DatePipe} from '@angular/common';
//import {FilePickerComponent} from '../../../@theme/components/file-picker/file-picker.component';
//import {DeleteConfirmComponent} from '../../../@theme/components/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {
  project: Project ={
    id: 'C2018-GY35-301',
    name: '测试项目名称'
  }

  constructor() { }

  
 
  ngOnInit() {
  }

}
