const axios = require('axios');

const webhookUrl = process.env.WEBHOOK_URL;
const formData = JSON.parse(process.env.DATA);

axios.post(webhookUrl, formData)
  .then(response => {
    console.log('Form data submitted successfully');
  })
  .catch(error => {
    console.error('Error submitting form data:', error);
  });
