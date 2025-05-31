"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_schema_creator_1 = require("../json-schema.creator");
class JsonSchemaArray extends json_schema_creator_1.default {
    constructor(name) {
        super(name);
    }
    items(schema) {
        this.shape.items = schema;
        return this;
    }
    minItems(value) {
        this.shape.minItems = value;
        return this;
    }
    maxItems(value) {
        this.shape.maxItems = value;
        return this;
    }
    uniqueItems(unique = true) {
        this.shape.uniqueItems = unique;
        return this;
    }
    additionalItems(allowed) {
        this.shape.additionalItems = allowed;
        return this;
    }
    nonEmpty() {
        this.shape.minItems = 1;
        return this;
    }
    unique() {
        this.shape.uniqueItems = true;
        return this;
    }
    fixedLength(length) {
        this.shape.minItems = length;
        this.shape.maxItems = length;
        return this;
    }
    stringArray() {
        this.shape.items = { type: 'string' };
        return this;
    }
    numberArray() {
        this.shape.items = { type: 'number' };
        return this;
    }
    integerArray() {
        this.shape.items = { type: 'integer' };
        return this;
    }
    booleanArray() {
        this.shape.items = { type: 'boolean' };
        return this;
    }
}
exports.default = JsonSchemaArray;
