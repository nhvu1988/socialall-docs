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

## API

### /user

This endpoint retrieves user information.

```
// An user object returns in callback function
soclall.getUser('token', function(err, user){});
```

The `result` returns [`user`](user-object.md) JSON object structured like this:

```
{
  // general
  "id": 2,
  "username": "Boy",
  "email": "boy@soclall.com",
  // name
  "full_name": "Boy Nguyen", // full name || first name + lastname
  ...
}
```

### /friends

This endpoint retrieves user's friends.

```
// An array of user returns in callback function
soclall.getFriends('token', function(err, friends){});
```

The `result` returns an array of [`user`](user-object.md) object like this:

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

### /message

This endpoint will send `message` to user's friends.

```
// Send a message to friends
soclall.sendMessage('token', 'message', friend_ids, ['title',] function(err){});
```

### /publish

This endpoint will publish a message to user's wall/timeline/stream.

```
// Publish a message to wall/timeline/stream
soclall.publish('token', 'message', function(err){});
```

The `result` returns a JSON object structured like this:
```
{
    "link": "https://www.facebook.com/.../posts/..."
}
```