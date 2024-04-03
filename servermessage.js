document.getElementById('sendNotificationBtn').addEventListener('click', function() {
    sendFCMNotification();
  });
  
  function sendFCMNotification() {
    var url = 'https://fcm.googleapis.com/fcm/send';
    var apiKey = 'AAAAxF22GYI:APA91bEGDsPEXh23v1PGpgraVvfz1rx8yZqBYL-EjwFH33XQVoXCm2hIDFYX-EbpRle6-I75lcE-8HUD_XBe6TR0Cgn281tq_JDqlTOyydysF1PB7YatDG_qIwCe-nEvurS3CiQnC7Kc';
    
    var data = {
      "to": "/topics/TestTopic",
      "notification": {
        "title": "Santhosh notification title",
        "body": "Santhosh Test",
        "click_action": "action or activity name to open intent"
      },
      "data": {
        "message": "this data message",
        "title": "this data message title",
        "body": "this data message body"
      }
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=' + apiKey
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('FCM Notification failed');
      }
      console.log('FCM Notification Sent Successfully');
    })
    .catch(function(error) {
      console.error('Error sending FCM Notification:', error);
    });
  }
  