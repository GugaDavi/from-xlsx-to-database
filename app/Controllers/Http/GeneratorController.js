'use strict'

const xlsx = require('node-xlsx')

const filePath = 'planilha.xlsx'
const Info = use('App/Models/Info')

class GeneratorController {
  async index ({ response }) {
    const info = await Info.find(1)

    if (info) {
      return response.status(401).json({
        error:
          'Data already loaded. For new data clean up the database and update the spreadsheet'
      })
    }

    const plan = xlsx.parse(filePath)

    const data = plan[0].data

    const compilado = []

    data.map((item, index) => {
      if (index === 0) return

      const fakeCompilado = {}

      item.map((element, index) => {
        switch (index) {
          case 0:
            fakeCompilado.id_submissao = element
            break
          case 1:
            fakeCompilado.autor = element
            break
          case 2:
            fakeCompilado.coautor = element
            break
          case 3:
            fakeCompilado.titulo = element
            break
          case 4:
            fakeCompilado.m_modalidade = element
            break
          case 5:
            fakeCompilado.u_email = element
            break
          case 6:
            fakeCompilado.instituicao = element
            break
          default:
        }
      })

      compilado.push(fakeCompilado)
    })

    compilado.map(async item => {
      await Info.create(item)
    })

    return compilado
  }
}

module.exports = GeneratorController
