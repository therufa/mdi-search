import fastify, { FastifyInstance, RequestGenericInterface } from 'fastify'
import fastifyCors from 'fastify-cors'
import { Server, IncomingMessage, ServerResponse } from 'http'
// eslint-disable-next-line import/no-named-default
import * as Fuse from 'fuse.js/dist/fuse.basic'
import * as mdi from '@mdi/js'

const prepareName = (name: string) =>
  name.slice(3)
    .replace(/\w(?=(([A-Z])))/g, (str) => `${str}-`)
    .toLowerCase()
const mdiIcons = Object.entries(mdi).map(([name, path]) => [prepareName(name), path])
const fuseOpts = {
  keys: ['0'],
  includeScore: true,
  threshold: 0.4
}
const fuseIndex = Fuse.createIndex(fuseOpts.keys, mdiIcons)
const fuse = new Fuse(mdiIcons, fuseOpts, fuseIndex)

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({})
interface RequestGeneric extends RequestGenericInterface {
  Querystring: {
    search: string
  }
}

server.register(fastifyCors, {
  origin: '*'
})

server.get<RequestGeneric>('/', async (request) => {
  const { search } = request.query
  const searchTerm = decodeURIComponent(search)

  return {
    data: {
      searchTerm,
      matches: fuse.search(searchTerm).slice(0, 50)
    },
    error: null
  }
})

const start = async () => {
  try {
    await server.listen(process.env.PORT || 3000)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
