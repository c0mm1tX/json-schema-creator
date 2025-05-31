# JSON Schema Creator

*Read this in other languages: [English](README.en.md), [Polski](README.md)*

A TypeScript library for dynamically creating JSON Schema compatible with AJV.

## Installation

```bash
npm install json-schema-creator
```

## Basic Usage

### Creating Simple Schemas

```typescript
import { JsonSchemaFactory, createString, createNumber } from 'json-schema-creator';

// Using factory
const stringSchema = JsonSchemaFactory.string('userName')
    .title('User Name')
    .description('Name of the user')
    .minLength(2)
    .maxLength(50)
    .compose();

// Using helper functions
const ageSchema = createNumber('userAge')
    .minimum(0)
    .maximum(120)
    .compose();

// Using convenience methods
const emailSchema = JsonSchemaFactory.email('userEmail')
    .title('Email Address')
    .compose();
```

### Creating Object Schemas

```typescript
import { JsonSchemaFactory } from 'json-schema-creator';

const userSchema = JsonSchemaFactory.object('user')
    .title('User')
    .description('User object schema')
    .requiredProperty('id', { type: 'string', format: 'uuid' })
    .requiredProperty('name', { type: 'string', minLength: 1 })
    .requiredProperty('email', { type: 'string', format: 'email' })
    .property('age', { type: 'number', minimum: 0, maximum: 120 })
    .property('isActive', { type: 'boolean', default: true })
    .strict() // additionalProperties: false
    .compose();
```

### Creating Array Schemas

```typescript
const tagsSchema = JsonSchemaFactory.array('tags')
    .title('Tags')
    .stringArray() // items: { type: 'string' }
    .minItems(1)
    .maxItems(10)
    .unique()
    .compose();

const numbersSchema = JsonSchemaFactory.array('numbers')
    .items({ type: 'number', minimum: 0 })
    .nonEmpty()
    .compose();
```

### Advanced Schemas

```typescript
// Schema with conditional validation
const conditionalSchema = JsonSchemaFactory.object('payment')
    .property('type', { type: 'string', enum: ['card', 'bank'] })
    .if({ properties: { type: { const: 'card' } } })
    .then({ 
        required: ['cardNumber', 'expiryDate'],
        properties: {
            cardNumber: { type: 'string', pattern: '^[0-9]{16}$' },
            expiryDate: { type: 'string', pattern: '^[0-9]{2}/[0-9]{2}$' }
        }
    })
    .else({
        required: ['accountNumber'],
        properties: {
            accountNumber: { type: 'string', minLength: 10 }
        }
    })
    .compose();

// Schema with composition
const basePersonSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        age: { type: 'number' }
    }
};

const employeeSchema = JsonSchemaFactory.object('employee')
    .allOf([
        basePersonSchema,
        {
            type: 'object',
            properties: {
                employeeId: { type: 'string' },
                department: { type: 'string' }
            },
            required: ['employeeId', 'department']
        }
    ])
    .compose();
```

## API Reference

### JsonSchemaFactory

Main factory class for creating different types of schemas.

#### Static Methods

- `string(name: string)` - Creates string schema
- `number(name: string)` - Creates number schema
- `integer(name: string)` - Creates integer schema
- `boolean(name: string)` - Creates boolean schema
- `array(name: string)` - Creates array schema
- `object(name: string)` - Creates object schema
- `null(name: string)` - Creates null schema

#### Convenience Methods

- `email(name: string)` - String with email format
- `uri(name: string)` - String with URI format
- `date(name: string)` - String with date format
- `dateTime(name: string)` - String with date-time format
- `uuid(name: string)` - String with UUID format
- `positiveNumber(name: string)` - Number > 0
- `positiveInteger(name: string)` - Integer > 0
- `stringArray(name: string)` - Array of strings
- `numberArray(name: string)` - Array of numbers
- `strictObject(name: string)` - Object without additional properties

### JsonSchemaCreator

Base class with fundamental methods.

#### Methods

- `type(type: Type | Array<Type>)` - Sets type
- `title(text: string)` - Sets title
- `description(text: string)` - Sets description
- `enum(values: any[])` - Sets allowed values
- `const(value: any)` - Sets constant value
- `default(value: any)` - Sets default value
- `examples(values: any[])` - Sets examples
- `allOf(schemas: Shape[])` - AND composition
- `anyOf(schemas: Shape[])` - OR composition
- `oneOf(schemas: Shape[])` - XOR composition
- `not(schema: Shape)` - Negation
- `if(condition: Shape)` - Condition
- `then(schema: Shape)` - Schema when condition is met
- `else(schema: Shape)` - Schema when condition is not met
- `compose()` - Returns final schema

### JsonSchemaInput (String)

Extends JsonSchemaCreator with string-specific methods.

#### Methods

- `minLength(value: number)` - Minimum length
- `maxLength(value: number)` - Maximum length
- `pattern(pattern: string)` - Regex pattern
- `format(format: string)` - Format
- `email()` - Email format
- `uri()` - URI format
- `date()` - Date format
- `dateTime()` - Date-time format
- `time()` - Time format
- `uuid()` - UUID format
- `ipv4()` - IPv4 format
- `ipv6()` - IPv6 format

### JsonSchemaNumber

Extends JsonSchemaCreator with number-specific methods.

#### Methods

