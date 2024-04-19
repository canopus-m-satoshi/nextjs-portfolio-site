import styles from './Description.module.css'

const Description = () => {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>Role</h2>
      <p>コーディング,CMS構築</p>
      <hr />
      <h2 className={styles.title}>Site URL</h2>
      <p className="text">https://toitoitoi.clinic/ladies-ld/lp4.1/</p>
      <hr />
      <h2 className={styles.title}>Description</h2>
      <p>
        フリーランス時代に担当した案件です。
        都内脱毛サロンのLP制作（リニューアル）を請負いました。pagespeed
        insightスコア改善などのSEO対策を意識したサイト制作を行いとても勉強になりました。
        SP時のデザインは私の判断でレイアウトを決め、コーディングしたためデザインの勉強にもなりました。
        コンテンツ内容が膨大であったため、公開当初はページ読み込みスピードが遅くPagespeed
        Insightの評価も上がりませんでしたが、webフォントの見直しや画像箇所のコーディング化など可能な限りの対応を行い改善することができました。
        またLP種類が150種類ほどあり、既存のLPは全て個別に制作されていたため、既存LPの共通箇所のinclude化を行い保守運用がしやすいようプロジェクト整備も担当しました。
        ※ページ下部の画像は、LPが長いため全体を表示しておりません。
      </p>
    </div>
  )
}
export default Description
