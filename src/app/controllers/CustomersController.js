let customers = [
    {id:1, nome:"Douglas", serie:8},
    {id:2, nome:"Vitor", serie:8},
    {id:3, nome:"Carlos", serie:9}
]
class CustomersController{
    

    //Listagem de registros
    index(req, res){
        const status = customers ? 200 : 404
        if(status == 404){
            res.status(status).json({msg:"Lista não encontrada"})
        }
        console.log("GET :: /customers")
        res.status(status).json(customers)
    }
    //Lista um registro
    show(req, res){
        const {id} = req.params
        const costumer = customers.find((e)=>e.id == id)
        const status = costumer ? 200 : 404
        if(!costumer){
            res.status(status).json({msg: "Usuário não encontrado"})
        }
        res.status(status).json(costumer)

    }
    //Cria um registro
    create(req, res){
        const {name, serie} = req.body
        const id = customers[customers.length -1].id +1
        const newCustomer = {
            id,name,serie
        }
        const status = newCustomer ? 201 : 404
        if(newCustomer){
            customers.push(newCustomer)
            return res.status(status).json(newCustomer)
        }
    }
    //Atualiza um registro existente
    update(req, res){
        let id = parseInt(req.params.id)
        const {name, serie}=req.body
        const indice = customers.findIndex(item =>item.id==id)
        const status = indice >= 0 ? 200 : 404
        
            let updateCustomers ={id: parseInt(id), name, serie}
            customers.splice(indice, 1, updateCustomers)
        
        res.status(status).json(updateCustomers)
    }
    //Deleta um registro
    destroy(req, res){
        const {id} = req.params
        const customer = customers.find(item => item.id==id)
        const customerIndex = customers.findIndex(item => item.id==id)
        if(!customer){
           res.status(404).json({msg:"Escolha um usuário existente!"}) 
        }
        customers.splice(customerIndex, 1)
        res.status(200).json({msg:"Usuário excluído com sucesso!"})
    }
}

export default new CustomersController()