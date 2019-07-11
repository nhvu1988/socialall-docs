## Installation

Clone with git

[https://github.com/sandklock/soclall-api-php](https://github.com/sandklock/soclall-api-php)

```
<?php
// Register app id and secret key
$socialall = new SoclAll('app_id', 'secret_key');
?>
```

## Authentication

Let user login and authenticate with your application.

```
<?php
// Get login url
$login_url = $socialall->getLoginUrl('network', 'callback_url');
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
$user = $socialall->getUser('token');
?>
```

The `result` returns [`user`](user-object.md) JSON object structured like this:

```
{
  // general
  "id": 2,
  "username": "Boy",
  "email": "boy@socialall.dev",
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
$friends = $socialall->getFriends('token');
?>
```

The `result` returns an array of [`user`](user-object.md) object like this:

```
[
  {
    "id": 2,
    "username": "Boy",
    "email": "boy@socialall.dev",
    ...
  },
  {
    "id": 3,
    "username": "Girl",
    "email": "girl@socialall.dev",
    ...
  }
]
```

### /message

This endpoint will send `message` to user's friends.

```
<?php
// Send a message to friends
$socialall->sendMessage('token', 'message', $friend_ids, $title = '');
?>
```

### /publish

This endpoint will publish a message to user's wall/timeline/stream.

```
<?php
// Publish a message to wall/timeline/stream
$socialall->publish('token', 'message');
?>
```

The `result` returns a JSON object structured like this:
```
{
    "link": "https://www.facebook.com/.../posts/..."
}
```

### /pages

This endpoint retrieves user's pages.

```
<?php
// Get page list
$pages = $socialall->getPages($token);
?>
```

The `result` returns an array of [`page`](page-object.md) object like this:

```
[
  {
    "id": "jefg48546",
    "name": "Your Page 1",
    "token": "......",
    ...
  },
  {
    "id": "keugr4856",
    "name": "Your Page 2",
    "token": ".....",
    ...
  }
]
```

### /publish_page

This endpoint will publish a message to page's wall/timeline/stream.

```
<?php
// Publish a message to page's 'wall/timeline/stream
$socialall->postPage($token, $page_id, $page_token, $message);
?>
```

The `result` returns a JSON object structured like this:
```
{
    "link": "https://www.facebook.com/.../posts/..."
}
```