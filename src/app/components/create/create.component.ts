import { Component, OnInit } from '@angular/core';

import { GuitarServiceService } from 'src/app/guitar-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public guitarForm:FormGroup
  constructor(
    public guitarService: GuitarServiceService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.guitarForm = this.formBuilder.group({
      type: [''],
      brand: [''],
      model: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.guitarService.createGuitar(this.guitarForm.value);
    this.router.navigate(['']);
  }

}
