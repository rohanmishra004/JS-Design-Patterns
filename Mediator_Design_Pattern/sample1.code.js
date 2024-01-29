function Member(name) {
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send: function (message, toMember) {
        this.chatroom.send(message, this , toMember)
    },

    receive: function (message, fromMember) {
        console.log(`${fromMember.name} to ${this.name}:: ${message}`)
    }
}


function Chatroom() {
    this.members ={}
}


//this is the mediator as it handles all the routing
Chatroom.prototype = {
    addMember: function (member) {
        this.members[member.name] = member
        member.chatroom = this
    },

    send: function (message, fromMember, toMember) {
        if (toMember != fromMember) {
            toMember.receive(message, fromMember)
        }
        else {
            console.log('Cannot send to yourself')
        }
        
    }
}

const chat = new Chatroom()

const Bob = new Member('Bob')
const John = new Member('John')
const Tim = new Member('Tim')


chat.addMember(Bob)
chat.addMember(John)
chat.addMember(Tim)

Bob.send('Hi John', John)
John.send('Hi John', John)

