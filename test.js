const copier = require('./');

const nameWithSuffix = copier('copia 1 Nuevo contrato', ['dudi', 'copia 4 Nuevo contrato', 'copia 1 Nuevo contrato', 'copia 3 Nuevo contrato'], 'copia');
console.log(nameWithSuffix);
