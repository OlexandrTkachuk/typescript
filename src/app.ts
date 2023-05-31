interface IPerson {
	name: string;
	age: number;

	greet(phrase: string): void;
}

let user: IPerson;

user = {
	name: "Max",
	age: 21,

	greet(phrase: string) {
		console.log(`${phrase} ${this.name}`);
	},
};

user.greet("Hello my boy");
 