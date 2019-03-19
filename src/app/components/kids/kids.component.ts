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

  constructor(private _kidService: KidsService) { }
  columnNames = ['About', 'KidID', 'FName', 'LName', 'DOB', 'Age', 'Gender', 'buttons'];
  dataSource: MatTableDataSource<Kid>

  ngOnInit() {
    this._kidService.getKids().subscribe((kids: Kid[]) => {
      this.dataSource = new MatTableDataSource<Kid>(kids);
    });
  }

}
