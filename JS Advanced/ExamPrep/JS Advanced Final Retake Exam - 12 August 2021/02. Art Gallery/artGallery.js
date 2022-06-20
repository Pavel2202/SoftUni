class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item': 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(model, name, quantity) {
        model = model.toLowerCase();

        if (!this.possibleArticles[model]) {
            throw new Error("This article model is not included in this gallery!");
        }

        if (this.listOfArticles.some(x => x.name == name)) {
            let article = this.listOfArticles.find(x => x.name == name);
            article.quantity += quantity;
        }
        else {
            let article = {
                model,
                name,
                quantity
            };

            this.listOfArticles.push(article);
        }

        return `Successfully added article ${name} with a new quantity- ${quantity}.`;
    }

    inviteGuest(name, personality) {
        if (this.guests.some(x => x.name == name)) {
            throw new Error(`${name} has already been invited.`);
        }

        let points = 50;

        if (personality.toLowerCase() == 'vip') {
            points = 500;
        }
        else if (personality.toLowerCase() == 'middle') {
            points = 250;
        }

        let guest = {
            name,
            points,
            purchaseArticle: 0
        };

        this.guests.push(guest);

        return `You have successfully invited ${name}!`;
    }

    buyArticle(model, name, guestName) {
        let article = this.listOfArticles.find(x => x.name == name);

        if (!article || article.model != model) {
            throw new Error('This article is not found.');
        }

        if (article.quantity == 0) {
            return `The ${name} is not available.`;
        }

        if (!this.guests.some(x => x.name == guestName)) {
            return 'This guest is not invited.';
        }

        let guest = this.guests.find(x => x.name == guestName);

        let neededPoints = this.possibleArticles[model.toLowerCase()];

        if (guest.points < neededPoints) {
            return 'You need to more points to purchase the article.';
        }

        guest.points -= neededPoints;
        guest.purchaseArticle += 1;
        article.quantity -= 1;

        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo(criteria) {
        let output = '';

        if (criteria == 'article') {
            output += "Articles information:\n";

            for (const article of this.listOfArticles) {
                output += `${article.model} - ${article.name} - ${article.quantity}\n`;
            }
        }
        else {
            output += "Guests information:\n";

            for (const guest of this.guests) {
                output += `${guest.name} - ${guest.purchaseArticle}\n`;
            }
        }

        return output.trimEnd();
    }
}