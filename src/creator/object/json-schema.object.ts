import JsonSchemaCreator from "../json-schema.creator";
import {Shape} from "../../interfaces/json-schema/shape.interface";

class JsonSchemaObject extends JsonSchemaCreator {

    constructor(name: string) {
        super(name);
        this.shape.properties = {};
    }

    property(name: string, schema: Shape) {
        if (!this.shape.properties) {
            this.shape.properties = {};
        }
        this.shape.properties[name] = schema;
        return this;
    }

    properties(props: { [key: string]: Shape }) {
        this.shape.properties = { ...this.shape.properties, ...props };
        return this;
    }

    required(fields: string[]) {
        this.shape.required = fields;
        return this;
    }

    addRequired(field: string) {
        if (!this.shape.required) {
            this.shape.required = [];
        }
        if (!this.shape.required.includes(field)) {
            this.shape.required.push(field);
        }
        return this;
    }

    additionalProperties(allowed: boolean | Shape) {
        this.shape.additionalProperties = allowed;
        return this;
    }

    minProperties(value: number) {
        this.shape.minProperties = value;
        return this;
    }

    maxProperties(value: number) {
        this.shape.maxProperties = value;
        return this;
    }

    patternProperties(patterns: { [pattern: string]: Shape }) {
        this.shape.patternProperties = patterns;
        return this;
    }

    patternProperty(pattern: string, schema: Shape) {
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

    requiredProperty(name: string, schema: Shape) {
        this.property(name, schema);
        this.addRequired(name);
        return this;
    }
}

export default JsonSchemaObject; 