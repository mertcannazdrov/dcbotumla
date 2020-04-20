const config = {
    "ownerID": "367475819603558410", //kendi IDınızı yazınız
    "admins": ["367475819603558410"],
    "support": ["367475819603558410"],
    "token": "NzAxMjAxNzU5Mzk3MzQ3MzI4.XpzPDw.OycxzyVdmv_tnp1-gjUlU8jpwtA", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "_etHhRNBECOxyeyumyXfcIvIo7mweQWP", //botunuzun secretini yazınız
      "callbackURL": `https://nazdrovbeta.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://nazdrovbeta.glitch.me/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;