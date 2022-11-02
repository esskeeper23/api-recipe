const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const typeServices = require('./types.services')


router.route('/')
    .get(typeServices.getAllTypes)
    .post(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        typeServices.postType
    )


router.route('/:id')
    .get(typeServices.getTypeById)
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        typeServices.deleteType
    )


module.exports = router
