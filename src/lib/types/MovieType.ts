import type { ObjectId } from 'mongodb';

export interface MovieType {
	_id: ObjectId;
	id: string;
	plot: string;
	genres: string[];
	runtime: number;
	rated: string;
	title: string;
	num_mflix_comments: number;
	poster: string;
	countries: string[];
	fullplot: string;
	languages: string[];
	released: Date;
	directors: string[];
	writers: string[];
	awards: {
		wins: number;
		nominations: number;
		text: string;
	};
	lastupdated: string;
	year: number;
	imdb: {
		rating: number;
		votes: number;
		id: number;
	};
	type: string;
	tomatoes: {
		viewer: {
			rating: number;
			numReviews: number;
			meter: number;
		};
		dvd: Date;
		critic: {
			rating: number;
			numReviews: number;
			meter: number;
		};
		boxOffice: string;
		consensus: string;
		rotten: number;
		production: string;
		lastUpdated: Date;
		fresh: number;
	};
}