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
                  <p>Web制作からReactを使ったWeb開発へ転向を目指す。</p>
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
                  営業職時代、新規顧客開拓やお客様からの問い合わせ対応を担当していました。
                  <br />
                  その中で、優れた技術力を持ちながらもWebサイトを持たない、あるいは技術力を十分にアピールできていない中小企業が多数あることに気づきました。
                  <br />
                  例えば、ある製造業の会社は独自の加工技術を持っていましたが、世間に認知されていませんでした。
                </p>
                <p>
                  また、Webサイトがないがゆえに、与信チェックが困難となり問い合わせをいただいても取引に至らないケースが少なくありませんでした。
                  <br />
                  優れた商品やサービスを持っているにもかかわらず、インターネット上で情報を得られないために、ビジネスチャンスを逃してしまっていました。
                </p>
                <p>
                  そこで私は、営業職で培った顧客目線の視点と課題分析力に、Webサイトの構築や運用を支援といったITの力を活用することで、
                  <br />
                  企業の認知度向上と新規顧客獲得につなぐ支援ができるのではないかと考えエンジニアへのキャリアチェンジを決意しました。
                </p>
              </div>
            </Accordion>

            <Accordion heading="Web制作からWeb開発の分野へ挑戦したい理由">
              <div className={styles.textContainer}>
                <p>
                  現在、Web制作の仕事に従事していますが、より広範囲の企業やユーザーの課題解決に携わりたいという想いから、Web開発へのキャリアチェンジを目指しています。
                </p>
                <p>
                  Web制作の仕事を通じてユーザー目線でわかりやすく、使いやすいWebサイトを作ることの重要性を学びました。
                  <br />
                  しかし同時に、Webサイトだけでは解決できない課題もあると感じています。
                  <br />
                  例えば、社内の業務効率化や在庫管理の最適化など、より複雑で高度な問題を解決するには、Webアプリケーションの開発が必要になると思います。
                </p>
                <p>
                  Web開発のスキルとして例えばReactを活用することで、高品質なアプリケーションを開発することも可能だと思いました。
                </p>
                <p>
                  Web制作で培ったデザイン思考やユーザー目線の考え方は、Web開発でも非常に重要だと考えています。
                  <br />
                  UIデザインの知識と開発のスキルを組み合わせることで、ユーザーにとって価値のあるアプリケーションを提供できるはずです。
                </p>
                <p>
                  以上の理由から、私はWeb制作からWeb開発の分野に挑戦したいと考えています。
                  <br />
                  Web制作とWeb開発の両方の視点を持つエンジニアとして、企業の課題解決に貢献し、ユーザーに喜ばれるプロダクトを生み出していきたいです。
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
