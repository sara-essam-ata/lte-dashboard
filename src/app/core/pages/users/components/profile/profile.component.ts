import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Users } from '../../model/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userId:number=0;
  userData:Users|undefined;
  comments:Users[]|undefined|any;
  photos:any;
  constructor(private ActivatedRoute:ActivatedRoute,
    private UsersService:UsersService
  ){
    this.userId=ActivatedRoute.snapshot.params['id']
  }
  ngOnInit(): void {
    this.getUserById()
    this.getComments()
    this.getPhotos()
  }
  getUserById(){
    this.UsersService.onGetUserById(this.userId).subscribe({
      next:(res)=>{
        this.userData=res
      }
    })
  }
  getComments(){
    this.UsersService.onGetAllComments().subscribe({
      next:(res)=>{
        this.comments=res        
      }
    })
  }
  getPhotos(){
    this.UsersService.onGetPhotos().subscribe({
      next:(res)=>{
        this.photos=res
      }
    })
  }

}
