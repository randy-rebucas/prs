import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PatientRecordListComponent } from './patient-record-list/patient-record-list.component';
import { PatientRecordFormComponent } from './patient-record-form/patient-record-form.component';
import { PatientRecordDetailComponent } from './patient-record-detail/patient-record-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';
import { PatientRecordsComponent } from './patient-records.component';
import { TranslateModule } from '@ngx-translate/core';
import { CanDeactivateGuard } from 'src/app/shared/guards/can-deactivate.guard';

@NgModule({
  declarations: [
    PatientRecordsComponent,
    PatientRecordListComponent,
    PatientRecordDetailComponent,
    PatientRecordFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    MatStepperModule,
    AngularMaterialModule,
    SharedModule,
    EditorModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', component: PatientRecordsComponent, children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: PatientRecordListComponent },
        { path: 'form', component: PatientRecordFormComponent, canDeactivate: [CanDeactivateGuard] },
        { path: ':recordId', component: PatientRecordDetailComponent },
      ] },
    ])
  ]
})
export class PatientRecordsModule { }