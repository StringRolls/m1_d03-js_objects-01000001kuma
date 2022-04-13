const user1 = {
    name : 'Adrian',
    id: 7
};

const user2 = {
    name : 'John',
    id: 29
};

const book1 = {
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger',
    isbn: '0316769487',
    category: 'Classic Literature'
};

const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310786',
    category: 'Classic Literature'
};

const book3 = {
    title: 'The art of war',
    author: 'Sun Tzu',
    isbn: '044631078009896',
    category: 'Philosophy'
};

const library = {};

library.user = [user1, user2]

user1.books= [book1, book2, book3];
user2.books= [book2, book3];

console.log("this is the object", library);



