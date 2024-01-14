import { Component, Input } from '@angular/core';
import { Product } from '../myInterfaces/products';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() productListComp! : Product[];

  // selectedProduct : string = "iPhone 9";
  selectedId : number = 1;
  outProduct : string= "";
  outTableArea! : string;
  outCategory! : string;

  createProduct()
  {

    console.log(this.selectedId);
    for(let product of this.productListComp)
    {
      if(product.id === this.selectedId)
      {
        this.outProduct = `
          <h2>${product.title}</h2><hr> 
          <p><strong>Description:</strong> ${product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Discount:</strong> ${product.discountPercentage}</p>
          <p><strong>Rating Date:</strong> ${product.rating}</p>
          <img src='${product.images[0]}'>
        `;
      }
    } 
  }

  createTable(category : string)
  {
    this.outTableArea = `<h3>Product list for category ${category}</h3>`;
    this.outTableArea += `
    <table>
      <tr>
        <th> Title </th>
        <th> Description </th>
        <th> Price </th>
        <th> Stock </th>
      </tr>
    `;

    for(let cat of this.productListComp){
      if(cat.category === category){
        this.outTableArea += `
          <tr>
            <td> ${cat.title} </td>
            <td> ${cat.description} </td>
            <td> ${cat.price} </td>
            <td> ${cat.stock} </td>
          </tr>`
      }
    }
    this.outTableArea += `</table>`;
  }
}
