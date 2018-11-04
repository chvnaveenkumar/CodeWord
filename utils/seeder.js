const Datastore = require('nedb')

const userController = require('../controllers/controller.user')
const datacourse = require('../data/data.Course.json')
const datacodeword = require('../data/data.codeword.json')
const user = require('../data/data.user.json')

const dataCodewordset=require('../data/data.codewordset.json')
const dataCoursestudent=require('../data/data.coursestudent.json') 


const LOG = require('../utils/logger.js')

module.exports = (app) => {
    LOG.info('START seeder.')
    const db = {}


    users.forEach((user) => {
        userController.newUser(user)
      })


    db.datacourse = new Datastore()
  db.datacourse.loadDatabase()

  // insert the sample data into our data store
  db.datacourse.insert(datacourse)



  db.datacodeword = new Datastore()
  db.datacodeword.loadDatabase()

  // insert the sample data into our data store
  db.datacodeword.insert(datacodeword)



  db.datauser = new Datastore()
  db.datauser.loadDatabase()

  // insert the sample data into our data store
  db.datauser.insert(datauser)


db.dataCodewordset = new Datastore()
db.dataCodewordset.loadDatabase()
db.dataCodewordset.insert(dataCodewordset)

db.dataCoursestudent = new Datastore()
db.dataCoursestudent.loadDatabase()
db.dataCoursestudent.insert(dataCoursestudent)




  app.locals.users = db.users.find(users)
  LOG.debug(`${app.locals.users.query.length} users registered`)


  LOG.info('END Seeder. Sample data read and verified.')
}