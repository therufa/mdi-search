import fastify, { FastifyInstance, RequestGenericInterface } from 'fastify'
import fastifyCors from 'fastify-cors'
import { Server, IncomingMessage, ServerResponse } from 'http'
// eslint-disable-next-line import/no-named-default
import * as Fuse from 'fuse.js'
import * as mdi from '@mdi/js'

const mdiIcons = Object.entries(mdi)
const fuseOpts = { keys: ['0'] }
const fuseIndex = Fuse.createIndex(fuseOpts.keys, mdiIcons)
const fuse = new Fuse(mdiIcons, fuseOpts, fuseIndex)

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({})
interface RequestGeneric extends RequestGenericInterface {
  Querystring: {
    search: string
  }
}

server.register(fastifyCors, {
  origin: 'http://localhost:8081'
})

server.get<RequestGeneric>('/', async (request) => {
  const { search } = request.query

  return {
    data: {
      search,
      icons: fuse.search(search).slice(0, 30)
    },
    error: null
  }
})

const start = async () => {
  try {
    await server.listen(3000)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
