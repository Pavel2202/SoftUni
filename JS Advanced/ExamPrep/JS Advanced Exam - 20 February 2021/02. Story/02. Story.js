class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }
        else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }
        else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        }
        else if (username == this.creator) {
            throw new Error(`You can't like your own story!`);
        }
        else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        }
        else {
            this._likes.splice(this._likes.indexOf(username), 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        if (id == undefined || !this._comments.some(x => x.id == id)) {
            id = this._comments.length + 1;

            let comment = {
                id,
                username,
                content,
                replies: []
            };

            this._comments.push(comment);

            return `${username} commented on ${this.title}`
        }
        else {
            let comment = this._comments[id - 1];

            id = comment.id + '.' + (comment.replies.length + 1);

            let reply = {
                id,
                username,
                content
            };

            comment.replies.push(reply);

            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\n`;
        result += `Creator: ${this.creator}\n`;
        result += `Likes: ${this._likes.length}\n`;
        result += `Comments:\n`;

        if (sortingType === 'asc') {
            for (const item of this._comments) {
                result += `-- ${item.id}. ${item.username}: ${item.content}\n`;

                if (item.replies.length > 0) {
                    for (const reply of item.replies) {
                        result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                    }
                }
            }
        } else if (sortingType === 'desc') {
            let reversedComments = this._comments.reverse();

            for (const item of reversedComments) {
                result += `-- ${item.id}. ${item.username}: ${item.content}\n`;

                if (item.replies.length > 0) {

                    let reversedReplies = item.replies.reverse();

                    for (const reply of reversedReplies) {
                        result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                    }
                }
            }
        } else if (sortingType === 'username') {
            let sortedUsers = this._comments.sort((a, b) => a.username.localeCompare(b.username));

            for (const item of sortedUsers) {
                result += `-- ${item.id}. ${item.username}: ${item.content}\n`;

                if (item.replies.length > 0) {

                    let sortedReplies = item.replies.sort((a, b) => a.username.localeCompare(b.username));

                    for (const reply of sortedReplies) {
                        result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                    }
                }
            }
        }

        result = result.trimEnd();

        return result;
    }
}