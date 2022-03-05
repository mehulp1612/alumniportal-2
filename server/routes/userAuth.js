const express = require('express');
const { register, login, newRegisterEmail, getPendingMembers, getApprovedMembers, updatePendingMember, deletePendingMember, uniqueMobile, uniqueRollNumber, sendOtp, updatePassword } = require('../controller/userAuth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/newuser', newRegisterEmail);
router.get('/pendingmembers', getPendingMembers);
router.get('/approvedmembers', getApprovedMembers);
router.put('/updatependingmember', updatePendingMember);
router.post('/deletependingmember', deletePendingMember);
router.post('/uniquemobile', uniqueMobile);
router.post('/uniquerollnumber', uniqueRollNumber);
router.post('/sendotp',sendOtp);
router.post('/updatepassword',updatePassword);

module.exports = router;