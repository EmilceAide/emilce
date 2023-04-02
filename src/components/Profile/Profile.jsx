import React from 'react';
import {AiFillEnvironment } from "react-icons/ai";
import styles from './profile.module.css'
import imgProfile from './../../assets/img-profile.png'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src={imgProfile} alt='Imagen de perfil'/>
            <h1>Emilce Toledo</h1>
            <AiFillEnvironment/><p>Lima, Perú</p>
            <h3>"Soy FrontEnd Developer y Matemática, con una perspectiva  enfocada a encontrar soluciones de valor a través del análisis. Los años me enseñaron a estar en continuo aprendizaje, analizando siempre  diversas situaciones y su contexto para tomar la mejor decisión". </h3>
        </div>
    );
}

export default Profile;
