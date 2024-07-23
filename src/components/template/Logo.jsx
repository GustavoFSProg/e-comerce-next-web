// 'use client'

import { IconBrandAmazon } from '@tabler/icons-react'
import Link from 'next/link'

// import { PaginaProps } from './Interface'

export function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center mt-1 -ml-10">
        <div className="text-xl leading-4">A Z</div>
        <IconBrandAmazon size={40} stroke={1} />
      </div>
    </Link>
  )
}

// export default Pagina
