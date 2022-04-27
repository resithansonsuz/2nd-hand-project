import Link from 'next/link'
import Image from 'next/image'
/* import logo from '../../assets/logo/Logo.svg' */

function HomePage() {
  return (
    <>
      <div>Selam burası anasayfa</div>
      <nav>
      {/* <div className="logo">
           <Image
           src={logo}
           />
      </div> */}
      <div>
      <Link href="../LoginPage/LoginPage">
        <a>Giriş Yap</a>
      </Link>
      </div>
      </nav>
    </>
  )
}

export default HomePage
