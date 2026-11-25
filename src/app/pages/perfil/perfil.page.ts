import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-text color="medium">
        <p>Pantalla pendent.</p>
      </ion-text>
    </ion-content>
  `,
})
export class PerfilPage {}
