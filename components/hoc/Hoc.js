import Head from 'next/head'
import NavBar from '../navBar';
import { DefaultSeo } from 'next-seo';
import config from '../../config/seo.json';



export const HOC = (Content) => {
    const WrappedComponent = (props) => {
        return (
            <>
                <DefaultSeo {...config} />
                <NavBar />
                
                <Content {...props} />
                {/* <Footer /> */}
            </>
        );
    };

    return WrappedComponent;
}