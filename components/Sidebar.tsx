import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = ({user}:SiderbarProps) => {
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link 
                href="/"
                className="mb-12 cursor-pointer items-center gap-2"   
            >
                <Image 
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="Bank Logo"
                    className="size-[24px] xl:size-14"
                />
                <h1 className='sidebar-logo'>
                    Muslim Marketplace
                </h1>
            </Link>
            {sidebarLinks.map((link, index) => (
                return (
                <Link
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2"
                >
                    )
                    )
            }
        </nav> 
    </section>
  )
}

export default Sidebar