import { diagram } from './../Models/Diagram';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../Services/data.services';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent implements OnInit{
  Diagrams : diagram [] = [];
  open :boolean=false;
  close:boolean=true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
     this.Diagrams = this.dataService.getAllDiagrams();
  }
  OpenDiagram(){
    this.close=true;
  }
  CloseDiagram(){
    this.close=false;
  }
  WhenClicked(){
    if(this.open==false){
      this.open=true;
    }
    else{
      this.open=false;
      this.close=false;
    }



  }


}
