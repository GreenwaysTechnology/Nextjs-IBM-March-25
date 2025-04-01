'use server'

export async function createUser(data) {
    console.log('Server actions', data)
    //invoke database api to persist data into db

    return {
        success: true,
        message: 'Data saved successfully'
    }
}