import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/service/shared.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: number = 0;
  comments: number = 0;
  albums: number = 0;
  users: number = 0;
  chart: any = [];
  selected: Date | null | undefined;
  constructor(private SharedService: SharedService) {}
  ngOnInit() {
    this.getAllPosts();
    this.getAllComments();
    this.getAllAlbums();
    this.getAllUsers();
    // this.createChart()
  }
  getAllPosts() {
    this.SharedService.onGetAllPosts().subscribe({
      next: (res) => {
        this.posts = res.length;
      },
    });
  }
  getAllComments() {
    this.SharedService.onGetAllComments().subscribe({
      next: (res) => {
        this.comments = res.length;
      },
    });
  }
  getAllAlbums() {
    this.SharedService.onGetAllAlbums().subscribe({
      next: (res) => {
        this.albums = res.length;
      },
    });
  }
  getAllUsers() {
    this.SharedService.onGetAllUsers().subscribe({
      next: (res) => {
        this.users = res.length;
      },
      complete: () => {
        this.createChart();
      },
    });
  }
  createChart() {
    Chart.register(...registerables);
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['posts', 'Comments', 'Albums', 'Users'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [this.posts, this.comments, this.albums, this.users],
            backgroundColor: [
              'rgb(40,167,69)',
              'rgb(253,126,20)',
              'rgb(100,65,23)',
              'rgb(0,123,255)',
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  }
}
