import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClinicVisit} from "../models/clinic.visit.model";

@Injectable()
export class VisitService {
	readonly url = 'https://localhost:5001/api/visit';

	constructor(private httpClient: HttpClient) {
	}

	addVisit(visit: ClinicVisit): Observable<any> {
		return this.httpClient.post<ClinicVisit>(this.url, visit);
	}
}


