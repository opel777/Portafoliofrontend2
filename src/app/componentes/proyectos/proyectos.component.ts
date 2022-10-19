import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private datosPortafoliofrontend:PortfolioService) { }

  miPorfolio:any
  ngOnInit(): void {
    this.datosPortafoliofrontend.obtenerDatos().subscribe(data => {
      console.log(data.proyectos)
      this.miPorfolio=data.proyectos;
      
    })
  }
}
