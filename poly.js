{
    let user = {
        active:  false,
        sayHello: function(){
            return this.name + " says Hi!";
        }
};

    let student = {
        name: "JavaScript student",
        major: "French"
    };

    let teacher = {
        name: "John Bäck",
        teaching: ["math", "science"],
        sayHello: function(){
            let message = this.name + " teaches ";
            this.teaching.forEach(function(e){
                message += e + " ";
                });
                return message;
        }
    };

    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);

    student.active = true;

    let newMembers = [teacher, student];

newMembers.forEach(function(e){
    console.log(e.sayHello());
});

}