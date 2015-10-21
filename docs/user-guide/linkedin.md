__To register an application on LinkedIn, please follow the steps below:__

1. Login to [LinkedIn](https://www.linkedin.com/) and go to Page [LinkedIn App](https://www.linkedin.com/secure/developer) to create application
    <div class="soclall-br"></div>
    ![Linkedin : List App](/img/linkedin-1-list-app.JPG)
    <div class="soclall-br"></div>
2. Press button "Add New Application" and fill the application form with the below information
    * Website URL: __https://socialall.io/__
3. Then, check to agreement checkbox and press button "Submit".
    <div class="soclall-br"></div>
    ![Linkedin : Create App Form](/img/linkedin-2-create-app-form.jpg)
    <div class="soclall-br"></div>
4. After create application success, select menu "Authentication" and go to "Authentication" page.
5. In session "Default Application Permissions", please check:
    * r_basicprofile: if you want to use "SocialAll Login"
    * r_emailaddress: if you want to use "SocialAll Invite"
    * w_share: if you want to use "SocialAll Posting"
6. In session "OAuth 2.0", fill "Authorized Redirect URLs" field: __http://api2.socialall.io/callback__ and press button "Add". Then, re-fill: __https://api2.socialall.io/callback__ and press button "Add".
    <div class="soclall-br"></div>
    ![Linkedin : Authentication Page](/img/linkedin-3-authentication-page.jpg)
    <div class="soclall-br"></div> 
7. After all, press button "Update".
8. Select menu "Settings", change "Application Status" to __Live__ and press button "Update".
    <div class="soclall-br"></div>
    ![Linkedin : Settings Page](/img/linkedin-4-settings-page.jpg)
    <div class="soclall-br"></div>    
9. In "Authentication" page, you can see "Client ID" and "Client Secret".
    <div class="soclall-br"></div>
    ![LinkedIn : Get Api](/img/linkedin-5-get-api.jpg)
    <div class="soclall-br"></div>
10. In SocialAll page, you choose tab "Networks" ---> choose "LinkedIn" ---> fill the "Client ID" and "Client Secret" into form like image below:
    <div class="soclall-br"></div>
    ![LinkedIn : Config Api](/img/linkedin-6-config-api.jpg)
    <div class="soclall-br"></div>
11. Finaly, you press "Save" button.