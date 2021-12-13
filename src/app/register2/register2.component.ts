import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxViacepService } from "@brunoc/ngx-viacep";
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { IConfig } from 'ngx-mask';




@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {


  paymentData!: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router ,
    private UsuarioService: UsuarioService, private http: HttpClient) { }



    ngOnInit(): void {
    this.paymentData = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      validity: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      cardholderName: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
    })

   }

   onSubmit(){

    if (this.paymentData.dirty && this.paymentData.valid) {

      window.localStorage.setItem('PaymentData', JSON.stringify(this.paymentData.value));

      this.router.navigate(["/address"]);

   }

  }

  maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
}
}
