import { Link } from 'react-router-dom'

import React from 'react'

export default function Menu() {
  return (
    <>
    <Link to={"/"}>
    <button>Home</button>
</Link>
<Link to={"/article"}>
    <button>Article</button>
    </Link>
    </>
  )
}
