export class ClinicVisit {
	constructor(
		public visitType: string,
		public name: string,
		public surname: string,
		public animal: string,
		public email: string,
		public clinicId: string,
		public number?: string
	) {
	}
}

