# EmailJS Setup Guide

Follow these steps to configure EmailJS for your contact form:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the provider-specific setup instructions
5. Copy your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

### Template Content:

**Subject:** New Contact Form Submission from {{name}}

**Body:** (Switch to HTML editor and paste this)
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

**Template Variables Used:**
- `{{name}}` - Sender's name
- `{{message}}` - Project details/message
- `{{time}}` - Timestamp of submission

4. Save the template and copy your **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123XYZ`)

## 5. Update Your Code

Open `src/app/contact/contact.component.ts` and replace:

```typescript
// Line 31: Replace with your Public Key
emailjs.init('YOUR_PUBLIC_KEY');

// Line 44-45: Replace with your Service ID and Template ID
const response = await emailjs.send(
  'YOUR_SERVICE_ID',  // Replace with your service ID
  'YOUR_TEMPLATE_ID', // Replace with your template ID
  {
    name: this.formData.name,
    message: this.formData.projectDetails,
    time: new Date().toLocaleString(),
  }
);
```

## 6. Test Your Form

1. Run `npm start` if not already running
2. Navigate to the Contact section
3. Fill out the form with test data
4. Submit and check your email

## EmailJS Free Tier Limits

- 200 emails/month
- No credit card required
- Perfect for portfolio websites

## Troubleshooting

### Emails not sending?
- Check browser console for errors
- Verify all IDs are correct (Service ID, Template ID, Public Key)
- Ensure template variable names match: `{{name}}`, `{{message}}`, `{{time}}`
- Check EmailJS dashboard for error logs

### CORS errors?
- Make sure you're using the correct Public Key (not Private Key)
- Check that your domain is allowed in EmailJS settings

### Template not receiving data?
- Verify template variable names match exactly
- Check that form field names match the template parameters

## Support

For more help, visit [EmailJS Documentation](https://www.emailjs.com/docs/)
