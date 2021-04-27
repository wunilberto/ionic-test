import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('asdasdasd');

     this.componentes = this.dataService.getMenu();
  }
}
