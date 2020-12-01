import { Component } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  navbarCollapsed = true;

  toggleNavbar(): void {
    switch (this.navbarCollapsed) {
      case true: {
        this.navbarCollapsed = false;
        break;
      }
      case false: {
        this.navbarCollapsed = true;
        break;
      }
    }
  }
}
