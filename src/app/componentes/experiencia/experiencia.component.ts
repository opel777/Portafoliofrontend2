import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private datosPortafoliofrontend:PortfolioService) { }
  miPorfolio:any
  ngOnInit(): void {
    this.datosPortafoliofrontend.obtenerDatos().subscribe(data => {
      console.log(data.experience)
      this.miPorfolio=data.experience;
      
    })
  }

}
