
module.exports = {

    success: function(message, context) {
        if(context) {
            console.log(message)
        } else {
            console.log(message, '(' + context.constructor.name + ')')
        }
    },

    error: function(message, context) {
        if(context) {
            console.log("[ERROR]", message)
        } else {
            console.log("[ERROR]", message, '(' + context.constructor.name + ')')
        }
    },

}
