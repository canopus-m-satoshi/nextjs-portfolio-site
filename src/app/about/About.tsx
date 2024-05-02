'use client'

import Image from 'next/image'

import Accordion from '@/components/Accordion/Accordion'
import Hero from '@/components/Hero/Hero'
import InViewMotion from '@/components/InViewMotion/InViewMotion'

import eyecatch from '../../images/my_picture.jpg'
import styles from './About.module.css'

const from = 2020
const now = new Date()
const currentYear = now.getFullYear()
const currentMonth = now.getMonth()
const pastYear = currentYear - from + 1

const About = () => {
  return (
    <>
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
              都内で活動しているエンジニアで、{currentYear}年{currentMonth}
              月でエンジニア歴{pastYear}年目になります。
              <br />
              都内のWeb制作会社で勤務後、2021年に独立しフリーランスとなりました。LPやWordpressを用いたサイト制作を得意としています。
              <br />
              React/Next.jsなどモダンフロントエンド技術にも強い関心があり学習中です。
            </p>
          </div>
        </InViewMotion>

        <InViewMotion>
          <div className={styles.box}>
            <h3 className={styles.title}>Policy</h3>
            <p className={styles.description}>
              屋号につけた「CANOPUS」とはアルゴ船座の船底の部分を表す「りゅうこつ座」の星の一つです。
              <br />
              りゅうこつは水面に隠れ見えづらいですが船を支える重要な部分を担っています。
              <br />
              また、天体で2番目に明るい星なのですが天体の位置的に注意しないと見つけにくいことがあるそうです。
              <br />
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
                  <li>HTML&CSS : 5years</li>
                  <li>Sass : 5years</li>
                  <li>JavaScript : 5years</li>
                  <li>jQuery : 5years</li>
                  <li>React.js : 3years</li>
                  <li>Next.js : 3years</li>
                  <li>Typescript : 1year</li>
                  <li>Redux (RTK) : 1year</li>
                  <li>Tailwind CSS : 1year</li>
                  <li>daisy UI : 1year</li>
                  <li>Chakra UI : 1year</li>
                  <li>Mantine UI : 1year</li>
                  <li>styled-components : 1year</li>
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
                  <li>PHP : 3years</li>
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
                  <li>Wordpress : 4years</li>
                  <li>microCMS : 3months</li>
                  <li>GraphCMS : 1months</li>
                </ul>

                <h5 className={styles.noteTitle}>Note</h5>
                <p className={styles.note}>
                  Wordpressを用いたサイト制作、既存サイトのリニューアルなど様々な案件を経験してきました。
                  <br />
                  それ以外は独学・個人でのアプリ制作などの経験があります。
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
                  XD、Figmaで自身のポートフォリオサイトをデザインした経験があります。それ以外のデザインツールについては、デザインカンプとして使用経験があります。
                </p>
              </div>

              <div className={styles.skillBoxItem}>
                <h4 className={styles.titleSmall}>Others</h4>

                <ul className={styles.list}>
                  <li>Windows OS : 7years</li>
                  <li>Mac OS : 5years</li>
                  <li>Firebase : 1year</li>
                  <li>Gulp : 1year</li>
                  <li>Webpack : 3months</li>
                </ul>

                <h5 className={styles.noteTitle}>Note</h5>
                <p className={styles.note}>
                  Windows OS、Mac OS共に実務経験があります。
                </p>
              </div>
            </div>
          </div>
        </InViewMotion>

        <InViewMotion>
          <div className={styles.box}>
            <h3 className={styles.title}>History</h3>

            <Accordion heading={'エンジニア転向前'}>
              <ul className={styles.list}>
                <li>
                  <p>2016 OCT - 2018 FEB</p>
                  <p>
                    大学卒業後、学生ビザとワーキングホリデービザを利用し、カナダで語学留学を経験。
                  </p>
                </li>
                <li>
                  <p>2018 MAY - 2019 AUG</p>
                  <p>都内専門商社で営業職として勤務。</p>
                </li>
              </ul>
            </Accordion>

            <Accordion heading="エンジニア転向後">
              <ul className={styles.list}>
                <li>
                  <p>2020 JAN - 2021 AUG</p>
                  <p>
                    都内WEB制作会社で正社員としてマークアップエンジニアとして勤務。LP、コーポレートサイト制作、運用・保守など静的/動的ページ問わず様々な案件を経験。WEB制作の基礎〜Wordpressのスキルをつける。
                  </p>
                </li>
                <li>
                  <p>2021 AUG - NOW</p>
                  <p>
                    フリーランスとして活動を開始する。美容系クリニックのリニューアル、新規LPの作成、保守運用や新規機能構築等をメインにHP制作等を請け負う。
                  </p>
                </li>
                <li>
                  <p>2022 AUG</p>
                  <p>
                    React、Next.jsといったフロントエンドスキルを用いてポートフォリオサイトを作成。
                  </p>
                </li>
                <li>
                  <p>2024 MAY</p>
                  <p>Web制作からReactを使ったWebアプリ開発へ転向を目指す。</p>
                </li>
              </ul>
            </Accordion>
          </div>
        </InViewMotion>

        <InViewMotion>
          <div className={styles.box}>
            <h3 className={styles.title}>Reason</h3>

            <Accordion heading={'営業職からエンジニアになった理由'}>
              <div className={styles.textContainer}>
                <p>
                  営業職時代、新規顧客開拓を担当していた際、優れた技術力を持ちながらWebサイトを持たない中小企業が多数あることに気づきました。Webサイトがないがゆえに与信チェックが困難で取引に至らないケースが少なくありませんでした。
                </p>
                <p>
                  また、既存のお客様の中には素晴らしい技術を持ちながらもそれを十分にアピールできておらず、本来の実力が世間に認知されていない企業が多数あることにも疑問を感じました。
                </p>
                <p>
                  ITの力を活用することで、これらの企業の優れた技術力を広く知ってもらい、ビジネスチャンスを拡大できるのではないかと考えるようになりました。Webサイトの構築や、企業の認知度向上と新規顧客獲得を支援したいと思うようになったのです。
                </p>
                <p>
                  こうした問題意識から、エンジニアへのキャリアチェンジを決意しました。ITの力で企業の課題解決に貢献したいという思いが、転向の原動力となっています。
                </p>
              </div>
            </Accordion>

            <Accordion heading="Web制作からWeb開発の分野へ挑戦したい理由">
              <div className={styles.textContainer}>
                <p>
                  Web制作からReactを使ったWebアプリ開発へ転向を目指しています。
                </p>
                <p>
                  Reactを使ったWebアプリ開発のスキルは、ECサイトや社内システムなど様々な業界や分野で活用できると考えています。Web制作で培ったスキルを活かしつつ、より広範囲の企業の課題解決に携わることができると考えました。
                </p>
                <p>
                  また、自社サービスの開発に携わりたいという思いが強いです。それは、フリーランス時代に美容系クリニックのWebサイトの改修や機能構築に約3年間携わった経験から、サービスを成長させていくプロセスに面白さを感じているからです。
                </p>
                <p>
                  自社サービスの開発では、企画から開発、運用まで一貫して関与できます。アイデアを形にする喜びを直接感じられることに加え、ユーザーとの距離が近いことで、よりニーズに合ったサービス作りができると考えています。
                </p>
                <p>
                  Web制作だけでなく、Reactを使ったWebアプリ開発のスキルを身につけ、自社サービスの成長に貢献したいと強く思うようになりました。幅広い業界での活躍と、ユーザー目線でのサービス開発の両方を実現できる環境で、エンジニアとしてのキャリアを築いていきたいと考えています。
                </p>
              </div>
            </Accordion>
          </div>
        </InViewMotion>
      </div>
    </>
  )
}
export default About
