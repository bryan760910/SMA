fakeData = function(){
    var EPS = {
        "titles" : {
            "Htitle": ["2017", "2018", "2019", "2020"],
            "Vtitle": ["EPS", "本益比", "淨值", "股價淨值比"],
        },
        "content" : [
            ["3.77", "3.12",  "2.78", "4.77" ],
            [ "12.28", "22.28", "21.28", "15.28"],
            [ "22.28", "44.28", "66.28", "55.28"],
            ["1.59", "", "", ""]
        ]
    
    };

    // var EPSH = {
    //     "th" : [
    //         { "Htitle": ["2017", "2018", "2019", "2020"] },
    //         { "Vtitle": ["EPS", "本益比", "淨值", "股價淨值比"] },
    //     ],
    //     "tr" : [
    //         ["3.77", "3.12",  "2.78", "4.77" ],
    //         [ "12.28", "22.28", "21.28", "15.28"],
    //         [ "22.28", "44.28", "66.28", "55.28"],
    //         ["1.59", "", "", ""]
    //     ]
    // }

    return {
        "EPS" : EPS
    }

}
var fakeDatas = new fakeData();