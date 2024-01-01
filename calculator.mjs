import path from 'path'; // Add this line to import the 'path' module

import chalk from 'chalk';
import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

// Use express.static correctly
app.use(express.static(join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculator.html')); // Use 'path.join' here
});

// BMICalculator route
app.route('/bmicalculator')
  .get((req, res) => {
    res.sendFile(path.join(__dirname,  'calculator.html')); // Use 'path.join' here
  })
  .post((req, res) => {
    // Input validation using validator package
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    if (!validator.isFloat(weight) || !validator.isFloat(height) || weight <= 0 || height <= 0) {
      const errorMessage = 'Please enter valid values for weight and height.';
      console.error(chalk.red(errorMessage));
      return res.status(400).json({ error: errorMessage });
    }

    // BMI Calculation Logic
    const bmi = calculateBMI(weight, height);
    const interpretation = interpretBMI(bmi);

    // Sending the result as JSON
    res.json({ bmi: bmi.toFixed(2), interpretation });

    // Logging the result with color using chalk
    console.log(chalk.green(`BMI Result: ${bmi.toFixed(2)} - Interpretation: ${interpretation}`));
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// BMI Calculation Functions
function calculateBMI(weight, height) {
  return weight / (height * height);
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 24.9) {
    return 'Normal weight';
  } else if (bmi < 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
