import fs from 'fs'
import path from 'path'

import { standardAuthHandler } from '@redwoodjs/cli-helpers'

import { Args } from './setup'

const { version } = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8')
)

export async function handler({ force: forceArg }: Args) {
  standardAuthHandler({
    basedir: __dirname,
    forceArg,
    provider: 'goTrue',
    authDecoderImport:
      "import { authDecoder } from '@redwoodjs/auth-gotrue-api'",
    apiPackages: [`@redwoodjs/auth-gotrue-api@${version}`],
    webPackages: ['gotrue-js', `@redwoodjs/auth-gotrue-web@${version}`],
    notes: [
      'You will need to enable Identity on your Netlify site and set APIUrl',
      'to your API endpoint in your GoTrue client config.',
      'See: https://redwoodjs.com/docs/auth/gotrue',
    ],
  })
}
