//!!!!! Will probably need to update this before ready for production!!!!
function catMap(catPath){
    let categories = {
        'uncategorized':1,
        'player-analysis':2,
        'prospects':3,
        'roster-construction':4,
        'trade-analysis':5,
        'most-recent':0
    };
    return categories[catPath];
}
//NON_PRODUCTION_READY_BLOCK^^^

function removeLink(excerpt){ //remove here so it won't be visible when inspected
    let retStr = excerpt;
    let startIndex = excerpt.indexOf('<p class="link-more"');
    if(startIndex !== -1){
        let endIndex = excerpt.indexOf('</p>',startIndex)+4;
        retStr = excerpt.slice(0,startIndex)+excerpt.slice(endIndex+1,excerpt.length);
    }


    return retStr;
}

function numToMonth(val){
    let monthMap = {
        1:"January",
        2:"February",
        3:"March",
        4:"April",
        5:"May",
        6:"June",
        7:"July",
        8:"August",
        9:"September",
        10:"October",
        11:"November",
        12:"December"
    };

    return(monthMap[parseInt(val)]);
}

function monthToNum(month){
    let monthMap = {
        "january":1,
        "february":2,
        "march":3,
        "april":4,
        "may":5,
        "june":6,
        "july":7,
        "august":8,
        "september":9,
        "october":10,
        "november":11,
        "december":12
    };

    return(monthMap[month]);
}

export {catMap, removeLink, numToMonth, monthToNum};