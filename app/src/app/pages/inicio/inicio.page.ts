import { Componente } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente>;

  constructor(private menu: MenuController, private ds: DataService) {}

  ngOnInit() {
     console.log(this.ds.getMenu());  
    this.componentes = this.ds.getMenu();
  }
}

