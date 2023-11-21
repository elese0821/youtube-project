import React from 'react'
import Search from './Search'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Footer from './Footer'
import ScrollTo from '../../utils/scrollTo'
import Header from './Header'

const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | Music Youtube"
                defaultTitle='MUSIC Youtube'
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main