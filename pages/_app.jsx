
/**@jsx jsx */

import {jsx} from 'theme-ui'
import {ThemeProvider} from 'theme-ui'
import theme from '../theme'
import '../src/styles.css'
import Nav from '../src/components/nav'

export default function App({Component, pageProps}){
    return (
        <ThemeProvider theme={theme}>
            <>
                <Nav />
                <Component {...pageProps}/>
            </>
        </ThemeProvider>
    )
}