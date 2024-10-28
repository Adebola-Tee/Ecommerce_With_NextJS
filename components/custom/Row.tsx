import { cn } from '@/lib/utils';
import React from 'react'

function Row({children,
     className } :{ children: React.ReactNode; className? : string}) {
  return (
    <div className={cn('flex items-center h-full', className)}>{children}</div>
  )
}

export default Row