# Asynchronous JavaScript Part 3

### Wrapping setTimeout():
```
<!-- HTML -->
<button id="set-alarm">Set alarm</button>
<div id="output"></div>

<!-- JAVASCRIPT -->
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm);
```

### The Promise() Constructor:
- Used to create a new Promise object.
- Takes a single function (executor) as an argument.
- The executor function takes two functions (resolve and reject) as arguments and, inside, you call the asynchronous function, and based on its result, you call resolve or reject.

### Implementing the alarm() Function:
- alarm() function returns new Promise.
- Inside executor, it checks if the delay is negative, throws an error if it is, and calls setTimeout() to resolve the promise.

### Using the alarm() API:
- alarm() is called, and on the returned promise, then() and catch() are used to handle fulfillment and rejection.
- then() sets a handler for when the promise is fulfilled, and catch() sets a handler for when it's rejected.

### Using async and await with the alarm() API:
- Since alarm() returns a promise, async and await can be used with it.
- async function is used to make the code appear synchronous
- await waits for the resolution of the promise.

### Error handling
- Try/catch blocks