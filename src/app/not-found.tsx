import Hero from '../components/Hero'
import LinkButton from '../components/LinkButton'

export default function NotFound() {
  return (
    <>
      <Hero title="404" subtitle="ページが見つかりません" />

      <p className="error-txt">
        アクセスしようとしたページは削除されたか、入力したURLが間違っている可能性があるため、表示することができません。
        <br />
        正しいURLを入力していただくか、下記よりサイトトップへお戻りください
      </p>

      <div
        style={{
          marginTop: 'var(--space-sm)',
          marginInline: 'auto',
          width: 'fit-content',
        }}>
        <LinkButton href="/" text="To Home Page" />
      </div>
    </>
  )
}
