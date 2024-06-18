'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sec, setSec] = useState(true);

  const handleLogin = () => {
    if (username === 'a' && password === 'a') {
      // navigate to homepage
      window.location.href = '/homepage';
    } else {
      alert('Login or password is incorrect');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.cabecalho}>
        <div className={styles.logoContainer}>
         <Image src="/SpaceSchool.jpeg" alt="SpaceSchool Logo" width={150} height={150} className={styles.logo} />
    
        </div>

    </header>
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <input
          type="email"
          placeholder="E-mail"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type={sec ? 'password' : 'text'}
          placeholder="Senha"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  
        <i className={`icon-mail ${styles.iconMail}`} />
        <i className={`icon-lock ${styles.iconLock}`} />
        {sec && (
          <i
            className={`icon-eye ${styles.iconSecret}`}
            onClick={() => setSec(!sec)}
          />
        )}
        
      </div>
      <div className={styles.bottomContainer}>
        <button className={styles.loginButton} onClick={handleLogin}>
          Entrar
        </button>
      </div>


      <button className={styles.forgotPasswordButton}>
          <a href="#" className={styles.forgotPasswordText}>
            Esqueceu a senha?
          </a>
        </button>
      <div className={styles.registerLinkContainer}>
        <p className={styles.link}>
          Não possui Login?{' '}
          <Link href="/register" className={styles.registerLinkText}>
            Cadastrar-se
          </Link>
        </p>
      
      </div>
      </main>
    </div>
  );
};

export default LoginScreen;
