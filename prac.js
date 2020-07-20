var sayNode = function() {
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function(){
        console.log('JS');
    },
    sayNode: sayNode
};
/*
console.log(oldObject)
oldObject[es + 6] = 'Fantastic';
console.log(oldObject)
console.log(oldObject.ES6);
console.log(es);
*/
const newObject = {
    sayJs() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic'
};

var relationship = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
};
relationship.logFriends();

const candyMachine = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
const {getCandy, status: { count } } = candyMachine;
/*
console.log(count);
console.log(getCandy);
console.log(count);
*/
var array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
//console.log(node, obj, bool);

const condition = false;
const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});
/*
promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
*/
promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.log(error);
    });

function findAndSaveUser(User){
    User.findOne({}, (err, user) =>{
        if (err) {
            return console.error(err);
        }
        user.name = 'mandoo'
        user.save((err) => {
            if (err) {
                return console.log(err);
            }
            User.findOne({gender: 'm'}, (err, user) => {
                console.log('hi');
            });
        });
    });
}

function findAndSaveUser(Users){
    Users.findOne({})
        .then((user) => {
            user.name = 'Mandoo';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm'});
        })
        .catch(err => {
            console.log(err);
        });
}