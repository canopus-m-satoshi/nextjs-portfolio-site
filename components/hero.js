import styles from 'styles/hero.module.css'
import Image from 'next/image'

export default function Hero({ title, subtitle, textCenter = false }) {
  /**
   * 文字列を一文字ずつ<span>で囲む関数
   * @param {String} str
   * @return {String}
   */
  const wrapCharSpan = function (str) {
    return [...str].map((char) => `<span>${char}</span>`).join('')
  }

  //対象の要素を取得する
  const target = document.querySelector('.target')
  //要素の内容を関数の実行結果で置き換える
  target.innerHTML = wrapCharSpan(target.textContent)

  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={textCenter ? styles.subtitleCenter : styles.subtitle}>
          {subtitle}
        </p>
      </div>
    </div>
  )
}
