import 'module-alias/register'
// Nota: A linha a cima, deve ser a primeira linha desde arquivo

import "reflect-metadata"
import { connectionHelper } from '@/infra/connection-helper'
import env from './config/env'

connectionHelper.connect().then(async () => {
  // Fazendo import do app aqui, para garantir que ele não vá requisitar nada antes de conectar-se ao banco de dados
  const app = (await import('./config/app')).default
  app.listen(env.server.port, () => console.log(`Server running at Port: ${env.server.port}`))
})
.catch(console.error)
