import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isOpen: boolean = true;
  constructor(private HttpClient: HttpClient) {}

  onGetAllPosts(): Observable<any> {
    return this.HttpClient.get('posts');
  }
  onGetAllComments(): Observable<any> {
    return this.HttpClient.get('comments');
  }
  onGetAllAlbums(): Observable<any> {
    return this.HttpClient.get('albums');
  }
  onGetAllUsers(): Observable<any> {
    return this.HttpClient.get('users');
  }

  onClicked() {
    this.isOpen = !this.isOpen;
    // this.isOpenedValue.emit(this.isOpen);
    console.log(this.isOpen);
  }
}
