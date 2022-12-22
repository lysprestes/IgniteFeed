import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='string'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic aperiam pariatur nobis exercitationem ducimus voluptatibus tempore numquam quos veritatis iste consectetur eos in eveniet non molestias explicabo facere, earum molestiae.'
          />
        </main>
      </div>
    </div>
  )
}

export default App
