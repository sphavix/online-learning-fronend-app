import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { MOCK_COURSES } from '../../../mock-data/mock-courses';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-browse-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './browse-courses.component.html',
  styleUrl: './browse-courses.component.css'
})
export class BrowseCoursesComponent {
  courses: Course[] = [];

  constructor() {
    this.courses = MOCK_COURSES;
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }
}
