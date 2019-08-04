let getHomePage =  (req,res) => {
    return res.render('main/home/index')
}

module.exports = {
    getHomePage:getHomePage
};