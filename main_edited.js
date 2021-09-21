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

//Factory function for multiple organisms 
const pAequorFactory = (num, dna) => {
  return {
    specimenNum:num, 
    dna:dna,
    //selects random base and changes it to a differnt one
    mutate(){
      //select random base in array
      let currentBase = this.dna[Math.floor(Math.random() * 15)];
      //set up new organism with a base
      let mutateBase = returnRandBase();
      while(currentBase === mutateBase) {
        mutateBase = returnRandBase();
       }
      this.dna.splice(this.dna1.indexOf(currentBase),1,mutateBase)
    },
    //compares two DNA sequences and prints % of DNA they have in common
    compareDNA(pAeq2){
      let count = 0;
      dna.forEach((base1, index) => {
        const base2 = pAeq2.dna[index];
        if(base1 == base2){
          count++;
        }
      });
      let percent = (count/(dna.length+pAeq2.dna.length))*100;
      percent = percent.toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${pAeq2.specimenNum} have ${percent}% DNA in common.`)
    },
    //return true if DNA is at least 60% 'C' or 'G' bases
    willLikelySurvive() {
      let surviveCount = 0;
      //iterates through DNA for instances of 'C' or 'G'
      dna.forEach(base => {
        if(base === 'C' || base === 'G'){
          surviveCount++;
        }
      });
      let survivePercent = (surviveCount/dna.length)*100;
      if(survivePercent >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
};

//new array for 30 species likely to survive
const survivorArray = [];
let idCounter = 0;

//loop for creating new specimens for survivoraArray
while(survivorArray.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  //push new organism to array if returns true
  if(newOrg.willLikelySurvive()){
    survivorArray.push(newOrg)
  }
  idCounter ++;
};

console.log(survivorArray);
