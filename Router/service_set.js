const express = require('express')
const router = express.Router();

router.get('/service_set', (req, res) => {
  if (req.session.is_logined == true)
  {
    res.render('service_set');
  }
  else
  {
    res.send("<script>alert('로그인 권한이 필요합니다.'); window.location.replace('/login');</script>")
  }
  

});

module.exports = router;