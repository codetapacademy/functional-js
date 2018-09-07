function MarianRecruit() {
    return {
        next: function(){
            money += 10000;
            return {job: job++, done: false};
        }
    };
}

var money = 0 /* << your initial money */, job = 1, person = MarianRecruit();

console.log('Job #', person.next().job, 'done');
console.log('You have £', money);
console.log('Job #', person.next().job, 'done');
console.log('You have £', money);
