const escola = 'Cod3r';

console.log(escola.charAt(4)); //letra q ta no indice 4
console.log(escola.charCodeAt(3)); //codigoHTML na tabela unicode
console.log(escola.indexOf('d')); //indice que o digito da palavra ta

console.log(escola.substring(1)); //indice 1 até o final
console.log(escola.substring(0,3)); //indice 0 até o 3, sem incluir o 3


console.log('Escola '.concat(escola).concat('!'));
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(','));

