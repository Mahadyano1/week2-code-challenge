function generateArrays(start, end) {
    const length = math.abs(end - start )+1;
    const direction =math.sign(end-start);
    return Array.from({length}, (_,index)
    => start+index * direction);
    
}