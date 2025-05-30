function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  // Step 1: Sort intervals by their starting value
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const current = intervals[i];

    // If current interval overlaps with the last one, merge them
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
}

console.log(mergeIntervals([[2,6], [1,3], [8,10], [15,18]])); // [[1,6], [8,10], [15,18]]
console.log(mergeIntervals([[1,4], [4,5]])); // [[1,5]]
