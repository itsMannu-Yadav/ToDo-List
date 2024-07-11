body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    max-width: 400px;
    width: 100%;
    background: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
}

input[type="text"] {
    width: calc(100% - 60px);
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

button {
    padding: 10px;
    margin-left: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #218838;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    background: #f9f9f9;
    padding: 10px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

li:nth-child(odd) {
    background: #e9e9e9;
}

.delete {
    color: #ff0000;
    cursor: pointer;
    font-weight: bold;
    margin-left: 20px;
}
