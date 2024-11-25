import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ResizableComponent } from './components/resizable/resizable.component';
import { ResizableDirective } from './components/resizable/resizable.directive';

import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ResizableComponent, ResizableDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected rows = signal<any[]>([]);

  public ngOnInit(): void {
    const data = Array.from(Array(10)).map(() => {
      return [
        faker.database.mongodbObjectId(),
        faker.person.fullName(),
        faker.location.streetAddress(),
        faker.location.city(),
        faker.location.state(),
        faker.location.zipCode(),
      ];
    });

    this.rows.set(data);
  }
}
