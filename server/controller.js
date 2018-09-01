let toDoList = ['todo From my server','one more thing']

module.exports = {
  read: (req,res)=>{
      res.status(200).send(toDoList)
  },

  create: (req,res)=>{
    const {toDoThing} = req.body
    toDoList.push(toDoThing)
    res.status(200).send(toDoList)
  },

  update: (req, res) => {
    console.log('thing being updated', req.body)
    const {updatedStr, index} = req.body
    toDoList[index] = updatedStr
    res.status(200).send(toDoList)
  }

}