import type { PageServerLoad } from './$types';

interface Locals {
	mongoClient: any;
}
import { redirect } from '@sveltejs/kit';

let client

export const load: PageServerLoad = async ({ parent, locals }) => {

	const { isAuthenticated } = await parent();
         if (!isAuthenticated) {
        throw redirect(302, '/');
    }

	const client = locals.mongoClient;
	try {
		await client?.db('sample_airbnb').command({ ping: 1 });
		console.log('Pinged my MongoDB database.  It worked!');
	} catch (error) {
		console.error('MongoDB connection error:', error);
		return {
			status: 500,
			message: 'MongoDB connection error'
		};
	}

	return {
		status: 200,
		message: 'MongoDB connection successful'
	};
};