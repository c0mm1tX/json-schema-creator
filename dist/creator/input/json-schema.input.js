"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_schema_creator_1 = require("../json-schema.creator");
class JsonSchemaInput extends json_schema_creator_1.default {
    constructor(name) {
        super(name);
    }
    minLength(value) {
        this.shape.minLength = value;
        return this;
    }
    maxLength(value) {
        this.shape.maxLength = value;
        return this;
    }
    pattern(pattern) {
        this.shape.pattern = pattern;
        return this;
    }
    format(format) {
        this.shape.format = format;
        return this;
    }
    email() {
        this.shape.format = 'email';
        return this;
    }
    uri() {
        this.shape.format = 'uri';
        return this;
    }
    date() {
        this.shape.format = 'date';
        return this;
    }
    dateTime() {
        this.shape.format = 'date-time';
        return this;
    }
    time() {
        this.shape.format = 'time';
        return this;
    }
    uuid() {
        this.shape.format = 'uuid';
        return this;
    }
    ipv4() {
        this.shape.format = 'ipv4';
        return this;
    }
    ipv6() {
        this.shape.format = 'ipv6';
        return this;
    }
}
exports.default = JsonSchemaInput;
