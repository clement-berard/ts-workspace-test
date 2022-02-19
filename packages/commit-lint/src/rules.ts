enum LEVELS {
    DISABLE= 0,
    WARNING= 1,
    ERROR= 2,
}

module.exports =  {
    rules: {
        'type-enum': [LEVELS.ERROR, 'always', ['chore']],
        'scope-enum': [LEVELS.WARNING, 'always', ['clientSupport2']],
        'scope-case': [LEVELS.ERROR, 'always', 'camel-case'],
    },
}
