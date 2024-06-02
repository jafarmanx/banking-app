'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../lib/utils';
import { usePathname } from 'next/navigation';


const sidebarLinks = [
    {
      imageUrl: "/icons/home.svg",
      label: "Home",
      route: "/"
    },
    {
      imageUrl: "/icons/bank.svg",
      label: "My Banks",
      route: "/my-banks"
    },
    {
      imageUrl: "/icons/transaction.svg",
      label: "Transaction History",
      route: "/transaction-history"
    },
    {
      imageUrl: "/icons/transfers.svg",
      label: "Transfer funds",
      route: "/transfer-funds"
    },
  ]




const Sidebar = ({user}:SidebarProps) => {
    const pathname = usePathname();
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
                {  sidebarLinks.map((item) => {                     
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                        return (
                                <Link 
                                    href={item.route} 
                                    key={item.label}
                                    className={cn('sidebar-link', {'bg-bank-graident':isActive})}
                                >
                                    {item.label}
                                </Link>
                            )
                        }
                    )
                }
            </nav> 
        </section>
    )
}

export default Sidebar