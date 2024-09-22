import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(){
    document.addEventListener('DOMContentLoaded', () => {
      let linksContainer = document.querySelector('ul');
      if(linksContainer){
      let links = linksContainer.querySelectorAll('a');
      linksContainer.addEventListener('click', function(event) {
        if(event.target != null){
          const target = event.target as HTMLElement;
          if (target.tagName === 'A') {    
            links.forEach(link => link.classList.remove('active'));
            target.classList.add('active');
          }
        }
      });
    }
    else
    console.log("ul is null");
    });
  }
}
