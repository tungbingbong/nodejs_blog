
class NewsController {

    // [GET] /news
    index(req, res){
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('Hes slows sly!!!');
    }

}

module.exports = new NewsController;