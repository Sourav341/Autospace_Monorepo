/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useQuery } from '@apollo/client'
import {
  CompaniesDocument,
  SearchGaragesDocument,
} from '@autospace/network/src/gql/generated'

export default function Home() {
  const { data, loading, error } = useQuery(CompaniesDocument)

  const { data: garages } = useQuery(SearchGaragesDocument, {
    variables: {
      dateFilter: { end: '2025-01-27', start: '2025-01-21' },
      locationFilter: {
        ne_lat: 1,
        ne_lng: 1,
        sw_lat: -1,
        sw_lng: -1,
      },
    },
  })

  return (
    <main className=" p-8">
      <div>
        {data?.companies.map((company) => (
          <div className="p-4 bg-gray-100 rounded" key={company.id}>
            <div>{company.description}</div>
            <div>{company.description}</div>
            <div>{company.description}</div>
          </div>
        ))}
      </div>

      <div>
        {garages?.searchGarages.map((garage) => (
          <pre key={garage.id}>{JSON.stringify(garage, null, 2)}</pre>
        ))}
      </div>
    </main>
  )
}
