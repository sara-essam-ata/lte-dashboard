import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private HttpClient:HttpClient) { }
onGetAllUsers():Observable<Users>{
  return this.HttpClient.get<Users>('users')
}
onGetUserById(id:number):Observable<Users>{
  return this.HttpClient.get<Users>(`users/${id}`)
}
onGetAllComments():Observable<Users>{
  return this.HttpClient.get<Users>('comments')
}
onGetPhotos():Observable<any>{
  return this.HttpClient.get('photos')
}

}
