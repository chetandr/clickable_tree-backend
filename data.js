const Country = [
	{
		label: "India",
		value: "India",
		children: [
			{
				label: "Maharastra",
				value: "Maharastra",
				children: [
					{
						label: "Pune",
						value: "Pune",
					},
					{
						label: "Mumbai",
						value: "Mumbai",
					},
				],
			},
			{
				label: "Punjab",
				value: "Punjab",
				children: [
					{
						label: "Amritsar",
						value: "Amritsar",
					},
					{
						label: "Bhatinda",
						value: "Bhatinda",
					},
				],
			},
			{
				label: "Karnataka",
				value: "Karnataka",
				children: [
					{
						label: "Bengaluru",
						value: "Bengaluru",
					},
					{
						label: "Mysuru",
						value: "Mysuru",
					},
				],
			},
		],
	},
	{
		label: "England",
		value: "England",
		children: [
			{
				label: "Berkshire",
				value: "Berkshire",
				children: [
					{
						label: "Reading",
						value: "Reading",
					},
				],
			},
		],
	},
	{
		label: "New Zealand",
		value: "New Zealand",
		children: [
			{
				label: "Wellington",
				value: "Wellington",
			},
			{
				label: "Otago",
				value: "Otago",
				children: [
					{
						label: "Queenstown",
						value: "Queenstown",
					},
				],
			},
		],
	},
	{
		label: "Australia",
		value: "Australia",
		children: [
			{
				label: "Victoria",
				value: "Victoria",
			},
		],
	},
	{
		label: "West Indies",
		value: "West Indies",
		children: [
			{
				label: "Barbados",
				value: "Barbados",
			},
			{
				label: "Trinidad and Tobago",
				value: "Trinidad and Tobago",
			},
		],
	},
];

const Location = [
	{
		label: "India",
		value: "India",
		children: [
			{
				label: "Delhi",
				value: "Delhi",
				children: [
					{
						label: "New Delhi",
						value: "New Delhi",
						children: [
							{
								label: "Connaught Place",
								value: "Connaught Place",
							},
							{
								label: "Sansad Marg",
								value: "Sansad Marg",
							},
						],
					},
				],
			},
			{
				label: "Maharashtra",
				value: "Maharashtra",
				children: [
					{
						label: "Mumbai",
						value: "Mumbai",
						children: [
							{
								label: "Jogeshwari",
								value: "Jogeshwari",
							},
							{
								label: "Borivali",
								value: "Borivali",
							},
						],
					},
				],
			},
		],
	},
	{
		label: "Brazil",
		value: "Brazil",
		children: [
			{
				label: "Minas Gerais",
				value: "Minas Gerais",
				children: [
					{
						label: "Divinópolis",
						value: "Divinópolis",
						children: [
							{
								label: "Lisboa",
								value: "Lisboa",
							},
						],
					},
				],
			},
			{
				label: "Pernambuco",
				value: "Pernambuco",
				children: [
					{
						label: "Arcoverde",
						value: "Arcoverde",
						children: [
							{
								label: "Porto",
								value: "Porto",
							},
						],
					},
				],
			},
		],
	},
];
const Comment = [
	{
		id: 1,
		user: {
			firstName: "Alex",
			lastName: "Taylor",
			picture: "img/man.svg",
		},
		comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		resPros: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		resCons: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		scenarioRating: "img/like.svg",
		approval: "NA",
	},
	{
		id: 2,
		user: {
			firstName: "John",
			lastName: "Brown",
			picture: "img/man.svg",
		},
		comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		resPros: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		resCons: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		scenarioRating: "img/dislike.svg",
		approval: "NA",
	},
];

