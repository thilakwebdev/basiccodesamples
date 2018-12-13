                  //coding challenge 1

/*
var johnMass= 60;
var johnHeight=1.60;
var johnBmi= johnMass/(johnHeight*johnHeight);

console.log(johnBmi);

var maxMass= 70;
var maxHeight=1.70;
var maxBmi= maxMass/(maxHeight*maxHeight);

console.log(maxBmi);

var bmi=johnBmi>maxBmi;

console.log(bmi);
*/

// coding challenge 2

/*

var johnScore= (50+50+50)/3;
var maxScore= (50+50+50)/3;
var maryScore= (50+50+56)/3;

console.log(johnScore,maxScore,maryScore);

if(johnScore>maryScore&&maryScore)
    {
        console.log("John wins with "+johnScore+" "+"points");
    }
 else if(maxScore>johnScore&&maryScore){
          console.log("Max wins with "+maxScore+" "+"points");   
}
else if(maryScore>johnScore&&maxScore){
      console.log("mary wins with "+maryScore+" "+"points");
}

else{
    console.log("there is a draw");
}

*/

//coding challenge 3

/*
function tipcalculator(bill){
    var percentage;
    if(bill<50){
        percentage=.2;
    }
    else if(bill>50 && bill<200){
        percentage=.15;
    }
    else{
        percentage=.1;
    }
    return percentage*bill;
}

var bill= [125,45,205];

var tips= [tipcalculator(bill[0]),tipcalculator(bill[1]),tipcalculator(bill[2])];

console.log(tips);

var finalValue= [bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]];

console.log(finalValue);

*/


//coding challenge 4
/*
var john ={
    firstName: 'John',
    lastName: 'walk',
    age: 26,
    mass: 75,
    height: 1.70,
    calcBmi: function(){
        return this.mass/(this.height*this.height);
    }

};

var max ={
    firstName: 'max',
    lastName: 'walk',
    age: 26,
    mass: 90,
    height: 1.70,
    calcBmi: function(){
        return this.mass/(this.height*this.height);
    }
    
};

var maxBmi= max.calcBmi();
var johnBmi= john.calcBmi();

console.log(maxBmi,johnBmi);

if(johnBmi>maxBmi){
    console.log('john is healthy');
}
else if(maxBmi>johnBmi){
    console.log('max is healthy');
}
else{
    console.log('both r healthy');
}

*/

// coding challenge 5
/*
var john={
    bill: [150,100,45,210,150],
    total:[],
    tips: [],
    calcTip: function(){
        for(i=0; i<this.bill.length; i++){
            var percentage;
            if(this.bill[i]<50)
                {
                    percentage=0.2;
                }
            else if(this.bill[i]>50&&this.bill[i]<200)
                {
                    percentage=0.15;
                }
            else{
                percentage=0.1;
            }
            this.tips.push( percentage*this.bill[i]);
            this.total.push(this.bill[i]+this.tips[i]);
        }
        
    }
};

var max={
    bill: [150,40,145,310],
    total:[],
    tips: [],
    calcTip: function(){
        for(i=0; i<this.bill.length; i++){
            var percentage;
            if(this.bill[i]<50)
                {
                    percentage=0.3;
                }
            else if(this.bill[i]>50&&this.bill[i]<200)
                {
                    percentage=0.2;
                }
            else{
                percentage=0.15;
            }
            this.tips.push( percentage*this.bill[i]);
            this.total.push(this.bill[i]+this.tips[i]);
        }
    }
};

john.calcTip();
max.calcTip();

console.log(john.tips,john.total);
console.log(max.tips,max.total);

function average(tips){
    var sum=0;
    for(i=0;i<tips.length;i++)
        {
            sum=sum+tips[i];
        }
    return sum/tips.length;
}

john.average= average(john.tips);
max.average= average(max.tips);

console.log(john.average,max.average);

*/


/*var y= (1+"1")+(1+4)+"1"+(1+1);
console.log(y);*/

/*var x='rome';
var y="";

for(var i=x.length-1; i>=0; i--)
    {   
        console.log(x[i]);
        y += x[i];
    }
console.log(y);*/

/*var x=1;
x ^= 1;
console.log(x);
*/

/*var numbers=[15,12,60,5,25];

numbers.sort(function(a,b){return a-b});
console.log(numbers);*/

/*var tmp;
var done=false;
while(!done){
    done=true;
    for(i=1;i<=numbers.length;i++)
{
    if(numbers[i-1]>numbers[i])
    {   done=false;
        tmp=numbers[i-1];
        numbers[i-1]=numbers[i];
        numbers[i]=tmp;    

    }
}

}
console.log(numbers);
*/
document.write("<center>")
for(var i=1;i<=3;i++)
{
    for(var j=1;j<=i;j++ )
    {
        document.write("x")
    }
    document.write("<br>")
}
for(var i=3;i>0;i--)
{
    for(var j=1;j<=i;j++)
    {
        document.write("x")
    }
    document.write("<br>")
}
document.write("</center>");