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

      if (link && link.href && link.origin === window.location.origin) {
        NProgress.start()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}