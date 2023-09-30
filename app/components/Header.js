import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <div className='logo'><Link href="/"><span className='logo-p1'>blogs</span><span className='logo-p2'>app</span></Link></div>
      <div className='nav-options'><Link href="/login">login</Link></div>
      {/* <div className='nav-options'><Link href="/profile">John Doe</Link></div> */}
    </div>
  )
}
