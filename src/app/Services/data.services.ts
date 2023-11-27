import { diagram } from './../Models/Diagram';
import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class DataService{
  diagrams:diagram[]=[
    {name:"Usecase diagram",image:"./../../assets/usecase.png",phase:"Analysis Phase"},
    {name:"Activity diagram",image:"./../../assets/ativity.png",phase:"Analysis Phase"},
    {name:"Data Flow diagram",image:"./../../assets/download.png",phase:"Design Phase"},
    {name:"SW Architecture diagram",image:"./../../assets/sw architecture.png",phase:"Design Phase"},
    {name:"State diagram",image:"./../../assets/state.png",phase:"Design Phase"},
  ];
  getAllDiagrams() {
    return this.diagrams.slice();
}
getDiagram(name?: string) {
  return this.diagrams.find((c) => {
      return c.name == name;
  });
}

}
