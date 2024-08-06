import {api} from './Index.jsx';

const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    profileData: build.query({
      query: () => ({
        url: '/auth/profile',
      })
    }),
  })
})

export const {useProfileDataQuery} = profileApi