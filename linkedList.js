// implementation of linkedlist

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.numberOfNodes = 0;
    }

    add(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfNodes++;
    }

    print() {
        let string = '';
        let current = this.head;
        while(current) {
          string += `${current.data} `;
          current = current.next;
        }
        console.log(string.trim());
      }

      length(){
          console.log(this.numberOfNodes);
      }

      traverse(fn){
          let current = this.head;
          while(current){
              if(fn){
                  fn(current);
              } 
              current = current.next;
          }
      }
}

const linkedlist = new Linkedlist();
linkedlist.add(33);
linkedlist.add(44);
linkedlist.add(00);
linkedlist.print();
linkedlist.length();