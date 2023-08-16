/**
 * GET /
 * Homepage
*/

exports.homepage = async (req, res) => {
    const locals = {
        title: 'NoteBud - Home',
        description: 'NodeJS Notes App'
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * GET /
 * About
*/

exports.about = async (req, res) => {
    const locals = {
        title: 'NoteBud - About',
        description: 'NodeJS Notes App'
    }
    res.render('about', locals);
}

/**
 * GET /
 * Features
*/

exports.features = async (req, res) => {
    const locals = {
        title: 'NoteBud - Features',
        description: 'NodeJS Notes App'
    }
    res.render('features', locals);
}

/**
 * GET /
 * Contact
*/

exports.contact = async (req, res) => {
    const locals = {
        title: 'NoteBud - Contact',
        description: 'NodeJS Notes App'
    }
    res.render('contact', locals);
}