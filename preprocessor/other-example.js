module.exports = (nftdata) => ({ 
    name: nftdata.name, 
    stats: parseData(nftdata).stats 
});