const kpiItemList = [
	{
		valuePrefix: "",
		value: 63,
		valueSuffix: "",
		growthPrefix: "",
		growth: 12,
		growthSuffix: "%",
		label: "CUSTOMIZABLE",
		color: "#574EB9",
	},
	{
		valuePrefix: "",
		value: 9863,
		valueSuffix: "",
		growthPrefix: "",
		growth: "",
		growthSuffix: "",
		label: "IDEATION CONCEPT",
		color: "#89EE47",
	},
	{
		valuePrefix: "$",
		value: 25,
		valueSuffix: "m",
		growthPrefix: "+",
		growth: 2,
		growthSuffix: "%",
		label: "IGNORE NUMBERS",
		color: "#574EB9",
	},
	{
		valuePrefix: "",
		value: 54,
		valueSuffix: "%",
		growthPrefix: "",
		growth: 53,
		growthSuffix: "%",
		label: "MEASURE 4",
		color: "#89EE47",
	},
	{
		valuePrefix: "",
		value: 521,
		valueSuffix: "%",
		growthPrefix: "",
		growth: -5,
		growthSuffix: "%",
		label: "MEASURE 4",
		color: "#89EE47",
	},
	{
		valuePrefix: "",
		value: 633,
		valueSuffix: "",
		growthPrefix: "",
		growth: 12,
		growthSuffix: "%",
		label: "CUSTOMIZABLE",
		color: "#574EB9",
	},
	{
		valuePrefix: "",
		value: 98633,
		valueSuffix: "",
		growthPrefix: "",
		growth: "",
		growthSuffix: "",
		label: "IDEATION CONCEPT",
		color: "#89EE47",
	},
	{
		valuePrefix: "$",
		value: 253,
		valueSuffix: "m",
		growthPrefix: "+",
		growth: 2,
		growthSuffix: "%",
		label: "IGNORE NUMBERS",
		color: "#574EB9",
	},
];

const workflowContext = [
	{
		businessUnit: "BU-1",
		productGroup: "PG-1",
		productFamily: "PF-1",
		items: "I1",
		location: "L1",
		resources: "R1",
	},

	{
		businessUnit: "BU-2",
		productGroup: "PG-2",
		productFamily: "PF-2",
		items: "I2",
		location: "L2",
		resources: "R2",
	},

	{
		businessUnit: null,
		productGroup: "PG-3",
		productFamily: "PF-3",
		items: "I3",
		location: "L3",
		resources: "R3",
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: "PF-4",
		items: "I4",
		location: "L4",
		resources: "R4",
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: "PF-5",
		items: "I5",
		location: "L5",
		resources: "R5",
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I6",
		location: null,
		resources: null,
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I7",
		location: null,
		resources: null,
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I8",
		location: null,
		resources: null,
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I4",
		location: null,
		resources: null,
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I9",
		location: null,
		resources: null,
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I10",
		location: null,
		resources: null,
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I11",
		location: null,
		resources: null,
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I12",
		location: null,
		resources: null,
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I13",
		location: null,
		resources: null,
	},
	{
		businessUnit: null,
		productGroup: null,
		productFamily: null,
		items: "I14",
		location: null,
		resources: null,
	},
];

const gridData = {

    "name": "SCENARIOTABLE",

    "headers": [

        "SCENARIOID",

        "SCENARIONAME",

        "PARENTID",

        "PARENTSCENARIOID",

        "USERID",

        "USERNAME",

        "CREATIONDATE",

        "STATUS",

        "DESCRIPTION",

        "ISOUTOFSYNC",

        "SORTID",

        "RECORDID"

    ],

    "totalRowCount": 3,

    "rows_": [
        {

            "cells": [

                {

                    "value": "1"

                },

                {

                    "value": "BASE_DIVISION"

                },

                {

                    "value": ""

                },

                {

                    "value": "-1"

                },

                {

                    "value": "System"

                },

                {

                    "value": "System"

                },

                {

                    "value": "08/27/2019"

                },

                {

                    "value": "BASE"

                },

                {

                    "value": "BASE_DIVISION"

                },

                {

                    "value": "false"

                },

                {

                    "value": "1"

                },

                {

                    "value": "0"

                }

            ]

        },
        {

            "cells": [

                {

                    "value": "3"

                },

                {

                    "value": "Live"

                },

                {

                    "value": "DB_SYNC_SCENARIO"

                },

                {

                    "value": "2"

                },

                {

                    "value": "System"

                },

                {

                    "value": "System"

                },

                {

                    "value": "08/27/2019"

                },

                {

                    "value": "EDITABLE"

                },

                {

                    "value": "Live"

                },

                {

                    "value": "false"

                },

                {

                    "value": "3"

                },

                {

                    "value": "2"

                }

            ]

        },
        {

            "cells": [

                {

                    "value": "3"

                },

                {

                    "value": "Live"

                },

                {

                    "value": "DB_SYNC_SCENARIO"

                },

                {

                    "value": "2"

                },

                {

                    "value": "System"

                },

                {

                    "value": "System"

                },

                {

                    "value": "08/27/2019"

                },

                {

                    "value": "EDITABLE"

                },

                {

                    "value": "Live"

                },

                {

                    "value": "false"

                },

                {

                    "value": "3"

                },

                {

                    "value": "2"

                }

            ]

        },
    ],

    "success": true

};

const Customer = Country;
const Resource = Location;
module.exports = {
	Country,
	Location,
	Customer,
	Resource,
	Comment,
    workflowContext,
	kpiItemList,
	gridData
};
