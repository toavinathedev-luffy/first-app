import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location-interf';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = '../assets';
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acne Fresh start housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/images (8).jpeg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transtional Housing',
      city: 'santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/images (9).jpeg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/images (10).jpeg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homestaedy Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/images (11).jpeg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/images (12).jpeg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Appartement Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/téléchargement (26).jpeg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Warm Beds Housing support',
      city: 'Copakabama',
      state: 'AK',
      photo: `${this.baseUrl}/téléchargement (27).jpeg`,
      availableUnits: 3,
      wifi: false,
      laundry: false,
    },
  ];
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes Application received : firstName : ${firstName}, lastName : ${lastName}, email : ${email}`
    );
  }
  constructor() {}
}
