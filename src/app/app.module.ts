import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './container/header/header.component';
import { ContentComponent } from './container/content/content.component';
import { HotelViewComponent } from './container/content/hotel-view/hotel-view.component';
import { SidebarComponent } from './container/content/sidebar/sidebar.component';
import { CustomBreakPointsProvider } from './custom-breakpoints.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    HotelViewComponent
  ],
  imports: [
      BrowserModule,
      FlexLayoutModule.withConfig({addOrientationBps: true}),
      AppRoutingModule,
      FlexLayoutModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
