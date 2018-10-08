import { Component, OnInit } from '@angular/core';
import { ItemService } from "../service/item.service";
import { Item } from "../modules/item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemservice: ItemService ) { }

  ngOnInit() {
    this.itemservice.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    })
    console.log('ngOn');
  }

  deleteItem(event, item: Item) {
    this.itemservice.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemservice.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }
  
}
