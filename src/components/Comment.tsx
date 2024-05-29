import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react'

export function Comment ({ content, src, applaud, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(applaud)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }
  const handleLikeComment = () => {
    setLikeCount((state) => parseInt(state) + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={src} />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <time title='26 de Maio às 14:35' dateTime="2024/05/26 14:35:40">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> 
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}