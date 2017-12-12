function Flyweight (classLevel, section, firstname,lastname) {
    this.classLevel = classLevel;
    this.section = section;
    this.firstname = firstname;
    this.lastname = lastname;
};

var FlyWeightFactory = (function () {
    var flyweights = {};
    return {

        get: function (classLevel, section, firstname,lastname) {
            if (!flyweights[classLevel + section]) {
                flyweights[classLevel + section] =
                    new Flyweight(classLevel, section, firstname,lastname);
            }
            return flyweights[classLevel + section];
        },

        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();

function StudentRegister () {
    var students = {};
    var count = 0;

    return {
        add: function (classLevel, section, firstname, lastname,matric) {
            students[matric] =
                new Student(classLevel, section, firstname, lastname, matric);
            count++;
        },

        get: function (matric) {
            return students[matric];
        },

        getCount: function () {
            return count;
        },

        rollCall : function(){
          return students;
        }
    };
}

var Student = function (classLevel, section, firstname, lastname, matric) {
    this.flyweight = FlyWeightFactory.get(classLevel, section, firstname,lastname);
    this.matric = matric;
    this.getLevel = function () {
        return this.flyweight.classLevel;
    }

}


var register = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        print: function () { console.log(log); log = ""; }
    }
})();


    var students = new StudentRegister();

    students.add("100L", "A", "Tomide", "Oladipo", "SSE/012/16345");
    students.add("100L", "A", "Kemi", "Adepoju", "SSE/012/12645");
    students.add("100L", "B", "Tunde", "Ednut", "SSE/012/12545");
    students.add("100L", "B", "Dotun", "Paul", "SSE/012/12342");
    students.add("100L", "A", "Bisi", "Ridwan", "SSE/012/12445");
    students.add("200L", "A", "Heritage", "Bola", "SSE/011/22345");
    students.add("200L", "A", "Banso", "Leka", "SSE/011/13345");


    register.add("Students: " + students.getCount());
    console.log(students.rollCall());
    register.add("Flyweights: " + FlyWeightFactory.getCount());
    register.print();
