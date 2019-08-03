let getHomePage =  (req,res) => {
    return res.render('main/master')
}

module.exports = {
    getHomePage:getHomePage
};