# Installation
```
meteor add auweb:server-session
```

# Basic usage
If setting the session from the server, a connection id must be provided:
```
# From inside publish function, for example
ServerSession.set("foo", "bar", this.connection.id);
```
Setting a server session from the client:
```
# Run from anywhere on the client
ServerSession.set("foo", "bar");
```
Get value of session reactively (only runs on the client):
```
ServerSession.get("foo");
```