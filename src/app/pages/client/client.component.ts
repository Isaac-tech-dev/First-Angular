import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Dele OG', weight: 9085673457, symbol: 'delesoft@ogmail.com'},
//   {position: 2, name: 'Helium', weight: 40026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 90122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 120107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 140067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 159994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 189984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 201797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  displayedColumns: string[] = ['S/N', 'Name', 'Phone No', 'Address'];
  dataSource! : Clients;
  selected = 'option2';


  constructor (private clientservice : ClientService){ 
  }
  ngOnInit(): void {
      this.onGetClient()
  }
  onGetClient(){
    this.clientservice.getClient().subscribe(
      (data) => {
        console.log(data)
        this.dataSource = data
      },
      (error) => {
        console.log(error)
      }
    ),
    () => {
      'Complete'
    }
  }
}
