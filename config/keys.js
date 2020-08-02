if(process.env.NODE_ENV === 'production'){
    //we are in production
    module.exports = require('./prod');
}
else{
    //DEV
    module.exports = require('./dev');
}