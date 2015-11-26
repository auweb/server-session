# Installation
```
meteor add auweb:server-session
```

# Basic usage
If setting the session from the server, a connection id must be provided:
```
// From inside publish function, for example
ServerSession.set("foo", "bar", this.connection.id);
```
Setting a server session from the client:
```
// Run from anywhere on the client
ServerSession.set("foo", "bar");
```
Get value of session reactively (only runs on the client):
```
ServerSession.get("foo");
```

# Example
## Getting document count on the client, before limit is applied
On the server, store the document count inside a publish function:
```
Meteor.publish("documents", function(){
	var documents = Documents.find(searchObj, { limit: 10 });
	// Store the count in a server session
	ServerSession.set("documentsCount", documents.count(), this.connection.id);
	return documents;
});
```
On the client, create a template helper to display the count:
```
Meteor.documents.helpers({
	documentsCount: function(){
		return ServerSession.get("documentsCount");
	}
});
```