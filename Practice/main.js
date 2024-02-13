// Function to fetch data asynchronously using a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'John', age: 30 };
            resolve(data);
        }, 2000); // Delay of 2 seconds
    });
}

// Event listener for the button click to fetch data
document.getElementById('fetchDataBtn').addEventListener('click', function () {
    // Calling the fetchData function, which returns a promise
    fetchData()
        .then(data => {
            // Success
            document.getElementById('output').textContent = `Name: ${data.name}, Age: ${data.age}`;
        })
        .catch(error => {
            // Error
            document.getElementById('output').textContent = `Error fetching data: ${error}`;
        });
});
