/**@jsx jsx */

import {jsx} from 'theme-ui'

export async function getServerSideProps({params, req, res}){
    const response = await fetch(`${process.env.API_URL}/${params.id}`)

    if(!response.ok){
        
        res.writeHead(302, {Location: '/notes'})
        res.end()
        return {props: {}}
    }

    const json = await response.json()

    return {
        props: {note: json}
    }
}

const NotePage = ({note}) => {

    return (
        <>
            <section sx={{variant: 'containers.page'}}>
                <h1>{note.title}</h1>
            </section>
        </>
    )
}

export default NotePage