#!/usr/bin/env node

const { generatorHandler } = require('@prisma/generator-helper')

console.log('process.argv', process.argv)

generatorHandler({
  async onGenerate(options) {
    console.log('onGenerate')
    console.log(options)
  },
  onManifest() {
    return {
      defaultOutput: 'default-output',
      denylists: { models: ['SomeForbiddenModel'] },
      prettyName: 'I am a minimal generator',
      requiresEngines: ['queryEngine'],
    }
  },
})
