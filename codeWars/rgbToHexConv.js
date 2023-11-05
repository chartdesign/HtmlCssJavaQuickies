/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output): 
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/
function rgb(r, g, b) {
  // Ensure that RGB values are within the valid range
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new Error("Invalid RGB values. They must be in the range [0, 255].");
  }

  // Convert RGB values to hexadecimal and pad with zeros if necessary
  const red = r.toString(16).padStart(2, "0");
  const green = g.toString(16).padStart(2, "0");
  const blue = b.toString(16).padStart(2, "0");

  // Concatenate and return the hexadecimal color code
  return red + green + blue;
}

// ver 2
function rgbToHex(r, g, b) {
  // Clamp RGB values to be within the range [0, 255]
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  // Convert RGB values to hexadecimal and pad with zeros if necessary
  const red = r.toString(16).padStart(2, "0");
  const green = g.toString(16).padStart(2, "0");
  const blue = b.toString(16).padStart(2, "0");

  // Concatenate and return the hexadecimal color code
  return red + green + blue;
}
