import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText } from '@ionic/angular';

// KATA · Sessions 1-2 (consulta la fitxa de la sessió)
//
// 1. Injecta el MenuService i guarda els restaurants en una propietat.
// 2. Mostra'ls a la plantilla amb @for dins d'una ion-list
//    (nom, tipus de cuina, valoració, temps d'entrega i cost d'enviament).
// 3. Mostra quants restaurants hi ha: «6 restaurants».
// 4. Afig una ion-searchbar amb [(ngModel)] que filtre per nom o per cuina.
//    Recorda: [(ngModel)] necessita FormsModule als imports del component.
// 5. Si cap restaurant coincideix, mostra un missatge amb @if / @else.
//
// No toques el MenuService: la pàgina només el fa servir.

@Component({
  selector: 'app-inici',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText],
  templateUrl: './inici.page.html',
  styleUrl: './inici.page.scss',
})
export class IniciPage {}
