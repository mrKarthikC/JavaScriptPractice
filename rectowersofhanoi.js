var hanoi = function hanoi(disc,peg1,peg2,peg3)

 {
    if (disc > 0) 
{
        hanoi(disc - 1,peg1,peg3,peg2);

        document.write("Move disc " + disc + " from " + peg1 + " to " + peg3 + "<br />");

        hanoi(disc - 1,peg2,peg1,peg3);
    }
};

hanoi(3,"peg1","peg2","peg3");
