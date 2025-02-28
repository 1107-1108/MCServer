EntityEvents.hurt((event) => {
    const { source, entity, damage } = event;
    const { player } = source;

    const damageType = typeof source.type === "function" ? source.type() : source.type;
    const msgId = typeof damageType.msgId === "function" ? damageType.msgId() : damageType.msgId;

    if (msgId === "player") {
        if (source.actual && source.actual.isPlayer()) {
            if (player.handSlots[0] === 'lucky:lucky_world_invasion_lucky_sword') {
                if (entity.persistentData.getBoolean('fix_damage')) {
                    entity.persistentData.remove('fix_damage')
                } else if (source.actual.block.light > 0) {
                    entity.persistentData.putBoolean('fix_damage', true);
                    entity.attack(source, damage + source.actual.block.light);

                    event.cancel();
                }
            }
        }
    }
});