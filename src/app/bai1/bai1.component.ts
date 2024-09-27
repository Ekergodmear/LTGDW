import { Products } from './../../../../Lab4/src/app/products';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bai1.component.html',
  styleUrl: './bai1.component.css'
})
export class Bai1Component implements OnInit {
  changeImage(item: any) {
    this.imgs = item
  }
  title(){
    return this.products[this.selectedVariant].name
  }
  starRating(){

    return new Array(this.products[this.selectedVariant].rating)
  }
  price(){
    return this.products[this.selectedVariant].price
  }
  inSale(){
    return this.products[this.selectedVariant].sale
  }
  priceOnSale(){
    if(this.products[this.selectedVariant].sale==false){
      return this.products[this.selectedVariant].price*0.8
    }
    return this.products[this.selectedVariant].price
  }

  inStock(){
    return this.products[this.selectedVariant].stock
  }

  addCart(selectedItem: number,quantity: number){
    const product = this.products[selectedItem];
    const itemCart = this.CartItems.find(item => item.id == product.id)
    if (itemCart) {
      itemCart.quantity += quantity;
    } else {
      this.CartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        img: product.img
      });
    }
    if(product){
      product.stock -= quantity
    }
  }

  totalItems(){
    let sum = 0
    this.CartItems.forEach(item => {
      sum += item.quantity
    })
    return sum
  }

  Total(){
    let sum = 0
    this.CartItems.forEach(item => {
      sum += item.price*item.quantity
    })
    return sum
  }

  Remove(index: number){
    const  itemCart= this.CartItems[index]
    const product = this.products.find(item => item.id == itemCart.id)
    
    if(itemCart){
      itemCart.quantity --
      product.stock ++
    }
    if(this.CartItems[index].quantity == 0){
      this.CartItems.splice(index, 1)
    }
  }

  DeleteAll(){
    for(let i = 0; i < this.CartItems.length; i++){
      const product = this.CartItems.find(item => item.id == this.CartItems[i].id)
      product.stock += this.CartItems[i].quantity
    }
    this.CartItems = []
  }


  products: any[] =
    [{
      id: 1, img: 'macbook_M1.jpg',
      imgV: ['macbook_M1_1.jpg', 'macbook_M1_2.jpg', 'macbook_M1_3.jpg',
        'macbook_M1_4.jpg'],
      name: 'Apple MacBook Air M1 256GB 2020 I I Chính hãng Apple Việt Nam ',
      price: 26500, rating: 3, stock: 5, color: 'Đen', sale: true
    }, {
      id: 2,
      img: 'macbook-pro-14.webp',
      imgV: ['macbook-pro-14_1.webp', 'macbook-pro-14_2.webp', 'macbook-pro-14_3.webp',
        'macbook-pro-14_4.webp'],
      name: 'MacBook Pro 14 inch M3 Pro 11 CPU / 14 GPU / 18GB RAM / 512GB –Chính hãng VN',
      price: 29500, rating: 4, stock: 3, color: 'Xanh', sale: false
    },
    {
      id: 3, img: 'lenovo-thinkpad-x1.jpg',
      imgV: ['lenovo-laptop_1.jpg', 'lenovo-laptop_2.jpg', 'lenovo-laptop_3.jpg',
        'lenovo-laptop_4.jpg'],
      name: 'Lenovo ThinkPad X1 Carbon Gen 10 – Core i7-1260P / RAM 16G / SSD1TB / FHD  ',
      price: 30500, rating: 5, stock: 0, color: 'đen', sale: true
    }]

    product_img: any
    selectedVariant: number = 0
    CartItems: any[] = []
    imgs: string = ''
    ngOnInit(): void {
      this.imgs = this.products[this.selectedVariant].img
      this.product_img = this.products[this.selectedVariant].imgV
    }
}
