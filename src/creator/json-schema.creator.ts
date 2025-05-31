import {Type} from "../interfaces/json-schema/type.interface";
import {Shape} from "../interfaces/json-schema/shape.interface";

class JsonSchemaCreator {
    public name: string;
    protected readonly shape: Shape;

    constructor(name: string) {
        this.name = name;
        this.shape = {};
    }

    type(type: Type | Array<Type>) {
        this.shape.type = type;
        return this;
    }

    title(text: string) {
        this.shape.title = text;
        return this;
    }

    description(text: string) {
        this.shape.description = text;
        return this;
    }


    enum(values: any[]) {
        this.shape.enum = values;
        return this;
    }

    const(value: any) {
        this.shape.const = value;
        return this;
    }

    default(value: any) {
        this.shape.default = value;
        return this;
    }

    examples(values: any[]) {
        this.shape.examples = values;
        return this;
    }


    id(id: string) {
        this.shape.$id = id;
        return this;
    }

    schema(schema: string) {
        this.shape.$schema = schema;
        return this;
    }

    ref(ref: string) {
        this.shape.$ref = ref;
        return this;
    }

    comment(comment: string) {
        this.shape.$comment = comment;
        return this;
    }

    definitions(defs: { [key: string]: Shape }) {
        this.shape.definitions = defs;
        return this;
    }

    defs(defs: { [key: string]: Shape }) {
        this.shape.$defs = defs;
        return this;
    }

    allOf(schemas: Shape[]) {
        this.shape.allOf = schemas;
        return this;
    }

    anyOf(schemas: Shape[]) {
        this.shape.anyOf = schemas;
        return this;
    }

    oneOf(schemas: Shape[]) {
        this.shape.oneOf = schemas;
        return this;
    }

    not(schema: Shape) {
        this.shape.not = schema;
        return this;
    }

    if(condition: Shape) {
        this.shape.if = condition;
        return this;
    }

    then(schema: Shape) {
        this.shape.then = schema;
        return this;
    }

    else(schema: Shape) {
        this.shape.else = schema;
        return this;
    }

    compose() {
        return this.shape;
    }
}

export default JsonSchemaCreator;
