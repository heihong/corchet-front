import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { navTexts } from '../constants/texts';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  _navTests = navTexts;
}
