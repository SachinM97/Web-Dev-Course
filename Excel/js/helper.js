async function fun_name (data) {
    // var userData = data;


    console.log('Printing from helper.js: ', data);
}

async function test () {
    console.log("Print");
}


module.exports = {fun_name, test};