import Head from 'next/head'
import NavBar from '../navBar';
import { DefaultSeo } from 'next-seo';
import config from '../../config/seo.json';



export const HOC = (Content) => {
    const WrappedComponent = (props) => {
        return (
            <>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;500&display=swap" rel="stylesheet" />
                    <link rel="icon" type="image/png" href="/favicon.png"></link>
                </Head>
                <DefaultSeo {...config} />
                <NavBar />
                
                <Content {...props} />
                {/* <Footer /> */}
            </>
        );
    };

    return WrappedComponent;
}