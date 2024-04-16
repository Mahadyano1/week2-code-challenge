function generateArrays(start, end) {
    const length = Math.abs(end - start )+1;
    const direction = Math.sign(end - start);
    return Array.from({length}, (_, index) => start + index * direction);
}

    const length = math.abs(end - start )+1;
    const direction =math.sign(end-start);
    return Array.from({length}, (_,index)
    => start+index * direction);
    
