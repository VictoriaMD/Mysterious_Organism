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

// Returns a new object with arrays and methods
const pAequorFactory = (number, arr) => {
 return {
    specimen: number,
    dna: arr,
    mutate() {
      let dnaArray = this.dna;
      const dnaBases = dnaArray.filter((item, index) => dnaArray.indexOf(item) === index);
      const filteredBases = dnaBases.filter(element => element !== this.dna[0]);
      const newValue = Math.floor(Math.random() * filteredBases.length);
      const newBase = filteredBases[newValue];
      dnaArray.splice(0, 1, newBase);
      return dnaArray;
      }, 
    willLikelySurvive() {
        let dnaArray = this.dna;
        if(dnaArray[0] === 'C' || dnaArray[0] === 'G') {
          return true;
        } else {
          return false;
        }
      }
   }   
}    

// Returns an array of objects that meet requirements of a pAequorFactory method
const survivorsArray = survivingOrganisms => {
 let organism = [];
 let i = 0;
 survivingOrganisms = [];
 while (i < 30) {
   organism[i] = pAequorFactory(i+1, mockUpStrand());
   if(organism[i].willLikelySurvive()) {
   survivingOrganisms.push(organism[i]);
   i++;
   }
  }
  return survivingOrganisms;
}
  
console.log(survivorsArray());








