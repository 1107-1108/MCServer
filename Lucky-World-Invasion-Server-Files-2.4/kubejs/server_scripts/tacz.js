TaCZServerEvents.entityShoot(event => {
    const { player } = event
    if (player.nbt.getCompound('ForgeData').getBoolean('playerrevive:bleeding')) {
        event.cancelShoot();
    }
});

TaCZServerEvents.entityMelee(event => {
    const { player } = event
    if (player.nbt.getCompound('ForgeData').getBoolean('playerrevive:bleeding')) {
        event.cancelMelee();
    }
});

TaCZServerEvents.entityReload(event => {
    const { player } = event
    if (player.nbt.getCompound('ForgeData').getBoolean('playerrevive:bleeding')) {
        event.cancelReload();
    }
});