function tratandoErro(array, num) {
    try {
        if(array == undefined && num == undefined) {
            throw new ReferenceError('nenhum parâmetro foi passado.')
        }
        if(typeof array != 'object') {
            throw new TypeError('o priemiro parâmetro passado deve ser do tipo objeto.')
        }
        if(typeof num != 'number'){
            throw new TypeError('o segundo parâmetro passado deve ser um número.')
        }  
        if(array.length != num ){
            throw new RangeError('o tamanho do array não corresponde ao número passado.')
        }
        return `os parâmetros passados foram ${array} e ${num}  ` 
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            return `ReferenceError: ${e.message}`
        }
         else if(e instanceof TypeError) {
            return `TypeError: ${e.message}`
        }
         else if(e instanceof RangeError) {
            return `RangeError: ${e.message}`
        } else {
            return `Erro não esperado`
        }

    }

}

console.log(tratandoErro())