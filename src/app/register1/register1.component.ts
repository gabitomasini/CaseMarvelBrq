import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit  {

  hide = true;
  accountData!: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router ,
    private UsuarioService: UsuarioService, private http: HttpClient) { }



    ngOnInit(): void {
    this.accountData = this.formBuilder.group({
      nickname: ['', Validators.required],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
    debugger;
   }

   onSubmit(){
     debugger;
    if (this.accountData.dirty && this.accountData.valid) {
      debugger;
      window.localStorage.setItem('AccountData', JSON.stringify(this.accountData.value));
      debugger;
      this.router.navigate(["/payment"]);
      debugger;
   }

  }

  maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
}
}
