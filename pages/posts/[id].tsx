import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Post: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ID</title>
      </Head>

      <h3>Dynamic Routing Example</h3>
    </div>
  )
}

export default Post
