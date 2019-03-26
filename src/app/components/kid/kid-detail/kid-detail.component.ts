import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KidsService } from 'src/app/services/kids.service';
import { Kid } from 'src/app/models/Kid';

@Component({
  selector: 'app-kid-detail',
  templateUrl: './kid-detail.component.html',
  styleUrls: ['./kid-detail.component.css']
})
export class KidDetailComponent implements OnInit {

  kid: Kid;
  constructor(private _activatedRoute: ActivatedRoute, private _kidService: KidsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._kidService.getKid(routeData.get('id')).subscribe((singleKid: Kid) => {
        this.kid = singleKid;
      });
    });
  }

}
