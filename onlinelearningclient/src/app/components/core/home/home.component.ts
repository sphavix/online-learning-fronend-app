import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PlansAndPricingComponent } from "../plans-and-pricing/plans-and-pricing.component";
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../../course/categories/categories.component';
import { BrowseCoursesComponent } from "../../course/browse-courses/browse-courses.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, PlansAndPricingComponent, CommonModule, CategoriesComponent, BrowseCoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
