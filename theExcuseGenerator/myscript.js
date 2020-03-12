function changeText()
{
  var frase = "";

  var elementi =
  {
  who : ["My grandma","An alien","Your sister","A ghost","A jester","Donald Trump"],
  what : [" stabbed me with "," hit me with "," threw me "," materialized "],
  thing : ["a banana ","a flower ","a baguette ","a cannolo ","a knife ","a pizza "],
  where : ["in the eye!","in to the face!","on my feet!","in the mouth!","on the nose!"],
  }

  var casuale0 = Math.floor(Math.random() * elementi.who.length);
  var casuale1 = Math.floor(Math.random() * elementi.what.length);
  var casuale2 = Math.floor(Math.random() * elementi.thing.length);
  var casuale3 = Math.floor(Math.random() * elementi.where.length);

  frase = elementi.who[casuale0]+elementi.what[casuale1]+elementi.thing[casuale2]+elementi.where[casuale3];
  document.querySelector("#apologize").innerHTML = frase;
}
changeText();
