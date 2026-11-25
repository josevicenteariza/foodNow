import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Plat } from '../models/plat.model';
import { RESTAURANTS, PLATS } from '../data/menu.data';

/**
 * Servei amb les dades de FoodNow.
 * Per a fer-lo servir en una pàgina:  private menu = inject(MenuService);
 */
@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly restaurants: Restaurant[] = RESTAURANTS;
  private readonly plats: Plat[] = PLATS;

  /** Tots els restaurants. */
  getRestaurants(): Restaurant[] {
    return [...this.restaurants];
  }

  /** Un restaurant pel seu id, o undefined si no existeix. */
  getRestaurant(id: number): Restaurant | undefined {
    return this.restaurants.find((r) => r.id === id);
  }

  /** La carta d'un restaurant. */
  getPlats(restaurantId: number): Plat[] {
    return this.plats.filter((p) => p.restaurantId === restaurantId);
  }

  /** Un plat pel seu id, o undefined si no existeix. */
  getPlat(id: number): Plat | undefined {
    return this.plats.find((p) => p.id === id);
  }
}
