import { Component, OnInit } from '@angular/core';
import { KidsService } from 'src/app/services/kids.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Kid } from 'src/app/models/Kid';

@Component({
  selector: 'app-kid-delete',
  templateUrl: './kid-delete.component.html',
  styleUrls: ['./kid-delete.component.css']
})
export class KidDeleteComponent implements OnInit {

  kid: Kid;
  constructor(private _kidService: KidsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._kidService.getKid(p.get('id')).subscribe((singleKid: Kid) => {
        this.kid = singleKid;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._kidService.deleteKid(this.kid.KidID).subscribe(() => {
      this._router.navigate(['/kids'])
    })
  }

}
