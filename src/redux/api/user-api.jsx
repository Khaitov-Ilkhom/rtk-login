import {api} from './Index.jsx';

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    singIn: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body
      })
    })
  })
})

export const {useSingInMutation} = userApi