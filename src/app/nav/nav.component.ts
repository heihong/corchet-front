import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { navTexts } from '../share/texts';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterModule, MatButtonModule, MatMenuModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  _navTests = navTexts;
}
