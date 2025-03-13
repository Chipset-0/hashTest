const { LinkedList } = require('./LinkedList')

require('./LinkedList')

class HashMap {

    #value = 7341989
    loadFactor = 0.8
    length = 16
    size = 0
    buckets = []

    constructor(length = 16, loadFactor=0.8)
    {
        this.length = length
        this.buckets.length = this.length
        this.loadFactor = loadFactor
    }


    #hash(key, length=this.length) {
        let hashcode = 0;

        for (let i = 0; i < key.length; i++)
        {
            hashcode = (this.#value * hashcode + key.charCodeAt(i))
        }
        hashcode = hashcode % length

        return hashcode
    }

    #checkIfWithinBounds(index)
    {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
            return false
          }
        return true
    }

    resize()
    {
        let targetLength = this.length * 2
        const newArr = []
        newArr.length = targetLength
        for (let i = 0; i < this.length; i++)
        {
            if (this.buckets[i] != null)
            {
                const allEntries = this.buckets[i].getAll()
                for (let j = 0; j<allEntries.length; j++)
                {
                    let object = allEntries[j]
                    let hashcode = this.#hash(object.key, targetLength)

                    if (newArr[hashcode] == null)
                    {
                        newArr[hashcode] = new LinkedList()
                    }

                    newArr[hashcode].prepend(object)
                }
            }
        }
        this.buckets = newArr
        this.length = targetLength
    }

    set(key, value) {
        let hashcode = this.#hash(key)
        this.#checkIfWithinBounds(hashcode)
        let object = {key, value}
        if (this.buckets[hashcode] == null)
        {
            this.buckets[hashcode] = new LinkedList()
            this.buckets[hashcode].prepend(object)
        }
        else
        {
            const findFunction = (data) => {return data[0] == key}
            let node = this.buckets[hashcode].findMatch(findFunction)
            if (node == null)
            {
                this.buckets[hashcode].prepend(object)
            }
            else
            {
                node.data = object
            }
        }
        this.size += 1
        if (this.size >= this.length * this.loadFactor)
        {
            this.resize()
        }
    }
    
    get(key) {
        let hashcode=this.#hash(key)
        if (this.#checkIfWithinBounds(hashcode))
        {
            if (this.buckets[hashcode] == null) { throw new Error("Does not exist in hashmap") }

            let result = this.buckets[hashcode].findMatch( (object) => {return object != null &&object.key == key} )
            if (result != null)
            {
                return result
            }

            throw new Error("Does not exist in hashmap")
        }
    }

    has(key) {
        let hashcode=this.#hash(key)
        if (this.#checkIfWithinBounds(hashcode))
        {
            return null != this.buckets[hashcode].findMatch((object) => {return object.key == key})
        }
    }

    remove(key) {
        let hashcode=this.#hash(key)
        if (this.#checkIfWithinBounds(hashcode))
        {
            let temp = this.buckets[hashcode]
            this.buckets[hashcode] = null
            return temp
        }
        this.size -= 1
    }

    getLength() {
        return this.length
    }

    clear() {
        this.buckets = []
        this.buckets.length = this.length
        this.size = 0
    }5

    keys() {
        let keyArr = []
        for (let i = 0; i < this.buckets.length; i++)
        {
            if (this.buckets[i] != null)
            {
                let allEntries = this.buckets[i].getAll()
                for (let j = 0; j < allEntries.length; j++)
                {
                    keyArr.push(allEntries[j].key)
                }
            }
        }
        return keyArr;
    }

    values() {
        let valArr = []
        for (let i = 0; i < this.buckets.length; i++)
        {
            if (this.buckets[i] != null)
            {
                let allEntries = this.buckets[i].getAll()
                for (let j = 0; j < allEntries.length; j++)
                {
                    valArr.push(allEntries[j].value)
                }
            }
        }
        return valArr;
    }

    entries() {
        let entArr = []
        for (let i = 0; i < this.buckets.length; i++)
        {
            if (this.buckets[i] != null)
            {
                let allEntries = this.buckets[i].getAll()
                for (let j = 0; j < allEntries.length; j++)
                {
                    entArr.push(allEntries[j])
                }
            }
        }
        return entArr;
    }

    toString() {
        let output = ""
        for (let i = 0; i < this.buckets.length; i++)
        {
            if (this.buckets[i] == null)
            {
                output += "0"
            }
            else
            {
                output += this.buckets[i].size
            }
            if (i != this.buckets.length-1)
            {
                output += ", "
            }
        }
        return output
    }
}

let map = new HashMap(4)
map.set("2", 'Hello')
map.set("441", 'World')
map.set("231", 'Lonely')
map.set("6", 'Hello')
map.set("9", 'World')
map.set("1", 'Lonely')
map.set("5", 'Hello')
map.set("53", 'World')
map.set("23", 'Lonely')
console.log(map.get("6"))
//console.log(map.get("0990"))
console.log(map.keys())
console.log(map.has("9"))
console.log(map.has("900"))
console.log(map.values())
console.log(map.entries())
console.log(map.toString())
map.clear()
console.log(map.toString())
console.log(map.getLength())