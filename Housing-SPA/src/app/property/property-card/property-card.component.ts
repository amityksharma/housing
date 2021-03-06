import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from './../../model/property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input () property: Property;
  @Input () sourceControl: string;
  constructor(private router: Router, public housingService: HousingService) { }

  ngOnInit() {
  }

  onViewDetailClick(property) {
    this.router.navigate(['/property-detail/' +property.Id]);
    console.log(property);
  }

}
