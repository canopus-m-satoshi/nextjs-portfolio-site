import { NextPage } from 'next'
import Image from 'next/image'

import Accordion from '../components/accordion'
import Container from '../components/container'
import Hero from '../components/hero'
import InViewMotion from '../components/inViewMotion'
import Meta from '../components/meta'
import Skills from '../components/skills'
import eyecatch from '../images/my_picture.jpg'
import styles from '../styles/about.module.css'


const About: NextPage = () => {
  const from = 2020
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth()

  const pastYear = currentYear - from + 1

  return (
    <Container>
      <Meta
        pageTitle="Abouts"
        pageDesc="About Canopus"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="ABOUT" subtitle="CANOPUSについて" />

      <figure className={styles.eyecatch}>
        <Image
          src={eyecatch}
          alt=" "
          priority
          placeholder="blur"
          width={600}
          height={600}
        />
      </figure>

      <div className={styles.boxWrap}>
        <InViewMotion>
          <div className={styles.box}>
            <h3 className={styles.title}>About</h3>
            <p className={styles.description}>
              93年生まれです。都内で活動しているエンジニアで、{currentYear}年
              {currentMonth}
              月でエンジニア歴{pastYear}年目になります。
              都内のWeb制作会社で勤務後、2021年に独立しフリーランスエンジニアとなりました。LPやWordpressを用いたサイト制作を得意としています。
            </p>
          </div>
        </InViewMotion>

        <InViewMotion>
          <div className={styles.box}>
            <h3 className={styles.title}>Policy</h3>
            <p className={styles.description}>
              屋号につけた「CANOPUS」とはアルゴ船座の船底の部分を表す「りゅうこつ座」の星の一つです。
              りゅうこつは水面に隠れ見えづらいですが船を支える重要な部分を担っています。
              また、天体で2番目に明るい星なのですが天体の位置的に注意しないと見つけにくいことがあるそうです。
              私自身も「CANOPUS」という星の様に目立たないがWEB制作を通じて誰かを支えれるような存在でありたいと思っています。
            </p>
          </div>
        </InViewMotion>

        <InViewMotion>
          <div className={styles.box}>
            <h3 className={styles.title}>Skills</h3>

            <div className={styles.skillBox}>
              <div className={styles.skillBoxItem}>
                <h4 className={styles.titleSmall}>Frontend Skills</h4>

                <ul className={styles.list}>
                  <li>HTML&CSS : 3years</li>
                  <li>Sass : 3years</li>
                  <li>JavaScript : 3years</li>
                  <li>jQuery : 3years</li>
                  <li>React.js : 1year</li>
                  <li>Next.js : 1year</li>
                  <li>Typescript : 2months</li>
                </ul>

                <h5 className={styles.noteTitle}>Note</h5>
                <p className={styles.note}>
                  HTML&CSS(Sass),JavaScript,jQueryを用いたサイト制作の経験が豊富にあります。
                  <br />
                  それ以外の言語は独学・個人でのアプリ制作などの経験があります。
                </p>
              </div>
              <div className={styles.skillBoxItem}>
                <h4 className={styles.titleSmall}>Backend Skills</h4>

                <ul className={styles.list}>
                  <li>PHP : 2years</li>
                  <li>Express : 2months</li>
                </ul>

                <h5 className={styles.noteTitle}>Note</h5>
                <p className={styles.note}>
                  Wordpressの実務経験がありPHPも扱えます。Expressはまだまだ勉強中です。
                </p>
              </div>
              <div className={styles.skillBoxItem}>
                <h4 className={styles.titleSmall}>CMS</h4>
                <ul className={styles.list}>
                  <li>Wordpress : 2years</li>
                  <li>microCMS : 3months</li>
                  <li>GraphCMS : 1months</li>
                </ul>

                <h5 className={styles.noteTitle}>Note</h5>
                <p className={styles.note}>
                  Wordpressを用いたサイト制作、既存サイトのリニューアルなど様々な案件を経験してきました。
                  <br />
                  それ以外は独学・個人でのアプリ制作などの経験があります。このサイトはmicroCMSを使用して作られています。
                </p>
              </div>

              <div className={styles.skillBoxItem}>
                <h4 className={styles.titleSmall}>Tool</h4>

                <ul className={styles.list}>
                  <li>Photoshop : 2years</li>
                  <li>Illustrator : 2years</li>
                  <li>Adobe XD : 2months</li>
                  <li>Figma : 2months</li>
                </ul>

                <h5 className={styles.noteTitle}>Note</h5>
                <p className={styles.note}>
                  Adobe
                  XD、Figmaで自身のポートフォリオサイトをデザインした経験があります。それ以外のデザインツールについては、デザインカンプとして使用経験あります。（簡単な画像の書き出しなどの経験はできます）
                </p>
              </div>

              <div className={styles.skillBoxItem}>
                <h4 className={styles.titleSmall}>Others</h4>

                <ul className={styles.list}>
                  <li>Windows OS : 7years</li>
                  <li>Mac OS : 3years</li>
                  <li>Gulp : 1year</li>
                  <li>Webpack : 3months</li>
                </ul>

                <h5 className={styles.noteTitle}>Note</h5>
                <p className={styles.note}>
                  Windows OS、Mac OS共に実務経験があります。
                  GulpやWebpack等のツールはチュートリアルを見た程度です。
                </p>
              </div>
            </div>
          </div>
        </InViewMotion>

        <InViewMotion>
          <div className={styles.box}>
            <h3 className={styles.title}>History</h3>

            {/* <Accordion heading="エンジニア転向前">
              <ul className={styles.list}>
                <li>
                  <p>2016 OCT - 2018 FEB</p>
                  <p>
                    大学卒業後、学生ビザとワーキングホリデービザを利用し、カナダで語学留学を経験する
                  </p>
                  <p>帰国後のTOEICテストで850点獲得する</p>
                </li>
                <li>
                  <p>2018 MAY - 2019 AUG</p>
                  <p>都内専門商社で営業職として勤務</p>
                  <p>
                    HPの有無が商談に影響することに気づき、Web制作に興味を持つ
                  </p>
                </li>
              </ul>
            </Accordion>

            <Accordion heading="エンジニア転向後">
              <ul className={styles.list}>
                <li>
                  <p>2020 JAN - 2021 AUG</p>
                  <p>
                    都内WEB制作会社で正社員としてマークアップエンジニアとして勤務
                    LP、コーポレートサイト制作、運用・保守など静的/動的ページ問わず様々な案件を経験する
                    WEB制作の基礎〜Wordpressのスキルをつける
                  </p>
                </li>
                <li>
                  <p>2021 AUG - NOW</p>
                  <p>
                    フリーランスとして活動
                    都内脱毛サロンのリニューアル、新規LPの作成、保守運用等をメインに知人のHP制作等を請け負う
                  </p>
                </li>
                <li>
                  <p>2022 AUG</p>
                  <p>
                    独学で習得したReact、Next.jsといったモダンフロントエンドスキルを用いてポートフォリオサイトを作成する
                  </p>
                </li>
              </ul>
            </Accordion> */}
            <Accordion heading={'エンジニア転向前'}>
              <ul className={styles.list}>
                <li>
                  <p>2016 OCT - 2018 FEB</p>
                  <p>
                    大学卒業後、学生ビザとワーキングホリデービザを利用し、カナダで語学留学を経験する
                  </p>
                </li>
                <li>
                  <p>2018 MAY - 2019 AUG</p>
                  <p>都内専門商社で営業職として勤務</p>
                  <p>
                    HPの有無が商談に影響することに気づき、Web制作に興味を持つ
                  </p>
                </li>
              </ul>
            </Accordion>
            <Accordion heading="エンジニア転向後">
              <ul className={styles.list}>
                <li>
                  <p>2020 JAN - 2021 AUG</p>
                  <p>
                    都内WEB制作会社で正社員としてマークアップエンジニアとして勤務
                    LP、コーポレートサイト制作、運用・保守など静的/動的ページ問わず様々な案件を経験する
                    WEB制作の基礎〜Wordpressのスキルをつける
                  </p>
                </li>
                <li>
                  <p>2021 AUG - NOW</p>
                  <p>
                    フリーランスとして活動
                    都内脱毛サロンのリニューアル、新規LPの作成、保守運用等をメインに知人のHP制作等を請け負う
                  </p>
                </li>
                <li>
                  <p>2022 AUG</p>
                  <p>
                    独学で習得したReact、Next.jsといったモダンフロントエンドスキルを用いてポートフォリオサイトを作成する
                  </p>
                </li>
              </ul>
            </Accordion>
          </div>
        </InViewMotion>
      </div>
    </Container>
  )
}

export default About
