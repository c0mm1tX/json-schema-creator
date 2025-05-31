"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = exports.JsonSchemaObject = exports.JsonSchemaArray = exports.JsonSchemaNumber = exports.JsonSchemaInput = exports.JsonSchemaFactory = exports.JsonSchemaCreator = void 0;
exports.createSchema = createSchema;
exports.createString = createString;
exports.createNumber = createNumber;
exports.createInteger = createInteger;
exports.createBoolean = createBoolean;
exports.createArray = createArray;
exports.createObject = createObject;
const json_schema_factory_1 = require("./creator/json-schema.factory");
exports.JsonSchemaFactory = json_schema_factory_1.default;
const json_schema_creator_1 = require("./creator/json-schema.creator");
exports.JsonSchemaCreator = json_schema_creator_1.default;
var json_schema_input_1 = require("./creator/input/json-schema.input");
Object.defineProperty(exports, "JsonSchemaInput", { enumerable: true, get: function () { return json_schema_input_1.default; } });
var json_schema_number_1 = require("./creator/number/json-schema.number");
Object.defineProperty(exports, "JsonSchemaNumber", { enumerable: true, get: function () { return json_schema_number_1.default; } });
var json_schema_array_1 = require("./creator/array/json-schema.array");
Object.defineProperty(exports, "JsonSchemaArray", { enumerable: true, get: function () { return json_schema_array_1.default; } });
var json_schema_object_1 = require("./creator/object/json-schema.object");
Object.defineProperty(exports, "JsonSchemaObject", { enumerable: true, get: function () { return json_schema_object_1.default; } });
function createSchema(name) {
    return new json_schema_creator_1.default(name);
}
function createString(name) {
    return json_schema_factory_1.default.string(name);
}
function createNumber(name) {
    return json_schema_factory_1.default.number(name);
}
function createInteger(name) {
    return json_schema_factory_1.default.integer(name);
}
function createBoolean(name) {
    return json_schema_factory_1.default.boolean(name);
}
function createArray(name) {
    return json_schema_factory_1.default.array(name);
}
function createObject(name) {
    return json_schema_factory_1.default.object(name);
}
exports.Schema = json_schema_factory_1.default;
