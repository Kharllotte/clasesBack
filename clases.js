class Usuario{

    constructor(name,lastname){
        this.name = name,
        this.lastname = lastname,
        this.books = [],
        this.pets = []
    }

    getFullName(){
        let fullName = `${this.name} ${this.lastname}`
        return fullName
    }
    addMascota(pet){
        this.pets.push(pet);
    }
    countMascotas(){
        let numPets = this.pets.length
        return numPets
    }
    addBook(name, autor){
        let books = {name, autor}
        this.books.push(books)
    }
    getBookNames(){
        return this.books.map(book => book.name)
    }
}

const name1 = new Usuario("Liliana","Forero")
name1.addMascota("perro")
name1.addMascota("loro")
name1.addBook("relato de un asesino","Mario mendoza")
name1.addBook("cien años de soledad","Gabriel Garcia")
console.log(name1.getFullName())
console.log(name1.countMascotas())
console.log(name1.getBookNames())

const name2 = new Usuario("Pepito","Perez")
name2.addMascota("gato")
name2.addMascota("pez")
name2.addMascota("leon")
name2.addMascota("raton")
name2.addBook("sin remedio","Antonio Caballero")
name2.addBook("el amor en tiempos de colera","Gabriel Garcia")
console.log(name2.getFullName())
console.log(name2.countMascotas())
console.log(name2.getBookNames())