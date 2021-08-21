function lab2() {
    var a = prompt('Input a ');
    var b = prompt('Input b ');
    var c = prompt('Input c ');
    var diskriminant;
    var d_sqr;
    var x_1;
    var x_2;
    var z, res1, res2;
    diskriminant = (b*b)-(4*a*c);
    if (diskriminant >= 0) {
        d_sqr = Math.sqrt(diskriminant);
        x_1 = (-b - d_sqr) / (2 * a);
        x_2 = (-b + d_sqr) / (2 * a);
        z = diskriminant;
        res1 = x_1;
        res2 = x_2;
    }
    if (diskriminant < 0) {
        z = diskriminant;
        res1 = 0;
        res2 = 0;
    }
    alert("Рівняння " + a + "x2 + " + b + "x +" + c + " = 0 \n Pозв'язки:  \n x1= " + res1 + " \n x2= " + res2);

}
lab2();
