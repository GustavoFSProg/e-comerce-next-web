// 'use client'

import { IconBrandAmazon } from '@tabler/icons-react'
import Link from 'next/link'

// import { PaginaProps } from './Interface'

export function Logo() {
  return (
    <Link href="/">
      <div>
        <div>A Z</div>
        <IconBrandAmazon size={40} stroke={1} />
      </div>
    </Link>
  )
}

// export default Pagina
