import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

const posts: PostType[]  = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://tse4.mm.bing.net/th/id/OIG3.W31wnCL197Wh0uhg5cYY?pid=ImgGn',
      name: 'Diego Fernandes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare', emoji: '👉 '},
    ],
    publishedAt: new Date('2024-05-25 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://tse4.mm.bing.net/th/id/OIG1._fNFtoob5WcTcWWRFHcS?pid=ImgGn',
      name: 'Gabriela Buzzi',
      role: 'Designer'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal 👋'},
      { type: 'paragraph', content: 'Acabei de finalizar um novo projeto de design para o meu portfólio. Trabalhei intensamente na interface e na experiência do usuário.' },
      { type: 'paragraph', content: 'Durante o desenvolvimento, foquei em criar uma interface intuitiva e agradável. Utilizei princípios de design centrado no usuário para garantir uma experiência fluida e satisfatória.' },
      { type: 'link', content: 'jane.design/doctorcare', emoji: '👉 '},
    ],
    publishedAt: new Date('2024-05-26 15:00:00')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
