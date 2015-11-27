Meteor.startup(function(){
	// console.log("Removed all server sessions");
	ServerSessions.remove({});
});

Meteor.publish("serverSessions", function(){

	var instance = this;
	// console.log("Connected client with connection id: "+instance.connection.id);

	this.connection.onClose(function(bar){
		ServerSessions.remove({
			connectionId: instance.connection.id
		});
		// console.log("Removed all sessions from connection", instance.connection.id);
	});

	return ServerSessions.find({
		connectionId: instance.connection.id
	});

});

Meteor.methods({
	'addServerSession': function(name, value, connectionId){
		if(connectionId === null) connectionId = this.connection.id;

		// console.log("Inserted session with name: "+name+", value: "+value+", connection id: "+connectionId);

		ServerSessions.update({
			connectionId: connectionId,
			name: name
		}, {
			$set: {
				value: value
			}
		},{
			upsert: true
		});
	}
});