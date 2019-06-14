@addAvailability(true)
class Course { }


function addAvailability(val:boolean) {
    return (targetClass:Object) => {
        return class{
            avaliable=val;
        }
    }
}

console.log(new Course());


//tsc -init to initilize the ts with tsconfig.json
//enable decorators by setting "experimentalDecorators": true
// install webpack for bundling our application