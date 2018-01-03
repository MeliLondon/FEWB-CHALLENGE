/* In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:

no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.
NOTE: Wondering what the average salary would be for a person with a Nanodegree from Udacity? That's a hard question to answer, but that doesn't mean we haven't tried to quantify the value of our Nanodegrees. Click here to read more about Nanodegrees from resident Udacity writer Chris Watkins.

Directions:
Write a switch statement to set the average salary of a person based on their type of completed education.

Afterwards, print the following to the console.

In 2015, a person with __________ earned an average of __________/year.
Fill in the blanks with the type of education and the expected average salary. Make sure to use correct grammar in your printed statement. For help, refer to the findings above.

In 2015, a person with a Bachelor's degree earned an average of $59,124/year.
TIP: To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US").

TIP: Make sure to test your code with different values. For example,

If education equals "an Associate's degree", then In 2015, a person with an Associate's degree earned an average of $41,496/year. should be printed to the console. */

// change the value of `education` to test your code
var education = "a Master's degree";

// set the value of this based on a person's education
var salary = 69732;

// your code goes here

switch (education) {
    case "no high school diploma" :
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
        break;
    case "a high school diploma":
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
        break;
    case "an Associate's degree":
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
        break;
    case "a Bachelor's degree":
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
        break;
    case "a Master's degree":
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
        break;
    case "a Professional degree":
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
        break;
    case "a Doctoral degree":
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US")+ "/year.");
        
}
