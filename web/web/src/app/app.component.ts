import { Component } from '@angular/core';
import { PhoneService } from './service/phone.service';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from './comp/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private phoneService: PhoneService,public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(SearchComponent);
  }
}
