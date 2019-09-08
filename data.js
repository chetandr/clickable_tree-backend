const Country = [
    {
        'label': 'India',
        'value' : 'India',
        'children' : [
            {
                'label' : 'Maharastra',
                'value' : 'Maharastra',
                children : [
                    {
                        label: 'Pune',
                        value: 'Pune'
                    },
                    {
                        label: 'Mumbai',
                        value: 'Mumbai'
                    },
                ]
            },
            {
                'label' : 'Punjab',
                'value' : 'Punjab',
                children : [
                    {
                        label: 'Amritsar',
                        value: 'Amritsar'
                    },
                    {
                        label: 'Bhatinda',
                        value: 'Bhatinda'
                    },
                ]
            },
            {
                'label' : 'Karnataka',
                'value' : 'Karnataka',
                children : [
                    {
                        label: 'Bengaluru',
                        value: 'Bengaluru'
                    },
                    {
                        label: 'Mysuru',
                        value: 'Mysuru'
                    },
                ]
            }
        ]
    },
    {
        'label': 'England',
        'value' : 'England',
        'children' : [
            {
                'label' : 'Berkshire',
                'value' : 'Berkshire',
                children : [
                    {
                        label: 'Reading',
                        value: 'Reading'
                    }
                ]
            }
        ]
    },
    {
        'label': 'New Zealand',
        'value' : 'New Zealand',
        'children' : [
            {
                'label' : 'Wellington',
                'value' : 'Wellington',
            },
            {
                'label' : 'Otago',
                'value' : 'Otago',
                children : [
                    {
                        label: 'Queenstown',
                        value: 'Queenstown'
                    }
                ]
            }
        ]
    },
    {
        'label': 'Australia',
        'value' : 'Australia',
        'children' : [
            {
                'label' : 'Victoria',
                'value' : 'Victoria',
            }
        ]
    },
    {
        'label': 'West Indies',
        'value' : 'West Indies',
        'children' : [
            {
                'label' : 'Barbados',
                'value' : 'Barbados',
            },
            {
                'label' : 'Trinidad and Tobago',
                'value' : 'Trinidad and Tobago',
            }
        ]
    }
]

const Location = [
    {
        'label': 'India',
        'value' : 'India',
        'children' : [{
            'label': 'Delhi',
            'value' : 'Delhi',
            'children' : [{
                'label': 'New Delhi',
                'value' : 'New Delhi',
                'children' : [{
                    'label': 'Connaught Place',
                    'value' : 'Connaught Place',
                },
                {
                    'label': 'Sansad Marg',
                    'value' : 'Sansad Marg',
                }]
            }]
        },
        {
            'label': 'Maharashtra',
            'value' : 'Maharashtra',
            'children' : [{
                'label': 'Mumbai',
                'value' : 'Mumbai',
                'children' : [{
                    'label': 'Jogeshwari',
                    'value' : 'Jogeshwari',
                },
                {
                    'label': 'Borivali',
                    'value' : 'Borivali',
                }]
            }]
        }]
    },
    {
        'label': 'Brazil',
        'value' : 'Brazil',
        'children' : [{
            'label': 'Minas Gerais',
            'value' : 'Minas Gerais',
            'children' : [{
                'label': 'Divinópolis',
                'value' : 'Divinópolis',
                'children' : [{
                    'label': 'Lisboa',
                    'value' : 'Lisboa',
                }]
            }]
        },
        {
            'label': 'Pernambuco',
            'value' : 'Pernambuco',
            'children' : [{
                'label': 'Arcoverde',
                'value' : 'Arcoverde',
                'children' : [{
                    'label': 'Porto',
                    'value' : 'Porto',
                }]
            }]
        }]
    }
]

const kpiItemList = [{
    "valuePrefix": "",
    "value": 63,
    "valueSuffix": "",
    "growthPrefix": "",
    "growth": 12,
    "growthSuffix": "%",
    "label": "CUSTOMIZABLE",
    "color": "#574EB9"
},
{
    "valuePrefix": "",
    "value": 9863,
    "valueSuffix": "",
    "growthPrefix": "",
    "growth": "",
    "growthSuffix": "",
    "label": "IDEATION CONCEPT",
    "color": "#89EE47"
},
{
    "valuePrefix": "$",
    "value": 25,
    "valueSuffix": "m",
    "growthPrefix": "+",
    "growth": 2,
    "growthSuffix": "%",
    "label": "IGNORE NUMBERS",
    "color": "#574EB9"
},
{
    "valuePrefix": "",
    "value": 54,
    "valueSuffix": "%",
    "growthPrefix": "",
    "growth": 53,
    "growthSuffix": "%",
    "label": "MEASURE 4",
    "color": "#89EE47"
},
{
    "valuePrefix": "",
    "value": 521,
    "valueSuffix": "%",
    "growthPrefix": "",
    "growth": -5,
    "growthSuffix": "%",
    "label": "MEASURE 4",
    "color": "#89EE47"
},{
    "valuePrefix": "",
    "value": 633,
    "valueSuffix": "",
    "growthPrefix": "",
    "growth": 12,
    "growthSuffix": "%",
    "label": "CUSTOMIZABLE",
    "color": "#574EB9"
},
{
    "valuePrefix": "",
    "value": 98633,
    "valueSuffix": "",
    "growthPrefix": "",
    "growth": "",
    "growthSuffix": "",
    "label": "IDEATION CONCEPT",
    "color": "#89EE47"
},
{
    "valuePrefix": "$",
    "value": 253,
    "valueSuffix": "m",
    "growthPrefix": "+",
    "growth": 2,
    "growthSuffix": "%",
    "label": "IGNORE NUMBERS",
    "color": "#574EB9"
}]

const Customer = Country;
const Resource = Location;
module.exports = {Country, Location, Customer, Resource, kpiItemList};