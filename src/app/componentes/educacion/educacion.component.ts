import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  constructor(private datosPortafoliofrontend:PortfolioService) { }
  miPorfolio:any
  ngOnInit(): void {
    this.datosPortafoliofrontend.obtenerDatos().subscribe(data => {
      console.log(data.Education)
      this.miPorfolio=data.Education;
      
    })
  }
}
