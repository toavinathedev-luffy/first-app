import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="search" name="search" placeholder="filter by city">
        <button type="button" class="primary">Search</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
