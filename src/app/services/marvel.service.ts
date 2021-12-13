import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  public marvelUrl = environment.marvelUrl;

  constructor(private HttpClient: HttpClient) { }

  chamadaQuadrinhosMarvel() {

    const timestamp = new Date().getTime().toString();

    const publicKey = "d60ae4911b2adf631007ab83a594353b";

    const privateKey = "f05a324c0cafdd3af7afbc8d5b8cb1813f080717";

    const md5 = new Md5();

    const hash = md5.appendStr(timestamp + privateKey + publicKey).end();

    return this.HttpClient.get<any>(`${this.marvelUrl}/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),


  })


}

  // public getIdMarvel(id: string): Observable <any>{

  //   const timestamp = new Date().getTime().toString();

  //   const publicKey = "d60ae4911b2adf631007ab83a594353b";

  //   const privateKey = "f05a324c0cafdd3af7afbc8d5b8cb1813f080717";

  //   const md5 = new Md5();

  //   const hash = md5.appendStr(timestamp + privateKey + publicKey).end();

  //     return this.HttpClient.get<any>(`${this.marvelUrl}/v1/public/comics/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`, {
  //       headers: new HttpHeaders({
  //       }),
  // }


  //     )}


    }
