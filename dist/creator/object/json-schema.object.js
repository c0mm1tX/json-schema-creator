"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_schema_creator_1 = require("../json-schema.creator");
class JsonSchemaObject extends json_schema_creator_1.default {
    constructor(name) {
        super(name);
        this.shape.properties = {};
    }
    property(name, schema) {
        if (!this.shape.properties) {
            this.shape.properties = {};
        }
        this.shape.properties[name] = schema;
        return this;
    }
    properties(props) {
        this.shape.properties = Object.assign(Object.assign({}, this.shape.properties), props);
        return this;
    }
    required(fields) {
        this.shape.required = fields;
        return this;
    }
    addRequired(field) {
        if (!this.shape.required) {
            this.shape.required = [];
        }
        if (!this.shape.required.includes(field)) {
            this.shape.required.push(field);
        }
        return this;
    }
    additionalProperties(allowed) {
        this.shape.additionalProperties = allowed;
        return this;
    }
    minProperties(value) {
        this.shape.minProperties = value;
        return this;
    }
    maxProperties(value) {
        this.shape.maxProperties = value;
        return this;
    }
    patternProperties(patterns) {
        this.shape.patternProperties = patterns;
        return this;
    }
    patternProperty(pattern, schema) {
        if (!this.shape.patternProperties) {
            this.shape.patternProperties = {};
        }
        this.shape.patternProperties[pattern] = schema;
        return this;
    }
    strict() {
        this.shape.additionalProperties = false;
        return this;
    }
    nonEmpty() {
        this.shape.minProperties = 1;
        return this;
    }
    requiredProperty(name, schema) {
        this.property(name, schema);
        this.addRequired(name);
        return this;
    }
}
exports.default = JsonSchemaObject;
