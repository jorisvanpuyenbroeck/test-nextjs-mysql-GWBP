"use client"

import { useParams, usePathname } from "next/navigation"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const params = useParams() 

  const routes = [
    // {
    //   href: `/${params.storeId}`,
    //   label: 'Overview',
    //   active: pathname === `/${params.storeId}`
    // },
    // {
    //   href: `/${params.storeId}/billboards`,
    //   label: 'Billboards',
    //   active: pathname === `/${params.storeId}/billboards`
    // },
    // {
    //   href: `/${params.storeId}/categories`,
    //   label: 'Categories',
    //   active: pathname === `/${params.storeId}/categories`
    // },
    {
      href: `/${params.storeId}/topics`,
      label: 'Topics',
      active: pathname === `/${params.storeId}/topics`
    },
    {
      href: `/${params.storeId}/proposals`,
      label: 'Proposals',
      active: pathname === `/${params.storeId}/proposals`
    },
    {
      href: `/${params.storeId}/projects`,
      label: 'Projects',
      active: pathname === `/${params.storeId}/projects`
    },
    // {
    //   href: `/${params.storeId}/orders`,
    //   label: 'Orders',
    //   active: pathname === `/${params.storeId}/orders`
    // },
    {
      href: `/${params.storeId}/settings`,
      label: 'Settings',
      active: pathname === `/${params.storeId}/settings`
    }
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}