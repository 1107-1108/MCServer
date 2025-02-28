/**
 * If the difficulty value is less than the key, the difficulty value will increase by value
 */
const BAD_APPLE_DIFFICULTY_ADD = {
    '250': 10,
    '50': 5,
    '20': 2,
    '5': 1
}

/**
 * bad apple
 */
ItemEvents.foodEaten('kubejs:bad_apple', (event) => {
    const { server, player } = event;
    let difficulty = global.getPlayerDifficulty(player);
    let config = Object.keys(BAD_APPLE_DIFFICULTY_ADD).sort((a, b) => parseFloat(a) - parseFloat(b));
    for (let key of config) {
        if (difficulty < parseFloat(key)) {
            if (difficulty > (parseFloat(key) - BAD_APPLE_DIFFICULTY_ADD[key])) {
                server.runCommandSilent(`improvedmobs difficulty player ${player.displayName.string} set ${key}`);
                player.tell(Text.red(Text.translate(`message.kubejs.item.bad_apple`, [
                    Text.translate('item.kubejs.bad_apple'),
                    (parseFloat(key) - difficulty).toFixed(1)
                ])));
            } else {
                server.runCommandSilent(`improvedmobs difficulty player ${player.displayName.string} add ${BAD_APPLE_DIFFICULTY_ADD[key]}`);
                player.tell(Text.red(Text.translate(`message.kubejs.item.bad_apple`, [
                    Text.translate('item.kubejs.bad_apple'),
                    BAD_APPLE_DIFFICULTY_ADD[key]
                ])));
            }
            break;
        }
    }
});