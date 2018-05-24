function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.
    //alert("It works!");

    // get form values
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var soda1 = document.getElementById('soda1').value;
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var pokemon1 = document.getElementById('pokemon1').value;
    var soda2 = document.getElementById('soda2').value;
    var place1 = document.getElementById('place1').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var verb1 = document.getElementById('verb1').value;
    var noun7 = document.getElementById('noun7').value;
    var name3 = document.getElementById('name3').value;



    // Set title of story.
    var title = "I Don't Understand It - MadLib";


    // Build story.
    paragraph1 = "I got all these " + noun1 + " in my Rollie bezzle, they be askin' where i got it " +
    "You can't block the magic, you ain't on my level, got all these " + noun2 + " in my pocket, I ain't with the gossip" +
    ", I just need the profit. Aint about the " + noun3 + " pick a different topic, N***** try to stop it, hit em" +
    "with the " + noun4 + " The .40 I'll pull it, it's right on my hip, Bring out the sauce and I dip, ay, " + soda1 +
    " with the lean then I sip, ay, Xan in my cup then I trip ay, Im with " + name1 + " on Pluto Hard body on me, it" +
    " look like a n****  been trainin' with " + name2 + ", Shofu to cold got that ice on my neck, boy my chain" +
    " is on freeze call that shit Articuno, " + pokemon1 + " my wallet too fat, Hariyama, my pockets, they eatin', my shit be on sumo" +
    " Been well respected, my name on the throne, boy, I'm a legendary and your barely a pseudo, You ain't wippin, yo shit aint a two-door" +
    " Yo chick is a freak, she be cravin the meat, see her tryna to stay up on my head like a Cubone. Drop a xan in the " + soda2 +
    " Got a Muk in the stack, we came from the bottom, we aint goin back, We headed straight to " + place1 + " , walk in my" + noun5 +
    ", you gonna leave empty handed, how you expect to get in with no clout? N**** I Don't Understand it, aint bout the money" +
    " why open your mouth? N**** I Don't Understand it, Ooh " + name3 + " I don't Understand it, huh, All of my " + noun6 + " they be Banded, huh" +
    " Omar, I Don't Understand it, Whoa, Sableye, bith im a bandit, huh, Shofu, I Don't Understand it, huh, All of my hits they be Banded, huh,"
    " N**** I Don't Understand it, You sendin them shots, but ain't none of them landin, I " + verb1 + " 'em' back heavy, my hitshits they be Banded" +
    " I blast with the " + noun7 + ", bitch im armed with the cannons, ay, bitch im armed with the cannons, all of my team got the Leftovers, boy and" +
    " yall looking famished, the tech on my side leave your ass in the canvas."

    // Display story.
    document.getElementById('paragraph1').innerHTML = paragraph1;

}
