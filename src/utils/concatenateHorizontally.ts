export function concatenateHorizontally(first: string, second: string, width: number): string {
    // Split the strings into lines
    const firstLines = first.split('\n');
    const secondLines = second.split('\n');

    // Calculate the maximum number of lines we need to process
    const maxLength = Math.max(firstLines.length, secondLines.length);

    // Calculate the start index for each set of lines so the shorter one is centered
    const firstStartIndex = (firstLines.length < secondLines.length)
        ? Math.floor((secondLines.length - firstLines.length) / 2)
        : 0;

    const secondStartIndex = (secondLines.length < firstLines.length)
        ? Math.floor((firstLines.length - secondLines.length) / 2)
        : 0;

    // The result array to hold our concatenated lines
    const result: string[] = [];

    for (let i = 0; i < maxLength; i++) {
        // Get the current line from both strings, or use an empty string if there's no line
        const firstLine = firstLines[i - firstStartIndex] || '';
        const secondLine = secondLines[i - secondStartIndex] || '';

        // Pad the first line to the desired width and then concatenate the second line
        const combinedLine = firstLine.padEnd(width, ' ') + secondLine;

        result.push(combinedLine);
    }

    // Join the lines back together with newline and return
    return result.join('\n');
}

// Example usage:
// const str1 = "one\ntwo\nthree\nfour\nfive";
// const str2 = "A\nB\nC";
// console.log(concatenateHorizontally(str1, str2, 10));
// Expected output:
// one      
// two      A
// three    B
// four     C
// five
