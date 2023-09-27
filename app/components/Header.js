import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <div><Link href="/">Blogs App</Link></div>
      <div><Link href="/login">Login/Register</Link></div>
    </div>
  )
}
