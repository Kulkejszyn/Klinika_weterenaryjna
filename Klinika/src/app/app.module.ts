import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClinicGridComponent} from "./clinic-grid/clinic-grid.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {ClinicDialogModalForm} from "./clinic-form/clinic-dialog-modal-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TextMaskModule} from "angular2-text-mask";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ClinicService} from "./services/clinic.service";
import {HttpClientModule} from "@angular/common/http";
import {VisitService} from "./services/visit.service";

@NgModule({
	declarations: [
		AppComponent,
		ClinicGridComponent,
		ClinicDialogModalForm,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatGridListModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCardModule,
		FlexLayoutModule,
		MatDialogModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatSelectModule,
		MatOptionModule,
		MatInputModule,
		MatCheckboxModule,
		MatOptionModule,
		TextMaskModule,
		MatIconModule,
		MatSnackBarModule,
		MatToolbarModule,
		HttpClientModule
	],
	providers: [ClinicService, VisitService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
