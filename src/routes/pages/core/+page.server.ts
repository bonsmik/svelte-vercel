import type { PageServerLoad, Actions } from './$types'


export const load = (async () => {
   await new Promise(r => setTimeout(r, 1000));
   console.log("Loading on server side")
  return { rand: Math.random()}
}) satisfies PageServerLoad

export const actions = {
  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData())
    console.log("Handling default action. Data:"  + formData.test)
    return {response: `You sent: ${formData.test}.`}
  } 
} satisfies Actions