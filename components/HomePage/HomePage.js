import Image from 'next/image'
import logo from '../../assets/icon/Logo.svg'
import Plus from '../../assets/icon/Plus.svg'
import User from '../../assets/icon/User.svg'
import homebanner from '../../assets/images/Banner.png'
import { useProduct } from '../../context/product'
import styles from './home.module.scss'
import React, { useState, useEffect } from 'react'

function HomePage() {
  //verileri tutacak olan hooks
  const [categories, setCategory] = useState([])
  const [products, setProduct] = useState([])
  const [active, setActive] = useState(0)

  const { Products, Categories } = useProduct()

  //Bu fonksiyon, ana sayfa her açıldığında ve category değiştiğinde çalışacak.
  useEffect(() => {
    getData()
  }, [])

  const getProduct = async (id) => {
    setActive(id)
    let urunler = await Products(id)
    setProduct(urunler)
  }

  const getData = async () => {
    const urunler = await Products()
    setProduct(urunler)

    const kategoriler = await Categories()
    setCategory(kategoriler)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.headContainer}>
            <div className={styles.logo}>
              <Image src={logo} />
            </div>
            <div className={styles.buttons}>
              <button>
                <Image src={Plus} /> Ürün Ekle
              </button>
              <button>
                <Image src={User}  /> Giriş Yap
              </button>
            </div>
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
                  <div key={index} className={styles.productElement}>
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
