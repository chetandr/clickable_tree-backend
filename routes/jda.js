const resData = require('../data');

var express = require('express');
var router = express.Router();

router.get('/workflowcontext', (req, res) => {
    res.send(resData.workflowContext);
})

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/tabs', (req, res) => {
    const item = req.params.item;

    let itemList = [{
            label: 'Country',
            value: 'Country'
        },
        {
            label: 'Location',
            value: 'Location'
        },
        {
            label: 'Customer',
            value: 'Customer'
        },
        {
            label: 'Resoruce',
            value: 'Resoruce'
        }
    ];

    res.send(itemList);
})

router.get('/tabs/:item', (req, res) => {
    const item = req.params.item;

    let itemList = [],
        childItem = [],
        childItems = [],
        childItem1 = [],
        childItems1 = [];
    const hasChild = {Customer : [1,4,8], Country : [2,6,9], Location : [4,7,8], Resoruce:[]}
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 3; j++) {
            for (let k = 1; k < 3; k++) {
                childItem1 = {
                    label: `${item} ${i}`,
                    value: `${i}.${j}.${k}`,
                    checked: false
                }
                childItems1.push(childItem1)
            }
            childItem = {
                label: `${item} Group ${i}`,
                value: `${i}.${j}`,
                checked: false,
                children: j % 2 ? childItems1 : []
            }
            childItems1 = [];
            childItems.push(childItem)
        }
        productItem = {
            label: `${item} Category ${i}`,
            value: `${i}`,
            checked: false,
            children: i % 2 ? childItems : []
        }
        childItems = [];
        itemList.push(productItem);
    }
    setTimeout(() => res.send(resData[req.params.item]), 2000);
})

module.exports = router;