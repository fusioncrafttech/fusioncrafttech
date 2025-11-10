# Email Setup Guide for Contact Form

The contact form is ready to send emails to **fusioncrafttech@gmail.com** using EmailJS.

## Quick Setup (5 minutes)

### Step 1: Create Free EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Enter your email (fusioncrafttech@gmail.com) and create password
4. Verify your email address

### Step 2: Connect Gmail Account

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and authorize with your Gmail
5. After connection, you'll get a **Service ID** - copy it!

### Step 3: Create Email Template

1. Go to **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. Name: **"FusionCraft Contact"**
4. Subject Line: `New Contact - {{from_name}}`
5. Content (copy & paste):

```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

Message:
{{message}}

---
Sent from FusionCraft Tech website
```

6. **To Email**: `fusioncrafttech@gmail.com`
7. Click **"Save"** and copy the **Template ID**

### Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. Find **"API Keys"** section
3. Copy your **Public Key**

### Step 5: Add Credentials to Contact.jsx

Open `src/pages/Contact.jsx` and replace lines 30-32:

**FIND:**
```javascript
const serviceId = 'service_xxxxxx'
const templateId = 'template_xxxxxx'
const publicKey = 'your_public_key'
```

**REPLACE WITH YOUR CREDENTIALS:**
```javascript
const serviceId = 'service_abc123'  // Your EmailJS service ID
const templateId = 'template_xyz789'  // Your EmailJS template ID
const publicKey = 'abcdefghijklmnop'  // Your EmailJS public key
```

### Step 6: Test Your Form!

1. Save the file
2. Run `npm run dev`
3. Go to Contact page
4. Fill out the form
5. Click "Send Message"
6. Check fusioncrafttech@gmail.com inbox!

## What You'll Get in Email

```
Subject: New Contact - [Visitor Name]

New Contact Form Submission

Name: John Doe
Email: john@example.com
Company: Tech Corp
Phone: +91 9876543210

Message:
[Their message here]

---
Sent from FusionCraft Tech website
```

## Troubleshooting

### Email Not Sending?

**Check these:**
- ✅ All three IDs are correctly added
- ✅ EmailJS service is connected (green checkmark)
- ✅ Gmail account is authorized
- ✅ No typos in email addresses

**Console Errors:**
Open browser console (F12) and check for errors. Common issues:
- Invalid service ID
- Template ID not found
- Public key incorrect

### Still Having Issues?

1. Check EmailJS dashboard for error logs
2. Verify Gmail connection is active
3. Make sure you're using the correct IDs
4. Check spam folder in Gmail

## Alternative: Use Backend

If EmailJS doesn't work, you can:
1. Create a backend API (Node.js/Python)
2. Use SMTP to send emails
3. Integrate with SendGrid, AWS SES, etc.

---

**Ready to go!** Once you add your credentials, the form will work instantly.





