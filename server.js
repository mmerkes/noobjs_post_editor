// Module dependencies.
var application_root = __dirname,
    async = require( 'async' ),
    _ = require( 'underscore' ), // Underscore
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration

mongoose.connect( 'mongodb://localhost/noobjs_database' );

//Schemas
var Post = new mongoose.Schema({
    _id: Number,
    title: String,
    post_content: String,
    tags: [ String ],
    creationDate: Date
});

//Models
var PostModel = mongoose.model( 'Post', Post );

//Create server
var app = express();

// Configure server
app.configure( function() {
    //parses request body and populates request.body
    app.use( express.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );

    //perform route lookup based on url and HTTP method
    app.use( app.router );

    //Where to serve static content
    app.use( express.static( path.join( application_root) ) );

    //Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

//Start server
var port = 3000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});

//Insert a new post
app.post( '/posts', function( request, response ) {
    var req = request.body.post;

    PostModel.count( function (err, count) {
        if (err)
            console.log(err);
        else {
            console.log(req);

            var post = new PostModel({
                _id: count + 1,
                title: req.title,
                post_content: req.post_content,
                tags: req.tags,
                creationDate: req.creationDate
            });

            post.save( function( err ) {
                if( !err ) {
                    return console.log( 'Post saved');
                } else {
                    return console.log( err );
                }
            });

            return response.send(post);
        }
    });
});

// get all of the posts
app.get( '/posts', function( request, response ) {
    return PostModel.find( function( err, posts ) {
        if( !err ) {
            var pkg = { "posts": posts }
            console.log( pkg );
            return response.send( pkg );
        } else {
            return console.log( err );
        }
    });
});

// Get a post by id
app.get( '/posts/:id', function( request, response ) {
    return PostModel.findById( request.params.id, function( err, post ) {

        if( !err ) {
            return response.send( post );
        } else {
            return console.log( err );
        }
    });
});

// update records with put
app.put( '/posts/:id', function(request, response) {
    console.log( 'Updating post ' + request.body.post.title );
    return PostModel.findById( request.params.id, function( err, post ) {
        post.title = request.body.post.title;
        post.post_content = request.body.post.post_content;
        post.tags = request.body.post.tags;
        post.creationDate = request.body.post.creationDate;

        return post.save( function( err ) {
            if( !err ) {
                console.log( 'post updated' );
            } else {
                console.log( err );
            }
            return response.send( post );
        });
    });
});


//Delete a post
app.delete( '/posts/:id', function( request, response ) {
    console.log( 'Deleting post with id: ' + request.params.id );
    return PostModel.findById( request.params.id, function( err, post ) {
        return post.remove( function( err ) {
            if( !err ) {
                console.log( 'post removed' );
                return response.send( '' );
            } else {
                console.log( err );
            }
        });
    });
});







