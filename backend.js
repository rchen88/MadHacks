let moneyPool = 1000.0
let totalNumberOfLikes = 50

function addComment() {
    var Comment = document.getElementById("name").value;
    var NumOfLikes = document.getElementById("comment").value;
    var commentNode = document.createElement("div");
    var textNode = document.createTextNode("Comment " + Comment + " have " + NumOfLikes + " likes\n");
    commentNode.appendChild(textNode);
    document.getElementById("comments").appendChild(commentNode);
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
}
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    addComment();
});

class User
{

    constructor(allPosts)
    {
        this.allPosts = allPosts;
        this.userPost = [];
    }
    
    calculateMoney = () =>
    {
        let totalMoneyMade = 0;
        for (let i = 0; i < this.userPost.length; i++)
        {
            totalMoneyMade += this.allPosts.getMoneyForPost(this.userPost[i]);
        }
        return totalMoneyMade;
    }

    addUserPost = (newPost) =>
    {
        this.userPost.push(newPost);
    } 

}

class post
{

    constructor (likes)
    {
        this.likes = likes;
    }

    getNumOfLikes = () =>
    {
        return this.likes;
    };

    setNumOfLikes = (likes) =>
    {
        this.likes = likes
    };

}

class postList
{
    constructor()
    {
        this.postArray = [];
        this.totalNumberOfLikes = 0;
    }

    addPost = (toAdd) =>
    {
        this.postArray.push(toAdd);
        this.totalNumberOfLikes += toAdd.getNumOfLikes();
    };

    getMoneyForPost = (inquiredPost) =>
    {
        if (inquiredPost.getNumOfLikes != 0)
        {
            return parseFloat(inquiredPost.getNumOfLikes() / totalNumberOfLikes * moneyPool);
        }
        return 0;
    };

}

let test = new postList(100.0)

a = new post(2)
b = new post(3)

test.addPost(a)
test.addPost(b)

let user1 = new User(test)
user1.addUserPost(b)

console.log(user1.calculateMoney())