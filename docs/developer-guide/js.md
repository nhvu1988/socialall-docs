## Installation
__Node.js__

Install from npm

```
npm install soclall-api --save
```

<aside><i class="fa fa-info-circle"></i> If you get an error about permissions and are on Linux, Mac OS X, or another flavour of Unix, you may need to use <code>sudo</code>:<br/>
<code>sudo npm install soclall-api --save</code>
</aside>

```
// Register app id and secret key
var SoclAll = require('soclall-api'), soclall = new SoclAll('app_id', 'secret_key');
```

## Authentication

Let user login and authenticate with your application.

```
// Get login url
var login_url = soclall.getLoginUrl('network', 'callback_url');
// Redirect user to login url
res.redirect(login_url);
```

__HTTP REQUEST__

`REDIRECT https://api.soclall.com/login`

__Query Parameters__

Parameter | Value | Description
--------- | ------- | -----------
app_id | | Your application's id.
network | [network](#networks) | Network user want to connect.
callback | | Callback url to retrieve user's `token`.

<aside class="soclall-success"><i class="fa fa-check-circle"></i> After user accepts all permission and allow to access. An access <code>token</code> will be submitted to your callback.</aside>

## API

### /user

This endpoint retrieves user information.

```
// An user object returns in callback function
soclall.getUser('token', function(err, user){});
```

The `user` object returns JSON structured like this:

```
{
  // general
  "id": 2,
  "username": "Boy",
  "email": "boy@soclall.com",
  // name
  "full_name": "Boy Nguyen", // full name || first name + lastname
  "first_name": "Boy",
  "last_name": "Nguyen",
  "display_name": "Boy Boy", // Google Plus
  // profile
  "profile_url": "http://www.facebook.com/boy",
  "avatar_url": "",
  "avatar_small_url": "",
  "avatar_medium_url": "",
  "avatar_big_url": "",
  "gender": "", // male || female || unknown
  "date_of_birth": "", // YYYY/MM/DD
}
```

__HTTP Request__

`GET https://api.soclall.com/user`

__Query Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token |  | User's token

__Response__

Return an `user` object

<aside><i class="fa fa-info-circle"></i> The user object does not contain fully information. Missing fields return with empty string.</aside>

### /friends

This endpoint retrieves user's friends.

```
// An array of user returns in callback function
soclall.getFriends('token', function(err, friends){});
```

The `friends` object returns an array of `user` object like this:

```
[
  {
    "id": 2,
    "username": "Boy",
    "email": "boy@soclall.com",
    ...
  },
  {
    "id": 3,
    "username": "Girl",
    "email": "girl@soclall.com",
    ...
  }
]
```

__HTTP Request__

`GET https://api.soclall.com/friends`

__URL Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token |  | User's token

__Response__

Return array of `user` objects

### /message

This endpoint will send `message` to user's friends.

```
// Send a message to friends
soclall.sendMessage('token', 'message', friend_ids, ['title',] function(err){});
```

__HTTP Request__

`GET https://api.soclall.com/message`

__URL Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token | | User's token
message | | Message content
friends | | List friend ids join by comma
title | | [optional] Title for LinkedIn and Tumblr

<aside class="soclall-warning"><i class="fa fa-exclamation-circle"></i> <code>title</code> is required field for LinkedIn and Tumblr.</aside>

### /publish

This endpoint will publish a message to user's wall/timeline/stream.

```
// Publish a message to wall/timeline/stream
soclall.publish('token', 'message', function(err){});
```

__HTTP Request__

`GET https://api.soclall.com/publish`

__URL Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token | | User's token
message | | Message 