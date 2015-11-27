ServerSessions = new Mongo.Collection("serversessions");

ServerSession = {
	set: function(name, value, connectionId){
		Meteor.call("addServerSession", name, value, connectionId);
	},
	get: function(name){
		var serverSession = ServerSessions.findOne({name: name});
		if(serverSession) return serverSession.value;
		else return undefined;
	}
}