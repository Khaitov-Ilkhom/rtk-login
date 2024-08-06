import {api} from './Index.jsx';

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    productData: build.query({
      query: () => ({
        url: '/product/all',
      })
    }),
  })
})

export const {useProductDataQuery} = productApi