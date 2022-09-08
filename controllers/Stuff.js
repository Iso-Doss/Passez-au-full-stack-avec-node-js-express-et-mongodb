const Thing = require("../models/Thing");

const fs = require("fs");

exports.createThing = (req, res, next) => {

    const thingObject = JSON.parse(req.body.thing);

    delete thingObject._id;

    delete thingObject.userId;

    const thing = new Thing({

        ...thingObject,

        userId: req.auth.userId,

        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

    });

    thing.save().then(
        () => res.status(201).json({message: 'Objet enregistré !'})
    ).catch(
        error => res.status(400).json({error})
    );

    // delete req.body._id;
    //
    // const thing = new Thing({
    //
    //     ...req.body
    //
    // });
    //
    // thing.save().then(
    //     () => res.status(201).json({message: 'Objet enregistré !'})
    // ).catch(
    //     error => res.status(400).json({error})
    // );

};

exports.readThing = (req, res, next) => {

    Thing.findOne(
        {_id: req.params.id}
    ).then(
        thing => res.status(200).json(thing)
    ).catch(
        error => res.status(404).json({error})
    );

};

exports.updateThing = (req, res, next) => {

    const thingObject = req.file ? {

        ...JSON.parse(req.body.thing),

        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

    } : {

        ...req.body

    }

    //delete thingObject._id;

    //delete thingObject.userId;

    Thing.findOne({_id: req.params.id}).then(thing => {

            console.log(thing.userId, " ", req.auth.userId);

            if (req.auth.userId != thing.userId) {

                res.status(404).json({message: "Non-autorisé"});

            } else {

                Thing.updateOne(
                    {_id: req.params.id}, {...thingObject, _id: req.params.id}
                ).then(
                    () => res.status(200).json({message: "Objet modifié !"})
                ).catch(
                    error => res.status(404).json({error})
                );

            }

        }
    ).catch(
        error => res.status(404).json({error})
    );

    // Thing.updateOne(
    //     {_id: req.params.id}, {...req.body, _id: req.params.id}
    // ).then(
    //     () => res.status(200).json({message: "Objet modifié !"})
    // ).catch(
    //     error => res.status(404).json({error})
    // );

};

exports.deleteThing = (req, res, next) => {

    Thing.findOne({_id: req.params.id}).then(thing => {

        if (thing.userId != req.auth.userId) {

            res.status(401).json({message: 'Not authorized'});

        } else {

            const filename = thing.imageUrl.split('/images/')[1];

            fs.unlink(`images/${filename}`, () => {
                Thing.deleteOne({_id: req.params.id}).then(() => {

                    res.status(200).json({message: 'Objet supprimé !'});

                }).catch(error => {

                    res.status(401).json({error});

                });

            });

        }

    }).catch(error => {

        res.status(500).json({error});

    });

};

exports.readThings = (req, res, next) => {

    Thing.find().then(
        things => res.status(200).json(things)
    ).catch(
        error => res.status(400).json({error})
    );

};