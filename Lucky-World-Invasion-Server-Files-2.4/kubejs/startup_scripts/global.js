/**
* @param {Internal.Player} player 
*/
global.getPlayerDifficulty = player => {
    if (!player.nbt.ForgeCaps['improvedmobs:player_cap']) {
        return 0;
    }
    let { IMDifficulty } = player.nbt.ForgeCaps['improvedmobs:player_cap'];
    return IMDifficulty || 0;
}
