import { ObjectId } from 'mongodb';
import type { PageServerLoad } from './$types';
import type { MovieType } from '$lib/types/MovieType';

async function validateImageUrl(url: string | null | undefined): Promise<string> {
	// Return default image if url is falsy
	if (!url) {
		return '/defaultMoviePoster.png'
	}

	try {
		const response = await fetch(url, { method: 'HEAD' })
		if (response.ok) {
			return url
		} else {
			return '/defaultMoviePoster.png'
		}
	} catch (error) {
		console.error('Error validating image URL:', error)
		return '/defaultMoviePoster.png'
	}
}

export const load: PageServerLoad = async ({ params, locals }) => {
    console.log('params: ', params)

    let client
    let movie: MovieType | undefined

    try {
        const client = locals.mongoClient
        const movieDb = client?.db('sample_mflix')
        const moviesCollection = movieDb?.collection('movies')
        const foundMovie = await moviesCollection?.findOne({ _id: new ObjectId(params._id) })
       // console.log('foundMovie: ', foundMovie)

        if (foundMovie) {
            const { _id, poster, ...movieData } = foundMovie
            movie = {
                id: _id.toString(),
                poster: await validateImageUrl(poster),
                ...movieData
            } as MovieType // Type assertion needed here because the MongoDB document may contain additional fields
        }
    } catch (error) {
        console.error('MongoDB connection error:', error)
        return {
            status: 500,
            message: 'MongoDB connection error'
        }
    }
    // return the POJO movie object
    return {
        status: 200,
        body: movie
    }

}

/* runtime: movie.runtime,
plot: movie.plot,
rated: movie.rated,
imdb: {
    rating: movie.imdb.rating
}, */