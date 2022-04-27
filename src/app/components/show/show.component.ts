import { Component, OnInit } from '@angular/core';
import { GuitarServiceService } from 'src/app/guitar-service.service';

import { Guitars } from 'src/app/guitars.model';




@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  guitars:Guitars [] = [];
  constructor(private guitarService:GuitarServiceService) { }

  ngOnInit(): void {
    this.guitarService.getGuitars().subscribe((res)=>{
      this.guitars = res.map((e) =>{
        return{
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Guitars)
        };
      });
    });
  }

  deleteRecord = (guitar) => {
    this.guitarService.deleteGuitar(guitar)
  }

}
