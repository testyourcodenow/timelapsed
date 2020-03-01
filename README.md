# timelapsed
Timelapsed is a NodeJs module that makes it easy to support fuzzy timestamps (e.g. "4 minutes ago" or "yesterday")

## usage
```javascript
const TimeLapsed = require('timelapsed');

TimeLapsed.fromTimestamp('1514811522125');

TimeLapsed.fromDateString('2017-11-07 15:58:42.125836');
```

#### methods
for *timestamps* eg "1514811522125" *string*
>use `TimeLapsed.fromTimestamp()`

for *datestrings* eg "2019-01-02T21:00:00.000Z" *string*
>use `TimeLapsed.fromDateString()`

#### parameters
**notation** `(default = 'lng')` *string*
- *twitter*
    >"n", "m", "h", "d", "w"
- *mid*
    >"now", "min", "mins", "hr", "hrs", "dy", "dys", "wk", "wks"
- *lng*
    >"just now", "minute ago", "minutes ago", "hour ago", "hours ago", "yesterday", "days ago", "week ago", "weeks ago".

**unsafe** `(dafault = true)` *boolean*
- will **Throw an Error** if set to **true** and the **timestamp** or **datestring** provided is **invalid**.
- will return **'N/A'** if set to **false** and the **timestamp** or **datestring** provided is **invalid**.