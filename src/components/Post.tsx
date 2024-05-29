import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content}) {
  const [comments, setComments] = useState([
    {
      src: 'https://tse2.mm.bing.net/th/id/OIG4.yGTLXsHgaKW37ynPSnZM?pid=ImgGn',
      content: 'Muito bom Devon, parabéns!! 👏👏',
      applaud: '20'
    },
    {
      src: 'https://tse1.mm.bing.net/th/id/OIG1.SkN4YzDnyHhTtAo6XOmb?pid=ImgGn',
      content: 'Maravilhoso Devon, parabéns!! 👏👏',
      applaud: '50'
    },
    {
      src: 'https://tse1.mm.bing.net/th/id/OIG2.a3N4sbGFfFJQ1Ga0inSk?pid=ImgGn',
      content: 'Ficou excelente Devon, parabéns!! 👏👏',
      applaud: '10'
    },
    {
      src: 'https://tse2.mm.bing.net/th/id/OIG4.bLwzM0SDUxXuOMJGWsqO?pid=ImgGn',
      content: 'Post muito bacana, hein?!',
      applaud: '20'
    },
  ]);

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    const newComment = {
      src: 'https://tse3.mm.bing.net/th/id/OIG1.1Xtfa8n8NPYHze7fXbrS?pid=ImgGn',
      content: newCommentText,
      applaud: '0'
    }
    
    setComments([...comments, newComment])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.content !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />         
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>

      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}>{line.emoji}<a href="">{line.content}</a></p>
          }
        })}
        
        <p>
          <a href=''>#novoprojeto </a>
          <a href=''>#nlw </a>
          <a href=''>#rocketseat</a>
        </p>

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty} tabIndex="0" >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment.content}
              src={comment.src}
              content={comment.content}
              applaud={comment.applaud}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}