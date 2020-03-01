# timelapsed
Timelapsed is a NodeJs module that makes it easy to support fuzzy timestamps (e.g. "4 minutes ago" or "yesterday")

## usage
`const TimeLapsed = require('timelapsed')`

`TimeLapsed.fromTimestamp('1514811522125', notation="twitter", unsafe=false)`

`TimeLapsed.fromDateString('2017-11-07 15:58:42.125836', notation="twitter")`

#### methods
for *timestamps* eg "1514811522125" *string*
>use `TimeLapsed.fromTimestamp()`

for *datestrings* eg "2019-01-02T21:00:00.000Z" *string*
>use `TimeLapsed.fromDateString()`

#### parameters
>`notation (default = 'lng')` *string*
- *twitter*
    >"now", "m", "m", "h", "h", "d", "d", "wk", "wks"
- *mid*
    >"just now", "mn", "mns", "hr", "hrs", "dy", "dys", "wk ago", "wks ago"
- *lng*
    >"just now", "minute ago", "minutes ago", "hour ago", "hours ago", "yesterday", "days ago", "week ago", "weeks ago".

>`unsafe (dafault = true)` *boolean*
- will throw an error if set to true and the timestamp or datestring is invalid.
- will return 'N/A' if set to false and the timestamp or datestring is invalid.