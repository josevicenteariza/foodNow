import { Component, Inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonListHeader, IonLabel, IonItem, IonSearchbar } from '@ionic/angular';
import { MenuService } from '../../services/menu.service';
import { Restaurant } from '../../models/restaurant.model';
import { FormsModule } from '@angular/forms';

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
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonListHeader, IonLabel, IonItem, IonSearchbar],
  templateUrl: './inici.page.html',
  styleUrl: './inici.page.scss',
})

export class IniciPage implements OnInit {

  restaurants: Restaurant[] = []
  restaurantsFiltrats: Restaurant[] = []

  restaurantsTotals: number = 0

  searchTerm: string = ''

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {

    this.loadRestaurants();
    
    this.restaurantsFiltrats = [...this.restaurants];
    this.restaurantsTotals = this.restaurantsFiltrats.length;

  }

  loadRestaurants(): void { this.restaurants = this.menuService.getRestaurants() }

  searchRestaurant(): void {
    const term = this.searchTerm.toLowerCase().trim();
    if(term == '') {
      this.restaurantsFiltrats = [...this.restaurants];
    } else {
      this.restaurantsFiltrats = this.restaurants.filter(restaurant => restaurant.nom.toLowerCase().includes(term) || restaurant.cuina.toLowerCase().includes(term));
    }
    this.restaurantsTotals = this.restaurantsFiltrats.length;
  }

}
