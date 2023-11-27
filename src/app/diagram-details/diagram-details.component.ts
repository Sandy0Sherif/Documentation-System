import { diagram } from './../Models/Diagram';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.services';

@Component({
  selector: 'app-diagram-details',
  templateUrl: './diagram-details.component.html',
  styleUrls: ['./diagram-details.component.css']
})
export class DiagramDetailsComponent implements OnInit {
  name?:string;
  diagram?:diagram;
  constructor(private route: ActivatedRoute, private dataservice: DataService) {}

  ngOnInit() {
    this.route.params.subscribe( (params)=>{
      this.name = params['name'];
      this.diagram = this.dataservice.getDiagram(this.name);
    } )
}


}
