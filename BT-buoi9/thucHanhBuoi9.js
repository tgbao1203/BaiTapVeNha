//Bài 1
/**const goldMedals = [
    { id: "1", name: "Bơi", gold: 7 },
    { id: "2", name: "Boxing", gold: 2 },
    { id: "3", name: "Đạp xe", gold: 1 },
    { id: "4", name: "Đấu kiếm", gold: 4 }
  ];
  
  function getTotalGoldMedal(arr) {
    return arr.reduce((acc, cur) => {
        return acc + cur.gold;
    }, 0)
  }
  console.log(getTotalGoldMedal(goldMedals)); // Output: 14*/
  //Bài 2:
  let arr = [
    ["name", "ky"],
    ["age", 18]
  ];

  const arrToObj = (arr) =>{
    return arr.reduce((acc, cur) =>{
        return Object.assign(acc, {[cur[0]]: cur[1]} )
    }, {})
  };
  console.log(arrToObj(arr));

  //Bài 3:
  function Animal (name, leg, action){
    this.name = name;
    this.leg = leg;
    this.action = () =>{
        console.log("Bơi");
    };
  }
  const raiCa = new Animal("Rái cá", 4,)