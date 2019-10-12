// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(function(response) {
    response.data.topics.forEach(data => {
      selectTopic.appendChild(newTabs(data));
    });
  })
  .catch(function(error) {
    console.log(error);
  });

const selectTopic = document.querySelector(".topics");

function newTabs(data) {
  //Create Elements
  const tab = document.createElement("div");

  //Add Content
  tab.textContent = data;

  //Add Structure

  //Add Styling
  tab.classList.add("tab");

  return tab;
}
