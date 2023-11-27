import { AllFilesComponent } from './all-files/all-files.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DiagramDetailsComponent } from './diagram-details/diagram-details.component';

const appRoutes: Routes = [
  { path: "AllFiles", component: AllFilesComponent,
  children:[{path:":name",component:DiagramDetailsComponent}]
},
];

@NgModule({
  declarations: [
    AppComponent,
    AllFilesComponent,
    DiagramDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
