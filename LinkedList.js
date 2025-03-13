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
        return this.#findMatchRec(this.head)
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

    prepend(data)
    {
        let newData = new ListNode(data, this.head)
        this.head = newData
    }

    getAll()
    {
        const dataArr = []
        let currNode = this.head
        while (currNode != null)
        {
            dataArr.push(currNode.data)
        }
        return dataArr
    }

    remove(checkFunc)
    {
        if (checkFunc(this.head.data))
        {
            this.head = this.head.next
            return 0
        }
        return (this.#removeRecurse(checkFunc, this.head.next, this.head))
    }

    #removeRecurse(checkFunc, currNode, lastNode)
    {
        if (checkFunc(this.head.data))
        {
            lastNode.next = currNode.next
            return 0
        }
        if (currNode.next == null)
        {
            return 404
        }
        return this.#removeRecurse(checkFunc, currNode.next, currNode)
    }
}