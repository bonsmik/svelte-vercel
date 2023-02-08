import type { PageServerLoad, Actions } from './$types'


export const load: PageServerLoad = async () => {
   await new Promise(r => setTimeout(r, 1000));
   console.log("Loading on server side")
  return { random: Math.random()}
}

export const actions: Actions = {
  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData())
    console.log("Handling default action. Data:"  + formData.test)
    return {response: `You sent: ${formData.test}.`}
  } 
}