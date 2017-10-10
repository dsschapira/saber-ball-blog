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

export {catMap, removeLink};