let nota = 89

if (nota >= 90) {
    console.log("Nota A")
} else if (nota >= 80) {
    console.log("Nota B")
} else if (nota >= 70) {
    console.log("Nota C")
} else if (nota >= 60) {
    console.log("Nota D")
} else if (nota < 60) {
    console.log("Nota F")
}

// let receitas = [2100 + 2000]
// let despesas = [4500]
// for (let property in receitas && despesas) {
//     console.log(receitas - despesas[property])
//     if (receitas - despesas[property] >= 0) {
//         console.log('Saldo positivo')
//     } else if (receitas - despesas[property] <= 0) {
//         console.log('Saldo negativo')
//     }
// }

// Correção
let family = {
    incomes: [2500, 3200, 210, 500.50],
    expenses: [2700, 500, 300]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total

}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = 'negativo'

    if (itsOk) {
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()

//Celcius em Fahrenheit

function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if (!celciusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }
    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

    //fluxo alternativo C -> F
    if (celciusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celcius => celcius * 9 / 5 + 32
        degreeSign = 'F'
    }
    return formula(updateDegree) + degreeSign
}
try {
    console.log(transformDegree('50F'))
    //transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}

//Buscando e contando dados em array

const booksByCategory = [
    {
        titleOfCategory: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
            {
                title: "O guia de investimentos: aprenda a ganhar dinheiro investindo como os ricos",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        titleOfCategory: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Steven R. Covey",
            },
        ],
    },
];


const totalCategories = booksByCategory.length;

console.log(totalCategories); //2
for (let category of booksByCategory) {
    console.log("Total de livors da categoria: :", category.titleOfCategory)
    console.log(category.books.length)
}


function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');








// let authorsAux = []

// for (let category of booksByCategory) {
//     for (let books of category.books) {
//         console.log(books.author)
//         let isToAdd = true;
//         for (let authorAux of authorsAux) {
//             if (books.author === authorAux) {
//                 isToAdd = false
//             }
//         }
//         if (isToAdd) {
//             authorsAux.push(books.author);
//         }

//     }
// }

// for (let category in booksByCategory) {
//     for (let books in category.books) {
//         console.log(books)
//         for (let author of books) {
//             if (books.author === "Augusto Cury") {
//                 console.log(books.title)
//             }
//         }

//     }
// }

// console.log(authorsAux)

// let i = totalCategories;
// for (i; i > 0; i--) {
//     let category = booksByCategory[i];
// }

// for (let i = 0; i < totalCategories; i++) {
//     let category = booksByCategory[i];
//     console.log("Category:", category);
// }


