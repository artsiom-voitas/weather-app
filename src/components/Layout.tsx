import React from 'react'

interface LayoutProps {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return <div className='container mx-auto min-h-screen'>{children}</div>
}

export default Layout
