"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_schema_creator_1 = require("./json-schema.creator");
const json_schema_input_1 = require("./input/json-schema.input");
const json_schema_number_1 = require("./number/json-schema.number");
const json_schema_array_1 = require("./array/json-schema.array");
const json_schema_object_1 = require("./object/json-schema.object");
class JsonSchemaFactory {
    static create(name) {
        return new json_schema_creator_1.default(name);
    }
    static string(name) {
        return new json_schema_input_1.default(name).type('string');
    }
    static number(name) {
        return new json_schema_number_1.default(name).type('number');
    }
    static integer(name) {
        return new json_schema_number_1.default(name).type('integer');
    }
    static boolean(name) {
        return new json_schema_creator_1.default(name).type('boolean');
    }
    static array(name) {
        return new json_schema_array_1.default(name).type('array');
    }
    static object(name) {
        return new json_schema_object_1.default(name).type('object');
    }
    static null(name) {
        return new json_schema_creator_1.default(name).type('null');
    }
    static email(name) {
        return this.string(name).email();
    }
    static uri(name) {
        return this.string(name).uri();
    }
    static date(name) {
        return this.string(name).date();
    }
    static dateTime(name) {
        return this.string(name).dateTime();
    }
    static uuid(name) {
        return this.string(name).uuid();
    }
    static positiveNumber(name) {
        return this.number(name).positive();
    }
    static positiveInteger(name) {
        return this.integer(name).positive();
    }
    static stringArray(name) {
        return this.array(name).stringArray();
    }
    static numberArray(name) {
        return this.array(name).numberArray();
    }
    static strictObject(name) {
        return this.object(name).strict();
    }
}
exports.default = JsonSchemaFactory;
