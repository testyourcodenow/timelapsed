import { fromDateString, fromTimestamp } from "../src/timelapsed";


describe("Tests for fromDateString & fromTimestamp", () => {
  test("just now default notation", () => {
    const duration = fromTimestamp(Date.now());
    expect(duration).toBe("just now");
  });
  
  test("just now twitter notation", () => {
    const duration = fromTimestamp(Date.now(), "twitter");
    expect(duration).toBe("n");
  });
  
  test("just now mid notation", () => {
    const duration = fromTimestamp(Date.now(), "mid");
    expect(duration).toBe("now");
  });
  
  test("just now long notation", () => {
    const duration = fromTimestamp(Date.now(), "lng");
    expect(duration).toBe("just now");
  });
  
  test("1 minute ago default notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60);
    expect(duration).toBe("1 minute ago");
  });
  
  test("1 mn ago twitter notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60, "twitter");
    expect(duration).toBe("1m");
  });
  
  test("1 min ago mid notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60, "mid");
    expect(duration).toBe("1min");
  });
  
  test("1 minute ago long notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60, "lng");
    expect(duration).toBe("1 minute ago");
  });
  
  test("17 minutes ago default notation", () => {
    const duration = fromTimestamp(Date.now() - 17000 * 60);
    expect(duration).toBe("17 minutes ago");
  });
  
  test("17 minutes ago twitter notation", () => {
    const duration = fromTimestamp(Date.now() - 17000 * 60, "twitter");
    expect(duration).toBe("17m");
  });
  
  test("17 minutes ago mid notation", () => {
    const duration = fromTimestamp(Date.now() - 17000 * 60, "mid");
    expect(duration).toBe("17mins");
  });
  
  test("17 minutes ago long notation", () => {
    const duration = fromTimestamp(Date.now() - 17000 * 60, "lng");
    expect(duration).toBe("17 minutes ago");
  });
  
  test("42 minutes ago default notation", () => {
    const duration = fromTimestamp(Date.now() - 42000 * 60);
    expect(duration).toBe("42 minutes ago");
  });
  
  test("1 hour ago default notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60);
    expect(duration).toBe("1 hour ago");
  });
  
  test("1 hour ago twitter notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60, "twitter");
    expect(duration).toBe("1h");
  });
  
  test("1 hour ago mid notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60, "mid");
    expect(duration).toBe("1hr");
  });
  
  test("1 hour ago long notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60, "lng");
    expect(duration).toBe("1 hour ago");
  });
  
  test("19 hours ago default notation", () => {
    const duration = fromTimestamp(Date.now() - 19000 * 60 * 60);
    expect(duration).toBe("19 hours ago");
  });
  
  test("19 hours ago twitter notation", () => {
    const duration = fromTimestamp(Date.now() - 19000 * 60 * 60, "twitter");
    expect(duration).toBe("19h");
  });
  
  test("19 hours ago mid notation", () => {
    const duration = fromTimestamp(Date.now() - 19000 * 60 * 60, "mid");
    expect(duration).toBe("19hrs");
  });
  
  test("19 hours ago long notation", () => {
    const duration = fromTimestamp(Date.now() - 19000 * 60 * 60, "lng");
    expect(duration).toBe("19 hours ago");
  });
  
  test("1 day ago  default notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60 * 24);
    expect(duration).toBe("yesterday");
  });
  
  test("1 day ago twitter notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60 * 24, "twitter");
    expect(duration).toBe("1d");
  });
  
  test("1 day ago mid notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60 * 24, "mid");
    expect(duration).toBe("1dy");
  });
  
  test("1 day ago long notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60 * 24, "lng");
    expect(duration).toBe("yesterday");
  });
  
  test("6 days ago default notation", () => {
    const duration = fromTimestamp(Date.now() - 6000 * 60 * 60 * 24);
    expect(duration).toBe("6 days ago");
  });
  
  test("6 days ago twitter notation", () => {
    const duration = fromTimestamp(Date.now() - 6000 * 60 * 60 * 24, "twitter");
    expect(duration).toBe("6d");
  });
  
  test("6 days ago mid notation", () => {
    const duration = fromTimestamp(Date.now() - 6000 * 60 * 60 * 24, "mid");
    expect(duration).toBe("6dys");
  });
  
  test("6 days ago long notation", () => {
    const duration = fromTimestamp(Date.now() - 6000 * 60 * 60 * 24, "lng");
    expect(duration).toBe("6 days ago");
  });
  
  test("1 week ago default notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60 * 24 * 7);
    expect(duration).toBe("1 week ago");
  });
  
  test("1 week ago twitter notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60 * 24 * 7, "twitter");
    expect(duration).toBe("1w");
  });
  
  test("1 week ago mid notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60 * 24 * 7, "mid");
    expect(duration).toBe("1wk");
  });
  
  test("1 week ago long notation", () => {
    const duration = fromTimestamp(Date.now() - 1000 * 60 * 60 * 24 * 7, "lng");
    expect(duration).toBe("1 week ago");
  });
  
  test("3 weeks ago default notation", () => {
    const duration = fromTimestamp(Date.now() - 3000 * 60 * 60 * 24 * 7);
    expect(duration).toBe("3 weeks ago");
  });
  
  test("3 weeks ago twitter notation", () => {
    const duration = fromTimestamp(Date.now() - 3000 * 60 * 60 * 24 * 7, "twitter");
    expect(duration).toBe("3w");
  });
  
  test("3 weeks ago mid notation", () => {
    const duration = fromTimestamp(Date.now() - 3000 * 60 * 60 * 24 * 7, "mid");
    expect(duration).toBe("3wks");
  });
  
  test("3 weeks ago long notation", () => {
    const duration = fromTimestamp(Date.now() - 3000 * 60 * 60 * 24 * 7, "lng");
    expect(duration).toBe("3 weeks ago");
  });
  
  test("will return N/A when passed invalid timestamp if safe is set to true", () => {
    const duration = fromTimestamp("1529385554545xfgg", "twitter", true);
    expect(duration).toBe("N/A");
  });
  
  test("will return N/A when passed invalid datestring if safe is set to true (default=true)", () => {
    const duration = fromDateString("g2017-11-07 15:58:42.125836", "twitter", true);
    expect(duration).toBe("N/A");
  });
  
  test("will throw an Error when passed invalid timestamp if safe is set to false (default=true)", () => {
    expect(() => {
      fromTimestamp("1529385554545xfgg", false);
    }).toThrow();
  });
  
  test("will throw an Error when passed invalid timestamp if safe is set to false (default=true)", () => {
    expect(() => {
      fromTimestamp("1529385554545xfgg", "mid", false);
    }).toThrow();
  });
  
  test("will throw an Error when passed invalid datestring if safe is set to false (default=true)", () => {
    expect(() => {
      fromDateString("g2017-11-07 15:58:42.125836", false);
    }).toThrow();
  });
  
  test("will throw an Error when passed invalid datestring if safe is set to false (default=true)", () => {
    expect(() => {
      fromDateString("g2017-11-07 15:58:42.125836", "lng", false);
    }).toThrow();
  });  
});
