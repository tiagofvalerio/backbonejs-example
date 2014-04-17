$(function() {

FriendList = Backbone.Collection.extend({
    initialize: function(){
        this.bind("add", function( model ){
            alert("String adedada");
            view.render( model );
        })
    }
});

FriendView = Backbone.View.extend({

    tagName: 'li',

    events: {
        'click #add-input':  'getString',
    },

    initialize: function() {
        this.friendslist = new FriendList;
        _.bindAll(this, 'render');
    }, 

    getString: function() {
        var friend_name = $('#input').val();
        this.friendslist.add( {name: friend_name} );
    },

    render: function( model ) {
        $("#string-list").append("<li>"+ model.get("name")+"</li>");
        console.log('rendered')
    },

});

var view = new FriendView({el: 'body'});
});