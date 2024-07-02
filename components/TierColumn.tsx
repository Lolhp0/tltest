import React, { PropsWithChildren } from 'react'

const TierColumn = ({children}: PropsWithChildren) => {
  return (
    <div className='w-[260px] min-h-dvh max-md:w-full max-md:mb-5 max-md:!min-h-fit' role='column'>
        {children}
    </div>
  )
}

export default TierColumn
