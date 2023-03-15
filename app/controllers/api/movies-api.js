import movieModel from '../../models/movies.js';

//R ead Operations
export function GetList(req, res, next){
    movieModel.find(function (error, movieCollection){
        if(error){
            console.error(error);
            res.end(error);
        }

        console.log(movieCollection);
        
        res.json({success: true, msg: 'Success', movies: movieCollection, user: req.user})       
    })
}

export function Get(req, res, next){
    let id = req.params.id;

    movieModel.findById(id, function (error, movie){
        if(error){
            console.error(error);
            res.end(error);
        }

        console.log(movie);
        
        res.json({success: true, msg: 'Success', movie, user: req.user})       
    })
}


//C reate
export function Add(req, res, next){
    let newMovie = movieModel({
       ...req.body
    });

    movieModel.create(newMovie,function(error, Movie){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.json({success: true, msg: 'Success', newMovie, user: req.user})
    })
}

//U pdate
export function Edit(req, res, next){
    let id = req.params.id;

    let updatedMovie = new movieModel({
        "_id": id,
        ...req.body
    });

    movieModel.updateOne({ _id: id }, updatedMovie, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.json({ success: true, msg: 'Success', updatedMovie });
    })
}


//D elete
export function Delete(req, res, next){
    let id = req.params.id

    movieModel.remove({_id: id}, function(error){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.json({success: true, msg: 'Delete Successfull'});
    })
}