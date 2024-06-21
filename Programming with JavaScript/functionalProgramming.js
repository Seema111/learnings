// Task 1: Build a function-based console log message generator
/**
 * @description Modifies the console output of a message using CSS-like styles provided
 * as arguments. It concatenates the message with the defined styles and logs them
 * to the console.
 * 
 * @param { string } color - color of the text that will be displayed in the log
 * message generated by the `console.log()` method.
 * 
 * @param { string } background - background color of the text displayed in the output
 * log message when the function is called.
 * 
 * @param { number } fontSize - font size for the displayed text, which is then
 * included in the CSS style attribute along with the color and background to format
 * the console message.
 * 
 * @param { string } txt - text that will be formatted with the specified color,
 * background, and font size.
 */
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style)
}

// Task 2: Build another console log message generator
/**
 * @description Takes a reason as input and logs a celebratory message in a specific
 * font style based on the provided reason.
 * 
 * @param { string } reason - context or occasion for which the celebratory message
 * is displayed.
 */
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(message, style);
    }
    
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
celebrateStyler('birthday')

// Task 4: Insert a congratulatory and custom message
/**
 * @description Stylishly displays text on the console using provided options and
 * celebrates a given reason with an additional styling element.
 * 
 * @param { string } color - color to which the text will be formatted.
 * 
 * @param { string } background - background color to be used for styling the console
 * output.
 * 
 * @param { integer } fontSize - Font Size of the styled text, which is applied to
 * the `txt` parameter before being output through the `consoleStyler` function.
 * 
 * @param { string } txt - text to be styled and celebrated, which is passed as an
 * argument to the `consoleStyler` and `celebrateStyler` functions.
 * 
 * @param { string } reason - reason for styling and celebrating the text, providing
 * context for the functionality of the `consoleStyler` and `celebrateStyler` functions
 * called within the `styleAndCelebrate` function.
 */
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt); 
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e','fae8e0','30px','You made it!','champions')