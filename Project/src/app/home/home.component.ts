import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MobileSectionComponent } from '../components/mobile-section/mobile-section.component';
import { GettingStartedSectionComponent } from '../components/getting-started-section/getting-started-section.component';
import { HomepageComponent } from '../components/homepage/homepage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MobileSectionComponent,
    GettingStartedSectionComponent,
    HomepageComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
