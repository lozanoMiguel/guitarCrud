import { Component, OnInit } from '@angular/core';

import { GuitarServiceService } from 'src/app/guitar-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm:FormGroup;
  guitarRef:any;

  constructor(
    public guitarService:GuitarServiceService,
    public formBuilder: FormBuilder,
    private activaRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.editForm = this.formBuilder.group({
      type: [''],
      brand: [''],
      model: ['']
    })
  }

  ngOnInit(): void {
    const id = this.activaRoute.snapshot.paramMap.get('id')
    this.guitarService.getGuitarById(id).subscribe(res => {
      this.guitarRef = res
      this.editForm = this.formBuilder.group({
        type: [this.guitarRef.type],
        brand: [this.guitarRef.brand],
        model: [this.guitarRef.model]
      })
    })
  }

  onSubmit(){
    const id = this.activaRoute.snapshot.paramMap.get('id');
    this.guitarService.updateGuitar(this.editForm.value, id);
    this.router.navigate(['']);
  }

}
