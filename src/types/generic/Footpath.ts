export interface Footpath {
	id: number;
	name: string;
	description: string;
	checkpoints?: FootpathCheckpoint[];
	photos?: string[];
	status: FootpathStatus;
}

export enum FootpathStatus {
	InProgress,
	NotDone,
	Done,
}

export interface FootpathCheckpoint {
	location: Coordinate;
}

export interface Coordinate {
	latitude: number;
	longitude: number;
}
