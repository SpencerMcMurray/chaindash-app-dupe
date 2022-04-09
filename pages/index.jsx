import Link from 'next/link'

const Home = () => {
  return (
    <nav>
      <Link href="/e">
        <a>Employee Login</a>
      </Link> <br/>
      <Link href="/c">
        <a>Customer Login</a>
      </Link>
    </nav>
  )
}

export default Home