/** @jsx jsx */

import {jsx} from 'theme-ui'
import dynamic from 'next/dynamic'

const Mock = dynamic(() => import('../src/components/mock'), {ssr: false})

export function getStaticProps(){

  return {
    props: {content: {
      title: 'This is a note app.'
    }}
  }
}

const MainPage = ({content}) => {

    return (
      
      <section
        sx={{height: `calc(100vh - 60px)`}}
      >
        <article
          sx=
          {{
            variant: 'containers.page', 
            display: 'flex', 
            alignItems: 'center',
            height: '100%'
          }}
        >
          <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
        </article>

        <Mock />

      </section>
    )
}

export default MainPage