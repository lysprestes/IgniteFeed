import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://github.com/lysprestes.png'
          />
          <div className={styles.authorInfo}>
            <strong>user name</strong>
            <span>subtitle</span>
          </div>
        </div>
        <time
          title='28 de Outubro de 2022 às 08:13h'
          dateTime='2022-10-28 08:13:30'
        >
          Published{' '}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉<a href=''>jane.design/doctorcare</a>
        </p>
        <p>
          <a href=''>#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your message</strong>
        <textarea placeholder='Your message' />
        <footer>
          <button type='submit'>Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
