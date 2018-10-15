function WordCount(str) {
  var totalSoFar = 0;
  for (var i = 0; i < WordCount.length; i++)
    if (str(i) === " ") { // if a space is found in str
      totalSoFar = +1; // add 1 to total so far
  }
  totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
}

console.log(WordCount("Random String"));

function countWords(s){
  s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
  s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
  return s.split(' ').filter(function(str){return str!="";}).length;
  //return s.split(' ').filter(String).length; - this can also be used
}


function extractSubstr(str, regexp) {
  return str.replace(/[^\w\s]|_/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase().match(regexp) || [];
}

// Find words by searching for sequences of non-whitespace characters.
function getWordsByNonWhiteSpace(str) {
  return extractSubstr(str, /\S+/g);
}

// Find words by searching for valid characters between word-boundaries.
function getWordsByWordBoundaries(str) {
  return extractSubstr(str, /\b[a-z\d]+\b/g);
}

// Example of usage.
var edisonQuote = "I have not failed. I've just found 10,000 ways that won't work.";
var words1 = getWordsByNonWhiteSpace(edisonQuote);
var words2 = getWordsByWordBoundaries(edisonQuote);

console.log(String.format('"{0}" - Thomas Edison\n\nWord count via:\n', edisonQuote));
console.log(String.format(' - non-white-space: ({0}) [{1}]', words1.length, words1.join(', ')));
console.log(String.format(' - word-boundaries: ({0}) [{1}]', words2.length, words2.join(', ')));



function extractSubstr(str, regexp) {
  return str.replace(/[^\w\s]|_/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase().match(regexp) || [];
}

// Find words by searching for sequences of non-whitespace characters.
function getWordsByNonWhiteSpace(str) {
  return extractSubstr(str, /\S+/g);
}

// Find words by searching for valid characters between word-boundaries.
function getWordsByWordBoundaries(str) {
  return extractSubstr(str, /\b[a-z\d]+\b/g);
}

// Example of usage.
var edisonQuote = "I have not failed. I've just found 10,000 ways that won't work.";
var words1 = getWordsByNonWhiteSpace(edisonQuote);
var words2 = getWordsByWordBoundaries(edisonQuote);

console.log(String.format('"{0}" - Thomas Edison\n\nWord count via:\n', edisonQuote));
console.log(String.format(' - non-white-space: ({0}) [{1}]', words1.length, words1.join(', ')));
console.log(String.format(' - word-boundaries: ({0}) [{1}]', words2.length, words2.join(', ')));
body { font-family: monospace; white-space: pre; font-size: 11px; }
Run code snippetExpand snippet
Finding Unique Words
You could also create a mapping of words to get unique counts.

function cleanString(str) {
  return str.replace(/[^\w\s]|_/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase();
}

function extractSubstr(str, regexp) {
  return cleanString(str).match(regexp) || [];
}

function getWordsByNonWhiteSpace(str) {
  return extractSubstr(str, /\S+/g);
}

function getWordsByWordBoundaries(str) {
  return extractSubstr(str, /\b[a-z\d]+\b/g);
}

function wordMap(str) {
  return getWordsByWordBoundaries(str).reduce(function(map, word) {
      map[word] = (map[word] || 0) + 1;
      return map;
  }, {});
}

function mapToTuples(map) {
  return Object.keys(map).map(function(key) {
      return [ key, map[key] ];
  });
}

function mapToSortedTuples(map, sortFn, sortOrder) {
  return mapToTuples(map).sort(function(a, b) {
      return sortFn.call(undefined, a, b, sortOrder);
  });
}

function countWords(str) {
  return getWordsByWordBoundaries(str).length;
}

function wordFrequency(str) {
  return mapToSortedTuples(wordMap(str), function(a, b, order) {
      if (b[1] > a[1]) {
          return order[1] * -1;
      } else if (a[1] > b[1]) {
          return order[1] * 1;
      } else {
          return order[0] * (a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0));
      }
  }, [1, -1]);
}

function printTuples(tuples) {
  return tuples.map(function(tuple) {
      return padStr(tuple[0], ' ', 12, 1) + ' -> ' + tuple[1];
  }).join('\n');
}

function padStr(str, ch, width, dir) { 
  return (width <= str.length ? str : padStr(dir < 0 ? ch + str : str + ch, ch, width, dir)).substr(0, width);
}

function toTable(data, headers) {
  return $('<table>').append($('<thead>').append($('<tr>').append(headers.map(function(header) {
      return $('<th>').html(header);
  })))).append($('<tbody>').append(data.map(function(row) {
      return $('<tr>').append(row.map(function(cell) {
          return $('<td>').html(cell);
      }));
  })));
}

function addRowsBefore(table, data) {
  table.find('tbody').prepend(data.map(function(row) {
      return $('<tr>').append(row.map(function(cell) {
          return $('<td>').html(cell);
      }));
  }));
  return table;
}

$(function() {
  $('#countWordsBtn').on('click', function(e) {
      var str = $('#wordsTxtAra').val();
      var wordFreq = wordFrequency(str);
      var wordCount = countWords(str);
      var uniqueWords = wordFreq.length;
      var summaryData = [
          [ 'TOTAL', wordCount ],
          [ 'UNIQUE', uniqueWords ]
      ];
      var table = toTable(wordFreq, ['Word', 'Frequency']);
      addRowsBefore(table, summaryData);
      $('#wordFreq').html(table);
  });
});