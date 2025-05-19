import { Contact } from './_components/contact';
import { Header } from './_components/header';
import { Hero } from './_components/hero';
import { Projects } from './_components/projects';
import { Skills } from './_components/skills';
import { Sobre } from './_components/sobre';
import styles from './page.module.css'
export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <section className='w-full'>
        <Hero />
      </section>

      <section  >
        <Sobre />
      </section>

      <Projects />

      <section>
        <Skills />
      </section>

      <Contact/>


    </div>
  );
}
