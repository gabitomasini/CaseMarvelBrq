import { CepServiceService } from '../services/cep-service.service';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-registeraddress',
  templateUrl: './registeraddress.component.html',
  styleUrls: ['./registeraddress.component.css']
})
export class RegisteraddressComponent {


  constructor(private CepService: CepServiceService, private router: Router,
    private formBuilder: FormBuilder, private UsuarioService: UsuarioService, private http: HttpClient) { }



  consultaCep(valor: any, form: Form){
    this.CepService.buscar(valor).subscribe((dados: any) => this.populaForm(dados, form));
  }

  populaForm(dados: any, form: any){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      localidade: dados.localidade,
      uf: dados.uf,
      numeroEnd: '',
      complemento: '',
    })
    console.log(dados);
  }


  enviarDados(){
    debugger;
    window.localStorage.setItem('AddressData', JSON.stringify(this.populaForm));
    debugger;
  }

  // ngOnInit(): void {
  //   this.addressData = this.formBuilder.group({
  //     cep: ['',],
  //     address: ['',],
  //     number: ['',],
  //     complement: ['',],
  //     district: ['',],
  //     city: ['',],
  //   })
  //   debugger;
  // }


//   onSubmit(){
//     debugger;
//    if (this.addressData.dirty && this.addressData.valid) {
//      debugger;
//      window.localStorage.setItem('AddressData', JSON.stringify(this.addressData.value));
//      debugger;
//      this.router.navigate(["/login"]);
//      debugger;
//   }

//
}
