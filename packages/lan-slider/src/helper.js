/**
 * calculateMin is a helper function to calculate the proper value of
 * attribute min
 * 
 * @param {number} min 
 * 
 * @return {number} the proper value of attribute min
 */
export let calculateMin = min => {
  return min ? parseInt(min) : 0;
};


/**
 * calculateMax is a helper function to calculate the proper value of
 * attribute max
 * 
 * @param {number} max 
 * 
 * @return {number} the proper value of attribute max
 */
export let calculateMax = max => {
  return max ? parseInt(max) : 100;
};


/**
 * calculateVal is a helper function to calculate the proper value of
 * attribute val
 * 
 * @param {number} val 
 * @param {number} max 
 * @param {number} min 
 * 
 * @return {number} the proper value of attribute val
 */
export let calculateVal = (val, max, min) => {
  return val && val <= calculateMax(max) && val >= calculateMin(min)
    ? parseInt(val)
    : calculateMin(min) + (calculateMax(max) - calculateMin(min)) / 2;
};


/**
 * calculatePosition is a helper function to calculate the horizontal position
 * of the tooltip
 * 
 * @param {number} val 
 * @param {number} max 
 * @param {number} min 
 * 
 * @return {number} the left horizontal percentage for the tooltip
 */
export let calculatePosition = (val, max, min) => {
  var range = max - min;
  var x = 1 - (range - parseInt(val, 10))/range;
  var t = ((1 * (parseInt(val, 10) - parseInt(min, 10))) - x)/ range;
  return t * 100;
};


/**
 * calculateWidth is a helper function to calculates the width of 
 * the width of the progress bar.
 * 
 * @param {number} val 
 * @param {number} min 
 * @param {number} range 
 * 
 * @return {number} the left horizontal percentage for the tooltip
 */
export let calculateWidth = (val, min, range) => {
  var x = ((parseInt(val, 10) - range)*0.5)/range;
  var t = (1 * (parseInt(val, 10) - parseInt(min, 10)) - x) / range;
  return t * 100;
}