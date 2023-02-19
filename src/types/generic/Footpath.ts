interface Footpath {
	id: number,
	name: string,
	description: string,
	checkpoints?: FootpathCheckpoint[]
	photos?: string[]
}


interface FootpathCheckpoint {
	location: Coordinate
}

interface Coordinate {
	latitude: number,
	longitude: number
}