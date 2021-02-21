import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Clinic} from "../models/clinic.model";
import {ClinicVisit} from "../models/clinic.visit.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VisitService} from "../services/visit.service";

@Component({
	selector: 'app-clinic-modal-form',
	templateUrl: './clinic-dialog-modal-form.component.html',
	styleUrls: ['./clinic-dialog-modal-form.component.scss']
})
export class ClinicDialogModalForm {

	public readonly phoneMask = ['+', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/]
	public clinicVisit: ClinicVisit;
	public areTermsAccepted: boolean = false;
	public submitted: boolean = false;
	public visitForm: FormGroup;

	constructor(private dialogRef: MatDialogRef<ClinicDialogModalForm>,
				@Inject(MAT_DIALOG_DATA) public clinic: Clinic,
				private visitService: VisitService
	) {
		this.clinicVisit = new ClinicVisit("", "", "", "", "", clinic.id)

		this.visitForm = new FormGroup({
				visitType: new FormControl('', [Validators.required]),
				name: new FormControl('', [Validators.required]),
				surname: new FormControl('', [Validators.required]),
				animal: new FormControl('', [Validators.required]),
				email: new FormControl('', [Validators.email, Validators.required]),
				number: new FormControl('', [Validators.minLength(15), Validators.maxLength(15)]),
				acceptTerms: new FormControl('', [Validators.requiredTrue])
			}
		)
	}

	public submit(): void {
		console.log(JSON.stringify(this.clinicVisit))
		if (this.visitForm.valid) {
			this.visitService.addVisit(this.clinicVisit).subscribe(value =>
				console.log(value + " <- RESULT :D:D:D:D:")
			);

			this.dialogRef.close(true);
			this.submitted = true;
		}
	}

	public close(): void {
		this.dialogRef.close(false)
	}
}
