__To register an application on Google PLus, please follow the steps below:__

1. Login to [Google Account](https://accounts.google.com/) and go to Page [Google Developer](https://console.developers.google.com/) to create application
2. Press button "Create Project" and then fill "Project name"
    <div class="soclall-br"></div>
    ![Google : Create Form](/img/google-2-create-form.JPG)
    <div class="soclall-br"></div>
3. When project was created successfully, select menu "Credentials" and select tab "OAuth consent screen", fill "Product Name" and press button "Save".
    <div class="soclall-br"></div>
    ![Google : Consent Screen](/img/google-3-consent-screen.jpg)
    <div class="soclall-br"></div>
4. After that, select tab "Credentials", press button "Add credentials" and select "OAuth 2.0 client ID". Then choose "Web application" option and fill the form with the below information:
    * Authorized Javascript Origins: __https://api2.soclall.com/__
    * Authorized Redirect Uris: 
        - __http://api2.soclall.com/callback__
        - __https://api2.soclall.com/callback__
5. Then press button "Create".
    <div class="soclall-br"></div>
    ![Google : Credentials](/img/google-4-credentials.JPG)
    <div class="soclall-br"></div>
6. Select menu "APIs", at tab "API Library", select link "Google+ API" in "Social APIs" section.
7. Then press button "Enable API".
    <div class="soclall-br"></div>
    ![Google : Enable APIs](/img/google-5-apis.jpg)
    <div class="soclall-br"></div>
8. After successfully registered the client ID, at "Credentials" page, click select new client ID created, you can get the "Client ID" and "Client Secret" to fill SoclAll Google Settings form.
    <div class="soclall-br"></div>
    ![Google : Client Info](/img/google-6-client-info.JPG)
    <div class="soclall-br"></div>