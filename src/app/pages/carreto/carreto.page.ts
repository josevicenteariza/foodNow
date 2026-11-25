import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText } from '@ionic/angular';

@Component({
  selector: 'app-carreto',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Carretó</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-text color="medium">
        <p>Pantalla pendent. El carretó es programa a la SA3.</p>
      </ion-text>
    </ion-content>
  `,
})
export class CarretoPage {}
