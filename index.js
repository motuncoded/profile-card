const views = document.getElementById("views");
const time = document.getElementById("time");

// Get and update views count
let viewsCount = localStorage.getItem("profileViews");
if (!viewsCount) {
  viewsCount = 0;
}
viewsCount++;
localStorage.setItem("profileViews", viewsCount);

// Display the updated views count
views.textContent = viewsCount;

// Display current time in readable format
const currentTime = Date.now();
time.textContent = currentTime;
