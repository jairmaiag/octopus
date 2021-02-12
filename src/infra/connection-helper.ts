import { createConnection, Connection } from 'typeorm'

export const connectionHelper = {
  client: null as Connection,

  async connect(): Promise<Connection> {
    try {

      await createConnection() 
      
      // this.client = await createConnection() 
   
      return this.client
    } catch (error) {
      throw error
    }
  },

  async getConnection(): Promise<Connection>{
    if(!this.client?.isConnected) {
      await this.connect()
    }

    return this.client
  },

  async disconnect(): Promise<void> {
    await this.cliente.close()
    this.client = null
  }
}
