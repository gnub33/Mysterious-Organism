// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//create multiple objects
const pAequorFactory = (num, dna) => {
  return {
    specimenNum:num, 
    dna:dna,
    mutate(){
      //select random base in array
      let currentBase = this.dna[Math.floor(Math.random() * 15)];
      //console.log(this.dna.indexOf(currentBase));
      //console.log(currentBase);
      let mutateBase = returnRandBase();
      //console.log(mutateBase)
      while(currentBase === mutateBase) {
        mutateBase = returnRandBase();
       }
      //console.log(mutateBase)
      this.dna.splice(this.dna1.indexOf(currentBase),1,mutateBase)
    },
    compareDNA(pAeq2){
      let count = 0;
      //console.log(pAeq2.dna);
      //console.log(pAeq2.dna.length);
      //console.log(dna.length)
      dna.forEach((base1, index) => {
        const base2 = pAeq2.dna[index];
        if(base1 == base2){
          count++;
        }
        //console.log(base1, base2);
      });
      //console.log(count);
      let percent = (count/(dna.length+pAeq2.dna.length))*100;
      percent = percent.toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${pAeq2.specimenNum} have ${percent}% DNA in common.`)
    },
    willLikelySurvive() {
      let surviveCount = 0;
      dna.forEach(base => {
        if(base === 'C' || base === 'G'){
          surviveCount++;
        }
      })
      //console.log(surviveCount)
      let survivePercent = (surviveCount/dna.length)*100;
      //console.log(survivePercent);
      if(survivePercent >= 60) {
        //console.log(true);
        return true;
      } else {
        //console.log(false);
        return false;
      }
    }
  }
};

const survivorArray = [];
let idCounter = 0;


while(survivorArray.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if(newOrg.willLikelySurvive()){
    survivorArray.push(newOrg)
  }
  idCounter ++;
};


//const pAequor1 = pAequorFactory(1,mockUpStrand());
//const pAequor2 = pAequorFactory(4,mockUpStrand());

//console.log(pAequor1.dna);
//console.log(pAequor2.dna);

//pAequor1.compareDNA(pAequor2);
//pAequor1.willLikelySurvive();

console.log(survivorArray);

