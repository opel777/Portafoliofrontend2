import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 miPorfolio: any;
 form: FormsModule = new FormsModule;
  selectMiPorfolio: any;
  miPorfolioArray: any;
 
  constructor(private datosPortafoliofrontend:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortafoliofrontend.obtenerDatos().subscribe(data => {
      this.miPorfolio=data;

      console.log(data)
    })  
  }
      addOrEdit(){
        this.selectMiPorfolio.id = this.miPorfolioArray.lengh + 1;
        this.miPorfolioArray.push(this.selectMiPorfolio);
      }
}
