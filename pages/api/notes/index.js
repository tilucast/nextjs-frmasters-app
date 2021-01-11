import nc from 'next-connect'
import notes from '../../../src/data/data'

const handler = nc()
    .get(async (req,res) => {
        try{

            return res.status(201).json(notes)

        }catch(error){
            return res.status(401).json({msg: error})
        }
    })
    .post(async (req, res) => {
        try{

            const note = {
                ...req.body,
                id: Date.now()
            }

            notes.push(note)

            return res.status(201).json({msg: 'Note created successfully.'})

        }catch(error){
            return res.status(401).json({message: error})
        }
    })

export default handler