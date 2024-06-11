import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // @Output() isOpenedValue = new EventEmitter<boolean>();
  
  constructor(private _SharedService:SharedService) {}
  isOpen:boolean= true
  // onClicked() {
  //   this.isOpen = !this.isOpen;
  //   // this.isOpenedValue.emit(this.isOpen);
  //   this._SharedService.isOpen=this.isOpen
  //   console.log(this.isOpen)
  //   console.log(this._SharedService.isOpen);
    
  // }
  click(){
    this._SharedService.onClicked()
    this.isOpen=this._SharedService.isOpen
  }
}
