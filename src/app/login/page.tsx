'use client'

import { hasLogin } from "@/actions/auth/has-login"
import { signIn } from "@/actions/auth/sign-in"
import { Button } from "@/components/ui/button"

export default function Page() {
  const handleSignIn = async () => {
    await signIn()
  }

  const handleHasLogin = async () => {
    await hasLogin()
  }

  return (
    <div>
      <Button onClick={() => handleSignIn()}>Login</Button>
      <Button onClick={() => handleHasLogin()}>Has Login</Button>
    </div>
  )
}
