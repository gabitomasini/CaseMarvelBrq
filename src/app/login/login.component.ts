import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin!: FormGroup
  nickname!: string;
  password!: string;
  hide = true;

     // hide = true;



  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signin = new FormGroup({
      nickname: new FormControl('', [Validators.required ]),
      password: new FormControl('', [Validators.required, Validators.minLength(3) ])
    });
  }


  onSubmit(){
    window.localStorage.getItem('AccountData');
    debugger;
    let user = JSON.parse(window.localStorage.getItem('AccountData') || '{}');
    debugger;
    this.nickname = (user.nickname);
    debugger;
    this.password = (user.password);
    debugger;

    if( this.nickname === this.signin.value.nickname && this.password === this.signin.value.password)
    {
      debugger;
      this.router.navigate(['hqs']);
    }else{
      debugger;
      console.log("Não foi possível logar");
    }

  }

  irRegister() {
    this.router.navigate(['/register']);

  }

  irHqs(){
    this.router.navigate(['/hqs']);
  }

}

