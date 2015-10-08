## Authentication

Let user login and authenticate with your application.

__HTTP REQUEST__

`REDIRECT https://api2.socialall.io/login`

__Query Parameters__

Parameter | Value | Description
--------- | ------- | -----------
app_id | | Your application's id.
network | [network](#networks) | Network user want to connect.
callback | | Callback url to retrieve user's `token`.

<aside class="soclall-success"><i class="fa fa-check-circle"></i> After user accepts all permission and allow to access. An access <code>token</code> will be submitted to your callback.</aside>
<br />

## API

### Response and Error
If success, all responses will like this:
```
{
    "success": true,
    "result": ...result... 
}
```

Name | Description | Type
---- | ----------- | ----
success | default: true | boolean
result | | any type

If any errors occurred, the response will like this:
```
{
    "error": ...error message...
}
```

Name | Description | Type
---- | ----------- | ----
error | error message | string

### /user

This endpoint retrieves user information.

__HTTP Request__

`GET https://api2.socialall.io/user`

__Query Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token |  | User's token

__Response__

The `result` return an [`user`](user-object.md) object

<aside><i class="fa fa-info-circle"></i> The <code>user</code> object does not contain fully information. Missing fields return with empty string.</aside>

### /friends

This endpoint retrieves user's friends.

__HTTP Request__

`GET https://api2.socialall.io/friends`

__URL Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token |  | User's token

__Response__

The `result` return array of [`user`](user-object.md) objects

### /message

This endpoint will send `message` to user's friends.

__HTTP Request__

`GET https://api2.socialall.io/message`

__URL Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token | | User's token
message | | Message content
friends | | List friend ids join by comma
title | | [optional] Title for LinkedIn and Tumblr

<aside class="soclall-warning"><i class="fa fa-exclamation-circle"></i> <code>title</code> is required field for LinkedIn and Tumblr.</aside>

__Response__

The `result` return empty object

### /publish

This endpoint will publish a message to user's wall/timeline/stream.

__HTTP Request__

`GET https://api2.socialall.io/publish`

__URL Parameters__

Parameter | Value | Description
--------- | ------- | -----------
token | | User's token
message | | Message 

__Response__

The `result` return an object include fields:

Name | Description | Type
---- | ----------- | ----
link | new posted link(if exist) or empty string | string