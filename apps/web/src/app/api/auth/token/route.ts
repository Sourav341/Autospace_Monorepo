/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(_req: NextRequest) {
  const getCookies = cookies()
  const nextAuthSession =
    (await getCookies).get('next-auth.session-token')?.value || ''
  return NextResponse.json(nextAuthSession)
}
