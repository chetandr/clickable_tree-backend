const customer  = require("../data/executeBasicQuery/customer");
const item  = require("../data/executeBasicQuery/item");
const operation  = require("../data/executeBasicQuery/operation");
const product  = require("../data/executeBasicQuery/product");
const resource  = require("../data/executeBasicQuery/resource");
const site  = require("../data/executeBasicQuery/site");

module.exports = {
    dimensionDetail : function(filterName) {
        switch (filterName) {
            case "ITEM":
                return item;
                break;
            case "SITE":
                return site;
                break;
            case "PRODUCT":
                return product;
                break;
            case "CUSTOMER":
                return customer;
                break;
            case "RESOURCE":
                return resource;
                break;
            case "OPERATION":
                return operation;
                break;
            default:
                return "Dimensions does not match";
        }
    }
} 