import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText } from '@ionic/angular';

@Component({
  selector: 'app-cerca',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Cerca</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-text color="medium">
        <p>Pantalla pendent. La cerca per veu arribarà a la SA4.</p>
      </ion-text>
    </ion-content>
  `,
})
export class CercaPage {}
