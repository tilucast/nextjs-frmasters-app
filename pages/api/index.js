import nc from 'next-connect'

const handler = nc()
    .get(async (req, res) => {
        res.json({msg: 'get request to /api'})
    })


export default handler