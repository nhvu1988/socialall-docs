__To register an application on Ebay, please follow all steps below:__

1. Join or Sign In to [Ebay Developers](https://developer.ebay.com/join/). If you don't have any account in Ebay Developers, you can fill required information like image below to create a account:
    <div class="soclall-br"></div>
    ![Ebay : Create account](/img/ebay-1-join-form.png)
    <div class="soclall-br"></div>
2. After you created account success, you'll receive a email from Ebay Developer to activate your account. After you activate account, click "My Account" link in the red menu at the top of page.
3. In the "My Account" page, you press "Generate Production Keys" button. And you'll see the result like below:
    <div class="soclall-br"></div>
    ![Ebay : Production Keys](/img/ebay-2-production-keys.png)
    <div class="soclall-br"></div>
4. Then, you choose "application settings" tab. In the "Manage Application Settings" page, you choose the options below:
    * Select an environment: choose __Production__
    * Select a key set: choose a Key Set (Name of Key Set generated)
    
    ![Ebay : Application Settings](/img/ebay-3-application-settings.png)
    <div class="soclall-br"></div>

5. In the "Customize the eBay User Consent Form" section, you click the "Customize the eBay User Consent Form" link.
6. In the "Application Level Settings" section, you fill the information below:
    * Show Application Details: choose __enabled__
    * Application URL: __https://api2.socialall.dev/__
    
    ![Ebay : Application Level Settings](/img/ebay-4-application-level-settings.png)
    <div class="soclall-br"></div>
    
7. If done, press "Save Settings" button. Then, in the "Manage Your RuNames" section, you press "Generate Runame" button. After a minute or so, you can see a success message and a new "RuName" in the "Manage Your RuNames" section.
8. Then, you continue click "Show Details" link for the new RuName and fill the information below: 
    * Authorization Type: choose __Authorization__
    * Accept Redirect URL: __https://api2.socialall.dev/callback__
    * Reject Redirect URL: __https://api2.socialall.dev/callback__
    
    ![Ebay : Application Settings](/img/ebay-5-manage-runame.png)
    <div class="soclall-br"></div>
    
9. If done, press "Save Settings" button again.
10. In SocialAll page, you choose tab "Networks" ---> choose "Ebay" ---> fill the "DevID", "AppID", "CertID" and "RuName" into form like image below:
    
11. Finaly, you press "Save" button.