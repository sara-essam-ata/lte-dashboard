import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../service/projects.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from '../../model/projects';

@Component({
  selector: 'app-add-edit-view-project',
  templateUrl: './add-edit-view-project.component.html',
  styleUrls: ['./add-edit-view-project.component.scss'],
})
export class AddEditViewProjectComponent implements OnInit {

  projectForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required]),
  });
  projectId: number = 0;
  projectData: Projects|undefined|any;
  AddMode: boolean = true;
  EditMode: boolean = true;
  ViewMode: boolean = true;

  constructor(
    private ProjectsService: ProjectsService,
    private toastr: ToastrService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.projectId = this.ActivatedRoute.snapshot.params['id'];
    if (this.projectId) {
      this.AddMode = false;        // view or edit
      this.getProjectById();
      ActivatedRoute.url.subscribe((url) => {
        this.ViewMode = url.some((segment) => segment.path === 'view');
        this.disableFormControls();  // view
      });
      this.ActivatedRoute.url.subscribe((url) => {
        this.EditMode = url.some((segment) => segment.path === 'edit');
        this.enableFormControls();    //edit
      });
    } else {
      this.AddMode = true;      //just add
      this.EditMode = false;
      this.ViewMode = false;
    }
  }
  ngOnInit(): void {}
  // Disable Formm
  disableFormControls() {
    if (this.ViewMode) {
      this.projectForm.disable();
    }
  }
  // Enable Form
  enableFormControls() {
    if (this.EditMode) {
      this.projectForm.enable();
    }
  }

  onSubmit(data: FormGroup) {
    if (!this.projectId) {            // add project when no id
      this.ProjectsService.onAddProject(data.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          this.toastr.error(err.error);
        },
        complete: () => {
          this.toastr.success('Project Created Successfully');
          this.router.navigate(['/dashboard/projects']);
        },
      });
    } else {                         // edit project with id
      this.ProjectsService.onEditProject(data.value, this.projectId).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          this.toastr.error(err.error);
        },
        complete: () => {
          this.toastr.success('Project Updated Successfully');
          this.router.navigate(['/dashboard/projects']);
        },
      });
    }
  }

  //get selected project by id
  getProjectById() {
    this.ProjectsService.onGetProjectById(this.projectId).subscribe({
      next: (res) => {
        this.projectData = res;
      },
      complete: () => {
        this.projectForm.patchValue({
          title: this.projectData?.title,
          body: this.projectData?.body,
        });
      },
    });
  }
}
