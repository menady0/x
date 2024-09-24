import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  // Active feature using TypeScript
  // constructor(){
  //   document.addEventListener('DOMContentLoaded', () => {
  //     let linksContainer = document.querySelector('ul');
  //     if(linksContainer){
  //     let links = linksContainer.querySelectorAll('a');
  //     linksContainer.addEventListener('click', function(event) {
  //       if(event.target != null){
  //         const target = event.target as HTMLElement;
  //         if (target.tagName === 'A') {    
  //           links.forEach(link => link.classList.remove('active'));
  //           target.classList.add('active');
  //         }
  //       }
  //     });
  //   }
  //   else
  //   console.log("ul is null");
  //   });
  // }
}
