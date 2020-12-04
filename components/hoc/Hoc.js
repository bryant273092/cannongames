import Head from 'next/head'
import NavBar from '../navBar';
import Banner from '../banner'
import { DefaultSeo } from 'next-seo';
import config from '../../config/seo.json';



export const HOC = (Content) => {
    const WrappedComponent = (props) => {
        return (
            <>
                <DefaultSeo {...config} />
                <NavBar />
                <Banner />
                {/* <Content {...props} />
                <Footer /> */}
            </>
        );
    };

    return WrappedComponent;
}