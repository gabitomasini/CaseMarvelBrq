import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../services/marvel.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pagina-hqsdetalhe',
  templateUrl: './pagina-hqsdetalhe.component.html',
  styleUrls: ['./pagina-hqsdetalhe.component.css']
})
export class PaginaHqsdetalheComponent implements OnInit {

  constructor(
    private MarvelService: MarvelService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar) {
    // this.id = this.route.snapshot.paramMap.get("id") as string;
  }

  openSnackBar(message: any, action: any){
    debugger;
    this.snackbar.open(message, action);
    debugger;
  }


  ngOnInit(): void {
    }



    irHqs(){
      this.router.navigate(['hqs']);
    }

    irHome(){
      this.router.navigate(['login']);
    }

    irProfile(){
      this.router.navigate(['profile']);
    }


  }




