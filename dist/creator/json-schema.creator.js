"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonSchemaCreator {
    constructor(name) {
        this.name = name;
        this.shape = {};
    }
    type(type) {
        this.shape.type = type;
        return this;
    }
    title(text) {
        this.shape.title = text;
        return this;
    }
    description(text) {
        this.shape.description = text;
        return this;
    }
    enum(values) {
        this.shape.enum = values;
        return this;
    }
    const(value) {
        this.shape.const = value;
        return this;
    }
    default(value) {
        this.shape.default = value;
        return this;
    }
    examples(values) {
        this.shape.examples = values;
        return this;
    }
    id(id) {
        this.shape.$id = id;
        return this;
    }
    schema(schema) {
        this.shape.$schema = schema;
        return this;
    }
    ref(ref) {
        this.shape.$ref = ref;
        return this;
    }
    comment(comment) {
        this.shape.$comment = comment;
        return this;
    }
    definitions(defs) {
        this.shape.definitions = defs;
        return this;
    }
    defs(defs) {
        this.shape.$defs = defs;
        return this;
    }
    allOf(schemas) {
        this.shape.allOf = schemas;
        return this;
    }
    anyOf(schemas) {
        this.shape.anyOf = schemas;
        return this;
    }
    oneOf(schemas) {
        this.shape.oneOf = schemas;
        return this;
    }
    not(schema) {
        this.shape.not = schema;
        return this;
    }
    if(condition) {
        this.shape.if = condition;
        return this;
    }
    then(schema) {
        this.shape.then = schema;
        return this;
    }
    else(schema) {
        this.shape.else = schema;
        return this;
    }
    compose() {
        return this.shape;
    }
}
exports.default = JsonSchemaCreator;
