import Button from 'components/button'
import Header from 'components/header'
import Layout from 'components/ui/layout'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function Logout() {
  return (
    <Layout>
        <Header title="Are you sure you want to logout?" />
        <div className="flex space-x-1.5">
          <Button onClick={() => signOut({ callbackUrl: "/" })} clickable>Yes, log me out.</Button>
          <Button href="/" link>No, take me home.</Button>
        </div>
    </Layout>
  )
}
