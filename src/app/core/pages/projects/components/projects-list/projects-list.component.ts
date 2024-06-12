import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../service/projects.service';
import { PageEvent } from '@angular/material/paginator';
import { DeleteDialogComponent } from 'src/app/core/shared/components/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Projects } from '../../model/projects';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  userId: number = 1;
  projectsList: Projects[]|undefined|null;
  allProjects: Projects[]|undefined;

  constructor(
    private ProjectsService: ProjectsService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProjects();
    this.getAllProjects();
  }

  // get paginationed projects 
  getProjects() {
    let parms = {
      userId: this.userId,
    };
    this.ProjectsService.onGetProjects(parms).subscribe({
      next: (res) => {
        console.log(res);
        this.projectsList = res;
      },
    });
  }
  //all projects
  getAllProjects() {
    this.ProjectsService.onGetAllProjects().subscribe({
      next: (res) => {
        this.allProjects = res;
      },
    });
  }

  //delete project
  openDeleteDialog(projectData: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: projectData,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDeleteRooms(result.id);
      }
    });
  }
  onDeleteRooms(id: number) {
    this.ProjectsService.onDeleteProject(id).subscribe({
      next: (res) => {},
      error: (err) => {
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.toastr.success('Project Deleted Successfully', 'Ok');
        this.getProjects();
      },
    });
  }
  // handle pagination
  handlePageEvent(e: PageEvent) {
    this.userId = e.pageIndex + 1;
    this.getProjects();
  }
}
