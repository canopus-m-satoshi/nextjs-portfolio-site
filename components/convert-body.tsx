import parse, { DOMNode } from 'html-react-parser'
import Image from 'next/image'

type Props = {
  contentHTML: string
}

export default function ConvertBody({ contentHTML }: Props) {
  const contentReact = parse(contentHTML, {
    replace: (node: DOMNode) => {
      if (node.name === 'img') {
        const { src, alt, width, height } = node.attribs
        return (
          <Image
            layout="responsive"
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        )
      }
    },
  })
  return <>{contentReact}</>
}
