<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visual Fruits</title>

    <style>
        img {
            margin-top: 10px;
            width: 200px;
            height: 200px;
        }
        button{
            margin-top: 10px;
            color: white;
            background-color: rgb(66, 153, 167);
            border-radius: 3px;
            height: 30px;
            width: 100px;
            size: 50p;
        }
    </style>

</head>
<body class="margin-top:20px">
    <label for="fruit">Fruits</label>
    <select name="fruit" id="fruit" style="width: 150px; height: 30px;">
        <option value="" disabled selected>Select Fruits</option>
        <option value="apple">Apple</option>
        <option value="mango">Mango</option>
        <option value="guava">Guava</option>
    </select>

    <!-- Button to show image -->
    <button onclick="showFruitImages()">Show Image</button>

    <!-- Single Image Container -->
    <div>
        <img id="fruitImage" src="" alt="Fruit Picture" style="display: none;">
    </div>

    <script>
        function showFruitImages() {
            var img = document.getElementById('fruitImage');
            var fruit = document.getElementById('fruit').value;

            // Determine which image to show based on selection
            if (fruit === "apple") {
                img.src = "apple.jpeg";  // Replace with actual apple image path
                img.alt = "Apple";
            } else if (fruit === "mango") {
                img.src = "mango.jpeg";  // Replace with actual mango image path
                img.alt = "Mango";
            } else if (fruit === "guava") {
                img.src = "guava.jpeg";  // Replace with actual guava image path
                img.alt = "Guava";
            }

            // Show the image only when the button is clicked
            img.style.display = "block";
        }
    </script>
</body>
</html>