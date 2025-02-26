// src/hooks.server.ts
import { sessionHooks, type Handler } from '@kinde-oss/kinde-auth-sveltekit'
import { initMongoDB } from '$lib/mongodb/mongodb.client'
 
export const handle: Handler = async ({ event, resolve }) => {
    // Attach the connected client to locals so routes can reuse it.
    if (!event.locals.mongoClient) {
        try {
          event.locals.mongoClient = await initMongoDB();
          console.log('MongoDB client attached to locals');
        } catch (e) {
          console.error('MongoDB failed to start', e);
        }
      }
 
    sessionHooks({ event })
    const response = await resolve(event)
    return response
}
 