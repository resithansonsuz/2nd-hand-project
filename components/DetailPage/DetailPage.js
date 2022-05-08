import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../assets/icon/Logo.svg'
import Plus from '../../assets/icon/Plus.svg'
import User from '../../assets/icon/User.svg'
import styles from './detail.module.scss'
import { useRouter } from 'next/router'
import { useProduct } from '../../context/product'


function Detail() {
  const [product, setProduct] = useState([])
  const [showModal, setShowModal] = useState([false])
  const router = useRouter()
  const { Product } = useProduct()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const id = router.query.id
    const product = await Product(id)
    console.log(product)
    setProduct(product)
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

              <button onClick={() => router.push('/')}>
                <Image src={User} /> Hesabım
              </button>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.productPic}>
            <img
              className={product.image?.url ? styles.img : styles.notFoundImage}
              src={
                product.image?.url
                  ? 'https://bootcamp.akbolat.net/' + product.image?.url
                  : 'notFound.png'
              }
              alt=""
            />
          </div>

          <div className={styles.productDetail}>
            <div className={styles.productDetailBox}>
              <div className={styles.title}>
                {product.name ? product.name : 'no content'}
              </div>

              <div className={styles.status}>
                <div className={styles.leftContent}>
                  <p className={styles.infoAreaItem}>Marka:</p>
                  <p className={styles.infoAreaItem}>Renk:</p>
                  <p className={styles.infoAreaItem}>Kullanım Durumu:</p>
                </div>

                <div className={styles.rightContent}>
                  <p className={styles.infoAreaItem}>
                    {product.brand ? product.brand : 'no  content'}
                  </p>
                  <p className={styles.infoAreaItem}>
                    {product.color ? product.color : 'no content'}
                  </p>
                  <p className={styles.infoAreaItem}>
                    {product.status ? product.status : 'no content'}
                  </p>
                </div>
              </div>

              <div className={styles.price}>
                {product.price ? product.price + ',00 TL' : 'no content'}
              </div>

              <div className={styles.buttons}>
                <button
                  className={styles.buy}
                  onClick={() => setShowModal(true)}
                >
                  Satın Al
                </button>

                <button className={styles.offer}>Teklif Ver</button>
              </div>

              <div className={styles.explanation}>
                <div className={styles.descTitle}>Açıklama</div>
                <div className={styles.desc}>
                  {product.description ? product.description : 'no content'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Detail
