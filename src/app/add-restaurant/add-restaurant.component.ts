import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit{
  constructor(private fb: FormBuilder) {
    
  }
  restaurantForm!: FormGroup
  // intializing the array
  
  ngOnInit(): void {
    this.restaurantForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', Validators.required],
      phoneNumber: this.fb.array([
      this.fb.control('')]),
      website: ['', [Validators.pattern(/(https?:\/\/[^\s]+)/)]],
      openingHours: this.fb.group({
        openingTime: ['', Validators.required],
        closingTime: ['', Validators.required]
      })
    });
  
     console.log(this.restaurantForm)
  }
  
  onSubmit(): void {
    if (this.restaurantForm.valid) {
      console.log(this.restaurantForm.value);
      // Handle form submission, e.g., send data to a server
    } else {
      console.log('Form is invalid');
    }
  }
  
  get  phoneNumber(){
    return this.restaurantForm.get('phoneNumber') as FormArray
    console.log(this.restaurantForm.get('phoneNumber'))
  }
  
  addMore(){
  this.phoneNumber.push(this.fb.control(''))
  
  }
  
  removeField(index: number): void {
    this.phoneNumber.removeAt(index);
  }
  
  add(){
  }

  
}
