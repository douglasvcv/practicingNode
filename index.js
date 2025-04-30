// const express = require('express')

// const app = express()
// app.use(express.json())

// const customers = [
//     {id:1, nome:"Douglas", serie:8},
//     {id:2, nome:"Vitor", serie:8},
//     {id:3, nome:"Carlos", serie:9}
// ]

// app.get('/', (req, res)=>{
//     res.send("Hello world!!")
// })


// //Opicional
// //Query params = ?nome=Douglas&idade=21
// //http://localhost:8080/send?nome=Douglas&idade=21
// app.get('/send', (req, res)=>{
//     const {nome, idade} = req.query
//     if(nome == undefined && idade == undefined){
//         res.json({
//             title:"Meu programa!",
//             msg: `Digite um nome e idade para enviarmos a mensagem`
//         })
        
//     }
    
//     res.json({
//         title:"Meu programa!",
//         msg: `Olá, ${nome}. Você tem ${idade} anos!`
//     })
// })

// //Obrigatório
// //Route params = /:nome
// //http://localhost:8080/send/:nome
// app.get("/send/:nome", (req, res)=>{
//     const {nome} = req.params
//     if(nome!="Douglas"){
//         res.json({msg:"Digite o nome Douglas"})
//     }
//     res.json({msg: `Olá, ${nome}`})
// })

// //Route for get all customers
// app.get("/customers", (req, res) => {
//     const status = customers ? 200 : 404
//     if(status == 404){
//         res.status(status).json({msg:"Lista não encontrada"})
//     }
//     console.log("GET :: /customers")
//     res.status(status).json(customers)

// })
// //Route for get one customer
// app.get("/customers/:id", (req, res)=>{
//     const {id} = req.params
//     const customer = customers.find(item=>item.id==id)
//     const status = customer ? 200 : 404
//     if(!customer){
//         res.status(status).json({msg:"Usuário não encontrado"})
//     }
//     console.log("GET :: /customers/:id", JSON.stringify(customer))
//     res.status(status).json(customer)
// })

// //Route for create one customer
// app.post("/customers", (req, res)=>{
//     const {name, serie}=req.body
//     const id = customers[customers.length-1].id+1
//     const newCustomer = {id, name, serie}
//     console.log("POST :: /customers/:id", JSON.stringify(newCustomer))
//     customers.push(newCustomer)
//     res.status(201).json(newCustomer)
// })

// //Route for change one customer
// app.put("/customers/:id", (req, res)=>{
//     const {id} = parseInt(req.params)
//     const {name, serie}=req.body
//     const indice = customers.findIndex(item =>item.id==id)
//     const status = indice >= 0 ? 200 : 404
    
//     if(indice>=0){
//         customers[indice] ={id: parseInt(id), name, serie}
//     }
//     console.log("PUT :: /customers/:id", JSON.stringify(customers[indice]))
    
//     res.status(status).json(customers[indice])
    
// })


// //Route for delete one customer
// app.delete("/customers/:id", (req, res) =>{
//     const {id} = req.params
//     const customer = customers.find(item => item.id==id)
//     const customerIndex = customers.findIndex(item => item.id==id)
//     if(!customer){
//        res.status(404).json({msg:"Escolha um usuário existente!"}) 
//     }
//     console.log("DELETE :: /customers/:id", JSON.stringify(customer))
//     customers.splice(customerIndex, 1)
//     res.status(200).json({msg:"Usuário excluído com sucesso!"})
// })

// // app.listen(8080, ()=>{
// //     console.log("Servidor rodando http://localhost:3000")
// // })