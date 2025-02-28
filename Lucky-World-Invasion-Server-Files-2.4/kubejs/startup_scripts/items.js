// ItemEvents.toolTierRegistry(event => {
//     event.add('lucky_gem', tier => {
//         tier.uses = 250
//         tier.speed = 6.0
//         tier.attackDamageBonus = 2.0
//         tier.level = 2
//         tier.enchantmentValue = 14
//         tier.repairIngredient = 'shadowlands:ghostmetal_ingot'
//     });
// });

StartupEvents.registry('item', (event) => {
    event.create('lucky_gem_pickaxe', 'pickaxe')
        .tier('netherite')
        .texture('kubejs:item/lucky_gem_pickaxe')
        .rarity('epic')
        .maxDamage(100)
        .tooltip(Text.gray(Text.translate('tooltip.kubejs.lucky_gem_pickaxe')))
        .glow(true)
        .fireResistant()
        ;

    event.create('lucky_gem_pickaxe_imitation', 'pickaxe')
        .tier('diamond')
        .texture('kubejs:item/lucky_gem_pickaxe')
        .rarity('uncommon')
        .maxDamage(100)
        .tooltip(Text.gray(Text.translate('tooltip.kubejs.lucky_gem_pickaxe_imitation')))
        ;

    event.create('bad_apple').food(food => {
        food.alwaysEdible()
        food.hunger(0)
        food.saturation(0)
    })
        .rarity('uncommon')
        .tooltip(Text.gray(Text.translate('tooltip.kubejs.bad_apple')))
        .maxStackSize(16)
        .glow(true)
        ;

    event.create('challenge_badge')
        .texture('kubejs:item/badge')
        .rarity('rare')
        .tooltip(Text.gray(Text.translate('tooltip.kubejs.challenge_badge')))
        .glow(true)
        .fireResistant()
        ;
});