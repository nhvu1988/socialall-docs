---
title: SoclAll API Reference

language_tabs:
  - javascript
  - php

toc_footers:
  - <a target="_blank" href='http://www.soclall.com/register'>Sign Up to access SoclAll API</a>
  - <a target="_blank" href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

---

# SoclAll

Welcome to the SoclAll API! You can use our API to access SoclAll API endpoints, which can get connect your users to their social network accounts

Go to <a target='_blank' href='https://www.soclall.com'>SoclAll</a> and register an application for your website to get the app id and secret key

### Settings
Name | Description | Example
--- | --- | ---
domain | Your site's domain | domain.com

# Installation

## Node.js

```javascript
// Register app id and secret key
var SoclAll = require('soclall-api')
  , soclall = new SoclAll('app_id', 'secret_key');
```

Install from npm

`npm install soclall-api --save`

<aside class="notice">
If you get an error about permissions and are on Linux, Mac OS X, or another flavour of Unix, you may need to use <code class="prettyprint">sudo</code>:<br/>
<code class="prettyprint">sudo npm install soclall-api --save</code>
</aside>

## PHP

```php
<?php
// Register app id and secret key
$soclall = new SoclAll('app_id', 'secret_key');
?>
```

Clone with git

[https://github.com/sandklock/soclall-api-php](https://github.com/sandklock/soclall-api-php)

# Authentication

```javascript
// Get login url
var login_url = soclall.getLoginUrl('network', 'callback_url');
// Redirect user to login url
res.redirect(login_url);
```

```php
<?php
// Get login url
$login_url = $soclall->getLoginUrl('network', 'callback_url');
// Redirect user to login url
header('Location: '.$login_url);
?>
```

Let user login and authenticate with your application.

### HTTP REQUEST

`REDIRECT https://api.soclall.com/login`

### Query Parameters

Parameter | Value | Description
--------- | ------- | -----------
app_id | | Your application's id.
network | [network](#networks) | Network user want to connect.
callback | | Callback url to retrieve user's `token`.

<aside class="success">After user accepts all permission and allow to access. An access `token` will be submitted to your callback.</aside>

# API

## /user

```javascript
// An user object returns in callback function
soclall.getUser('token', function(err, user){});
```

```php
<?php
// Get user object
$user = $soclall->getUser('token');
?>
```

> The `user` object returns JSON structured like this:

```python
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

This endpoint retrieves user information.

### HTTP Request

`GET https://api.soclall.com/user`

### Query Parameters

Parameter | Value | Description
--------- | ------- | -----------
token |  | User's token

### Response

Return an `user` object

<aside class="notice">The user object does not contain fully information. Missing fields return with empty string</aside>

## /friends

```javascript
// An array of user returns in callback function
soclall.getFriends('token', function(err, friends){});
```

```php
<?php
// Get friend list
$friends = $soclall->getFriends('token');
?>
```

> The `friends` object returns an array of `user` object like this:

```python
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

This endpoint retrieves user's friends.

### HTTP Request

`GET https://api.soclall.com/friends`

### URL Parameters

Parameter | Value | Description
--------- | ------- | -----------
token |  | User's token

### Response

Return array of `user` objects

## /message

```javascript
// Send a message to friends
soclall.sendMessage('token', 'message', friend_ids, ['title',] function(err){});
```

```php
<?php
// Send a message to friends
$soclall->sendMessage('token', 'message', $friend_ids, $title = '');
?>
```

This endpoint will send `message` to user's friends.

### HTTP Request

`GET https://api.soclall.com/message`

### URL Parameters

Parameter | Value | Description
--------- | ------- | -----------
token | | User's token
message | | Message content
friends | | List friend ids join by comma
title | | [optional] Title for LinkedIn and Tumblr

<aside class="warning">
<code class="prettyprint">title</code> is required field for LinkedIn and Tumblr
</aside>


## /publish

```javascript
// Publish a message to wall/timeline/stream
soclall.publish('token', 'message', function(err){});
```

```php
<?php
// Publish a message to wall/timeline/stream
$soclall->publish('token', 'message');
?>
```

This endpoint will publish a message to user's wall/timeline/stream.

### HTTP Request

`GET https://api.soclall.com/publish`

### URL Parameters

Parameter | Value | Description
--------- | ------- | -----------
token | | User's token
message | | Message 

# Networks
<p class="expand_table"></p>
Network | Code | /user | /friends | /message | /publish
--- | --- | :-: | :-: | :-: | :-:
Facebook | facebook | <i class="success"></i> | <i class="success"></i> | | <i class="success"></i>
Twitter | twitter | <i class="success"></i> | <i class="success"></i> | <i class="success"></i> | <i class="success"></i>
Google Plus | google | <i class="success"></i> | <i class="success"></i> | | 
LinkedIn | linkedin | <i class="success"></i> | <i class="success"></i> | <i class="success"></i> | <i class="success"></i>
Live | live | <i class="success"></i> | <i class="success"></i> | |
Plurk | plurk | <i class="success"></i> | <i class="success"></i> | <i class="success"></i> | <i class="success"></i>
Tumblr | tumblr | <i class="success"></i> | <i class="success"></i> | <i class="success"></i> | <i class="success"></i>
Mail.ru | mailru | <i class="success"></i> | <i class="success"></i> | <i class="success"></i> | <i class="success"></i>
Reddit | reddit | <i class="success"></i> | <i class="success"></i> | |
Last.fm | lastfm | <i class="success"></i> | <i class="success"></i> | <i class="success"></i> | <i class="success"></i>
Vkontakte | vkontakte | <i class="success"></i> | | | 
Disqus | disqus | <i class="success"></i> | | |
Wordpress | wordpress | <i class="success"></i> | | |
Foursquare | foursquare | <i class="success"></i> | | |
Github | github | <i class="success"></i> | | |