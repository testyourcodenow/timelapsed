# timelapsed
Timelapsed is a NodeJs module that makes it easy to support fuzzy timestamps (e.g. "4 minutes ago" or "yesterday")

## usage
`TimeLapsed.fromTimestamp('1514811522125', notation="twitter", unsafe=false)`

`TimeLapsed.fromDateString('2017-11-07 15:58:42.125836', notation="twitter")`

#### methods
for *timestamps* eg "1514811522125" use `TimeLapsed.fromTimestamp()`

for *datestrings* eg "2019-01-02T21:00:00.000Z" use `TimeLapsed.fromDateString()`

#### parameters
`notation (default = lng)`
- *twitter* eg "now", "m", "m", "h", "h", "d", "d", "wk", "wks"
- *mid* eg  "just now", "mn", "mns", "hr", "hrs", "dy", "dys", "wk ago", "wks ago"
- *lng* eg "just now", "minute ago", "minutes ago", "hour ago", "hours ago", "yesterday", "days ago", "week ago", "weeks ago".

`unsafe (dafault = true)`
- will throw an error if set to true and the timestamp or datestring is invalid.
- will return 'N/A' if set to false abd the timestamp or datestring is invalid.