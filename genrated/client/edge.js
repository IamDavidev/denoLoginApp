
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/davidev/learn/deno/deno-login-architecture-hexagonal/genrated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.5.0",
  "engineVersion": "0362da9eebca54d94c8ef5edd3b2e90af99ba452",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VucmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJtb25nb2RiIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICBTdHJpbmcgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgbmFtZSAgU3RyaW5nCiAgZW1haWwgU3RyaW5nCn0K'
config.inlineSchemaHash = 'b8070c93cee523646bdeca32d61e12ffb523bc2367ac7559e59662744776803b'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

