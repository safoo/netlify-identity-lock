# netlify-identity-lock
Use Netlify to create a private website in 10 minutes. [Demo](https://gracious-mayer-6485f9.netlify.com/)

__Services Used__
1. Netlify
1. Netlify Identity Widget - Handles user authentication, invites, email confirmations, password resets etc.
1. Netlify Role Based Redirects

## Code Changes
1. __Add a login page.__ Use [Login.html](https://github.com/safoo/netlify-identity-lock/blob/master/login.html) or add the necessary JavaScript from the file. This page will be accessed by all visitors - logged in and not-logged-in.

1. __Add a function to check the user's domain.__ Copy [identity-check-domain.js](https://github.com/safoo/netlify-identity-lock/blob/master/functions/identity-check-domain.js) to your functions folder in Netlify. Change the domain entries to your company's domain. This function authorizes a user based on their email domain.

1. __Add role-based redirect rules.__ Add the [\_redirects](https://github.com/safoo/netlify-identity-lock/blob/master/_redirects) file to allow authorized users access to your content. Make necessary edits to the rules if you have folders or subdomains. Note the user's role is assigned by the function.

## Configure your Netlify account

#### Enable Identity for your site
In your Netlify admin UI navigate to your site page, select the _Identity_ tab, and click _Enable Identity_
#### Registration Settings
1. __Open, or invite only:__ Set under Site->Settings->Identity->Registration->Registration preferences 
1. __Adding external provider:__ If using an external provider (e.g. Google), then set under Site->Settings->-Identity-> Registration->External providers. You can also add your organization's Google key in this modal.
1. __Configure email setting:__ Optionally configure email settings under Site->Settings->Identity->Emails
#### Configure the Function
1. __Set Functions folder:__ Specify the functions folder under Site->Settings->Functions->Settings
1. __Add the function webhook:__ Under Site->Settings->Identity->Notifications->Webhook add the function URL and toggle ON _validate_, _signup_, _login_. The function URL is shown under Site->Functions->identity-check-domain.js->Endpoint
