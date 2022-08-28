import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Guarda todos los encabezados
    const encabezados = document.querySelectorAll('.section .encabezados');
    // Guarda todos los enlaces
    const enlaces = document.querySelectorAll('.navbar a');
    // Crea una instancia de la clase IntersectionObserver para estar atento al scroll
    const observer = new IntersectionObserver((entradas, observador) => {
      // Itera todos los encabezados
      entradas.forEach(entrada => {
        // Si el encabezado está activo
        if(entrada.isIntersecting) {
          // Guarda el id del encabezado en la variable id con el numeral #
          const id = `#${entrada.target.id}`;
          // Modifica la url poniendo la ruta del encabezado
          history.pushState({}, '', id);
          // Itera los enlaces
          enlaces.forEach(enlace => {
            // Remueve la clase active de los enlaces
            enlace.classList.remove('active');
            // Se guarda el valor del atributo href del enlace
            const href = enlace.getAttribute('href');
            // Si el valor del atributo href es igual que el id del encabezado
            if(href === id) {
              // Se agrega la clase active al enlace
              enlace.classList.add('active');
            }
          });
        }
      });
    }, {
      threshold: 1,
      rootMargin: '0px 0px -50% 0px'
    });
    encabezados.forEach(encabezado => {
      observer.observe(encabezado);
    })
  }
}
