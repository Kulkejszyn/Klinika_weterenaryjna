import {Component, OnInit} from '@angular/core';
import {Clinic} from "../models/clinic.model";
import {MatDialog} from "@angular/material/dialog";
import {ClinicDialogModalForm} from "../clinic-form/clinic-dialog-modal-form.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ClinicService} from "../services/clinic.service";

@Component({
	selector: 'app-clinic-grid',
	templateUrl: './clinic-grid.component.html',
	styleUrls: ['./clinic-grid.component.scss']
})
export class ClinicGridComponent implements OnInit {
	public clinics: Clinic[] = [];

	constructor(private clinicsService: ClinicService,
				private dialog: MatDialog,
				private snackBar: MatSnackBar
	) {
	}

	ngOnInit(): void {
		this.clinicsService.getClinics().subscribe(data => this.clinics = data);
	}

	openDialogForm(clinic: Clinic): void {
		console.log(clinic.id + " form opened");
		const dialogRef = this.dialog.open(ClinicDialogModalForm, {
			disableClose: true,
			data: clinic
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result)
			if (result) {
				this.openSnackBar()
			}
		})

	}

	openSnackBar() {
		this.snackBar.open('Wysłano zgłoszenie', 'Zamknij', {
			duration: 3000,
			horizontalPosition: 'right',
			verticalPosition: 'bottom',
		});
	}
}

