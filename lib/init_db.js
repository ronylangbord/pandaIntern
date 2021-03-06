var mongoose = require('mongoose');
var User = require('../models/User.js');

json_users = [
    {
        "name": "Luke Peterson",
        "job": "Photographer & Videographer",
        "company_name": "Clear Shoot Photography",
        "phone": "123.456.7890",
        "email": "photo@email.com",
        "profile_image": "https://s3.amazonaws.com/honeybook_cdn/assets_users_production/users/532b267c46ecaccbf1000143/profile_photos/2014-09-17-22-46-03-442.png",
        "icon": "https://s3.amazonaws.com/honeybook_cdn/assets_users_production/companies/532b267c46ecaccbf1000144/icons/2014-10-02-18-59-41-959.png"
    },
    {
        "name": "Sophia Garcia",
        "job": "Hair Stylist, Makeup Artist",
        "company_name": "Belle By Sophia",
        "phone": "123.456.7890",
        "email": "hair@email.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/532b267b46ecaccbf10000f8/profile_photos/2014-07-30-11-00-49-211.jpg",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/532b267b46ecaccbf10000f9/icons/2014-07-30-09-56-20-320.jpg"
    },
    {
        "name": "Shira Mendez",
        "job": "Event Planner",
        "company_name": "Shira Mendez Design",
        "phone": "123.456.7890",
        "email": "plannerqa@email.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/5331fb2246ecacaecd0011b2/profile_photos/2014-07-30-10-59-26-023.jpg",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/5331fb2246ecacaecd0011b3/icons/2014-08-20-15-03-33-707.jpg"
    },
    {
        "name": "Stephanie Parker",
        "job": "Wedding Planner",
        "company_name": "Amor Events",
        "phone": "415 409 9876",
        "email": "planner@email.com",
        "profile_image": "https://s3.amazonaws.com/honeybook_cdn/assets_users_production/users/52e96166a60536a71b000074/profile_photos/2014-09-17-22-43-14-878.png",
        "icon": "https://s3.amazonaws.com/honeybook_cdn/assets_users_production/companies/527ebb1eb090f2cc4c000441/icons/2014-09-17-22-43-45-440.png"
    },
    {
        "name": "HoneyBook",
        "job": "",
        "company_name": "HoneyBook",
        "phone": "123.456.7890",
        "email": "shadiah@honeybook.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/52e96162a60536a71b000064/profile_photos/2014-07-30-10-59-18-976.jpg",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/528e8612137e79bd43000e21/icons/2014-08-13-21-10-12-763.png"
    },
    {
        "name": "Claire Fairbank",
        "job": "Florist",
        "company_name": "The Flower Unique Designs",
        "phone": "123.456.7890",
        "email": "florist@email.com",
        "profile_image": "https://s3.amazonaws.com/honeybook_cdn/assets_users_production/users/53138d6046ecac920d000644/profile_photos/2014-09-17-22-50-12-081.png",
        "icon": "https://s3.amazonaws.com/honeybook_cdn/assets_users_production/companies/53138d6046ecac920d000645/icons/2014-09-17-22-50-50-371.png"
    },
    {
        "name": "Stephanie Parker",
        "job": "Event Planner",
        "company_name": "Amor Events",
        "phone": "123.456.7890",
        "email": "test@email.com",
        "profile_image": "https://s3.amazonaws.com/honeybook_cdn/assets_users_production/users/535f5c4a3237c5f30c00005e/profile_photos/2014-09-17-23-08-58-233.png",
        "icon": "https://s3.amazonaws.com/honeybook_cdn/assets_users_production/companies/535f5c4a3237c5f30c00005f/icons/2014-09-17-23-10-03-371.png"
    },
    {
        "name": "Jennifer Bowie",
        "job": "Florist",
        "company_name": "Jennifer Bowie Flowers",
        "phone": "123.456.7890",
        "email": "floristqa@email.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/53bd669a46ecac05eb0003b0/profile_photos/2014-07-30-11-00-43-452.jpg",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/53bd08eb46ecac2e950000f9/icons/2014-07-30-10-34-43-927.png"
    },
    {
        "name": "John Kramer",
        "job": "Event Planner",
        "company_name": "John Kramer Events Inc. ",
        "phone": "123.456.7890",
        "email": "demo@honeybook.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/53c22ba23237c5ad590000ed/profile_photos/2014-08-14-05-34-32-869.jpg",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/53c22ba23237c5ad590000ee/icons/2014-07-30-10-38-09-674.png"
    },
    {
        "name": "Alexis Jenkins",
        "job": "Event Planner",
        "company_name": "Account Building",
        "phone": "",
        "email": "accountbuilding@honeybook.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/53dbe1d73c507441dd000001/profile_photos/2014-08-01-18-52-08-388.png",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/53dbe1d73c507441dd000050/icons/2014-08-01-18-52-10-320.jpg"
    },
    {
        "name": "Leslie",
        "job": "Event Planner",
        "company_name": "Planning ABC ",
        "phone": "925 818 1267",
        "email": "plannerleslie@email.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/53d973c8ac2ffb398000003d/profile_photos/2014-07-30-22-38-02-821.png",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/53d973c9ac2ffb398000008c/icons/2014-07-30-22-38-05-633.jpg"
    },
    {
        "name": "yona levine",
        "job": "Rentals Manager",
        "company_name": "yona's company",
        "phone": "",
        "email": "asdf@vendor.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/53da25945ad9206d25000016/profile_photos/2014-07-31-11-16-37-396.png",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/53da25945ad9206d25000063/icons/2014-07-31-11-16-42-216.jpg"
    },
    {
        "name": "dff",
        "job": "Event Planner",
        "company_name": "dfdfdf",
        "phone": "",
        "email": "shaybloch@dsd.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/53dad71de208fd16c000009b/profile_photos/2014-07-31-23-54-07-068.png",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/53dad71de208fd16c00000ea/icons/2014-07-31-23-54-16-502.jpg"
    },
    {
        "name": "Leslie Wong",
        "job": "Event Planner",
        "company_name": "Leslie Planning 123 ",
        "phone": "",
        "email": "leslie@planner123.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/53dc15713c5074c22400022c/profile_photos/2014-08-01-22-32-18-744.png",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/53dc15713c5074c22400027b/icons/2014-08-01-22-32-29-134.jpg"
    },
    {
        "name": "Naama Alon",
        "job": "Event Planner",
        "company_name": "Naama Alon - Event Planner",
        "phone": "123.456.789",
        "email": "naama76@gmail.com",
        "profile_image": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/users/53465af346ecacf116001710/profile_photos/2014-07-30-10-58-54-895.jpg",
        "icon": "https://honeybook_cdn.s3.amazonaws.com/assets_users_production/companies/53465af446ecacf116001711/icons/2014-07-30-10-20-55-655.jpg"
    }
];

User.findOne({}, function (err, doc) {
    console.log("Should we init?");
    if (!doc) {
        //Collection is empty
        buildUsersCollection();
    }
});

var buildUsersCollection = function buildUsersCollection() {
    console.log("Yes we Should");
    json_users.forEach(function (json_user) {
        var user = new User(json_user);
        user.save(function (err, doc) {
            console.log('succcess' + doc);
        });
    })
};