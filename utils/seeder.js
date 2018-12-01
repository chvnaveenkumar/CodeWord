const Datastore = require('nedb')

const userController = require('../controllers/controller.user')
const datacourse = require('../data/data.Course.json')
const datacodeword = require('../data/data.codeword.json')
const user = require('../data/data.user.json')
const dataCodewordset = require('../data/data.codewordset.json')
const dataCoursestudent = require('../data/data.coursestudent.json')
const hootoriginal=require('../data/hootoriginal.json')
const largeset=require('../data/largeset.json')
const LOG = require('./logger.js')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}


//    users.forEach((user) => {
//     userController.newUser(user)
//   })
 
// //USER
//   db.datauser = new Datastore()
//   db.datauser.loadDatabase()
//   db.datauser.insert(datauser)

//CODEWORDSET
  db.dataCodewordset = new Datastore()
  db.dataCodewordset.loadDatabase()
  db.dataCodewordset.insert(dataCodewordset)


 //CODEWORD
 
 db.datacodeword = new Datastore()
 db.datacodeword.loadDatabase()
 db.datacodeword.insert(datacodeword)

 //COURSE

  db.datacourse = new Datastore()
  db.datacourse.loadDatabase()
  db.datacourse.insert(datacourse)

//COURSESTUDENT

  db.dataCoursestudent = new Datastore()
  db.dataCoursestudent.loadDatabase()
  db.dataCoursestudent.insert(dataCoursestudent)

  //hootoriginal
  db.hootoriginal = new Datastore()
  db.hootoriginal.loadDatabase()
  db.hootoriginal.insert(hootoriginal)

  //largeset

  db.largeset = new Datastore()
  db.largeset.loadDatabase()
  db.largeset.insert(largeset)

  // app.locals.datauser = db.datauser.find(datauser)
  // LOG.debug(`${app.locals.datauser.query.length} datauser seeded`)


  app.locals.dataCodewordset = db.dataCodewordset.find(dataCodewordset)
  LOG.debug(`${app.locals.dataCodewordset.query.length} dataCodewordset seeded`)


  app.locals.datacodeword = db.datacodeword.find(datacodeword)
  LOG.debug(`${app.locals.datacodeword.query.length} datacodeword seeded`)


  app.locals.datacourse = db.datacourse.find(datacourse)
  LOG.debug(`${app.locals.datacourse.query.length} datacourse seeded`)

  app.locals.dataCoursestudent = db.dataCoursestudent.find(dataCoursestudent)
  LOG.debug(`${app.locals.dataCoursestudent.query.length} dataCoursestudent seeded`)

  app.locals.hootoriginal = db.hootoriginal.find(hootoriginal)
  LOG.debug(`${app.locals.hootoriginal.query.length} hootoriginal seeded`)

  
  app.locals.largeset = db.largeset.find(largeset)
  LOG.debug(`${app.locals.largeset.query.length} largeset seeded`)
  
  LOG.info('END Seeder. Sample data read and verified.')
}