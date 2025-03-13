class ListNode
{
    constructor(data,next=null)
    {
        this.data = data;
        this.next = next
    }

    getData()
    {
        return this.data
    }

    getNext()
    {
        return this.next
    }

    setData(data)
    {
        this.data = data
    }

    setNext(next)
    {
        this.next = next
    }
}

class LinkedList
{
    size = 0;
    constructor()
    {
        this.head = null
    }

    getHead()
    {
        return head.data
    }

    findMatch(checkFunc)
    {
        console.log(this.#findMatchRec(checkFunc, this.head))
        return this.#findMatchRec(checkFunc, this.head)
    }

    #findMatchRec(checkFunc, currNode)
    {
        if (checkFunc(currNode.data))
        {
            return currNode.data
        }
        else if (currNode.next == null)
        {
            return null
        }
        return this.#findMatchRec(checkFunc, currNode.next)
    }

    containsKey(key)
    {
        return this.#containsKeyRecurse(key, this.head)
    }

    #containsKeyRecurse(key, currNode)
    {
        if (currNode.data.key == key)
        {
            return currNode.data
        }
        else if (currNode.next == null)
        {
            return false
        }
        return this.#containsKeyRecurse(key, currNode.next)
    }

    prepend(data)
    {
        let newData = new ListNode(data, this.head)
        this.head = newData
        this.size += 1
    }

    getAll()
    {
        const dataArr = []
        let currNode = this.head
        while (currNode != null)
        {
            dataArr.push(currNode.data)
            currNode = currNode.next
        }
        return dataArr
    }

    remove(checkFunc)
    {
        if (checkFunc(this.head.data))
        {
            this.head = this.head.next
            this.size -= 1
            return 0
        }
        return (this.#removeRecurse(checkFunc, this.head.next, this.head))
    }

    #removeRecurse(checkFunc, currNode, lastNode)
    {
        if (checkFunc(this.head.data))
        {
            lastNode.next = currNode.next
            this.size -= 1
            return 0
        }
        if (currNode.next == null)
        {
            return 404
        }
        return this.#removeRecurse(checkFunc, currNode.next, currNode)
    }

    toString()
    {
        let output = "( " + this.head.data +" )"
        let currNode = this.head.next
        while (currNode != null)
        {
            output += " => ( " + currNode.data[0] + " )"
            currNode = currNode.next
        }
        return output
    }
}

export {LinkedList, ListNode}