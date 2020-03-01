'use strict';

const TimeLapsed = {
  version: "0.0.1", 
  YEAR: String(new Date().getYear()).substr(1),
  MONTHS: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  MONTHSL: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  LONG: {
      NOW: "just now",
      MIN: " min ago",
      MINS: " mins ago",
      HOUR: " hour ago",
      HOURS: " hours ago",
      DAY: "yesterday",
      DAYS: " days ago"
  },
  MID: {
        NOW: "just now",
        MIN: "mn",
        MINS: "mns",
        HOUR: "hr",
        HOURS: "hrs",
        DAY: "dy",
        DAYS: "dys"
  },
  SHORT: {
        NOW: "now",
        MIN: "m",
        MINS: "m",
        HOUR: "h",
        HOURS: "h",
        DAY: "d",
        DAYS: "d"
  },
  valueOf: function(){
    console.log("Time Lapsed Module.");
  },
  fromTimestamp: function(seconds, notation = undefined){
    let secondsLapsed = (Date.now() - Number(seconds)) / 1000;
    return this.deductSeconds(secondsLapsed, 'timestampStr', seconds, notation);
  },
  fromDateObject: function(dateObj, notation = undefined){
    let secondsLapsed = (Date.now() - Date.parse(String(dateObj))) / 1000;
    return this.deductSeconds(secondsLapsed, 'dateObjStr', dateObj, notation);
  },
  parseDateObj: function(rawObj, type){
    let theDateObj = undefined;
    if (type === 'dateObjStr') {
      theDateObj = new Date(String(rawObj));
    }else if (type === 'timestampStr') {
      theDateObj = new Date(Number(rawObj));
    }else{
      throw new Error("Unknown datetime format!");
    }
    let theDate = theDateObj.getDate();
    let theMonth = this.MONTHS[theDateObj.getMonth()];
    let theYear = String(theDateObj.getYear()).substr(1);
    if (theYear < this.YEAR)
    	return theDate + ' ' + theMonth + ' ' + theYear;
    else{
    	if (theDate < 10)
    		return '0' + theDate + ' ' + theMonth;
    	else
    		return theDate + ' ' + theMonth;
    }
  },
  floorTimeCalc: function(timeCalced){
    return Math.floor(timeCalced);
  },
  deductSeconds: function(secondsLapsed, type, rawObj, notation){
    let timestrings = undefined;
    if (notation === 'twitter') {
      timestrings = this.SHORT;
  	}else if (notation === 'mid'){
  	  timestrings = this.MID;
      }else if (notation === undefined || notation === null){
        timestrings = this.LONG;
      }else{
        throw new Error("Unknown format!");
      }
      let postTime = undefined;
      if (secondsLapsed <= 60) {
        postTime = timestrings.NOW;
      }else if (secondsLapsed > 60 && secondsLapsed < 3600) {
        postTime = secondsLapsed / 60;
        postTime = this.floorTimeCalc(postTime);
        if (postTime === 1) {
          postTime += timestrings.MIN;
        }else{
          postTime += timestrings.MINS;
        }
      }else if (secondsLapsed > 3600 && secondsLapsed < 86400) {
        postTime = secondsLapsed / 3600;
        postTime = this.floorTimeCalc(postTime);
        if (postTime === 1) {
          postTime += timestrings.HOUR;
        }else{
          postTime += timestrings.HOURS;
        }
      }else if (secondsLapsed > 86400 && secondsLapsed < 604800) {
        postTime = secondsLapsed / 86400;
        postTime = this.floorTimeCalc(postTime);
        if (postTime === 1) {
        	if (timestrings === this.LONG)
        		postTime = timestrings.DAY;
        	else
          	postTime += timestrings.DAY;
        }else{
          postTime += timestrings.DAYS;
        }
      }else{
        if (type === 'dateObjStr') {
          postTime = this.parseDateObj(rawObj, type = 'dateObjStr');
        }else if (type === 'timestampStr') {
          postTime = this.parseDateObj(rawObj, type = 'timestampStr');
        }
      }
      return postTime;
    }
};

module.exports = TimeLapsed;