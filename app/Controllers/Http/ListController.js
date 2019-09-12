'use strict'

const Info = use('App/Models/Info')

class ListController {
  async index ({ request }) {
    const { page } = request.get()

    const infos = await Info.query().paginate(page)

    return infos
  }
}

module.exports = ListController
