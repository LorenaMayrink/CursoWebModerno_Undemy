function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // o || funciona como 'ou', além disso, se a condição trabalho 1 for verdade, o código não irá olhar para a condição 2
    const comprarTv50 = trabalho1 && trabalho2 // && significa "e", então, as duas condições precisam ser verdadeiras para o resultado ser verdadeiro
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitiwise wor foi usado para simular a situação de que a condição 1 seja necessariamnete verdadeira e a 2 necessariamente falsa
    const comprarTv32 = trabalho1 != trabalho2
}