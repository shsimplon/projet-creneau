const express = require('express');

const router = express.Router();
// eslint-disable-next-line import/no-unresolved
const isAuth = require('../middlewares/isAuth');
const signupController = require('../controllers/signupController');
const UserSignInController = require('../controllers/UserSignInController');
const bookingUpdateController = require('../controllers/bookingUpdateController');
const bookingUserController = require('../controllers/bookingUserController');

router.get('/api', (req, res) => {
  res.json({ message: 'hello, world!' });
});

router.post('/api/signin', UserSignInController.signin);

router.post('/api/signup', signupController.newAccount);


router.patch(
  '/api/booking/:bookingId',
  isAuth,
  bookingUpdateController.updateBooking,
);
router.delete(
  '/api/booking/:bookingId',
  isAuth,
  bookingUpdateController.deleteBooking,
);
router.get('/api/booking/:bookingId', isAuth, bookingUpdateController.updateBooking);
router.get('/api/bookings', isAuth, bookingUpdateController.findAllBooking);


router.post('/api/booking', isAuth, bookingUserController.userBooking);


module.exports = router;
