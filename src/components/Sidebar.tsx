import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=50&w=500" 
      />
      <div className={styles.profile}>
        <Avatar src="https://tse3.mm.bing.net/th/id/OIG1.1Xtfa8n8NPYHze7fXbrS?pid=ImgGn" />
        
        <strong>Filipe Vieira</strong>
        <span>Web Develop</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}