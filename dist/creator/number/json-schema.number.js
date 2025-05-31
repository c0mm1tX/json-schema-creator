"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_schema_creator_1 = require("../json-schema.creator");
class JsonSchemaNumber extends json_schema_creator_1.default {
    constructor(name) {
        super(name);
    }
    minimum(value) {
        this.shape.minimum = value;
        return this;
    }
    maximum(value) {
        this.shape.maximum = value;
        return this;
    }
    exclusiveMinimum(value) {
        this.shape.exclusiveMinimum = value;
        return this;
    }
    exclusiveMaximum(value) {
        this.shape.exclusiveMaximum = value;
        return this;
    }
    multipleOf(value) {
        this.shape.multipleOf = value;
        return this;
    }
    positive() {
        this.shape.minimum = 0;
        this.shape.exclusiveMinimum = 0;
        return this;
    }
    negative() {
        this.shape.maximum = 0;
        this.shape.exclusiveMaximum = 0;
        return this;
    }
    range(min, max) {
        this.shape.minimum = min;
        this.shape.maximum = max;
        return this;
    }
    integer() {
        this.shape.type = 'integer';
        return this;
    }
}
exports.default = JsonSchemaNumber;
