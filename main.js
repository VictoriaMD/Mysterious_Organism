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
     console.log(dnaBases, newBase, dnaArray);
      } 
   }   
   //console.log(this.dna);
}    

const test = pAequorFactory(1, mockUpStrand());
console.log(test);
console.log(test.mutate());





