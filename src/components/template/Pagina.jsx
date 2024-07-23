'use client'

// import { PaginaProps } from './Interface'

export function Pagina(props) {
  return (
    <div>
      {props.children}
      <br />
      {props.name}
    </div>
  )
}

// export default Pagina
