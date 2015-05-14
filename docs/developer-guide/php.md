## Installation

Clone with git

[https://github.com/sandklock/soclall-api-php](https://github.com/sandklock/soclall-api-php)

```
<?php
// Register app id and secret key
$soclall = new SoclAll('app_id', 'secret_key');
?>
```

## Authentication

Let user login and authenticate with your application.

```
<?php
// Get login url
$login_url = $soclall->getLoginUrl('network', 'callback_url');
// Redirect user to login url
header('Location: '.$login_url);
?>
```

## API

### /user

This endpoint retrieves user information.

```
<?php
// Get user object
$user = $soclall->getUser('token');
?>
```

The [`user`](user-object.md) object returns JSON structured like this:

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
<?php
// Get friend list
$friends = $soclall->getFriends('token');
?>
```

The `friends` object returns an array of [`user`](user-object.md) object like this:

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
<?php
// Send a message to friends
$soclall->sendMessage('token', 'message', $friend_ids, $title = '');
?>
```

### /publish

This endpoint will publish a message to user's wall/timeline/stream.

```
<?php
// Publish a message to wall/timeline/stream
$soclall->publish('token', 'message');
?>
```
