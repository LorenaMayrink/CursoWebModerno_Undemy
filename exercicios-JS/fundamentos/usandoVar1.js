{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera); // com a variável var, a variável aparece msm fora do bloco

function teste() {
    var local = 123;
    console.log(local);
}

teste()
console.log(local) //var não funciona

/* Variável só tem dois escopos possíveis:
Nível global
Dentro de uma função*/