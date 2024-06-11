import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private HttpClient: HttpClient) {}
  onGetProjects(userId: any): Observable<any> {
    return this.HttpClient.get('todos', { params: userId });
  }
  onGetAllProjects(): Observable<any> {
    return this.HttpClient.get('todos');
  }
  onGetProjectById(id: number): Observable<Projects> {
    return this.HttpClient.get<Projects>(`posts/${id}`);
  }
  onAddProject(data: Projects): Observable<Projects> {
    return this.HttpClient.post<Projects>('posts', data);
  }
  onEditProject(data: Projects, id: number): Observable<Projects> {
    return this.HttpClient.put<Projects>(`posts/${id}`, data);
  }
  onDeleteProject(id: number): Observable<Projects> {
    return this.HttpClient.delete<Projects>(`posts/${id}`);
  }
}
