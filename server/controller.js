let toDoList = ['todo From my server', 'one more todo']

module.exports = {
    read: (req, res) => {
        res.status(200).send(toDoList)
    },
    create: (req, res) => {
        const { toDoThing } = req.body
        toDoList.push(toDoThing)
        res.status(200).send(toDoList)
    },
    update: (req, res) => {
        const { newMessage, index } = req.body
        toDoList[index] = newMessage
        console.log(toDoList)
        res.status(200).send(toDoList)
    },
    delete: (req,res)=>{
        const {index} = req.params
        toDoList.splice(index,1)
        res.status(200).send(toDoList)
    }

}