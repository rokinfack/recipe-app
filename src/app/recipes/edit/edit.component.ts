import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!:number;

  isEditMode = false;

  constructor(private routerActive: ActivatedRoute ){}

  ngOnInit(): void {
    this.routerActive.params.subscribe(
      (params:Params) => {
        this.id = + params['id'];

        
      }
    )

  }

}
