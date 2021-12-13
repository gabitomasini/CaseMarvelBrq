import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-hqs',
  templateUrl: './pagina-hqs.component.html',
  styleUrls: ['./pagina-hqs.component.css']
})
export class PaginaHqsComponent {

  constructor(private MarvelService: MarvelService, private router: Router) { }

  title = 'angular-testes';

  public quadrinhosMarvel: any;

    ngOnInit(): void {


    this.MarvelService.chamadaQuadrinhosMarvel().subscribe((resultado: any) => {
      if (resultado && resultado.data && resultado.data.results)
      this.quadrinhosMarvel = resultado.data.results;

      console.log(this.quadrinhosMarvel);
    });

  }


//   irDetalhes(){
//     this.router.navigate(['details']);
// }

  irProfile(){
    this.router.navigate(['profile']);
  }
  irHome(){
    this.router.navigate(['login']);
  }
}


