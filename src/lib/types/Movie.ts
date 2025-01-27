export interface Movie {
    id: string;
    title: string;
    year: number;
    runtime: number;
    plot: string;
    rated: string;
    imdb: {
        rating: number;
    }
}