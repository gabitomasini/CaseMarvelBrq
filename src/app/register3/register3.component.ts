import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConsultaCepService } from './consultacep.service';
import { HttpClient } from '@angular/common/http';
import { CepServiceService } from '../services/cep-service.service';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css'],
  providers: [ ConsultaCepService ],
})
export class Register3Component implements OnInit {

  addressData!: FormGroup;

  constructor(

    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private CepService: CepServiceService,
    ) { }

    ngOnInit(): void {
      debugger;
      this.addressData = this.fb.group({
        cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        address: ['', [Validators.required]],
        numberEnd: ['', [Validators.required]],
        complement: [''],
        district: ['', [Validators.required]],
        city: ['', [Validators.required]]

      })
      debugger;
    }

    consultaCep(){
      debugger;
      let cep = this.addressData.get('cep')?.value;{
        debugger;
      cep = cep.replace(/\D/g, '');
      debugger;
      if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        debugger;
        if(validacep.test(cep)) {}
        debugger;
          this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaForm(dados));
          debugger;
        }

      }
    }
    populaForm(dados: any) {
      debugger;
      this.addressData.patchValue({

        address: dados.logradouro,
        district: dados.bairro,
        city: dados.localidade

      })

  }

  onSubmit(){
    if (this.addressData.dirty && this.addressData.valid) {

      window.localStorage.setItem('AddressData', JSON.stringify(this.addressData.value));

      this.router.navigate(["/login"]);

   }
  }

  irLogin(){
    this.router.navigate(["/login"]);
  }
}
