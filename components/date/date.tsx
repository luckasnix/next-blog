import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './date.module.scss'

export interface DateProps {
  dateString: string
}

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString)
  return (
    <time className={styles.date} dateTime={dateString}>
      {format(date, `d 'de' LLLL 'de' yyyy`, { locale: ptBR })}
    </time>
  )
}
