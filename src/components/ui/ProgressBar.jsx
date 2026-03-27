'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function ProgressBar() {
  const pathname = usePathname()

  useEffect(() => {
    // Finish progress on route change
    NProgress.done()
  }, [pathname])

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a')

      if (!link) return

      const url = new URL(link.href)

      // check same origin
      if (url.origin !== window.location.origin) return

      // prevent progress for same page
      if (url.pathname === window.location.pathname) return

      NProgress.start()
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}