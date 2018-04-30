'use strict';

var AppSettings = {
  appTitle: 'Example Application',
  default_image: "placeholder_for_missing_posters.png",
  api_get_dogs_url: "https://3qmdidd3q5.execute-api.us-east-1.amazonaws.com/dogs",
  backup_url: "./api/CONTENTLISTINGPAGE-PAGE1.json",
  search_dogs_url: "https://3qmdidd3q5.execute-api.us-east-1.amazonaws.com/dogs",
  api_send_mail_url : "https://3qmdidd3q5.execute-api.us-east-1.amazonaws.com/mail"
};

module.exports = AppSettings;