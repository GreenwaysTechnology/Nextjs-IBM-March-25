'use server'

import { redirect } from "next/navigation"

export async function createUser(data) {
    console.log('Server actions', data)
    //invoke database api to persist data into db
    console.log('name',data.get("name"))
    console.log('email',data.get('email'))

    //redirect to some other page
    //redirect('/success')
    //transfering data to success page via query string
    redirect(`/success?name=${encodeURIComponent(data.get("name"))}&email=${encodeURIComponent(data.get("email"))}`);

    // return {
    //     success: true,
    //     message: 'Data saved successfully'
    // }
}