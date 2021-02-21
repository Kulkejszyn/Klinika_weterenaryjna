import {Injectable} from "@angular/core";
import {Clinic} from "../models/clinic.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ClinicService {
	readonly url = 'https://localhost:5001/api/clinic';

	constructor(private httpClient: HttpClient) {
	}

	getClinics(): Observable<Clinic[]> {
		return this.httpClient.get<Clinic[]>(this.url);
	}
}


