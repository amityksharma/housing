import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Properties: string[] = ['Duplex', 'Appartment', 'House']; 
  
  Properties2: Array<any>=[
    {
      "id":1,
      "Name":"Birla Apartments",
      "Type":"House",
      "Price":12000
    },

    {
      "id":2,
      "Name":"Erose Flat",
      "Type":"Duplex",
      "Price":5000
    },
    {
      "id":3,
      "Name":"Gun Hill",
      "Type":"House",
      "Price":12000
    },

    {
      "id":4,
      "Name":"Macro Home",
      "Type":"Duplex",
      "Price":5000,
      "image":""
    },
    {
      "id":5,
      "Name":"Saint Church Villa",
      "Type":"House",
      "Price":12000,
      "image":"house-1"
    },

    {
      "id":6,
      "Name":"Pearl White House",
      "Type":"Duplex",
      "Price":5000,
      "image":"house-1"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}