// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration

/*
mongoose.connect( 'mongodb://localhost/noobjs_database' );

//Schemas
var Post = new mongoose.Schema({
    _id: Number,
    title: String,
    content: String,
    tags: [ String ]
});

//Models
var PostModel = mongoose.model( 'Post', Post );
*/

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

/*
// Routes
app.get( '/api', function( request, response ) {
    response.send( 'Library API is running' );
});

app.get( '/api/books', function( request, response ) {
    return BookModel.find( function( err, books ) {
        if( !err ) {
            return response.send( books );
        } else {
            return console.log( err );
        }
    });
});

*/
/*
//Insert a new book
app.post( '/posts', function( request, response ) {

    var count = PostModel.find( function( err, posts ) {
        if ( !err ) {
            return posts.length;
        }
        else {
            return console.log( err );
        }
    });

    PostModel.count( function (err, count) {
        if (err)
            console.log(err);
        else {
            console.log('there are %d posts', count);

            var post = new PostModel({
                _id: count,
                title: request.body.title,
                content: request.body.content,
                tags: request.body.tags
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

app.get( '/posts', function( request, response ) {
    return PostModel.find( function( err, posts ) {
        if( !err ) {
            console.log( posts );
            return response.send( posts );
        } else {
            return console.log( err );
        }
    });
});
*/
/*
//Get a single book by id
app.get( '/api/books/:id', function( request, response ) {
    console.log(request.params);
    return BookModel.findById( request.params.id, function( err, book ) {
        if( !err ) {
            return response.send( book );
        } else {
            return console.log( err );
        }
    });
});

//Update a book
app.put( '/api/books/:id', function( request, response ) {
    console.log( 'Updating book ' + request.body.title );
    return BookModel.findById( request.params.id, function( err, book ) {
        book.title = request.body.title;
        book.author = request.body.author;
        book.releaseDate = request.body.releaseDate;
        book.keywords = request.body.keywords;

        return book.save( function( err ) {
            if( !err ) {
                console.log( 'book updated' );
            } else {
                console.log( err );
            }
            return response.send( book );
        });
    });
});

//Delete a book
app.delete( '/api/books/:id', function( request, response ) {
    console.log( 'Deleting book with id: ' + request.params.id );
    return BookModel.findById( request.params.id, function( err, book ) {
        return book.remove( function( err ) {
            if( !err ) {
                console.log( 'Book removed' );
                return response.send( '' );
            } else {
                console.log( err );
            }
        });
    });
});
*/






