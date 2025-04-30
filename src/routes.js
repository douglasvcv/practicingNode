import { Router } from "express";
import CustomersController from "./app/controllers/CustomersController.js";

const routes = new Router()

routes.get("/customers", CustomersController.index)
routes.get("/customers/:id", CustomersController.show)
routes.post("/customers", CustomersController.create)
routes.put("/customers/:id", CustomersController.update)
routes.delete("/customers/:id", CustomersController.destroy)

export default routes