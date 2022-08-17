import styles from '../styles/about.module.css'

import Container from '@/components/container'
import Hero from '@/components/hero'
import Meta from '@/components/meta'

import eyecatch from 'images/my_picture.jpg'
import Image from 'next/image'

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About Development Archives"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="ABOUT" subtitle="CANOPUSについて" />

      <figure>
        <Image
          src={eyecatch}
          alt=" "
          layout="responsive"
          sizes="(min-width: 1152px) 1152px,100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <div className={styles.boxWrap}>
        <div className={styles.box}>
          <h3 className={styles.title}>Policy</h3>
          <p className={styles.description}>
            屋号につけた「CANOPUS」とはアルゴ船座の船底の部分を表す「りゅうこつ座」の星の一つです。
            りゅうこつは水面に隠れ見えづらいですが船を支える重要な部分を担っています。
            また、天体で2番目に明るい星なのですが天体の位置的に注意しないと見つけにくいことがあるそうです。
            私自身も「CANOPUS」という星の様に目立たないがWEB制作を通じて誰かを支えれるような存在でありたいと思っています。
          </p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.title}>Career</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cum
            eos illo delectus itaque, laboriosam, nemo doloremque deleniti vero,
            sunt facilis modi minima voluptatem quod dolores inventore rerum
            maxime debitis!
          </p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.title}>Skills</h3>

          <h4 className={styles.titleSmall}>Language</h4>

          <ul className={styles.list}>
            <li>HTML&CSS(Sass) : 3years</li>
            <li>JavaScript : 3years</li>
            <li>jQuery : 3years</li>
            <li>PHP : 2years</li>
            <li>React.js : 1years</li>
            <li>Next.js : 1years</li>
            <li>Typescript : 2months</li>
          </ul>

          <p className={styles.note}>
            HTML&CSS(Sass),JavaScript,jQuery,PHPは実務経験があります。
            <br />
            それ以外は独学・個人でのアプリ制作などの経験があります。
          </p>

          <hr />

          <h4 className={styles.titleSmall}>CMS</h4>
          <ul className={styles.list}>
            <li>Wordpress : 2years</li>
            <li>microCMS : 3months</li>
            <li>GraphCMS : 1months</li>
          </ul>

          <p className={styles.note}>
            Wordpressは実務経験があります。
            <br />
            それ以外は独学・個人でのアプリ制作などの経験があります。
          </p>

          <hr />

          <h4 className={styles.titleSmall}>Tool</h4>

          <ul className={styles.list}>
            <li>Photoshop : 2years</li>
            <li>Illustrator : 2years</li>
            <li>Adobe XD : 2months</li>
            <li>figma : 2months</li>
          </ul>

          <p className={styles.note}>
            Adobe
            XD、Figmaで自身のポートフォリオサイトをデザインした経験があります。それ以外のデザインツールについては、デザインカンプとして使用経験あります。（簡単な画像の書き出しなどの経験はできます）
          </p>
        </div>
      </div>
    </Container>
  )
}
