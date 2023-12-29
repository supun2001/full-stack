import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/app/model/phone';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit{
  public qty:number=1;
    phone:Phone;

  constructor(private phoneService:PhoneService,private router:Router,private route:ActivatedRoute){
    this.phone= new Phone();
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'] as string;
      if (id !== undefined) {
          this.phoneService.GetPhone(id).subscribe(res => {
          this.phone = res;
        });
      }
    });
  }

  counter(action: string) {
    if (action === 'add') {
      this.qty++;
    } else if (action === 'sub' && this.qty > 1) {
      this.qty--;
    }
  }

  netPrice():number{
    return this.qty*(+this.phone?.p_price || 0);
  }

  buy() {
  const currentQuantity = +this.phone?.p_qunittiy || 0;
  const newQuantity = currentQuantity - this.qty;

  console.log(currentQuantity)

  // Ensure the user doesn't buy more phones than available
  if (newQuantity < 0) {
    alert('Insufficient stock!');
    return;
  }

  if (this.phone._id) {
    this.phoneService.UpdatePhoneQuantity(this.phone._id, newQuantity).subscribe(
      response => {
        console.log('Quantity updated successfully:', response);
        alert('Purchase successful!');
        // Assuming you want to navigate to a confirmation page after the purchase
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error updating quantity:', error);
        // Handle the error, for example, display an error message to the user
        alert('Error updating quantity. Please try again.');
      }
    );
  } else {
    console.error('Phone ID is undefined. Unable to update quantity.');
    // Handle the case where the phone ID is undefined (log an error, display a message, etc.)
  }
}


}
