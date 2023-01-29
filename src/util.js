var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");

var text1 = "Normal science, the activity in which most scientists inevitably spend almost all their time, is predicated on the assumption that the scientific community knows what the world is like. Much of the success of the enterprise derives from the community's willingness to defend that assumption, if necessary at considerable cost. Normal science, for example, often suppresses fundamental novelties because they are necessarily subversive of its basic commitments (5).";
var text2 = "Normal science, the activity in which most scientists inevitably spend almost all their time, is predicated on the assumption that the scientific community knows what the world is like. Some scientists say that the success of the enterprise comes from the community’s willingness to defend that assumption, if necessary at considerable cost. Normal science often suppresses fundamental novelties because they are necessarily subversive of its basic commitments."

var raw = JSON.stringify({
  "documents": [
    text1, text2
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/plagiarism/compare", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));