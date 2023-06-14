import { SidebarRightComponent } from './components/sidebarRight/sidebarRight.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { NbButtonModule, NbContextMenuModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { MainComponent } from './main.component';
import { SidebarLeftComponent } from './components/sidebarLeft/sidebarLeft.component';



@NgModule({
  declarations: [
    MainComponent,
    SidebarLeftComponent,
    SidebarRightComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbContextMenuModule,
    NbIconModule,
    NbMenuModule.forRoot()
  ]
})
export class MainModule { }
