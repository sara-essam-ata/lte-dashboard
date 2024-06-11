import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewProjectComponent } from './add-edit-view-project.component';

describe('AddEditViewProjectComponent', () => {
  let component: AddEditViewProjectComponent;
  let fixture: ComponentFixture<AddEditViewProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditViewProjectComponent]
    });
    fixture = TestBed.createComponent(AddEditViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
