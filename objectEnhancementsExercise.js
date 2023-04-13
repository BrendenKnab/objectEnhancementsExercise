const createInstructor = (firstName, lastName) => ({firstName, lastName});

let favNumber = 42;
const instructor = {
    firstName: 'Colt',
    [favNumber]: 'That Is My Favorite!'
};

const instructor2 = {
    firstName: 'Colt',
    sayHi() {return 'Hi!'},
    sayBye() {return this.firstName+' says bye!'}
};

const d = createAnimal("dog", "bark", "Woooof!");
const s = createAnimal("sheep", "bleet", "BAAAAaaaa");

function createAnimal(species, verb, noise){
    return {
        species, 
        [verb](){
            return noise
        }
    };
};

