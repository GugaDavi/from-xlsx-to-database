'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InfosSchema extends Schema {
  up () {
    this.create('infos', table => {
      table.increments()
      table.integer('id_submissao')
      table.string('autor')
      table.string('coautor')
      table.string('titulo')
      table.string('m_modalidade')
      table.string('u_email')
      table.string('instituicao')
      table.timestamps()
    })
  }

  down () {
    this.drop('infos')
  }
}

module.exports = InfosSchema
