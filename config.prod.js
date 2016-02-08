// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://docs.ghost.org/usage/configuration/

var path = require('path'),
    config;

config = {    
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://localhost:2368',

        // Example mail config
        // Visit http://docs.ghost.org/mail for instructions
        // ```
         mail: {
             transport: 'SMTP',
             options: {
                 service: 'Mailgun',
                 auth: {
                     user: 'postmaster@sandbox83e69d91d2b54e069fbbb658848b2c75.mailgun.org', // mailgun username
                     pass: '9a22220cff4034a46084796a04e30daa'  // mailgun password
                 }
             }
         },
        // ```

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://rafalbuch.com',
         mail: {
             transport: 'SMTP',
             options: {
                 service: 'Mailgun',
                 auth: {
                     user: 'postmaster@sandbox83e69d91d2b54e069fbbb658848b2c75.mailgun.org', // mailgun username
                     pass: '9a22220cff4034a46084796a04e30daa'  // mailgun password
                 }
             }
         },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    }
};

// Export config
module.exports = config;
