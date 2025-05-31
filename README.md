# JSON Schema Creator

Biblioteka TypeScript do dynamicznego tworzenia schematów JSON Schema zgodnych z AJV.

## Instalacja

```bash
npm install json-schema-creator
```

## Podstawowe użycie

### Tworzenie prostych schematów

```typescript
import { JsonSchemaFactory, createString, createNumber } from 'json-schema-creator';

// Używając factory
const stringSchema = JsonSchemaFactory.string('userName')
    .title('User Name')
    .description('Name of the user')
    .minLength(2)
    .maxLength(50)
    .compose();

// Używając funkcji pomocniczych
const ageSchema = createNumber('userAge')
    .minimum(0)
    .maximum(120)
    .compose();

// Używając metod convenience
const emailSchema = JsonSchemaFactory.email('userEmail')
    .title('Email Address')
    .compose();
```

### Tworzenie schematów obiektów

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

### Tworzenie schematów tablic

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

### Zaawansowane schematy

```typescript
// Schema z walidacją warunkową
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

// Schema z kompozycją
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

Główna klasa factory do tworzenia różnych typów schematów.

#### Metody statyczne

- `string(name: string)` - Tworzy schema dla string
- `number(name: string)` - Tworzy schema dla number
- `integer(name: string)` - Tworzy schema dla integer
- `boolean(name: string)` - Tworzy schema dla boolean
- `array(name: string)` - Tworzy schema dla array
- `object(name: string)` - Tworzy schema dla object
- `null(name: string)` - Tworzy schema dla null

#### Metody convenience

- `email(name: string)` - String z formatem email
- `uri(name: string)` - String z formatem URI
- `date(name: string)` - String z formatem date
- `dateTime(name: string)` - String z formatem date-time
- `uuid(name: string)` - String z formatem UUID
- `positiveNumber(name: string)` - Number > 0
- `positiveInteger(name: string)` - Integer > 0
- `stringArray(name: string)` - Array stringów
- `numberArray(name: string)` - Array liczb
- `strictObject(name: string)` - Object bez dodatkowych właściwości

### JsonSchemaCreator

Klasa bazowa z podstawowymi metodami.

#### Metody

- `type(type: Type | Array<Type>)` - Ustawia typ
- `title(text: string)` - Ustawia tytuł
- `description(text: string)` - Ustawia opis
- `enum(values: any[])` - Ustawia dozwolone wartości
- `const(value: any)` - Ustawia stałą wartość
- `default(value: any)` - Ustawia wartość domyślną
- `examples(values: any[])` - Ustawia przykłady
- `allOf(schemas: Shape[])` - Kompozycja AND
- `anyOf(schemas: Shape[])` - Kompozycja OR
- `oneOf(schemas: Shape[])` - Kompozycja XOR
- `not(schema: Shape)` - Negacja
- `if(condition: Shape)` - Warunek
- `then(schema: Shape)` - Schema gdy warunek spełniony
- `else(schema: Shape)` - Schema gdy warunek niespełniony
- `compose()` - Zwraca gotowy schema

### JsonSchemaInput (String)

Rozszerza JsonSchemaCreator o metody dla stringów.

#### Metody

- `minLength(value: number)` - Minimalna długość
- `maxLength(value: number)` - Maksymalna długość
- `pattern(pattern: string)` - Regex pattern
- `format(format: string)` - Format
- `email()` - Format email
- `uri()` - Format URI
- `date()` - Format date
- `dateTime()` - Format date-time
- `time()` - Format time
- `uuid()` - Format UUID
- `ipv4()` - Format IPv4
- `ipv6()` - Format IPv6

### JsonSchemaNumber

Rozszerza JsonSchemaCreator o metody dla liczb.

#### Metody

- `minimum(value: number)` - Minimalna wartość
- `maximum(value: number)` - Maksymalna wartość
- `exclusiveMinimum(value: number)` - Minimalna wartość (exclusive)
- `exclusiveMaximum(value: number)` - Maksymalna wartość (exclusive)
- `multipleOf(value: number)` - Wielokrotność
- `positive()` - Liczba dodatnia
- `negative()` - Liczba ujemna
- `range(min: number, max: number)` - Zakres
- `integer()` - Zmienia typ na integer

### JsonSchemaArray

Rozszerza JsonSchemaCreator o metody dla tablic.

#### Metody

- `items(schema: Shape | Shape[])` - Schema elementów
- `minItems(value: number)` - Minimalna liczba elementów
- `maxItems(value: number)` - Maksymalna liczba elementów
- `uniqueItems(unique: boolean)` - Unikalne elementy
- `additionalItems(allowed: boolean | Shape)` - Dodatkowe elementy
- `nonEmpty()` - Tablica niepusta
- `unique()` - Elementy unikalne
- `fixedLength(length: number)` - Stała długość
- `stringArray()` - Tablica stringów
- `numberArray()` - Tablica liczb
- `integerArray()` - Tablica integerów
- `booleanArray()` - Tablica booleanów

### JsonSchemaObject

Rozszerza JsonSchemaCreator o metody dla obiektów.

#### Metody

- `property(name: string, schema: Shape)` - Dodaje właściwość
- `properties(props: { [key: string]: Shape })` - Dodaje właściwości
- `required(fields: string[])` - Ustawia wymagane pola
- `addRequired(field: string)` - Dodaje wymagane pole
- `additionalProperties(allowed: boolean | Shape)` - Dodatkowe właściwości
- `minProperties(value: number)` - Minimalna liczba właściwości
- `maxProperties(value: number)` - Maksymalna liczba właściwości
- `patternProperties(patterns: { [pattern: string]: Shape })` - Właściwości wzorcowe
- `patternProperty(pattern: string, schema: Shape)` - Dodaje właściwość wzorcową
- `strict()` - Bez dodatkowych właściwości
- `nonEmpty()` - Obiekt niepusty
- `requiredProperty(name: string, schema: Shape)` - Dodaje wymaganą właściwość

## Przykłady użycia

### Kompletny schema API

```typescript
import { JsonSchemaFactory, Schema } from 'json-schema-creator';

// Schema dla użytkownika
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

## Licencja

MIT
