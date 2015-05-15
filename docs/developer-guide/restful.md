## Authentication

Let user login and authenticate with your application.

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

__HTTP Request__

`GET https://api.soclall.com/user`

__Query Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token |  | User's token

__Response__

Return an [`user`](user-object.md) object

<aside><i class="fa fa-info-circle"></i> The <code>user</code> object does not contain fully information. Missing fields return with empty string.</aside>

### /friends

This endpoint retrieves user's friends.

__HTTP Request__

`GET https://api.soclall.com/friends`

__URL Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token |  | User's token

__Response__

Return array of [`user`](user-object.md) objects

### /message

This endpoint will send `message` to user's friends.

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

__HTTP Request__

`GET https://api.soclall.com/publish`

__URL Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token | | User's token
message | | Message 