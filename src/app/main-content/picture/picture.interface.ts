interface PictureInterface {
    title: string
    description: string
    image: string

    getTitle(): string

    getDescription(): string

    getImage(): string

    setTitle(title: string): void

    setDescription(description: string): void

    setImage(image: string): void
}

export class Picture implements PictureInterface {
    title: string
    description: string
    image: string

    constructor(title: string, description: string, image: string) {
        this.title = title;
        this.description = description
        this.image = image
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getImage() {
        return this.description;
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setImage(image) {
        this.image = image;
    }
}
