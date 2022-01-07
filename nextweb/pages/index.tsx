import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useWidth from '../hooks/useWidth';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();
  const { mediaQuery } = useWidth();

  // useEffect
  useEffect(() => {
    console.log(mediaQuery);
  }, [mediaQuery]);

  return <div>Hello react</div>;
};

export default Home;
