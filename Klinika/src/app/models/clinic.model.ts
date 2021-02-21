export class Clinic {
	constructor(public name: string,
				public address: string,
				public description: string,
				public rating: number,
				public visitTypes: string[],
				public id: string
	) {
	}
}
