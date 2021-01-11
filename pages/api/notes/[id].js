import nc from 'next-connect'
import notes from '../../../src/data/data'

const handler = nc()
    .get(async (req, res) => {

        try{

            const note = notes.find(note => note.id == req.query.id)
            

            return res.status(201).json(note)

        }catch(error){
            return res.status(401).json({msg: 'Note not found.'})
        }
    })
    .put(async (req, res) => {
        try{

            let emptyNote = {}

            for(let note in notes){
                if(notes[note].id == req.query.id) {
                    notes[note].note = req.body.note
                    emptyNote = notes[note]
                }
            }

            return res.status(201).json(emptyNote)

        }catch(error){
            return res.status(401).json({msg: 'Note not found.'})
        }
    })
    .delete(async (req, res) => {
        try{
            
            for(let note in notes){
                if(notes[note].id == req.query.id) notes.splice(note, 1)
            }

            return res.status(201).json(notes)

        }catch(error){
            return res.status(401).json({msg: 'Note not found.'})
        }
    })


export default handler