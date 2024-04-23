import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { error: '正しいユーザーネームもしくはパスワードが入力されませんでした。' },
    {
      status: 401,
      headers: { 'WWW-Authenticate': "Basic realm='secure_area'" },
    },
  )
}
