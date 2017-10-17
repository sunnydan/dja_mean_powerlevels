import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { HumanComponentComponent } from './human-component/human-component.component';
import { SaiyanComponentComponent } from './saiyan-component/saiyan-component.component';
import { SuperSaiyanComponentComponent } from './super-saiyan-component/super-saiyan-component.component';
import { SuperSaiyanTwoComponentComponent } from './super-saiyan-two-component/super-saiyan-two-component.component';
import { SuperSaiyanThreeComponentComponent } from './super-saiyan-three-component/super-saiyan-three-component.component';
import { SuperSaiyanFourComponentComponent } from './super-saiyan-four-component/super-saiyan-four-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponentComponent,
    SaiyanComponentComponent,
    SuperSaiyanComponentComponent,
    SuperSaiyanTwoComponentComponent,
    SuperSaiyanThreeComponentComponent,
    SuperSaiyanFourComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
