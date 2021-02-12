import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { makeSaveProductController, makeFindProductController } from '@/domain/product/product-controller-factory'

export default (router: Router): void => {

  router.post('/product', adaptRoute(makeSaveProductController()))
  router.get('/product', adaptRoute(makeFindProductController()))

  // router.post('/login', async function (req, res) {
  //     res.status(201).json({"menssagem": "ok"})
  // })
  
}