- `minimum(value: number)` - Minimum value
- `maximum(value: number)` - Maximum value
- `exclusiveMinimum(value: number)` - Exclusive minimum value
- `exclusiveMaximum(value: number)` - Exclusive maximum value
- `multipleOf(value: number)` - Multiple of
- `positive()` - Positive number
- `negative()` - Negative number
- `range(min: number, max: number)` - Range
- `integer()` - Changes type to integer

### JsonSchemaArray

Extends JsonSchemaCreator with array-specific methods.

#### Methods

- `items(schema: Shape | Shape[])` - Items schema
- `minItems(value: number)` - Minimum number of items
- `maxItems(value: number)` - Maximum number of items
- `uniqueItems(unique: boolean)` - Unique items
- `additionalItems(allowed: boolean | Shape)` - Additional items
- `nonEmpty()` - Non-empty array
- `unique()` - Unique items
- `fixedLength(length: number)` - Fixed length
- `stringArray()` - Array of strings
- `numberArray()` - Array of numbers
- `integerArray()` - Array of integers
- `booleanArray()` - Array of booleans

### JsonSchemaObject

Extends JsonSchemaCreator with object-specific methods.

#### Methods

- `property(name: string, schema: Shape)` - Adds property
- `properties(props: { [key: string]: Shape })` - Adds properties
- `required(fields: string[])` - Sets required fields
- `addRequired(field: string)` - Adds required field
- `additionalProperties(allowed: boolean | Shape)` - Additional properties
- `minProperties(value: number)` - Minimum number of properties
- `maxProperties(value: number)` - Maximum number of properties
- `patternProperties(patterns: { [pattern: string]: Shape })` - Pattern properties
- `patternProperty(pattern: string, schema: Shape)` - Adds pattern property
- `strict()` - No additional properties
- `nonEmpty()` - Non-empty object
- `requiredProperty(name: string, schema: Shape)` - Adds required property

## Usage Examples

### Complete API Schema

```typescript
import { JsonSchemaFactory, Schema } from 'json-schema-creator';

// User schema
const userSchema = Schema.object('User')
    .title('User')
    .description('User account information')
    .requiredProperty('id', { type: 'string', format: 'uuid' })
    .requiredProperty('username', { 
        type: 'string', 
        minLength: 3, 
        maxLength: 30,
        pattern: '^[a-zA-Z0-9_]+$'
    })
    .requiredProperty('email', { type: 'string', format: 'email' })
    .property('profile', {
        type: 'object',
        properties: {
            firstName: { type: 'string', minLength: 1 },
            lastName: { type: 'string', minLength: 1 },
            avatar: { type: 'string', format: 'uri' },
            bio: { type: 'string', maxLength: 500 }
        },
        additionalProperties: false
    })
    .property('preferences', {
        type: 'object',
        properties: {
            theme: { type: 'string', enum: ['light', 'dark'] },
            language: { type: 'string', default: 'en' },
            notifications: { type: 'boolean', default: true }
        },
        additionalProperties: false
    })
    .property('roles', {
        type: 'array',
        items: { type: 'string', enum: ['user', 'admin', 'moderator'] },
        uniqueItems: true,
        default: ['user']
    })
    .property('createdAt', { type: 'string', format: 'date-time' })
    .property('updatedAt', { type: 'string', format: 'date-time' })
    .strict()
    .compose();

console.log(JSON.stringify(userSchema, null, 2));
```

## Features

- ✅ **Full TypeScript support** with type definitions
- ✅ **Fluent API** with method chaining
- ✅ **AJV compatibility** - generates valid JSON Schema
- ✅ **Complete JSON Schema Draft 7 support**
- ✅ **Specialized classes** for different data types
- ✅ **Convenience methods** for common patterns
- ✅ **Comprehensive test suite** with Jest
- ✅ **Zero dependencies** in production
- ✅ **Tree-shakable** - only import what you need
- ✅ **Well documented** with examples

## Supported JSON Schema Features

### Basic Types
- `string`, `number`, `integer`, `boolean`, `array`, `object`, `null`

### String Validation
- `minLength`, `maxLength`, `pattern`, `format`
- Built-in formats: email, uri, date, date-time, time, uuid, ipv4, ipv6

### Number Validation
- `minimum`, `maximum`, `exclusiveMinimum`, `exclusiveMaximum`, `multipleOf`

### Array Validation
- `items`, `minItems`, `maxItems`, `uniqueItems`, `additionalItems`

### Object Validation
- `properties`, `required`, `additionalProperties`, `patternProperties`
- `minProperties`, `maxProperties`

### Composition
- `allOf`, `anyOf`, `oneOf`, `not`

### Conditional Validation
- `if`, `then`, `else`

### Common Properties
- `enum`, `const`, `default`, `examples`

### Meta Properties
- `$id`, `$schema`, `$ref`, `$comment`, `definitions`, `$defs`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## Building

```bash
# Build the project
npm run build

# Lint the code
npm run lint

# Fix linting issues
npm run lint:fix
```

## License

MIT © [Mariusz Lejkowski](https://github.com/c0mm1tX)

## Links

- [GitHub Repository](https://github.com/c0mm1tX/json-schema-creator)
- [NPM Package](https://www.npmjs.com/package/json-schema-creator)
- [Issues](https://github.com/c0mm1tX/json-schema-creator/issues)
- [JSON Schema Specification](https://json-schema.org/)
- [AJV Validator](https://ajv.js.org/) 