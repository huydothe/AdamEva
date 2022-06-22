class Apple {
    weight;

    constructor(weight) {
        this.weight = weight;
    };

    getWeight() {
        return this.weight;
    };

    setWeight(weight) {
        this.weight = weight;
    };

    isEmpty() {
        if (this.weight > 0) {
            return false;
        } else {
            return true;
        }
    }
    Decrease() {
        if (this.isEmpty) {
            this.weight--;
        }
    }
}

class Human{
    name;
    gender;
    weight;
    constructor(name,gender,weight) {
        this.name=name;
        this.gender=gender;
        this.weight=weight;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight=weight;
    }
    isMale(){
        if(this.gender==1){
            return true;
        }else {
            return false;
        }
    }
    getGender=function (){
        if(this.isMale){
            return "Male";
        }else {
            return  "female";
        }
    }
    say(something){
        console.log(something)
    }
    checkApple(apple){
        return apple.isEmpty();
    }
    eat(apple){
        if(apple.getWeight() > 0){
            apple.Decrease();
            this.weight++;
        }else {
            alert('Ăn hết rồi')
        }
    }
    getInfo(human) {
        alert(human.name + '' + human.weight + human.getGender());
    }
}
let adam=new Human('Adam',1,70);
let eva=new Human('Eva',2,50);
let apple=new Apple(8)

adam.say("Hello. I'm a real man");
eva.say("Hi! I'm a woman ");

while (apple.isEmpty()==false){
    document.write('Adam Ăn quả táo '+'<br/>');
    adam.eat(apple);
    document.write('Quả táo còn '+ apple.getWeight() + ' đơn vị'+'<br>');
    document.write('Cân nặng của Adam là '+ adam.getWeight() + ' cân' + '<br>');

    document.write('Eva Ăn quả táo '+'<br/>');
    eva.eat(apple);
    document.write('Quả táo còn '+ apple.getWeight() + ' đơn vị'+'<br>');
    document.write('Cân nặng của Eva là '+ eva.getWeight() + ' cân');
    document.write('<br/>')
    document.write('<br/>')
    document.write('<br/>')
}