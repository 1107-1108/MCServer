const $EntityTravelToDimensionEvent = Java.loadClass('net.minecraftforge.event.entity.EntityTravelToDimensionEvent');
const $ServerPlayer = Java.loadClass('net.minecraft.server.level.ServerPlayer');

/**
 * Dimension difficulty limit
 * Need to be greater than the corresponding value to enter.
 */
const DIM_DIFFICULTY_LIMIT = {
    // the_nether: 10,
    the_end: 20,
    mushroom_kingdom: 5,
    shadow_forest: 50,
    vellium: 60,
    glowshroom_forest: 80,
    blood_forest: 100
}

ForgeEvents.onEvent($EntityTravelToDimensionEvent, event => {
    const resourceKey = event.dimension;
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.entity;
    let difficulty = global.getPlayerDifficulty(player);

    if (DIM_DIFFICULTY_LIMIT[resourceKey.getPath()] && difficulty < DIM_DIFFICULTY_LIMIT[resourceKey.getPath()]) {
        player.setStatusMessage(Text.red(Text.translate('message.kubejs.dimensions.limit.text', [`${DIM_DIFFICULTY_LIMIT[resourceKey.getPath()]}`])));
        event.setCanceled(true);
    }
});