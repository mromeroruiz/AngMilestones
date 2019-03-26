import { Component, OnInit } from '@angular/core';
import { KidsService } from '../../services/kids.service';
import { Kid } from '../../models/Kid';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  kid: {};
  dataSource: MatTableDataSource<Kid>;

  constructor(private _kidService: KidsService) { }
  // columnNames = ['About', 'KidID', 'FName', 'LName', 'DOB', 'Age', 'Gender', 'buttons'];
  // dataSource: MatTableDataSource<Kid>

  ngOnInit() {
    this._kidService.getKids().subscribe(_kidService => {
      this.kid = _kidService;
       this.dataSource = new MatTableDataSource<Kid>();
    });
  }

}
