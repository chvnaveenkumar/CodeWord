const winston = require('winston')
const fs = require('fs')
const path = require('path')

const logDir = 'logs'

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const logger = new (winston.Logger)({
  level: 'debug',
  transports: [
    new (winston.transports.Console)({ json: false, timestamp: true }),
    new winston.transports.File({ filename: path.join(logDir, '/debug.log'), json: false })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({ json: false, timestamp: true, humanReadableUnhandledException: true }),
    new winston.transports.File({ filename: path.join(logDir, '/debug.log'), json: false, humanReadableUnhandledException: true })
  ],
  exitOnError: false
})

'use strict';

var f = require('util').format,
MongoError = require('../error').MongoError;

// Filters for classes
var classFilters = {};
var filteredClasses = {};
var level = null;
// Save the process id
var pid = process.pid;
// current logger
var currentLogger = null;

/**
* Creates a new Logger instance
* @class
* @param {string} className The Class name associated with the logging instance
* @param {object} [options=null] Optional settings.
* @param {Function} [options.logger=null] Custom logger function;
* @param {string} [options.loggerLevel=error] Override default global log level.
* @return {Logger} a Logger instance.
*/
var Logger = function(className, options) {
if (!(this instanceof Logger)) return new Logger(className, options);
options = options || {};

// Current reference
this.className = className;

// Current logger
if (options.logger) {
currentLogger = options.logger;
} else if (currentLogger == null) {
currentLogger = console.log;
}

// Set level of logging, default is error
if (options.loggerLevel) {
level = options.loggerLevel || 'error';
}

// Add all class names
if (filteredClasses[this.className] == null)
classFilters[this.className] = true;
};

/**
* Log a message at the debug level
* @method
* @param {string} message The message to log
* @param {object} object additional meta data to log
* @return {null}
*/
Logger.prototype.debug = function(message, object) {
if (
this.isDebug() &&
((Object.keys(filteredClasses).length > 0 && filteredClasses[this.className]) ||
(Object.keys(filteredClasses).length === 0 && classFilters[this.className]))
) {
var dateTime = new Date().getTime();
var msg = f('[%s-%s:%s] %s %s', 'DEBUG', this.className, pid,
dateTime, message);
var state = {
type: 'debug',
message: message,
className: this.className,
pid: pid,
date: dateTime
};
if (object) state.meta = object;
currentLogger(msg, state);
}
};

/**
* Log a message at the warn level
* @method
* @param {string} message The message to log
* @param {object} object additional meta data to log
* @return {null}
*/
(Logger.prototype.warn = function(message, object) {
if (
this.isWarn() &&
((Object.keys(filteredClasses).length > 0 && filteredClasses[this.className]) ||
(Object.keys(filteredClasses).length === 0 && classFilters[this.className]))
) {
var dateTime = new Date().getTime();
var msg = f('[%s-%s:%s] %s %s', 'WARN', this.className, pid, dateTime, message);
var state = {
type: 'warn',
message: message,
className: this.className,
pid: pid,
date: dateTime
};

module.exports = Logger;
