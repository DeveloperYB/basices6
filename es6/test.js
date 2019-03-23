'use strict';

// m 이상 n 이하의 무작위 정수를 반환
const RAND_FN = (min, max) => {
    return min + Math.floor((max - min + 1) * Math.random());
};
// 크라운 앤 앵커 게임의 여섯 그림 중 하나에 해당하는 문자열을 무작위로 반환합니다.
const RANDFACE_FN = () => {
    return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][RAND_FN(0, 5)];
};

let dollar = 50; // 시작 금액
let round = 0;

while (dollar > 1 && dollar < 100) {
    round++;
    console.log(`round ${round}`);
    console.log(`\tstarting dollar : $ ${dollar}`);
    //돈을 배팅
    let bets = {
        crown: 0,
        anchor: 0,
        heart: 0,
        spade: 0,
        club: 0,
        diamond: 0
    };
    let totalBet = RAND_FN(1, dollar);
    //배팅하는 돈이 7달러일 경우 무조건 하트에 올인한다는 조건
    if (totalBet === 7) {
        totalBet = dollar; // All-In
        bets.heart = totalBet;
    } else {
        //판돈을 나눕니다.
        let remaining = totalBet;
        // do {

        // }while()
    }
}
