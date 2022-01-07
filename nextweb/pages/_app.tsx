import type { AppProps } from 'next/app';
import '../styles/init.scss';
import useWidth from '../hooks/useWidth';

function MyApp(Props: AppProps) {
  const { mediaQuery } = useWidth();
  return <Props.Component {...Props.pageProps} />;
}

export default MyApp;
