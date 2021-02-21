import {Injectable} from "@angular/core";
import {Clinic} from "../models/clinic.model";

@Injectable()
export class MockClinicService{
	getClinics() {
		let clinics: Clinic[] = []
		for (let i = 0; i < 7; i++) {
			let clinic = new Clinic("Klinika " + String(i + 1),
				"Wawrzynskiego 30a",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				7,
				['Szczepienie', 'Leczenie', 'Konsultacja'],
				String(i + 1));
			clinics.push(clinic)
		}
		return clinics;
	}
}
