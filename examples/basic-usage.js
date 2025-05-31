const { JsonSchemaFactory, Schema } = require('json-schema-creator');

// Przykład 1: Prosty string schema
const nameSchema = JsonSchemaFactory.string('userName')
    .title('User Name')
    .description('Name of the user')
    .minLength(2)
    .maxLength(50)
    .pattern('^[a-zA-Z\\s]+$')
    .compose();

console.log('Name Schema:');
console.log(JSON.stringify(nameSchema, null, 2));

// Przykład 2: Email schema
const emailSchema = Schema.email('userEmail')
    .title('Email Address')
    .description('User email address')
    .compose();

console.log('\nEmail Schema:');
console.log(JSON.stringify(emailSchema, null, 2));

// Przykład 3: Number schema z zakresem
const ageSchema = Schema.number('userAge')
    .title('Age')
    .description('User age in years')
    .minimum(0)
    .maximum(120)
    .compose();

console.log('\nAge Schema:');
console.log(JSON.stringify(ageSchema, null, 2));

// Przykład 4: Array schema
const tagsSchema = Schema.array('tags')
    .title('Tags')
    .description('List of user tags')
    .stringArray()
    .minItems(1)
    .maxItems(10)
    .unique()
    .compose();

console.log('\nTags Schema:');
console.log(JSON.stringify(tagsSchema, null, 2));

// Przykład 5: Kompleksowy object schema
const userSchema = Schema.object('user')
    .title('User')
    .description('Complete user object')
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
    .property('age', { type: 'number', minimum: 0, maximum: 120 })
    .property('isActive', { type: 'boolean', default: true })
    .property('roles', {
        type: 'array',
        items: { type: 'string', enum: ['user', 'admin', 'moderator'] },
        uniqueItems: true,
        default: ['user']
    })
    .property('createdAt', { type: 'string', format: 'date-time' })
    .strict()
    .compose();

console.log('\nUser Schema:');
console.log(JSON.stringify(userSchema, null, 2));

// Przykład 6: Schema z walidacją warunkową
const paymentSchema = Schema.object('payment')
    .title('Payment Information')
    .property('type', { type: 'string', enum: ['card', 'bank'] })
    .if({ properties: { type: { const: 'card' } } })
    .then({ 
        required: ['cardNumber', 'expiryDate'],
        properties: {
            cardNumber: { type: 'string', pattern: '^[0-9]{16}$' },
            expiryDate: { type: 'string', pattern: '^[0-9]{2}/[0-9]{2}$' },
            cvv: { type: 'string', pattern: '^[0-9]{3,4}$' }
        }
    })
    .else({
        required: ['accountNumber', 'routingNumber'],
        properties: {
            accountNumber: { type: 'string', minLength: 10, maxLength: 17 },
            routingNumber: { type: 'string', pattern: '^[0-9]{9}$' }
        }
    })
    .compose();

console.log('\nPayment Schema:');
console.log(JSON.stringify(paymentSchema, null, 2)); 