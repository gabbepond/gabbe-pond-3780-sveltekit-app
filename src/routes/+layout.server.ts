import type { RequestEvent } from '@sveltejs/kit'
import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit'

export async function load({ request }: RequestEvent) {
    let isAuthenticated = false
    let userProfile = null

    isAuthenticated = await kindeAuthClient.isAuthenticated(request as unknown as SessionManager)

    if (isAuthenticated) {
        userProfile = await kindeAuthClient.getUserProfile(request as unknown as SessionManager)
    } else {
        userProfile = null
    }

    return {
        userProfile,
        isAuthenticated
    }
}