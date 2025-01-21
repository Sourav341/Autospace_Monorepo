/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'

export default function Home() {
  const { data, loading, error } = useQuery(CompaniesDocument)

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
    </main>
  )
}
