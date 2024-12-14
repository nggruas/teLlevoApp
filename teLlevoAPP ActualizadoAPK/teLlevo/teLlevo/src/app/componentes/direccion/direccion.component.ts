import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonIcon, IonItem, IonLabel } from '@ionic/angular';
import { MapaComponent } from '../mapa/mapa.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
  imports: [IonButton, IonButtons, IonLabel,IonIcon, IonItem,MapaComponent, RouterModule,]
})
export class DireccionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
