import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 miPorfolio: any;
  constructor(private datosPortafoliofrontend:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortafoliofrontend.obtenerDatos().subscribe(data => {
      this.miPorfolio=data;
      console.log(data)
    })
  }

}
