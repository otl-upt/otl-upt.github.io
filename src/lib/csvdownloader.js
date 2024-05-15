// o = object to serialize to csv
// h = array of strings to use for header values if not the prop names
// n = name of the file, default to data, always appends csv
export const downloadcsv = (o, h, n = 'data') => {
    downloadFile(toCSV(o, h), n + '.csv', 'text/csv');
}
const toCSV = (o, h) => {
    const a = (v) => `"${v.join(`","`)}"`
    let csv = []
    csv.push(h ? h : Object.keys(o[0]));
    o.forEach(x => csv.push(a(Object.values(x))))
    return csv.join("\n")
}
const downloadFile = (fileContents, fileName, fileType) => {

    var blob = new Blob([fileContents], { type: fileType });

    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, fileName);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

}