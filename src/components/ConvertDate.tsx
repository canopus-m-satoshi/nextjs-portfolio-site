import { format, parseISO } from 'date-fns'
import { ja } from 'date-fns/locale'

type DataISO = {
  dateISO: string
}

const ConvertDate = ({ dateISO }: DataISO) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyy年MM月dd日', {
        locale: ja,
      })}
    </time>
  )
}
export default ConvertDate
