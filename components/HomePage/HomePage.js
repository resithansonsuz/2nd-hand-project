import Image from 'next/image'
import logo from '../../assets/icon/Logo.svg'
import Plus from '../../assets/icon/Plus.svg'
import User from '../../assets/icon/User.svg'
import homebanner from '../../assets/images/Banner.png'
import { useProduct } from '../../context/product'
import { useAuth } from '../../context/auth'
import styles from './home.module.scss'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function HomePage() {
  //hooks that will hold the data
  const [categories, setCategory] = useState([])
  const [products, setProduct] = useState([])
  const [active, setActive] = useState(0)
  const [token, setToken] = useState()
  const { Products, Categories } = useProduct()
  const { checkUser } = useAuth()
  const router = useRouter()

  //This function will run every time the home page is opened and the category changes.

  useEffect(() => {
    getData()
    const tokens = checkUser()
    setToken(tokens)
  }, [])

  const getProduct = async (id) => {
    setActive(id)
    const products = await Products(id)
    setProduct(products)
  }
  

  const getData = async () => {
    const products = await Products()
    setProduct(products)
    const categories = await Categories()
    setCategory(categories)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.headContainer}>
            <div className={styles.logo}>
              <Image src={logo} />
            </div>

            {token  ? (
              <div className={styles.buttons}>
                <button>
                  <Image src={Plus} /> Ürün Ekle
                </button>

                <button onClick={() => router.push('/')}>
                  <Image src={User} /> Hesabım
                </button>
              </div>
            ) : (
              <div className={styles.buttons}>
                <button onClick={() => router.push('/login')}>
                  <Image src={User} /> Giriş Yap
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.placard}>
            <Image src={homebanner} alt="Website Home Banner" />
          </div>
          <div className={styles.category}>
            <div className={styles.categoryContainer}>
              {categories.length > 0 &&
                categories.length > 0 &&
                categories?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      getProduct(item.id)
                    }}
                    className={
                      active === item.id
                        ? `${styles.choice} ${styles.active}`
                        : `${styles.choice}`
                    }
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.productElements}>
              {products.length > 0 &&
                products?.map((item, index) => (
                  <div
                    key={index}
                    className={styles.productElement}
                    onClick={() => {
                      router.push('/' + item.id)
                    }}
                  >
                    <div className={styles.productElementImage}>
                      <img
                        className={
                          item.image?.url ? styles.img : styles.notFoundImage
                        }
                        src={
                          item.image?.url
                            ? 'https://bootcamp.akbolat.net/' + item.image?.url
                            : 'notFound.png'
                        }
                        alt=""
                      />
                    </div>
                    <div className={styles.productElementDetail}>
                      <div className={styles.productElementText}>
                        <div className={styles.brand}>
                          {item.brand ? item.brand : 'no content'}
                        </div>
                        <div className={styles.color}>
                          <strong>Renk:</strong>
                          {item.color ? item.color : 'no content'}
                        </div>
                      </div>
                      <div className={styles.price}>
                        {item.price ? item.price + ',00 TL' : 'no content'}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
