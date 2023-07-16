import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location-interf';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="search" name="search" placeholder="Filter by city" />
        <button type="button" class="primary">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = '../assets';
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'test city',
    state: 'ST',
    photo: `${this.baseUrl}/luffy.png`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
