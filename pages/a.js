import Link from 'next/link'

export default () => (
  <div>
    <Link href='/b' as='/a'>
      <a>a</a>
    </Link>
    a
  </div>
)
