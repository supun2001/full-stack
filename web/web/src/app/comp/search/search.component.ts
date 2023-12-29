import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private phoneService: PhoneService, private dialog: MatDialog, private dialogRef: MatDialogRef<SearchComponent>) {}

  onSearch() {
    // Make a request to your backend API for searching phones
    this.phoneService.SearchPhones(this.searchQuery).subscribe(
      (data: any[]) => {
        this.searchResults = data;
        console.log(this.searchResults);
      },
      (error) => {
        console.error(error);
        // Handle error as needed
      }
    );
  }

  onSearchResultClick(result: any) {
    // Your logic for handling the click event

    // Close the dialog after handling the click event
    this.dialogRef.close();
  }
}
