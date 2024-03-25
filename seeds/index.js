const mongoose = require('mongoose');
const cities = require('./cities');
const Campground = require('../models/campground');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '64d0d99094e1845f5b0cfee9',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique necessitatibus reiciendis libero nemo iure ad sed dolorum in ut error, repellat officia! Sit a dolor eos enim reiciendis quas inventore.',
            price: 25,
            geometry: {
                type: 'Point',
                coordinates:
                    [cities[random1000].longitude,
                    cities[random1000].latitude]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691524192/YelpCamp/mntwydtogykocklsgots.jpg',
                    filename: 'YelpCamp/mntwydtogykocklsgots',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691524194/YelpCamp/fyyf39t95rfptawcr4re.jpg',
                    filename: 'YelpCamp/fyyf39t95rfptawcr4re',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691524195/YelpCamp/fvu0stjcim7u1lwjdthy.jpg',
                    filename: 'YelpCamp/fvu0stjcim7u1lwjdthy',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691524195/YelpCamp/wmbgb97lczoj5dhoqmsw.jpg',
                    filename: 'YelpCamp/wmbgb97lczoj5dhoqmsw',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691524196/YelpCamp/wp9ynm753ehxtbelimzr.jpg',
                    filename: 'YelpCamp/wp9ynm753ehxtbelimzr',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691524199/YelpCamp/ypktyl6buiay95jskelg.jpg',
                    filename: 'YelpCamp/ypktyl6buiay95jskelg',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691524200/YelpCamp/kethfusl9cjwkcmkmkqa.jpg',
                    filename: 'YelpCamp/kethfusl9cjwkcmkmkqa',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691524203/YelpCamp/vnyqahirpiiloq8ayhz1.jpg',
                    filename: 'YelpCamp/vnyqahirpiiloq8ayhz1',
                },

                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691533179/YelpCamp/nkyxksonyuezcqna4r1z.jpg',
                    filename: 'YelpCamp/nkyxksonyuezcqna4r1z',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691533182/YelpCamp/vsvptmmrg2e42iorv6yz.jpg',
                    filename: 'YelpCamp/vsvptmmrg2e42iorv6yz',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691533185/YelpCamp/q2t3hims9srzcqsaznjq.jpg',
                    filename: 'YelpCamp/q2t3hims9srzcqsaznjq',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691533186/YelpCamp/kawareapaj1jynvd9qxr.jpg',
                    filename: 'YelpCamp/kawareapaj1jynvd9qxr',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691533187/YelpCamp/tn1k2oeodxjd7krrmr9m.jpg',
                    filename: 'YelpCamp/tn1k2oeodxjd7krrmr9m',
                },
                {
                    url: 'https://res.cloudinary.com/dyen5x3uc/image/upload/v1691533189/YelpCamp/cvhtvxgc2v1ohuoy4fv7.jpg',
                    filename: 'YelpCamp/cvhtvxgc2v1ohuoy4fv7',
                }

            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})