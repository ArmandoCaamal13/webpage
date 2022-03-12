import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

  //lensdetails

  lensDetails = [
    {
      id:1,
      lensName: "Lentes oscuros",
      lensDetails: "Son para el sol",
      lensPrice:150,
      lensImg: "https://media.istockphoto.com/photos/glasses-picture-id1305856000"
    },
    {
      id:2,
      lensName: "Lentes de aumento ",
      lensDetails: "Son para ver mejor de lejos",
      lensPrice:350,
      lensImg: "https://st2.depositphotos.com/1783672/7524/i/450/depositphotos_75249687-stock-photo-eyeglasses-on-white-background.jpg"
    }
  ]
}
