import { Component } from '@angular/core';
import { Student } from './myClasses/student';
import productsJSON from '../assets/data/productsJSON.json';
import { Product } from './myInterfaces/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalMartmanu';

  studentBio : Student = {
    studentNumber : 1234,
    fullName : "Manuel Martinez",
    username : "martmanu"
  }

  productsList : Product[] = productsJSON.products;
}
