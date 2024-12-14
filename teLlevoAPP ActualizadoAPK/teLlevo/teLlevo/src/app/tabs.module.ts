import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { TabsRoutingModule } from './tabs/tabs-routing.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRoutingModule
  ]
})
export class TabsModule {}

