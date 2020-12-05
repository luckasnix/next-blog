import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, `d 'de' LLLL 'de' yyyy`, { locale: ptBR })}
    </time>
  )
}
