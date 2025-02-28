const $PSInvasionMob = Java.loadClass('dev.theagameplayer.puresuffering.world.entity.PSInvasionMob')

EntityEvents.death((event) => {
  const { source, entity } = event;

  // SPAWN_EGG NATURAL EVENT CHUNK_GENERATION
  // console.log(entity.nbt['forge:spawn_type']);

  if (entity.monster && source.actual && source.actual.isPlayer()) {
    let { player: srcPlayer } = source;
    let difficulty = global.getPlayerDifficulty(srcPlayer);
    let championTier = entity.nbt.ForgeCaps['champions:champion'] ? entity.nbt.ForgeCaps['champions:champion'].tier : 0;

    if (entity.nbt[$PSInvasionMob.HYPER_CHARGE] > 0) {
      if (Math.random() > (1 - difficulty / (difficulty + 100))) {
        srcPlayer.give(Item.of('shadowlands:copper_coin', entity.nbt[$PSInvasionMob.HYPER_CHARGE]));
      }
    }

    if (championTier > 0) {
      if (Math.random() > (1 - difficulty / (difficulty + 100))) {
        srcPlayer.give(Item.of('shadowlands:silver_coin', championTier));
      }
    }
  }

});

ServerEvents.entityLootTables(event => {
  event.addEntity('fuze_relics:burger_boss', loot => {
    loot.addPool(pool => {
      pool.rolls = 3
      pool.killedByPlayer()
      pool.addItem('diamond').weight(10).count([2, 5])
      pool.addItem('shadowlands:silver_coin').weight(1).count([1, 5])
    })
  })

  // event.modifyEntity('minecraft:pig', loot => {
  //   loot.addPool(pool => {
  //     pool.addItem('pig_spawn_egg')
  //     pool.setUniformRolls(1, 3)
  //     pool.enchantRandomly('minecraft:smite')
  //     pool.lootingEnchant(2, 10)
  //     pool.killedByPlayer()
  //     pool.addEmpty(2)
  //     pool.randomChanceWithLooting(0.1, 0.2)
  //     // pool.entityProperties('killer', {
  //     //   type: 'minecraft:player',
  //     //   equipment: {
  //     //     mainhand: {
  //     //       items: [
  //     //         'minecraft:diamond_sword'
  //     //       ],
  //     //       predicates: {
  //     //         enchantments: {
  //     //           enchantments: ['minecraft:silk_touch']
  //     //         }
  //     //       }
  //     //     }
  //     //   }
  //     // })
  //     pool.rolls = 3
  //   })
  // })
})

ServerEvents.chestLootTables(event => {
  event.modify('minecraft:pillager_outpost', loot => {
    loot.addPool(pool => {
      pool.rolls = 5
      pool.addItem('minecraft:gunpowder').count([3, 6]).weight(20)
      pool.addItem('minecraft:emerald').weight(10)
      pool.addItem('minecraft:diamond').weight(5)
    })
  })

  event.modify('super_block_world:brick_fortress', loot => {
    loot.clearPools()
    loot.addPool(pool => {
      pool.rolls = 8
      pool.addItem('super_block_world:toadstone_bricks').weight(20)
      pool.addItem('super_block_world:yoshi_fruit').weight(16)
      pool.addItem('minecraft:diamond').weight(6)
      pool.addItem('lucky:lucky_block').weight(6)
      pool.addItem('super_block_world:yoshi_cookie').weight(5)
      pool.addItem('super_block_world:hammer').weight(2)
    })
  })
})