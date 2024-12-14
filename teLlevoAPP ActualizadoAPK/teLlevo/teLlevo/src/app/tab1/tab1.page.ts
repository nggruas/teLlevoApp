import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { User } from 'src/app/models/user.model';
import { Reservation } from 'src/app/models/reservation.model';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  misReservas: Reservation[] = [];  // Almacena las reservas
  usuario: User | null = null;  // Usuario puede ser null inicialmente
  texto: any;

  constructor(private firebaseSvc: FirebaseService) {}

  ngOnInit() {
    this.fetchUserProfileAndLoadData();  // Llama a la función al inicializar el componente
  }

  // Método para cargar el perfil del usuario y las reservas
  fetchUserProfileAndLoadData() {
    this.firebaseSvc.getUserProfile().subscribe((userProfile: User | null) => {
      if (userProfile && userProfile.uid) {
        this.usuario = userProfile;
        this.loadUserReservations();  // Carga las reservas del usuario
      }
    });
  }

  // Método para cargar las reservas del usuario
  loadUserReservations() {
    if (this.usuario && this.usuario.uid) {
      this.firebaseSvc.getReservationsByUserId(this.usuario.uid).subscribe(reservas => {
        this.misReservas = reservas;  // Asigna las reservas a la propiedad misReservas
      });
    }
  }
}
