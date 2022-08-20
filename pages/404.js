import Container from '@/components/container'
import Hero from '@/components/hero'
import LinkButton from '@/components/linkButton'
import Meta from '@/components/meta'

const Custom404 = () => {
  return (
    <Container>
      <Meta pageTitle="404 - Page not found" />
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
    </Container>
  )
}
export default Custom404
