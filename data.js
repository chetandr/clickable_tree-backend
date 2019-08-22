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

const Comment = [
  {
    'id': 1,
    'user': {
      'firstName':'Alex',
      'lastName':'Taylor',
      'picture': 'img/man.svg'
    },
    'comment':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'resPros':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'resCons':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'scenarioRating':'img/like.svg',
    'approval': 'NA'
  },
  {
    'id': 2,
    'user': {
      'firstName':'John',
      'lastName':'Brown',
      'picture': 'img/man.svg'
    },
    'comment':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'resPros':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'resCons':'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'scenarioRating':'img/dislike.svg',
    'approval': 'NA'
  },
]

const Customer = Country;
const Resource = Location;
module.exports = {Country, Location, Customer, Resource, Comment};
