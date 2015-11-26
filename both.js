ServerSessions = new Mongo.Collection("serversessions");

ServerSession = {
	set: function(name, value, connectionId){
		Meteor.call("addServerSession", name, value, connectionId);
	},
	get: function(name){
		return ServerSessions.findOne({name: name}).value;
	}
}