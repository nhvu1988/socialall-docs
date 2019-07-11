__Step-by-Step Guide to Setup Facebook App:__

<iframe width="560" height="315" src="https://www.youtube.com/embed/2xt8w-yQHgk" frameborder="0" allowfullscreen></iframe>
<br /><br />

### I. To register an application on Facebook, please follow all steps below:

1. Login to [Facebook](http://www.facebook.com) and go to [Facebook Developer Page](https://developers.facebook.com/quickstarts/?platform=web) to create application.
2. Fill your application name and press button "Create New Facebook App ID".
    <div class="soclall-br"></div>
    ![Facebook : Create App name](/img/facebook-1-create-app-name.JPG)
    <div class="soclall-br"></div>
3. Select any category and press button "Create App ID".
    <div class="soclall-br"></div>
    ![Facebook : Select Any Category](/img/facebook-2-select-any-category.JPG)
    <div class="soclall-br"></div>
4. Press button "Skip Quick Start" and go to page "App Setting".
5. Select "Settings" menu, then press button "+ Add Platform" ---> select "Website" ---> fill the information below:
    * App Domains: __api2.socialall.dev__
    * Site URL: __https://api2.socialall.dev/callback__  

    ![Facebook : Setting Page](/img/facebook-3-setting-page.JPG)
    <div class="soclall-br"></div>
 
6. After done, press button "Save Changes".  
7. Select "App Review" menu, press button "No" change to "Yes" on first block. 
    <div class="soclall-br"></div>
    ![Facebook : Status Page](/img/facebook-4-status-page.jpg)
    <div class="soclall-br"></div>    
8. In the Settings page, you can see "App ID" and "App Secret". To can copy "App Secret", you click "Show" button ---> enter Password of your Facebook account.
    <div class="soclall-br"></div>
    ![Facebook : Get Api](/img/facebook-5-get-api.jpg)
    <div class="soclall-br"></div>
9. In SocialAll page, you choose tab "Networks" ---> choose "Facebook" ---> fill the "App ID" and "App Secret" into form like image below:
    <div class="soclall-br"></div>
    ![Facebook : Config Api](/img/facebook-6-config-api.jpg)
    <div class="soclall-br"></div>
10. Finaly, you press "Save" button.

---

### II. How send App Review to approve Login permissions:

1. At "Facebook Developer" page, select the application you want to add permissions and approval. Then, select "App Review" menu ---> In "Submit Items for Approval" field, press "Start a Submission" button.
    <div class="soclall-br"></div>
    ![Facebook : Start Review](/img/facebook-7-start-review.jpg)
    <div class="soclall-br"></div>
2. In "LOGIN PERMISSIONS" field, select Login permissions follow: 
    * select __publish_actions__ if you want use "SocialAll Posting".
    * select __user_photos__ if you want use "SocialAll Photos".
    
    ![Facebook : Select Action](/img/facebook-8-select-action.jpg)
    <div class="soclall-br"></div>
    
3. Then, press "Add Item" button. Like the image below, you must complete the requirements in the "Before you can submit for review, complete the following:" section before proceeding to the next step. After you complete these requirements, continue press "Edit Notes" of each Login permission you selected.
    <div class="soclall-br"></div>
    ![Facebook : Review Settings](/img/facebook-9-review-settings.jpg)
    <div class="soclall-br"></div>
4. With __publish_actions__ permission, edit notes follow:
    * Select all the checkbox in the "To get approved for publish_actions, please confirm that your app follows these policies:" field.
    * In the "How is your app using publish_actions?" field: select __Lets people post to Facebook using a custom composer__
    * In the "What platforms does your app use publish_actions on?" field: select __Web__, press button __Off__ change to __On__
    * Next, please complete the next fields.
    * Finally, press "Save" button.
    
    ![Facebook : Edit Notes of publish_actions](/img/facebook-10-publish-edit-notes.jpg)
    <div class="soclall-br"></div>
    
5. To send this review, press "Submit For Review" button.