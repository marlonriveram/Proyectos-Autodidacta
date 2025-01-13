
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const init = s;
    const end = t;
    const distanceApples = a;
    const distanceOranges = b;

    const sumDistance = (arr,distance) =>{
        return arr.map(item => distance + (item));
    }
    const sumDistanceApples = sumDistance(apples,distanceApples);
    const sumDistanceOranges = sumDistance(oranges,distanceOranges);

    const inArea = (arr) =>{
        let counter = 0;
        for (let item of arr){
            item >= init && item <= end ? counter++ : null;
        };
        return counter;
    };

    const applesInArea = inArea(sumDistanceApples);
    const orangesInArea = inArea(sumDistanceOranges);
    
    console.log(applesInArea);
    console.log(orangesInArea);
    
}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);