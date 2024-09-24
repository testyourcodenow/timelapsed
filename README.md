# timelapsed
Timelapsed is a NodeJs module that makes it easy to support fuzzy timestamps (e.g. "4 minutes ago" or "yesterday")

## usage
```javascript
import { fromDateString, fromTimestamp } from "timelapsed";

fromTimestamp('1514811522125');

fromDateString('2017-11-07 15:58:42.125836');
```

#### methods available
for *timestamps* eg "1514811522125" *string*
>use `fromTimestamp()`

for *datestrings* eg "2019-01-02T21:00:00.000Z" *string*
>use `fromDateString()`

#### required parameters
**timestamp** *string* eg "1514811522125"
>when using `fromTimestamp(timestamp)`

**datestring** *string* eg "2019-01-02T21:00:00.000Z"
>when using `fromDateString(datestring)`

#### optional parameters with default values
**notation** `(default = 'lng')` *string*
- *twitter*
    >"n", "m", "h", "d", "w"
    ```javascript
    fromTimestamp(1514811522125, 'twitter');
    fromDateString('2019-01-02T21:00:00.000Z', 'twitter');
    ```
- *mid*
    >"now", "min", "mins", "hr", "hrs", "dy", "dys", "wk", "wks"
    ```javascript
    fromTimestamp(1514811522125, 'mid');
    fromDateString('2019-01-02T21:00:00.000Z', 'mid');
    ```
- *lng*
    >"just now", "minute ago", "minutes ago", "hour ago", "hours ago", "yesterday", "days ago", "week ago", "weeks ago".
    ```javascript
    fromTimestamp(1514811522125, 'lng');
    fromDateString('2019-01-02T21:00:00.000Z', 'lng');
    ```

**safe** `(dafault = true)` *boolean*
- will **Throw an Error** if parameter set to **true** and the **timestamp** or **datestring** provided is **invalid**.
    ```javascript
    fromTimestamp('cf1529385554545xfgg', 'twitter', false);

    Result:
    Error: Bad timestamp
    at Function.fromTimestamp...

    fromDateString('xsdsd2017-11-07 15:58:42.125836', "lng", false);

    Result:
    Error: Bad datestring
    at Function.fromDateString...
    ```
- will return **'N/A'** *string* if parameter set to **true** and the **timestamp** or **datestring** provided is **invalid**.

    ```javascript
    fromTimestamp('1529385554545xfgg', 'twitter', true);

    Result:
    'N/A'

    fromDateString('xsdsd2017-11-07 15:58:42.125836', 'lng', true);

    Result:
    'N/A'
    ```
