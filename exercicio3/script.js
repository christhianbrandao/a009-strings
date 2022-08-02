//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase)

const fraseDois = frase.replace("verde","rosa")
const fraseDoisFinal = fraseDois.replace("azul","laranja")
console.log(fraseDoisFinal)

const incluiVerde = fraseDois.includes("verde")
const incluiLaranja = fraseDois.includes("laranja")
console.log(`a nova frase possui a palavra verde:${incluiVerde}\na nova frase possui a palavra laranja:${incluiLaranja
}`)


//extra 
const t = `mas não deixe o gato sair`.toUpperCase()
const extra = frase.replace("mas não deixe o gato sair",t)
console.log(extra)