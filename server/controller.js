let toDoList = ['todo From my server','one more thing']

module.exports = {
  read: (req,res)=>{
      res.status(200).send(toDoList)
  },
  create: (req,res)=>{
    const {toDoThing} = req.body
    toDoList.push(toDoThing)
    res.status(200).send(toDoList)
  }
}