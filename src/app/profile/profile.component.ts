import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nickname!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  address!: string;
  complement!: string;
  contact!: string;
  cardNumber!: string;
  cardHolderName!: string;
  validity!: string;
  numberEnd: any;
  cep!: number;
  district!: string;
  city!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

    let paymentData = JSON.parse(window.localStorage.getItem('PaymentData') || '{}');
    this.cardNumber = (paymentData.cardNumber.slice(-4));
    this.cardHolderName = (paymentData.cardHolderName);
    this.validity = (paymentData.validity);

    let accountData = JSON.parse(window.localStorage.getItem('AccountData') || '{}');
    this.nickname = (accountData.nickname);
    this.firstName = (accountData.firstName);
    this.lastName = (accountData.lastName);
    this.email = (accountData.email);
    this.contact = (accountData.contact);

    let addressData = JSON.parse(window.localStorage.getItem('AddressData') || '{}');
    this.address = (addressData.address);
    this.numberEnd = (addressData.numberEnd);
    this.complement = (addressData.complement);
    this.cep = (addressData.cep);
    this.district = (addressData.district)
    this.city = (accountData.city);


  }

  irProfile(){
    this.router.navigate(['profile']);
  }

  irHqs(){
    this.router.navigate(['hqs']);
  }

  irHome(){
    this.router.navigate(['login']);
  }

}
