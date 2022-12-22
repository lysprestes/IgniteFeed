import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/lysprestes.png' alt='' srcSet='profife picture' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lys Prestes</strong>
              <time
                title='28 de Outubro de 2022 às 08:13h'
                dateTime='2022-10-28 08:13:30'
              >
                Published{' '}
              </time>
            </div>
            <button tittle='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
