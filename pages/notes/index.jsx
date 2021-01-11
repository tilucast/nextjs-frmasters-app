/** @jsx jsx */

import {jsx} from 'theme-ui'
import Link from 'next/link'

export async function getServerSideProps(){
    const result = await fetch(`${process.env.API_URL}`)
    const data = await result.json()

    return {
        props: {
            notes: data
        }
    }
}

const Notes = ({notes}) => {

    return (
        <>
            <section sx={{variant: 'containers.page'}}>
                
                <h1>My Notes</h1>

                <article sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                    {notes.map(note => (
                        <div key={note.id} sx={{width: '33%', p: 2}}>

                            <Link 
                                href="/notes/[id]" as={`/notes/${note.id}`}
                            >
                                <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                                    <div sx={{
                                            variant: 'containers.card', 
                                            "&:hover": {backgroundColor: '#e6e1e1'}, 
                                            transition: 'all .4s'
                                            }}>
                                        <strong>{note.title}</strong>
                                    </div>
                                </a>
                            </Link>

                        </div>
                    ))}
                </article>


                

            </section>
        </>
    )
}

export default Notes