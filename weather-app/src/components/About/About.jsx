import React from 'react';
import style from './About.module.css';
import Logo from './../../img/logoHenry.png';

export default function About(props) {
  // acá va tu código
  return (
    <div className={style.container}>
        <h2 className={style.title}><img src={Logo} alt="Logo soyHenry" /> Homework</h2>
        <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum, vitae animi, cumque, quae tempora illum ratione sunt recusandae minima nam necessitatibus amet cum maxime facilis earum distinctio id non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas vel consectetur atque optio aliquam sint alias nesciunt eos omnis vitae, dolores soluta officiis molestias nam pariatur quisquam accusamus deleniti?</p>

        <footer>
          <div className={style.social}>
            <a href="https://www.linkedin.com/in/ezequielbamio/" target='_black'><img src="https://img.icons8.com/stickers/65/000000/linkedin.png" alt="Linkedin" /></a>
            <a href="https://github.com/bamioezequiel/" target='_black'><img src="https://img.icons8.com/stickers/65/000000/github.png" alt="Github" /></a>
          </div>
          <small className={style.dev}>Desing by Bamio Ezequiel</small>
        </footer>
    </div>
  )
};
